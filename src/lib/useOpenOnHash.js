"use client";
import { useEffect } from "react";

/**
 * Opens the accordion whose id matches the current URL hash and scrolls to it.
 *
 * Handles: initial load, browser back/forward, native hashchange, AND Next.js
 * client navigations (which use history.pushState and do NOT fire "hashchange").
 *
 * Scrolling is done only AFTER the layout has stopped moving. The target card is
 * expanding while any previously-open card is collapsing (framer-motion height
 * animation, whose chunk may even be lazy-loaded), so a fixed timeout can't know
 * when the final position is settled. Instead we watch the element's top position
 * frame-by-frame and scroll once it has been stable for a few frames.
 *
 * @param {string[]} validIds  Stable array of accordion section ids (define at module scope).
 * @param {(id: string) => void} setOpenId  State setter for the currently open accordion.
 */
export default function useOpenOnHash(validIds, setOpenId) {
  useEffect(() => {
    let rafId;

    const scrollWhenStable = (el) => {
      let lastTop = null;
      let stableFrames = 0;
      let attempts = 0;

      const tick = () => {
        const top = el.getBoundingClientRect().top;
        if (lastTop !== null && Math.abs(top - lastTop) < 0.5) {
          stableFrames += 1;
        } else {
          stableFrames = 0;
        }
        lastTop = top;
        attempts += 1;

        // Settled (or safety cap ~1.5s at 60fps) → do a single clean scroll.
        if (stableFrames >= 4 || attempts > 90) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
    };

    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash || !validIds.includes(hash)) return;
      setOpenId(hash);
      // Let React commit the open state, then start watching for a settled layout.
      rafId = requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) scrollWhenStable(el);
      });
    };

    applyHash();

    window.addEventListener("hashchange", applyHash);
    window.addEventListener("popstate", applyHash);

    // Next.js <Link> uses pushState, which skips the hashchange event.
    const origPush = window.history.pushState;
    window.history.pushState = function (...args) {
      origPush.apply(this, args);
      applyHash();
    };

    return () => {
      window.removeEventListener("hashchange", applyHash);
      window.removeEventListener("popstate", applyHash);
      window.history.pushState = origPush;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [validIds, setOpenId]);
}
