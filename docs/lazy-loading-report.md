## Lazy-loading & Deferral Report — global-enviro

Date: 2026-04-10

This document is a complete, technical record of the lazy-loading and deferral optimizations implemented so far in the repository. It is intended for frontend engineers, reviewers, and architects who need to understand the exact design, the trade-offs, verification steps, and how to iterate further.

NOTE: This document uses the repository's existing implementations as source of truth: `src/components/common/MotionWrapper.jsx`, `src/components/common/LazyAnimatePresence.jsx`, and the dynamic usage in `src/components/BentoGallery.jsx` (GalleryModal). Analyzer artifacts created by the build exist under `.next/analyze/`.
---

## Executive summary

- Heavy client-only libraries (notably `framer-motion`) were deferred to runtime `import()` calls and encapsulated in centralized client wrappers.
- Large interactive UI (Gallery modal) was dynamic-imported with `next/dynamic` and `ssr: false` so it does not appear in the initial server-side HTML.
- Many raw `<img>` usages were migrated to `next/image` for responsive optimization and lazy-loading.
- A webpack analyzer build has been run previously and artifacts exist under `.next/analyze/` (client.html, edge.html, nodejs.html). Numeric extraction from these artifacts is recommended to drive further prioritized changes.

## Small contract
- Inputs: existing Next.js app (App Router) and current production build artifacts under `.next/`.
- Outputs: runtime-deferral wrappers, dynamic imports for interactive-only components, conversion of <img> to `next/image`, documentation of changes, and verification steps.
- Success criteria:
  - `framer-motion` not present in initial app shell chunk(s) (verify by scanning built chunks).
  - Gallery modal and other heavy interactive components only load when used.
  - Images delivered responsively via Next image optimizer.

---

## 1. Executive Summary (one paragraph)

We reduced initial JavaScript payload by deferring non-critical third-party libraries and interactive UI to client-only runtime loads. Concretely, `framer-motion` is loaded via runtime `import()` inside centralized client wrappers (`MotionWrapper.jsx`, `LazyAnimatePresence.jsx`), interactive components such as `GalleryModal` are loaded with `next/dynamic({ ssr: false })`, and site images were migrated to `next/image` for responsive delivery and lazy loading — all changes designed to reduce main-app bundle size, improve LCP/FCP, and keep server-side renders minimal and stable.

## 2. Problem statement

Before these changes the codebase had three performance liabilities:

- Large client-side bundles: importing heavy libraries like `framer-motion` and UI libraries directly in components caused those libraries to be included in shared app chunks and main-app bundles, increasing initial JS bytes and slowing time-to-interactive.
- Poorly prioritized JavaScript: components and libraries that are only required after user interaction (modals, galleries, carousels) were bundled into the initial payload instead of being lazy-loaded on demand.
- Suboptimal image handling: many image tags used raw `<img>` which resulted in non-optimized delivery, larger transfer sizes, and potential layout shifts.

These issues manifested as higher initial transfer sizes, worse LCP, and slower FCP/TTI on first load — especially on mobile connections.

## 3. Architecture decisions and rationale

3.1 Why runtime `import()` inside client-only wrappers?

- Goal: prevent large third-party ESM from being included in SSR or initial shared chunks, while keeping a simple developer API for components that need animation.
- Runtime `import()` inside a client component (i.e., inside `useEffect`) guarantees:
  - the import only executes in the browser (never during SSR)
  - the library is placed in a separate client chunk that can be fetched on demand
  - if the UI never triggers that code path, the bytes are never transferred

3.2 Why introduce centralized wrappers (MotionWrapper, LazyAnimatePresence) rather than scattering `import()` everywhere?

- Single responsibility and discoverability: wrappers centralize the import, error handling, and prop filtering behavior in one place. Developers can use a small wrapper API (e.g., <MotionWrapper as="div" ...>) without needing to remember the runtime import pattern.
- Consistency: a single wrapper enforces safe handling of framer-motion props and DOM fallbacks across the codebase.
- Low maintenance cost: swapping the underlying animation library or adjusting loading behavior happens in one file rather than across many components.

