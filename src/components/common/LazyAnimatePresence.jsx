"use client";
import React, { useEffect, useState } from "react";

export default function LazyAnimatePresence({ children, ...props }) {
  const [AnimatePresence, setAnimatePresence] = useState(null);

  useEffect(() => {
    let mounted = true;
    import("framer-motion")
      .then((mod) => {
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
