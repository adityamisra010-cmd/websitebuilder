"use client";

import { m, useReducedMotion } from "framer-motion";

/**
 * The signature: a growth curve that lies flat (the rut) then bends upward at a
 * marked inflection point. Revealed left→right by scaling a clip mask on the X
 * axis — transform only, no stroke-dashoffset — so it stays compositor-cheap and
 * honors the transform/opacity-only motion constraint.
 */
export function InflectionCurve({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  // Curve geometry (user space). Flat-ish plateau on the left, inflection near
  // x=352, accelerating rise to the top-right.
  const curve =
    "M 56 292 C 150 298, 250 296, 316 288 S 336 282, 352 268 C 430 214, 528 150, 624 78";
  const inflX = 352;
  const inflY = 268;

  const revealInitial = reduce ? { scaleX: 1 } : { scaleX: 0 };
  const revealAnimate = { scaleX: 1 };

  return (
    <svg
      viewBox="0 0 680 360"
      className={className}
      role="img"
      aria-label="A growth curve that stays flat, then bends sharply upward at an inflection point."
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="curveStroke" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#4b5a66" />
          <stop offset="45%" stopColor="#17b382" />
          <stop offset="100%" stopColor="#2ee6a6" />
        </linearGradient>
        <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(46,230,166,0.20)" />
          <stop offset="100%" stopColor="rgba(46,230,166,0)" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="curveReveal" clipPathUnits="userSpaceOnUse">
          <m.rect
            x="0"
            y="0"
            width="680"
            height="360"
            style={{ transformBox: "fill-box", transformOrigin: "left center" }}
            initial={revealInitial}
            animate={revealAnimate}
            transition={{ duration: reduce ? 0 : 1.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          />
        </clipPath>
      </defs>

      {/* Static plotted axis + reference gridlines (always visible) */}
      <g stroke="var(--line)" strokeWidth="1">
        {[78, 132, 186, 240, 292].map((y) => (
          <line key={y} x1="40" y1={y} x2="648" y2={y} />
        ))}
      </g>
      {/* Baseline axis */}
      <line x1="40" y1="320" x2="648" y2="320" stroke="var(--line-strong)" strokeWidth="1" />
      {/* Axis tick labels */}
      <text x="40" y="342" fill="var(--faint)" fontSize="11" fontFamily="var(--font-mono)">
        NOW
      </text>
      <text
        x="648"
        y="342"
        fill="var(--faint)"
        fontSize="11"
        fontFamily="var(--font-mono)"
        textAnchor="end"
      >
        MONTH 6
      </text>

      {/* Revealed curve group */}
      <g clipPath="url(#curveReveal)">
        {/* area fill under curve */}
        <path d={`${curve} L 624 320 L 56 320 Z`} fill="url(#curveFill)" opacity="0.9" />
        {/* the line */}
        <path
          d={curve}
          fill="none"
          stroke="url(#curveStroke)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#softGlow)"
        />

        {/* "the rut" label on the flat stretch */}
        <text
          x="150"
          y="278"
          fill="var(--faint)"
          fontSize="11"
          letterSpacing="1.5"
          fontFamily="var(--font-mono)"
        >
          THE RUT
        </text>

        {/* inflection guide + marker */}
        <line
          x1={inflX}
          y1={inflY}
          x2={inflX}
          y2="320"
          stroke="var(--emerald)"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.5"
        />
        <circle cx={inflX} cy={inflY} r="5.5" fill="var(--ink)" stroke="var(--emerald)" strokeWidth="2.5" />
        {!reduce && (
          <m.circle
            cx={inflX}
            cy={inflY}
            r="5.5"
            fill="none"
            stroke="var(--emerald)"
            strokeWidth="1.5"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.8 }}
          />
        )}
        <text
          x={inflX + 12}
          y={inflY - 8}
          fill="var(--emerald)"
          fontSize="12"
          letterSpacing="1.5"
          fontFamily="var(--font-mono)"
          className="text-glow"
        >
          INFLECTION
        </text>

        {/* endpoint marker */}
        <circle cx="624" cy="78" r="4.5" fill="var(--emerald)" filter="url(#softGlow)" />
      </g>
    </svg>
  );
}