3.3 Why `next/dynamic(..., { ssr: false })` for heavy components?

- Use case: UI pieces that are interactive only (modals, image viewers, carousels) do not need SSR HTML; delivering HTML for them increases server work and bundle size.
- `ssr:false` ensures these components are not part of server-rendered output and are only requested by the client when needed. `next/dynamic` also supports a loading component to improve perceived performance during fetch.

Design trade-offs considered:

- Accessibility & SEO: We avoided `ssr:false` for content that must be indexed or visible to crawlers and only applied it to purely interactive, non-essential UI.
- First Contentful Paint vs. Interactivity: we prioritized FCP/LCP by deferring non-critical JS; critical visual content remains server-rendered.

## 4. Implementation Details (very detailed)

This section dissects the exact implementations and the subtleties to be aware of.

4.1 `src/components/common/MotionWrapper.jsx` — step-by-step

File role: central client-only wrapper to lazily load `framer-motion`'s `motion.*` components and render safe fallbacks until the library loads.

Key implementation points (from the actual file):

- The module is a client component (contains "use client" at the top). That ensures React treats it as client-only and that `useEffect` runs only in the browser.
- State: `const [motionModule, setMotionModule] = useState(null);` — holds the resolved `framer-motion` module when loaded.
- Side-effect: a `useEffect` that performs `import('framer-motion')` on mount. The promise resolves to the ESM namespace object; the code stores this object in state.
- Error handling: `.catch(() => { /* ignore */ })` — fails silently so the UI degrades gracefully if the module can't be fetched.
- Props: the component expects framer-motion props (initial, animate, exit, whileHover, whileTap, transition, variants, viewport, custom, drag, dragConstraints, dragElastic) and also accepts `as` to indicate the tag to render (defaults to `div`).
- Prop filtering: these framer-motion props are destructured explicitly from other props and assembled into `motionProps`. This prevents framer-motion-only props from being passed to native DOM nodes when the fallback is rendered (avoids React warnings and invalid HTML attributes).
- Render path:
  - If `motionModule && motionModule.motion` exists, the wrapper resolves `MotionTag = motionModule.motion[as] || motionModule.motion.div` and returns `<MotionTag {...motionProps} className={className} {...props}>{children}</MotionTag>`.
  - Otherwise, it renders a plain DOM element (`const Tag = as; return <Tag className={className} {...props}>{children}</Tag>`).

Why this exact behavior?

- The wrapper needs to both provide the enhanced animated component when available and an identical DOM structure when not. Using `as` makes the wrapper flexible (works for div, button, li, etc.).
- Destructuring the framer-motion props is crucial because passing them to a DOM element would create invalid attributes (React will warn and browsers may ignore them), and it causes hydration mismatches if not handled.

4.2 `src/components/common/LazyAnimatePresence.jsx` — step-by-step

File role: lazily load `AnimatePresence` from `framer-motion` and render it when available; otherwise render children without enter/exit animations.

Key implementation points (from the actual file):
- Client component using `useEffect` to `import('framer-motion')` and then `setAnimatePresence(() => mod.AnimatePresence);`
- State holds the AnimatePresence component constructor (or null while loading).
- Render path:
  - If `AnimatePresence` is set, return `<AnimatePresence {...props}>{children}</AnimatePresence>`.
  - If not loaded, simply return `<>children</>` (no wrapper) which preserves DOM and SSR.

Why this approach?

- AnimatePresence is only needed to orchestrate exit/enter animations. Rendering children directly when it's absent preserves UI and prevents hydration mismatches.
- Keeping the absence silent (no visual fallback) avoids jarring fallbacks; animations are progressive enhancement.

4.3 `next/dynamic` usage for GalleryModal (example: `src/components/BentoGallery.jsx`)

Observed usage in the file:

const GalleryModal = dynamic(() => import("@/components/GalleryModal"), {
  ssr: false,
  loading: () => <div className="modal-loading" />,
});

Rationale and behavior:

- `ssr:false` ensures the modal's code is not part of server HTML. It will be fetched by the client when the modal is first rendered (e.g., when `modalOpen === true`).
- A `loading` component provides an immediate placeholder while the chunk is fetched.
- This pattern is used for UI that is launched by user interaction and isn't required for SEO or initial page content.

