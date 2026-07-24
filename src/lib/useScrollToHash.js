"use client";
import { useEffect } from "react";

/**
 * Scrolls to the element whose id matches the current URL hash, once its
 * position has stopped moving.
 *
 * The browser's own native anchor-scroll runs the moment the page loads,
 * before images (e.g. the hero carousel) have finished loading. As those
 * images load in, the page layout shifts and the native scroll position goes
 * stale, landing the viewport on blank space below/above the real target.
 * This re-scrolls after watching the target's position frame-by-frame until
 * it has been stable for a few frames, so it always lands correctly
 * regardless of how much the layout above it shifts.
 *
 * Handles: initial load, browser back/forward, native hashchange, AND Next.js
 * client navigations (which use history.pushState and do NOT fire "hashchange").
 *
 * @param {string[]} validIds  Stable array of section ids (define at module scope).
 */
export default function useScrollToHash(validIds) {
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

        // Settled (or safety cap ~3s at 60fps for slower image loads) → scroll once.
        if (stableFrames >= 6 || attempts > 180) {
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
      const el = document.getElementById(hash);
      if (el) scrollWhenStable(el);
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
  }, [validIds]);
}
