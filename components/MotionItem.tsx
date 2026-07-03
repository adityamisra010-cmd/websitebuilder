"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * A staggered child for <RevealGroup>. Inherits animation state from the parent
 * via variants (transform + opacity only). Renders inert under reduced motion.
 */
export function MotionItem({
  children,
  className,
  variants,
}: {
  children: ReactNode;
  className?: string;
  variants: Variants;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <m.div className={className} variants={variants}>
      {children}
    </m.div>
  );
}
