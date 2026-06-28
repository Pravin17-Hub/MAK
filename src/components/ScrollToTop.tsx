'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Rotate spool based on scroll position
      setRotation(window.scrollY * 0.18);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-24 right-6 z-40 flex items-center justify-center p-3.5 bg-purple-950 border border-gold-500/40 rounded-full shadow-[0_8px_30px_rgb(29,10,36,0.3)] text-gold-500 hover:text-pink-100 cursor-pointer group"
          title="Scroll to Top"
        >
          {/* Inner Spool SVG Graphic */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Thread winding/unwinding rotation container */}
            <motion.div
              style={{ rotate: rotation }}
              className="w-full h-full flex items-center justify-center"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current"
              >
                {/* Spool Flange (Top) */}
                <path
                  d="M8 6 H24 L22 9 H10 L8 6 Z"
                  fill="#1a0010"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                
                {/* Spool Flange (Bottom) */}
                <path
                  d="M8 26 H24 L22 23 H10 L8 26 Z"
                  fill="#1a0010"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                {/* Spool Core (Vertical cylindrical boundaries) */}
                <line x1="11" y1="9" x2="11" y2="23" stroke="#d4af37" strokeWidth="1" />
                <line x1="21" y1="9" x2="21" y2="23" stroke="#d4af37" strokeWidth="1" />

                {/* Horizontal Thread Lines (Wound around core) */}
                <line x1="11" y1="11" x2="21" y2="11" stroke="#ffd700" strokeWidth="1.5" />
                <line x1="11" y1="13" x2="21" y2="13" stroke="#ffd700" strokeWidth="1.5" />
                <line x1="11" y1="15" x2="21" y2="15" stroke="#ffd700" strokeWidth="1.5" />
                <line x1="11" y1="17" x2="21" y2="17" stroke="#ffd700" strokeWidth="1.5" />
                <line x1="11" y1="19" x2="21" y2="19" stroke="#ffd700" strokeWidth="1.5" />
                <line x1="11" y1="21" x2="21" y2="21" stroke="#ffd700" strokeWidth="1.5" />

                {/* Diagonal overlay threads for realistic texture */}
                <line x1="11" y1="11" x2="21" y2="15" stroke="#fff5cc" strokeWidth="1" opacity="0.6" />
                <line x1="11" y1="15" x2="21" y2="19" stroke="#fff5cc" strokeWidth="1" opacity="0.6" />
                <line x1="11" y1="18" x2="21" y2="22" stroke="#fff5cc" strokeWidth="1" opacity="0.6" />
              </svg>
            </motion.div>
            
            {/* Spool Needle (Stays static, pointing up and right) */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 stroke-current text-gold-300 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              <line x1="4" y1="28" x2="26" y2="6" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" />
              {/* Needle eye */}
              <ellipse cx="23.5" cy="8.5" rx="1" ry="2" transform="rotate(45 23.5 8.5)" fill="#1a0010" stroke="#d4af37" strokeWidth="0.8" />
            </svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
