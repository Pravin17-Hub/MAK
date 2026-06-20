'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsAppButton() {
  const { language } = useLanguage();

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '7502540560';
    const message = encodeURIComponent(
      language === 'ta'
        ? 'வணக்கம் MAK லேடீஸ் டெய்லரிங், தையல் சேவைகள் மற்றும் டிசைன்கள் பற்றி நான் விசாரிக்க விரும்புகிறேன்.'
        : 'Hello MAK Ladies Tailoring, I would like to enquire about stitching services.'
    );
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppRedirect}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 3 }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center p-4 bg-purple-900 border border-gold-500/50 rounded-full shadow-[0_8px_30px_rgb(29,10,36,0.3)] text-gold-500 hover:text-pink-100 cursor-pointer"
      title="Contact on WhatsApp"
    >
      {/* Soft pulse glow ring */}
      <span className="absolute inset-0 rounded-full bg-gold-500/10 animate-ping pointer-events-none" />
      <MessageCircle size={28} className="relative z-10" />
    </motion.button>
  );
}