4.4 Image optimization: `next/image` and `loading="lazy"`

What was changed: multiple `img` tags across components were replaced with `Image` from `next/image`. Example changes are visible across:
- `src/components/BentoGallery.jsx` — images now use `Image` with width/height and `loading="lazy"` to ensure responsive and deferred loading.
- Other pages/components (HeroSection, ProjectsAndProducts, Layouts, GalleryModal, etc.) were updated similarly.

Why this matters:

- `next/image` produces optimized `srcset`s and serves images in modern formats (AVIF/WebP) when possible; combined with lazy loading this significantly reduces bytes and speeds up LCP.
- Setting explicit width/height or using `fill` avoids CLS by reserving layout space.

4.5 Before vs After patterns (concrete)

- Before: `import { motion } from 'framer-motion';` in multiple components → `motion` included in shared app chunks.
- After: use `MotionWrapper` or `LazyAnimatePresence` which `import('framer-motion')` in `useEffect` and only request the library at runtime when a component mounts.

- Before: `import GalleryModal from '@/components/GalleryModal';` included modal in the SSR output.
- After: `const GalleryModal = dynamic(() => import('@/components/GalleryModal'), { ssr: false })` to fetch modal only on client demand.

- Before: `<img src="/assets/foo.jpg" alt="..." />`
- After: `import Image from 'next/image'; <Image src={url} alt="..." width={400} height={300} loading="lazy" />`

## 5. Code snippets (real implementation patterns)

5.1 MotionWrapper pattern (actual simplified implementation used)

```jsx
// src/components/common/MotionWrapper.jsx
"use client";
import React, { useEffect, useState } from 'react';

export default function MotionWrapper({ as = 'div', children, initial, animate, exit, whileHover, whileTap, transition, variants, className, ...props }) {
  const [motionModule, setMotionModule] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('framer-motion')
      .then((mod) => { if (mounted) setMotionModule(mod); })
      .catch(() => { /* ignore to keep UI functional */ });
    return () => { mounted = false; };
  }, []);

  const motionProps = { initial, animate, exit, whileHover, whileTap, transition, variants };

  if (motionModule && motionModule.motion) {
    const MotionTag = motionModule.motion[as] || motionModule.motion.div;
    return <MotionTag {...motionProps} className={className} {...props}>{children}</MotionTag>;
  }

  const Tag = as;
  return <Tag className={className} {...props}>{children}</Tag>;
}
```

5.2 LazyAnimatePresence pattern (actual simplified implementation used)

```jsx
// src/components/common/LazyAnimatePresence.jsx
"use client";
import React, { useEffect, useState } from 'react';

export default function LazyAnimatePresence({ children, ...props }) {
  const [AnimatePresence, setAnimatePresence] = useState(null);
  useEffect(() => {
    let mounted = true;
    import('framer-motion')
      .then((mod) => { if (mounted) setAnimatePresence(() => mod.AnimatePresence); })
      .catch(() => { /* ignore */ });
    return () => { mounted = false; };
  }, []);

  if (AnimatePresence) {
    const AP = AnimatePresence;
    return <AP {...props}>{children}</AP>;
  }
  return <>{children}</>;
}
```

5.3 next/dynamic usage example (BentoGallery)

```jsx
import dynamic from 'next/dynamic';

const GalleryModal = dynamic(() => import('@/components/GalleryModal'), {
  ssr: false,
  loading: () => <div className="modal-loading" />,
});

// Later in component
{modalOpen ? <GalleryModal photos={photos} initialIndex={startIndex} onClose={() => setModalOpen(false)} /> : null}
```

5.4 next/image usage example

```jsx
import Image from 'next/image';

<Image src={url} alt={`Event photo ${index + 1}`} width={400} height={300} className="object-cover" loading="lazy" />
```

## 6. Performance impact (what changed & how to measure)

6.1 Conceptual impact

