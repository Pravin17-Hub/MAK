'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 180 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 240 80"
      width={size}
      height={size / 3}
      className={`transition-colors duration-300 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Embroidery Hoop / Stitching Circle */}
      <circle
        cx="120"
        cy="40"
        r="32"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 3"
        opacity="0.4"
      />
      <circle
        cx="120"
        cy="40"
        r="35"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.2"
      />

      {/* Sewing Needle running diagonally through the hoop */}
      <motion.line
        x1="78"
        y1="54"
        x2="162"
        y2="26"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Needle eye */}
      <circle cx="157" cy="27.6" r="0.75" fill="currentColor" />

      {/* Brand Text */}
      <text
        x="120"
        y="47"
        fontFamily="var(--font-serif)"
        fontSize="24"
        fontWeight="700"
        textAnchor="middle"
        letterSpacing="6"
        fill="currentColor"
      >
        MAK
      </text>

      {/* Subtitle */}
      <text
        x="125"
        y="60"
        fontFamily="var(--font-sans)"
        fontSize="7.5"
        fontWeight="500"
        textAnchor="middle"
        letterSpacing="3"
        fill="currentColor"
        opacity="0.7"
      >
        LADIES TAILORING
      </text>
    </svg>
  );
}
