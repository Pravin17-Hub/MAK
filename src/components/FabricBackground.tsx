'use client';

import React from 'react';

export default function FabricBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none bg-cream-100">
      {/* Subtle Dot Grid fabric texture overlay */}
      <div className="absolute inset-0 fabric-pattern" />

      {/* Layered Silk/Satin Waves (Static for high performance, 0% CPU lag) */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Wave 1: Royal Purple Silk */}
        <path
          d="M-100,200 C300,50 600,450 1100,200 C1500,50 1800,300 2100,100 L2100,1200 L-100,1200 Z"
          fill="#1d0a24"
          opacity="0.04"
        />

        {/* Wave 2: Luxury Gold Silk */}
        <path
          d="M-100,400 C400,250 600,100 1200,350 C1600,500 1700,200 2100,300 L2100,1200 L-100,1200 Z"
          fill="#d4af37"
          opacity="0.03"
        />

        {/* Wave 3: Soft Pink Satin */}
        <path
          d="M-100,600 C200,500 500,700 1000,550 C1500,400 1800,650 2100,500 L2100,1200 L-100,1200 Z"
          fill="#f7c6c7"
          opacity="0.02"
        />
      </svg>

      {/* Floating golden thread lines (fashion/sewing details) */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M -50,150 Q 300,50 650,250 T 1350,100 T 2150,200"
          className="stitching-line opacity-20"
        />
      </svg>
    </div>
  );
}