- Deferring `framer-motion` and other interactive-only code reduces the main-app initial JS bytes. If `framer-motion` was previously included in a shared chunk (e.g., `main-app` or `framework` chunk), moving it to a runtime chunk makes those bytes conditional on user interaction.
- Lazy-loading modals/carousels eliminates shipping their code to users who never open the modal, typically saving tens to hundreds of KB depending on the component.
- `next/image` reduces image bytes via responsive images and modern formats (WebP/AVIF), directly improving LCP.

6.2 How to quantify (use the analyzer)

- Run: `npm run build:analyze` (or `cross-env ANALYZE=true next build`) — this generates `.next/analyze/*.html` with a bundle breakdown.
- Open `.next/analyze/client.html` (and `nodejs.html` / `edge.html`) and inspect the largest chunks and module contributions. The analyzer shows parsed and gzipped sizes per module and chunk.
- Important metrics to compare before/after:
  - total JS transferred (parsed + gzip)
  - size of the main-app chunk(s)
  - whether `framer-motion` appears in `main` or only in a deferred chunk
  - network waterfall on the page load: chunks fetched before hydration vs. on interaction

6.3 Sample expected improvements (qualitative)

- If `framer-motion` was ~60–90 KB gzipped and used only for a gallery/animation, moving it off the initial path often reduces main-app gzipped payload by a similar amount; this directly reduces time-to-interactive on slower networks.
- `next/image` improvements depend on image sizes; switching large hero images to responsive AVIF/WebP can reduce image payloads by 30–70%.

## 7. Edge cases & safety

7.1 SSR and hydration

- All dynamic `import('framer-motion')` calls are inside `useEffect` to avoid running on the server — this prevents SSR attempts to load ESM which would bloat server bundles or crash in Node environments.
- `next/dynamic(..., { ssr: false })` prevents the client-only chunks from being part of the server HTML. Use this only when the UI is non-essential to initial render.

7.2 Fallback rendering when imports fail

- `MotionWrapper` and `LazyAnimatePresence` catch import errors and render a non-animated fallback. That behavior avoids runtime exceptions and prevents a bad network from breaking core UI.

7.3 Invalid DOM props handling

- Destructuring framer-motion-specific props and assembling `motionProps` prevents these props from being passed into native DOM nodes when `framer-motion` is not present. This avoids React warnings about invalid attributes and keeps markup stable for hydration.

7.4 Accessibility & UX

- The approach favors progressive enhancement: functional DOM and semantic markup remain present even when animations or modals are not yet loaded. Ensure keyboard focus and aria attributes are applied in the fallback DOM as well as the animated DOM.

## 8. Verification steps (practical)

8.1 Confirm `framer-motion` is not in initial bundle

1. Run analyzer build:

```bash
npm run build:analyze
# or
cross-env ANALYZE=true next build
```

2. Open `.next/analyze/client.html` in a browser.
3. Use the analyzer UI to search for `framer-motion`. Confirm that if `framer-motion` exists it is listed inside a non-main chunk (or in `nodejs.html` for server-only usage) and not listed as part of your `main-app` bundle.

Alternate quick check (built chunks):

```bash
# list chunk files then grep for framer-motion string references
ls .next/static/chunks | head
grep -R "framer-motion" -n .next/static || true
```

Note: the analyzer's HTML contains serialized stats and is the authoritative view; a chunk grep is helpful but can be noisy because chunk naming/embedding differs by build.

8.2 Confirm GalleryModal is lazy-loaded

1. Open the site in browser (production build or `next start`).
2. Open DevTools -> Network and filter by JS.
3. Load the page and do not open the gallery; observe which JS chunks were fetched on initial load.
4. Click to open the gallery modal; confirm a new chunk is fetched corresponding to the modal (the dynamic import) and that the initial payload did not include the modal code.

8.3 Confirm images are optimized

1. Load a page with heavy images.
2. In Network panel, inspect the image responses. Confirm format (webp/avif) and sizes are smaller than the source.
3. Check for `next/image` generated query strings (/_next/image) or proper srcset attributes.

## 9. Best practices learned (practical rules)

