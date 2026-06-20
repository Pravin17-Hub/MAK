'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-purple-950 text-gold-100"
        >
          {/* Decorative grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            {/* Thread and Needle Animation */}
            <div className="relative w-48 h-32 mb-6">
              {/* Fabric Line */}
              <div className="absolute left-0 right-0 top-16 h-[2px] bg-gold-500/30 border-dashed border-t border-gold-500/70" />

              {/* Stitching Line Path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120">
                {/* Stitch Path */}
                <motion.path
                  d="M 10 60 Q 40 40 70 60 T 130 60 T 190 60"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  initial={{ strokeDasharray: "0 200" }}
                  animate={{ strokeDasharray: "200 0" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Needle */}
                <motion.g
                  initial={{ x: 10, y: 60 }}
                  animate={{
                    x: [10, 40, 70, 100, 130, 160, 190],
                    y: [60, 20, 60, 20, 60, 20, 60],
                    rotate: [20, -20, 20, -20, 20, -20, 20],
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  {/* Needle Body */}
                  <line x1="-15" y1="0" x2="15" y2="0" stroke="#d4af37" strokeWidth="2.5" />
                  {/* Eye of the Needle */}
                  <ellipse cx="-10" cy="0" rx="2.5" ry="1" fill="#0f0314" stroke="#d4af37" strokeWidth="1" />
                  {/* Thread trailing from the needle eye */}
                  <path d="M -12 0 C -25 -10 -30 10 -45 5" fill="none" stroke="#d4af37" strokeWidth="1.5" opacity="0.8" />
                </motion.g>
              </svg>
            </div>

            {/* Brand Logo & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl font-serif tracking-widest text-gold-500 uppercase font-light">
                MAK
              </h1>
              <div className="w-16 h-[1px] bg-gold-500 my-3 mx-auto" />
              <p className="text-xs uppercase tracking-[0.25em] text-pink-200/80 font-sans font-medium">
                Ladies Tailoring
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
