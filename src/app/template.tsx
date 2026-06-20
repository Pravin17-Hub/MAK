'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Sliding Transition Curtain Overlay */}
      <motion.div
        className="fixed inset-0 z-50 bg-purple-950 pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ originY: 1 }}
      />
      
      {/* Accent curtain line */}
      <motion.div
        className="fixed inset-x-0 bottom-0 h-[2px] bg-gold-500 z-50 pointer-events-none"
        initial={{ scaleY: 1, opacity: 1 }}
        animate={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ originY: 1 }}
      />

      {/* Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