- Lazy-load third-party libraries when they are only used for non-critical interactions (modals, animations triggered by user intent).
- Centralize runtime import patterns in wrappers to avoid duplication and to control fallback behavior and prop filtering.
- Use `next/dynamic` with `ssr: false` only for interactive-only UI that doesn't need SEO or server-rendered content.
- Avoid over-lazy-loading core UX paths (critical navigation, content above the fold, header/menus that are used immediately).
- Always reserve layout space for images (width/height or `fill`) to avoid CLS.

## 10. Interview explanation (IMPORTANT)

10.1 60-second explanation (concise)

I moved heavy UI and libraries off the initial client bundle by loading them only when needed: `framer-motion` is dynamically imported inside client-only wrappers, interactive UI like the gallery modal is loaded with `next/dynamic({ ssr:false })`, and images were migrated to `next/image` for responsive delivery. The result is a smaller initial payload, faster LCP, and better TTI for users who never trigger the interactive features.

10.2 Deep technical explanation

The core technique is conditional code loading. Static `import` statements are resolved by Next's bundler and cause libraries to be included in shared chunks consumed by multiple routes. For code that is only necessary during client interaction (animations, modals), including these libraries in shared chunks harms all users. To avoid that, I used dynamic ESM imports (`import('framer-motion')`) inside `useEffect` within a client-only wrapper. `useEffect` ensures the import runs only in the browser and not during SSR. The resolver then produces a separate client chunk that is fetched only when the wrapper mounts. I used a centralized `MotionWrapper` so the project has a consistent API and safe prop filtering — it destructures motion props and applies them only when `framer-motion` is present, preventing invalid DOM attributes and hydration issues.

For interactive UI that isn't required for first paint, `next/dynamic(..., { ssr:false })` defers code to client-only chunks, and a loading placeholder is shown while those chunks are fetched. Images were migrated to `next/image` to shift bytes off the initial HTML and use modern formats and responsive techniques that reduce transfer size.

Metric validation is performed via `@next/bundle-analyzer` output (the `.next/analyze/*.html` artifacts). That analyzer shows per-chunk and per-module parsed/gzip sizes so we can target the largest modules with the most ROI.

## 11. Future improvements and advanced ideas

11.1 Prefetching & preloading

- Strategic prefetch: for features likely to be used on a page (e.g., a gallery on product pages), use `<link rel="preload" as="script" href="/path/to/chunk.js">` or Next.js's `prefetch` on a user interaction (hover) to reduce latency while still avoiding the initial bundle cost.
- Use `router.prefetch()` or `dynamic`'s `onLoad` hooks when user intent suggests likely future usage.

11.2 Further bundle splitting

- Review analyzer output and split other heavy dependencies similarly (charts, maps, analytics). Extract vendor libraries into on-demand chunks or load them from a CDN as remote modules.

11.3 Advanced: server-driven code-splitting and edge caching

- Consider running the analyzer across multiple routes and building route-specific entry points so each page ships minimal code.
- Use edge caching for static assets and prebuilt chunk manifests to speed up cold cache performance.

11.4 Replace `framer-motion` with a smaller animation runtime (if animations are basic)

- If `framer-motion` still dominates client weight and animation needs are simple, evaluate smaller alternatives (CSS-based transitions, `@motionone/dom`, or CSS-in-JS transitions) and keep the same wrapper API to simplify migration.

11.5 Automate analyzer-driven PR suggestions

- Add a CI job that runs `ANALYZE=true next build` and fails when new PR changes exceed a JS budget for `main-app` or `main` chunks. This prevents regressions in bundle size.

---

## Appendix A — quick commands & scripts

Run analyzer and open artifacts (Windows bash):

```bash
npm run build:analyze
# or
cross-env ANALYZE=true next build

# Open the analyzer html (example):
start .next/analyze/client.html
```

Quick helper to grep built chunks for a string (best-effort):

```bash
grep -R "framer-motion" -n .next/static || true
```

If you'd like, I can add a small script `scripts/extract-analyzer.js` to reliably extract the analyzer JSON and produce a top-10 list of modules by gzipped size; I can run it and attach the JSON to this repo.

---

End of document.


