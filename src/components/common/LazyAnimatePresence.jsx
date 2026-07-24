"use client";
import React, { useEffect, useState } from "react";

let cachedAnimatePresence = null;

export default function LazyAnimatePresence({ children, ...props }) {
  const [AnimatePresence, setAnimatePresence] = useState(
    () => cachedAnimatePresence
  );

  useEffect(() => {
    if (cachedAnimatePresence) return;

    let mounted = true;
    import("framer-motion")
      .then((mod) => {
        cachedAnimatePresence = mod.AnimatePresence;
        if (mounted) setAnimatePresence(() => mod.AnimatePresence);
      })
      .catch(() => {
        /* ignore */
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (AnimatePresence) {
    const AP = AnimatePresence;
    return <AP {...props}>{children}</AP>;
  }

  // SSR / before framer-motion loads: render children directly
  return <>{children}</>;
}
