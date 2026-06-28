'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, Star, ChevronDown, HelpCircle, Scissors } from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();
  const [bridalIndex, setBridalIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Parallax Scroll Tracking for Hero
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 800], ["0%", "25%"]);
  const heroBgScale = useTransform(scrollY, [0, 800], [1.05, 1.15]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 60]);
  const heroTextOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Bridal Showcase assets
  const bridalDesigns = [
    {
      image: '/bridal-showcase.png',
      title: language === 'ta' ? 'அரச திருமண ஆரி ஒர்க்' : 'Royal Wedding Aari Embroidery',
      desc: language === 'ta' ? 'தங்கம் மற்றும் முத்து வேலைப்பாடுகளுடன் கூடிய தையல்.' : 'Handcrafted with fine gold thread, zardosi, and bead accents.',
    },
    {
      image: '/designer-blouse-alt.png',
      title: language === 'ta' ? 'நவீன மணமகள் டிசைன்' : 'Modern Velvet Bridal Cut',
      desc: language === 'ta' ? 'மெல்லிய கட்வொர்க் மற்றும் பைப்பிங் வேலைப்பாடு.' : 'Intricate cutwork back design with delicate pearl hangings.',
    },
    {
      image: '/chudithar-stitching.png',
      title: language === 'ta' ? 'அனார்கலி பட்டு வடிவமைப்பு' : 'Silk Anarkali Bridal Gown',
      desc: language === 'ta' ? 'பாரம்பரிய மற்றும் நவீன தையலின் இணைவு.' : 'Perfect blend of traditional borders and modern cuts.',
    },
  ];

  const nextBridal = () => {
    setBridalIndex((prev) => (prev + 1) % bridalDesigns.length);
  };

  const prevBridal = () => {
    setBridalIndex((prev) => (prev - 1 + bridalDesigns.length) % bridalDesigns.length);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Bespoke Process steps
  const processSteps = [
    {
      step: '01',
      title: t('process.step1.title'),
      desc: t('process.step1.desc'),
      svg: (
        <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto text-gold-500 transition-transform duration-500 group-hover:scale-105">
          <motion.path
            d="M 12 40 C 12 20, 24 16, 32 16 C 44 16, 52 24, 52 36 C 52 48, 40 52, 28 52 C 16 52, 8 44, 8 36 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0.8 }}
            whileHover={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
          <path d="M 32 16 L 32 20 M 40 17 L 38 21 M 46 22 L 43 25 M 50 30 L 46 31 M 51 38 L 47 38 M 48 45 L 45 43 M 42 49 L 40 46 M 35 52 L 35 48 M 28 52 L 28 48 M 21 50 L 22 46 M 15 45 L 17 42 M 10 38 L 14 38" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="32" cy="36" r="6" fill="currentColor" opacity="0.2" />
        </svg>
      ),
    },
    {
      step: '02',
      title: t('process.step2.title'),
      desc: t('process.step2.desc'),
      svg: (
        <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto text-gold-500">
          <motion.g
            animate={{ rotate: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ transformOrigin: "32px 32px" }}
          >
            <path d="M 12 48 C 9 48, 9 43, 12 41 C 15 39, 18 43, 18 46 C 18 49, 15 49, 12 48 Z M 17 43 L 32 32 L 52 14" stroke="currentColor" strokeWidth="2" fill="none" />
          </motion.g>
          <motion.g
            animate={{ rotate: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ transformOrigin: "32px 32px" }}
          >
            <path d="M 12 16 C 9 16, 9 21, 12 23 C 15 25, 18 21, 18 18 C 18 15, 15 15, 12 16 Z M 17 21 L 32 32 L 52 50" stroke="currentColor" strokeWidth="2" fill="none" />
          </motion.g>
          <circle cx="32" cy="32" r="2.5" fill="#1a0010" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      step: '03',
      title: t('process.step3.title'),
      desc: t('process.step3.desc'),
      svg: (
        <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto text-gold-500">
          <motion.path
            d="M 12 36 Q 24 50, 40 42 T 52 24 Q 48 10, 34 16 L 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />
          <motion.g
            animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <path d="M 48 12 L 20 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="45" cy="15" rx="1" ry="2.5" transform="rotate(45 45 15)" fill="#1a0010" stroke="currentColor" strokeWidth="0.8" />
          </motion.g>
        </svg>
      ),
    },
    {
      step: '04',
      title: t('process.step4.title'),
      desc: t('process.step4.desc'),
      svg: (
        <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto text-gold-500">
          <path d="M 32 18 C 32 12, 38 12, 38 15 C 38 18, 32 20, 32 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <motion.g
            whileHover={{ rotate: [0, -4, 4, -2, 2, 0] }}
            transition={{ duration: 1.2 }}
            style={{ transformOrigin: "32px 22px" }}
          >
            <path d="M 16 26 L 32 22 L 48 26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path
              d="M 22 26 L 20 42 Q 15 54, 48 54 Q 43 42, 40 26 Z"
              fill="currentColor"
              opacity="0.15"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M 22 36 L 40 36" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="15" r="1.2" fill="currentColor" />
          </motion.g>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] md:h-[95vh] flex items-center justify-center overflow-hidden bg-purple-950 pt-20">
        {/* Background Gradients & Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900/60 to-purple-950" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Decorative Golden Mandala Vector background */}
        <div className="absolute -left-20 -top-20 w-[450px] h-[450px] text-gold-500/5 pointer-events-none select-none opacity-40">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="0.5">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="40" strokeDasharray="1 1" />
            <circle cx="50" cy="50" r="30" />
            <path d="M50,5 L50,95 M5,50 L95,50 M18,18 L82,82 M18,82 L82,18" />
            {[...Array(12)].map((_, i) => (
              <circle key={i} cx={50 + 35 * Math.cos((i * Math.PI) / 6)} cy={50 + 35 * Math.sin((i * Math.PI) / 6)} r="2" fill="currentColor" />
            ))}
          </svg>
        </div>

        {/* Asymmetrical Layout grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-12 md:py-0">
          
          {/* Left Text Column */}
          <div className="md:col-span-7 text-left space-y-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-pink-200 font-semibold bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/20 inline-block">
                {t('hero.title')}
              </span>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-gold-100 font-light tracking-wide leading-[1.1]">
                {language === 'ta' ? (
                  <>
                    ஒவ்வொரு தருணத்திற்கும் <br />
                    <span className="italic text-gold-500 font-medium">கச்சிதமான தையல்</span>
                  </>
                ) : (
                  <>
                    Perfect Stitching <br />
                    <span className="italic text-gold-500 font-medium">for Every Occasion</span>
                  </>
                )}
              </h1>
              
              <p className="text-sm md:text-base text-pink-100/70 font-sans max-w-xl font-light tracking-wide leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 text-purple-950 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_8px_25px_rgba(212,175,55,0.3)] hover:bg-pink-100 hover:text-purple-900 cursor-pointer text-center"
              >
                {t('hero.bookBtn')}
              </Link>
              <Link
                href="/gallery"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold-500/40 text-gold-500 hover:text-purple-950 hover:bg-gold-500 font-bold uppercase tracking-widest text-xs transition-all duration-300 cursor-pointer text-center"
              >
                {t('hero.viewDesigns')}
              </Link>
            </motion.div>
          </div>

          {/* Right Image Frame Column */}
          <div className="md:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
              className="relative w-full max-w-sm aspect-[4/5]"
            >
              {/* Golden ambient blur under the arch */}
              <div className="absolute inset-0 bg-gold-500/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Luxury Arched Window Frame */}
              <div className="relative w-full h-full rounded-t-full overflow-hidden border-2 border-gold-500/30 shadow-[0_20px_50px_rgba(29,10,36,0.6)]">
                <img
                  src="/fabric-cutting.png"
                  alt="Luxury Tailoring Exhibit"
                  className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Bridal Sample Frame */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
                className="absolute -bottom-6 -left-8 w-1/2 aspect-square rounded-3xl overflow-hidden border-2 border-gold-500/20 shadow-2xl hidden sm:block bg-purple-950"
              >
                <img
                  src="/embroidery-zoom.png"
                  alt="Bridal Blouse Workmanship"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative embroidery thread loops outline */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 text-gold-500/20 pointer-events-none hidden sm:block">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="1.5">
                  <path d="M10,10 C40,30 20,70 90,90 C80,60 60,30 30,10" strokeDasharray="3 3" />
                </svg>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Stitching divider line at the bottom */}
        <div className="absolute bottom-4 left-0 right-0 h-4 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 20" preserveAspectRatio="none">
            <path
              d="M0,10 Q360,15 720,10 T1440,10"
              stroke="#d4af37"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </div>
      </section>

      {/* 2. THE BESPOKE PROCESS SECTION */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-3 mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-purple-500 font-bold">
            {t('process.title')}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-purple-900">
            {t('process.subtitle')}
          </h2>
          <div className="w-16 h-[1.5px] bg-purple-500/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-purple-950 border border-gold-500/15 rounded-3xl p-8 flex flex-col justify-between text-center shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Spool overlay element */}
              <div className="absolute -top-10 -right-10 text-gold-500/5 text-9xl font-serif font-bold pointer-events-none select-none">
                {step.step}
              </div>

              <div className="space-y-6">
                {/* SVG Graphics Frame */}
                <div className="w-20 h-20 mx-auto bg-purple-900/50 border border-gold-500/10 rounded-2xl flex items-center justify-center shadow-inner group-hover:border-gold-500/30 transition-colors duration-300">
                  {step.svg}
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="text-lg font-serif text-gold-500 font-semibold group-hover:text-gold-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs font-sans text-pink-100/70 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Connector dots for larger viewports */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] border-t border-dashed border-gold-500/30 z-20 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. BRIDAL COLLECTION SHOWCASE */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-purple-500 font-bold">
            {language === 'ta' ? 'மணமகள் கலெக்ஷன்' : 'Bridal Showcase'}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-purple-900">
            {language === 'ta' ? 'மணபெண் சிறப்புத் தொகுப்பு' : 'The Bridal Collections'}
          </h2>
          <div className="w-16 h-[1.5px] bg-purple-500/50 mx-auto mt-4" />
        </div>

        <div className="relative max-w-5xl mx-auto bg-purple-950 rounded-3xl overflow-hidden border border-gold-500/20 shadow-2xl flex flex-col md:flex-row min-h-[450px]">
          {/* Carousel Image with slide animation */}
          <div className="md:w-1/2 relative h-[300px] md:h-auto overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img
                key={bridalIndex}
                src={bridalDesigns[bridalIndex].image}
                alt={bridalDesigns[bridalIndex].title}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-purple-950/50" />
          </div>

          {/* Carousel Text & Controls */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between text-gold-100 z-10 relative">
            <div className="space-y-4 my-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] text-pink-200/80">
                {language === 'ta' ? 'நேர்த்தியான தையல் வேலைப்பாடு' : 'Exclusive Craftsmanship'}
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={bridalIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <h3 className="text-2xl md:text-3xl font-serif text-gold-500 font-light">
                    {bridalDesigns[bridalIndex].title}
                  </h3>
                  <p className="text-sm font-sans text-pink-100/70 font-light leading-relaxed">
                    {bridalDesigns[bridalIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-gold-500/10 mt-6">
              <div className="text-xs tracking-widest text-pink-100/40">
                0{bridalIndex + 1} / 0{bridalDesigns.length}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={prevBridal}
                  className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-purple-950 transition-all duration-300 cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextBridal}
                  className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-purple-950 transition-all duration-300 cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="bg-purple-900/15 py-20 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-purple-500 font-bold">
              {t('testimonials.title')}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-purple-900">
              {t('testimonials.subtitle')}
            </h2>
            <div className="w-16 h-[1.5px] bg-purple-500/50 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('testimonials.items') as any[]).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white border border-purple-500/10 p-8 rounded-3xl shadow-md hover:shadow-xl hover:border-gold-500/20 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex text-gold-500 space-x-1 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-500" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm font-sans text-purple-950 italic leading-relaxed font-light mb-6">
                  "{item.comment}"
                </p>
                {/* Author */}
                <div className="flex items-center space-x-3 border-t border-purple-500/10 pt-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-xs font-bold text-purple-800">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-serif text-purple-950 font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-[10px] uppercase tracking-widest text-purple-700/70 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-purple-500 font-bold">
            {language === 'ta' ? 'கேள்விகள்' : 'FAQ'}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-purple-900">
            {t('faq.title')}
          </h2>
          <p className="text-xs text-purple-700/70 uppercase tracking-widest font-medium">{t('faq.subtitle')}</p>
          <div className="w-16 h-[1.5px] bg-purple-500/30 mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {(t('faq.items') as any[]).map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-purple-950 border border-gold-500/20 rounded-2xl overflow-hidden shadow-md hover:border-gold-500/40 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center text-gold-100 hover:text-gold-500 transition-colors duration-300 font-serif text-base md:text-lg focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center space-x-3">
                    <HelpCircle size={18} className="text-gold-500/80 shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold-500/70"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-3 text-sm font-sans text-pink-100/90 leading-relaxed font-light border-t border-gold-500/10 whitespace-pre-line bg-purple-900/40">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