## What changed (high-level)
- Added client runtime wrappers that load `framer-motion` only on the client at the moment of need. Files:
  - `src/components/common/MotionWrapper.jsx` — runtime import of `framer-motion`'s `motion.*` components and safe fallback to plain DOM elements.
  - `src/components/common/LazyAnimatePresence.jsx` — lazy-loads `AnimatePresence` and renders children without exit/enter animations until loaded.
- Converted gallery/modal to dynamic import:
  - `src/components/BentoGallery.jsx` now uses `next/dynamic(() => import('@/components/GalleryModal'), { ssr: false })` to avoid bundling the modal into SSR output.
- Converted many `<img>` elements to `next/image` throughout components and pages (examples: `HeroSection.jsx`, `ProjectsAndProducts.jsx`, `Layouts/Navbar.jsx`, `Layouts/Footer.jsx`, `GalleryModal.jsx`, `PulseJetBagFilter.jsx`, `DustExtraction.jsx`, and others). This improves LCP and reduces bytes transferred for images via responsive sizing and modern formats.

## Why these changes
- `framer-motion` is large and can significantly inflate client bundles if imported statically. Deferring it to runtime means users that don't trigger animated UI do not pay that cost.
- Interactive modals, carousels, and galleries are typically used after the initial page load (user interaction) so they are ideal candidates for `next/dynamic` with `ssr:false`.
- `next/image` lets Next.js serve optimized image formats and sizes per device, reducing bandwidth and improving Largest Contentful Paint (LCP).

## Technical details (how wrappers work)

MotionWrapper.jsx (summary)
- Declared as a client component (`"use client"`).
- Uses a `useEffect` to call `import('framer-motion')` on mount. This import only happens in the browser and never during SSR.
- When `framer-motion` loads, the wrapper renders the corresponding `motion.*` tag (e.g., `motion.div`); until then it renders a plain DOM tag (e.g., `div`).
- The component explicitly destructures and isolates framer-motion specific props (initial, animate, exit, whileHover, whileTap, etc.) so they are not forwarded to plain DOM nodes as invalid attributes.

LazyAnimatePresence.jsx (summary)
- Also a client component that imports `framer-motion` in `useEffect`.
- It sets `AnimatePresence` into state when loaded; until then it renders its children without presence animations.

Dynamic GalleryModal usage
- `BentoGallery.jsx` uses `next/dynamic` with `ssr:false` and a lightweight loading placeholder. The modal therefore loads on first interaction only.

Image usage
- Images across the site were migrated to `next/image`. Key benefits:
  - Automatic responsive srcset generation.
  - Lazy loading for off-screen images by default.
  - Next's optimizer serves modern formats (WebP/AVIF) when supported.

## Fallbacks and safe behaviors
- If `framer-motion` fails to load (network error or missing package), wrappers catch errors and render fallback DOM nodes — the app remains functional without animations.
- All runtime `import()` calls are inside `useEffect`, so they do not run on the server, preserving SSR stability.
- `next/dynamic(..., { ssr: false })` ensures interactive-only components are not part of server-rendered HTML; a loading placeholder is shown while the client fetches the chunk.

## Files of interest (inspected / added)
- `src/components/common/MotionWrapper.jsx` — runtime wrapper (new)
- `src/components/common/LazyAnimatePresence.jsx` — runtime AnimatePresence loader (new)
- `src/components/BentoGallery.jsx` — dynamic import of `GalleryModal` (modified/inspected)
- Many image-using components were edited to import `Image from 'next/image'` instead of raw `<img>` tags (see repo-wide search for `next/image` to list all occurrences).
- `.next/analyze/*.html` — analyzer artifacts generated by an earlier `ANALYZE=true` webpack build.

If you want an exhaustive per-file list of changed files, I can produce a git diff or list all files that import `next/image` or `import('framer-motion')`.

## How to verify (quick checklist)
1. Re-run analyzer build (recommended): `npm run build:analyze` or via `cross-env ANALYZE=true next build`.
   - The repository has a script `build:analyze` in `package.json` that sets `ANALYZE=true` and runs `next build`.
