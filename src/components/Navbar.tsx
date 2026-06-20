'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Background scroll check
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 bg-purple-950/95 backdrop-blur-md border-b border-gold-500/20 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gold-500 origin-left w-full" style={{ transform: `scaleX(${scrollProgress})` }} />

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group cursor-pointer">
          <Logo className="h-10 md:h-12 w-auto text-gold-500 group-hover:text-pink-100" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.path} href={item.path} className="relative py-2 group cursor-pointer">
                <span
                  className={`text-sm uppercase tracking-widest font-sans font-medium transition-colors duration-300 ${
                    isActive ? 'text-gold-500' : 'text-pink-100 group-hover:text-gold-300'
                  }`}
                >
                  {item.name}
                </span>
                {/* Active/Hover line animation */}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-500"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ originX: 0 }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Buttons: Language toggle & Quick Call */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gold-500/30 bg-purple-900/40 text-gold-500 hover:bg-gold-500 hover:text-purple-950 transition-all duration-300 text-xs font-semibold tracking-wider cursor-pointer"
          >
            <Globe size={14} />
            <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          {/* Quick Call */}
          <a
            href="tel:7502540560"
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-500 text-purple-950 hover:bg-pink-200 hover:text-purple-900 font-semibold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.2)]"
          >
            <PhoneCall size={14} />
            <span>{language === 'ta' ? 'அழைக்க' : 'Call'}</span>
          </a>
        </div>

        {/* Mobile menu and Language toggle container */}
        <div className="flex lg:hidden items-center space-x-3">
          {/* Mobile Language Selector */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center p-2 rounded-full border border-gold-500/20 bg-purple-900/30 text-gold-500 text-xs font-semibold cursor-pointer"
            title="Switch Language"
          >
            <span className="w-6 text-center">{language === 'en' ? 'த' : 'En'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gold-500 hover:text-pink-100 p-1 cursor-pointer focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden w-full bg-purple-950 border-b border-gold-500/20 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col px-6 py-8 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base uppercase tracking-widest font-sans font-medium py-2 border-b border-gold-500/5 transition-colors duration-300 ${
                      isActive ? 'text-gold-500 pl-2 border-l-2 border-l-gold-500' : 'text-pink-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              {/* Call CTA in Mobile Menu */}
              <a
                href="tel:7502540560"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-gold-500 text-purple-950 font-bold text-sm uppercase tracking-widest mt-4"
              >
                <PhoneCall size={16} />
                <span>{language === 'ta' ? 'அழைக்க (7502540560)' : 'Call (7502540560)'}</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
