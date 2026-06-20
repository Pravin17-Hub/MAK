'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FabricBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none bg-cream-100">
      {/* Subtle Dot Grid fabric texture overlay */}
      <div className="absolute inset-0 fabric-pattern" />

      {/* Layered Silk/Satin Waves */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Wave 1: Royal Purple Silk */}
        <motion.path
          d="M-100,200 C300,50 600,450 1100,200 C1500,50 1800,300 2100,100 L2100,1200 L-100,1200 Z"
          fill="#1d0a24"
          opacity="0.04"
          animate={{
            d: [
              "M-100,200 C300,50 600,450 1100,200 C1500,50 1800,300 2100,100 L2100,1200 L-100,1200 Z",
              "M-100,250 C400,100 700,380 1200,250 C1600,120 1700,250 2100,150 L2100,1200 L-100,1200 Z",
              "M-100,200 C300,50 600,450 1100,200 C1500,50 1800,300 2100,100 L2100,1200 L-100,1200 Z"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Wave 2: Luxury Gold Silk */}
        <motion.path
          d="M-100,400 C400,250 600,100 1200,350 C1600,500 1700,200 2100,300 L2100,1200 L-100,1200 Z"
          fill="#d4af37"
          opacity="0.03"
          animate={{
            d: [
              "M-100,400 C400,250 600,100 1200,350 C1600,500 1700,200 2100,300 L2100,1200 L-100,1200 Z",
              "M-100,350 C300,300 700,150 1100,300 C1500,450 1800,250 2100,250 L2100,1200 L-100,1200 Z",
              "M-100,400 C400,250 600,100 1200,350 C1600,500 1700,200 2100,300 L2100,1200 L-100,1200 Z"
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Wave 3: Soft Pink Satin */}
        <motion.path
          d="M-100,600 C200,500 500,700 1000,550 C1500,400 1800,650 2100,500 L2100,1200 L-100,1200 Z"
          fill="#f7c6c7"
          opacity="0.02"
          animate={{
            d: [
              "M-100,600 C200,500 500,700 1000,550 C1500,400 1800,650 2100,500 L2100,1200 L-100,1200 Z",
              "M-100,630 C300,470 600,650 900,580 C1400,430 1700,680 2100,530 L2100,1200 L-100,1200 Z",
              "M-100,600 C200,500 500,700 1000,550 C1500,400 1800,650 2100,500 L2100,1200 L-100,1200 Z"
            ]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </svg>

      {/* Floating golden thread lines (fashion/sewing details) */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M -50,150 Q 300,50 650,250 T 1350,100 T 2150,200"
          className="stitching-line opacity-20"
          animate={{
            d: [
              "M -50,150 Q 300,50 650,250 T 1350,100 T 2150,200",
              "M -50,180 Q 350,100 700,200 T 1400,150 T 2150,170",
              "M -50,150 Q 300,50 650,250 T 1350,100 T 2150,200"
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}
