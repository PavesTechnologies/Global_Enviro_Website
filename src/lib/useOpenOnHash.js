"use client";
import { useEffect } from "react";

/**
 * Opens the accordion whose id matches the current URL hash and scrolls to it.
 * Handles: initial load, browser back/forward, native hashchange, AND Next.js
 * client navigations (which use history.pushState and do NOT fire "hashchange").
 *
 * @param {string[]} validIds  Stable array of accordion section ids (define at module scope).
 * @param {(id: string) => void} setOpenId  State setter for the currently open accordion.
 */
export default function useOpenOnHash(validIds, setOpenId) {
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash || !validIds.includes(hash)) return;
      setOpenId(hash);
      // Wait for the accordion to mount/expand before scrolling to it.
      setTimeout(() => {
        document
          .getElementById(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
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
    };
  }, [validIds, setOpenId]);
}
