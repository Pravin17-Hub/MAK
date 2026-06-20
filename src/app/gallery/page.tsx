'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

type CategoryFilter = 'all' | 'bridal' | 'designer' | 'chudithar' | 'kids';

interface GalleryItem {
  id: number;
  image: string;
  category: CategoryFilter;
  titleEn: string;
  titleTa: string;
  heightClass: 'masonry-item' | 'masonry-item-tall' | 'masonry-item-short';
}

export default function Gallery() {
  const { t, language } = { ...useLanguage() };
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: '/bridal-blouse.png',
      category: 'bridal',
      titleEn: 'Royal Wedding Zardosi Blouse',
      titleTa: 'அரச திருமண ஜர்தோசி பிளவுஸ்',
      heightClass: 'masonry-item',
    },
    {
      id: 2,
      image: '/designer-blouse.png',
      category: 'designer',
      titleEn: 'Modern Halter Cut Blouse',
      titleTa: 'நவீன கழுத்து டிசைனர் பிளவுஸ்',
      heightClass: 'masonry-item',
    },
    {
      id: 3,
      image: '/chudithar.png',
      category: 'chudithar',
      titleEn: 'Pastel Green Kurti Suite',
      titleTa: 'பச்சை நிற எம்பிராய்டரி சுடிதார்',
      heightClass: 'masonry-item',
    },
    {
      id: 4,
      image: '/kids-dress.png',
      category: 'kids',
      titleEn: 'Kids Designer Frock',
      titleTa: 'குழந்தைகள் பட்டு ஃபிராக்',
      heightClass: 'masonry-item',
    },
    {
      id: 5,
      image: '/pattu-pavadai.png',
      category: 'kids',
      titleEn: 'Traditional Kids Silk Pavadai',
      titleTa: 'குழந்தைகள் பட்டு பாவாடை சட்டை',
      heightClass: 'masonry-item',
    },
    {
      id: 6,
      image: '/alteration.png',
      category: 'designer',
      titleEn: 'Bespoke Custom Alterations',
      titleTa: 'பிரத்யேக ஆல்டரேஷன் தையல்',
      heightClass: 'masonry-item',
    },
  ];

  // Filter items
  const filteredItems = galleryItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const openLightbox = (id: number) => {
    // Find index of the item inside the filtered items to support slider navigation
    const idx = filteredItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <section className="relative py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.05]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-purple-800 font-bold bg-purple-900/5 px-4 py-1.5 rounded-full border border-purple-500/20">
            {t('nav.gallery')}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-purple-900 leading-tight">
            {t('gallery.title')}
          </h1>
          <p className="text-sm font-sans text-purple-950/60 max-w-xl mx-auto font-light tracking-wide">
            {t('gallery.subtitle')}
          </p>
          <div className="w-16 h-[1.5px] bg-purple-500/50 mx-auto mt-4" />
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-wrap justify-center gap-2 mb-12">
        {(
          [
            { key: 'all', label: t('gallery.filterAll') },
            { key: 'bridal', label: t('gallery.filterBridal') },
            { key: 'designer', label: t('gallery.filterDesigner') },
            { key: 'chudithar', label: t('gallery.filterChudithars') },
            { key: 'kids', label: t('gallery.filterKids') },
          ] as { key: CategoryFilter; label: string }[]
        ).map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-5 py-2.5 rounded-full border text-xs uppercase tracking-widest transition-all duration-300 font-medium cursor-pointer ${
              filter === tab.key
                ? 'bg-gold-500 border-gold-500 text-purple-950 font-bold shadow-lg shadow-gold-500/15'
                : 'bg-purple-900/10 border-gold-500/10 text-purple-900 hover:border-gold-500/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 w-full flex-1">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => openLightbox(item.id)}
                className="relative aspect-square w-full rounded-2xl overflow-hidden group border border-gold-500/10 cursor-pointer shadow-md bg-purple-950/20 card-glow"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={language === 'ta' ? item.titleTa : item.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="space-y-1.5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-semibold">
                      {item.category === 'bridal' && (language === 'ta' ? 'மணமகள் உடை' : 'Bridal Wear')}
                      {item.category === 'designer' && (language === 'ta' ? 'வடிவமைப்பாளர் பிளவுஸ்' : 'Designer Blouse')}
                      {item.category === 'chudithar' && (language === 'ta' ? 'சுடிதார்' : 'Chudithar')}
                      {item.category === 'kids' && (language === 'ta' ? 'குழந்தைகள் உடை' : 'Kids Wear')}
                    </span>
                    <h3 className="text-base font-serif text-gold-100 font-light">
                      {language === 'ta' ? item.titleTa : item.titleEn}
                    </h3>
                    <p className="text-[10px] text-pink-200/50 flex items-center space-x-1 font-sans">
                      <ZoomIn size={12} className="text-gold-500" />
                      <span>{t('gallery.zoomMsg')}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Full-screen Lightbox Gallery */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-purple-950/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-gold-500 hover:text-pink-100 p-2 cursor-pointer z-50"
            >
              <X size={28} />
            </button>

            {/* Slider Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full border border-gold-500/25 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-purple-950 transition-all duration-300 cursor-pointer z-40"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full border border-gold-500/25 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-purple-950 transition-all duration-300 cursor-pointer z-40"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox content wrapper */}
            <div
              className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                src={filteredItems[lightboxIndex].image}
                alt={
                  language === 'ta'
                    ? filteredItems[lightboxIndex].titleTa
                    : filteredItems[lightboxIndex].titleEn
                }
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-gold-500/20 shadow-2xl"
              />

              {/* Title display */}
              <div className="text-center mt-6 text-gold-100 space-y-1">
                <span className="text-xs uppercase tracking-widest text-gold-500">
                  {filteredItems[lightboxIndex].category === 'bridal' && (language === 'ta' ? 'மணமகள் ஆடை' : 'Bridal Wear')}
                  {filteredItems[lightboxIndex].category === 'designer' && (language === 'ta' ? 'டிசைனர் பிளவுஸ்' : 'Designer Blouse')}
                  {filteredItems[lightboxIndex].category === 'chudithar' && (language === 'ta' ? 'சுடிதார்' : 'Chudithar')}
                  {filteredItems[lightboxIndex].category === 'kids' && (language === 'ta' ? 'குழந்தைகள் உடை' : 'Kids Wear')}
                </span>
                <h3 className="text-xl md:text-2xl font-serif">
                  {language === 'ta'
                    ? filteredItems[lightboxIndex].titleTa
                    : filteredItems[lightboxIndex].titleEn}
                </h3>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