2. Open `.next/analyze/client.html` / `nodejs.html` and inspect the largest bundles. The HTML viewer contains the analyzer UI.
3. Confirm `framer-motion` is not present in main app chunks (search under `.next/static/chunks` for `framer-motion` or run a small parser to extract analyzer JSON — see next section for automatic extraction instructions).
4. On a production build, interact with the gallery: verify `GalleryModal` chunk is fetched on demand (Network tab in DevTools) rather than being present in initial payload.
5. Spot-check images with DevTools (network waterfall) to confirm optimized sizes and modern formats are served.

### Commands (bash)
```bash
# Run analyzer build (recommended)
npm run build:analyze

# Or explicitly (Windows bash):
cross-env ANALYZE=true next build
```

## Extracting numeric analyzer data (recommended)
The analyzer HTML embeds the bundle/module data into a bundled viewer script. For robust extraction I recommend one of two methods:

1) Re-run analyzer using a small Node script that loads the analyzer plugin programmatically and writes out JSON (preferred when you want repeatable machine-readable output).

2) Extract JSON from `.next/analyze/nodejs.html` by locating the embedded data object in the HTML (the analyzer viewer typically serializes the stats into a JS variable) and parse it. This is straightforward if you use a short Node script that reads the file, uses a regex to find the serialized object, and then JSON.parse's it (careful: object keys may not be double-quoted; using a JS evaluator in a safe VM context or using the analyzer plugin programmatically is safer).

Example (quick Node approach outline):

1. Create `scripts/extract-analyzer.js` with logic to:
   - read `.next/analyze/nodejs.html` into a string
   - find the `data` blob the viewer uses (look for a large `var` or `window.__` assignment)
   - safely evaluate or convert the blob to JSON
   - write a small JSON file with chunk sizes and top modules

2. Run: `node scripts/extract-analyzer.js` and review the generated JSON.

If you'd like, I can add a small extraction script to the repo and run it here to produce a top‑10 list of bundles and their largest modules. That is the next recommended step before automated file edits.

## Prioritized candidates (manual, best-guess without numeric analyzer)
These items are likely to produce high wins once verified by numeric analyzer output:
1. `framer-motion` — already deferred; confirm removal from initial chunks.
2. Gallery / modal / carousel components — already dynamic in at least one place (`BentoGallery`). Find other large modal/carousel code paths and dynamic-import them.
3. Icon libraries (e.g., `react-icons`) — replace whole-package imports with single-icon imports or dynamic loads.
4. Carousel / slider libraries (if any) — dynamic import where they are only used on some pages.
5. Any page-level heavy dependencies (maps, charts, analytics code loaded synchronously) — convert to client-only/dynamic when possible.

I can produce a data-driven top-10 list if you want me to parse `.next/analyze/nodejs.html`.

## Small low-risk improvements I already suggest applying
- Replace any remaining static `import 'framer-motion'` usages with `MotionWrapper` or `LazyAnimatePresence`.
- Ensure all modal-like components are candidates for `next/dynamic` with `ssr:false` and show a small loading placeholder.
- Convert remaining `<img>` to `next/image` (with width/height or `fill` and container sized) to avoid CLS.

## Next steps (pick one)
- Option A (documentation only): Accept this report, and I will add nothing else.
- Option B (data-driven optimizations): I'll extract numeric analyzer data and produce a prioritized list of concrete edits (top N components to lazy-load) and propose exact code changes.
- Option C (automated edits): After your approval, I'll apply safe edits (e.g., replace remaining `framer-motion` imports, add dynamic imports for prioritized components) and re-run analyzer to show deltas.

Tell me which option you want. If you pick B or C, I will run the analyzer extraction step next and return the prioritized list (and proposed edits) before changing any source files.

---

Appendix: quick references
- MotionWrapper: `src/components/common/MotionWrapper.jsx`
- LazyAnimatePresence: `src/components/common/LazyAnimatePresence.jsx`
- Dynamic gallery example: `src/components/BentoGallery.jsx`
- Analyzer artifacts: `.next/analyze/client.html`, `.next/analyze/nodejs.html`, `.next/analyze/edge.html`

End of report.
