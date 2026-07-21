"use client";

import React, { useEffect, useState } from "react";

// Cached at module scope so components remounted via a changing `key`
// (e.g. carousel slides) don't each restart from an un-animated fallback
// render while framer-motion re-resolves its dynamic import.
let cachedMotionModule = null;

export default function MotionWrapper({
  as = "div",
  children,
  // framer-motion props we may receive — destructure so they are not passed to DOM
  initial,
  animate,
  exit,
  whileHover,
  whileTap,
  whileInView,
  whileFocus,
  transition,
  variants,
  viewport,
  custom,
  drag,
  dragConstraints,
  dragElastic,
  className,
  ...props
}) {
  const [motionModule, setMotionModule] = useState(cachedMotionModule);

  useEffect(() => {
    if (cachedMotionModule) return;

    let mounted = true;
    import("framer-motion")
      .then((mod) => {
        cachedMotionModule = mod;
        if (mounted) setMotionModule(mod);
      })
      .catch(() => {
        // ignore load errors — we'll render fallback
      });
    return () => {
      mounted = false;
    };
  }, []);

  const motionProps = {
    initial,
    animate,
    exit,
    whileHover,
    whileTap,
    whileInView,
    whileFocus,
    transition,
    variants,
    viewport,
    custom,
    drag,
    dragConstraints,
    dragElastic,
  };

  if (motionModule && motionModule.motion) {
    const MotionTag = motionModule.motion[as] || motionModule.motion.div;
    return (
      <MotionTag {...motionProps} className={className} {...props}>
        {children}
      </MotionTag>
    );
  }

  const Tag = as;
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}
