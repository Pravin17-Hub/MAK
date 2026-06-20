'use client';

import React from 'react';

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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Wing (3 curved layered lines) */}
      <path
        d="M 65 38 C 30 32 12 18 2 26 C 10 35 30 40 65 40 Z"
        opacity="0.85"
      />
      <path
        d="M 65 38 C 35 42 20 32 10 37 C 18 46 38 46 65 43 Z"
        opacity="0.95"
      />
      <path
        d="M 65 38 C 40 48 28 46 18 49 C 28 55 48 52 65 46 Z"
      />

      {/* Right Wing (3 curved layered lines) */}
      <path
        d="M 175 38 C 210 32 228 18 238 26 C 230 35 210 40 175 40 Z"
        opacity="0.85"
      />
      <path
        d="M 175 38 C 205 42 220 32 230 37 C 222 46 202 46 175 43 Z"
        opacity="0.95"
      />
      <path
        d="M 175 38 C 200 48 212 46 222 49 C 212 55 192 52 175 46 Z"
      />

      {/* Stylized text "M A K" with a small crown shape on top of 'A' */}
      <text
        x="120"
        y="50"
        fontFamily="var(--font-serif)"
        fontSize="30"
        fontWeight="800"
        textAnchor="middle"
        letterSpacing="6"
      >
        MAK
      </text>

      {/* Crown over the letter A */}
      <path
        d="M 110 18 Q 120 22 130 18 Q 120 12 110 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="110" cy="18" r="1.5" />
      <circle cx="120" cy="12" r="1.5" />
      <circle cx="130" cy="18" r="1.5" />
    </svg>
  );
}
