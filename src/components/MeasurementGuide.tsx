'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Ruler } from 'lucide-react';

type BodyPart = 'bust' | 'waist' | 'shoulder' | 'sleeve';

export default function MeasurementGuide() {
  const { t, language } = useLanguage();
  const [selectedPart, setSelectedPart] = useState<BodyPart>('bust');

  const partDetails = {
    bust: {
      title: t('guide.bustTitle'),
      desc: t('guide.bustDesc'),
      yPos: 110,
    },
    waist: {
      title: t('guide.waistTitle'),
      desc: t('guide.waistDesc'),
      yPos: 155,
    },
    shoulder: {
      title: t('guide.shoulderTitle'),
      desc: t('guide.shoulderDesc'),
      yPos: 75,
    },
    sleeve: {
      title: t('guide.sleeveTitle'),
      desc: t('guide.sleeveDesc'),
      yPos: 95,
    },
  };

  return (
    <div className="bg-purple-950 border border-gold-500/15 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-xl">
      <div className="flex items-center space-x-3 mb-6">
        <Ruler className="text-gold-500" size={24} />
        <div>
          <h2 className="text-xl md:text-2xl font-serif text-gold-500">{t('guide.title')}</h2>
          <p className="text-xs text-pink-100/60 uppercase tracking-widest">{t('guide.subtitle')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* SVG Interactive Mannequin */}
        <div className="flex justify-center relative">
          <div className="w-64 h-96 relative">
            <svg
              viewBox="0 0 200 320"
              className="w-full h-full text-pink-200/25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Mannequin Hanger Top */}
              <path d="M100,20 L100,50 M85,35 C85,25 115,25 115,35" strokeWidth="1" stroke="#d4af37" opacity="0.5" />

              {/* Mannequin Silhouette Body outline */}
              <path
                d="M100,55 C120,55 135,70 135,90 C135,95 125,120 120,135 C115,150 120,170 120,195 C120,205 105,215 100,215 C95,215 80,205 80,195 C80,170 85,150 80,135 C75,120 65,95 65,90 C65,70 80,55 100,55 Z"
                fill="rgba(29,10,36,0.5)"
                stroke="#d4af37"
                strokeWidth="1"
                opacity="0.3"
              />

              {/* Arm/Sleeve outline */}
              <path
                d="M65,90 C55,100 45,115 45,145 M135,90 C145,100 155,115 155,145"
                strokeDasharray="4 4"
                opacity="0.4"
              />

              {/* Mannequin Stand */}
              <path d="M100,215 L100,310 M75,310 L125,310" strokeWidth="2" stroke="#d4af37" opacity="0.6" />

              {/* Interactive Lines & Markers */}

              {/* Shoulder Line */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedPart('shoulder')}
              >
                {/* Hover Glow */}
                <line x1="63" y1="75" x2="137" y2="75" strokeWidth="10" stroke="transparent" />
                {/* Actual Line */}
                <motion.line
                  x1="63"
                  y1="75"
                  x2="137"
                  y2="75"
                  stroke={selectedPart === 'shoulder' ? '#d4af37' : '#f7c6c7'}
                  strokeWidth={selectedPart === 'shoulder' ? 3 : 1.5}
                  animate={{ opacity: selectedPart === 'shoulder' ? 1 : 0.6 }}
                />
                <circle cx="63" cy="75" r="3" fill="#d4af37" />
                <circle cx="137" cy="75" r="3" fill="#d4af37" />
              </g>

              {/* Bust Line */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedPart('bust')}
              >
                <line x1="64" y1="110" x2="136" y2="110" strokeWidth="10" stroke="transparent" />
                <motion.line
                  x1="64"
                  y1="110"
                  x2="136"
                  y2="110"
                  stroke={selectedPart === 'bust' ? '#d4af37' : '#f7c6c7'}
                  strokeWidth={selectedPart === 'bust' ? 3 : 1.5}
                  animate={{ opacity: selectedPart === 'bust' ? 1 : 0.6 }}
                />
                <circle cx="64" cy="110" r="3" fill="#d4af37" />
                <circle cx="136" cy="110" r="3" fill="#d4af37" />
              </g>

              {/* Sleeve Line (Arm) */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedPart('sleeve')}
              >
                <path d="M135,90 L150,130" strokeWidth="10" stroke="transparent" />
                <motion.path
                  d="M135,90 L150,130"
                  stroke={selectedPart === 'sleeve' ? '#d4af37' : '#f7c6c7'}
                  strokeWidth={selectedPart === 'sleeve' ? 3 : 1.5}
                  animate={{ opacity: selectedPart === 'sleeve' ? 1 : 0.6 }}
                />
                <circle cx="135" cy="90" r="3" fill="#d4af37" />
                <circle cx="150" cy="130" r="3" fill="#d4af37" />
              </g>

              {/* Waist Line */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedPart('waist')}
              >
                <line x1="77" y1="155" x2="123" y2="155" strokeWidth="10" stroke="transparent" />
                <motion.line
                  x1="77"
                  y1="155"
                  x2="123"
                  y2="155"
                  stroke={selectedPart === 'waist' ? '#d4af37' : '#f7c6c7'}
                  strokeWidth={selectedPart === 'waist' ? 3 : 1.5}
                  animate={{ opacity: selectedPart === 'waist' ? 1 : 0.6 }}
                />
                <circle cx="77" cy="155" r="3" fill="#d4af37" />
                <circle cx="123" cy="155" r="3" fill="#d4af37" />
              </g>
            </svg>

            {/* Quick buttons labeling the mannequin */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {/* Labels overlay */}
              <div
                className="absolute left-0 cursor-pointer pointer-events-auto bg-purple-900/60 border border-gold-500/20 px-2 py-0.5 rounded text-[10px] text-gold-500 uppercase tracking-wider"
                style={{ top: '65px' }}
                onClick={() => setSelectedPart('shoulder')}
              >
                {language === 'ta' ? 'தோள்' : 'Shoulder'}
              </div>
              <div
                className="absolute right-0 cursor-pointer pointer-events-auto bg-purple-900/60 border border-gold-500/20 px-2 py-0.5 rounded text-[10px] text-gold-500 uppercase tracking-wider"
                style={{ top: '100px' }}
                onClick={() => setSelectedPart('bust')}
              >
                {language === 'ta' ? 'மார்பு' : 'Bust'}
              </div>
              <div
                className="absolute right-0 cursor-pointer pointer-events-auto bg-purple-900/60 border border-gold-500/20 px-2 py-0.5 rounded text-[10px] text-gold-500 uppercase tracking-wider"
                style={{ top: '135px' }}
                onClick={() => setSelectedPart('sleeve')}
              >
                {language === 'ta' ? 'கை' : 'Sleeve'}
              </div>
              <div
                className="absolute left-0 cursor-pointer pointer-events-auto bg-purple-900/60 border border-gold-500/20 px-2 py-0.5 rounded text-[10px] text-gold-500 uppercase tracking-wider"
                style={{ top: '148px' }}
                onClick={() => setSelectedPart('waist')}
              >
                {language === 'ta' ? 'இடுப்பு' : 'Waist'}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Part Instructions Details */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {(Object.keys(partDetails) as BodyPart[]).map((part) => (
              <button
                key={part}
                onClick={() => setSelectedPart(part)}
                className={`px-3 py-1.5 rounded-full border text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedPart === part
                    ? 'bg-gold-500 text-purple-950 border-gold-500 font-semibold'
                    : 'bg-purple-900/20 text-pink-100/70 border-gold-500/20 hover:border-gold-500/50'
                }`}
              >
                {part === 'bust' && (language === 'ta' ? 'மார்பளவு' : 'Bust')}
                {part === 'waist' && (language === 'ta' ? 'இடுப்பளவு' : 'Waist')}
                {part === 'shoulder' && (language === 'ta' ? 'தோள்' : 'Shoulder')}
                {part === 'sleeve' && (language === 'ta' ? 'கை நீளம்' : 'Sleeve')}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPart}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-xl font-serif text-gold-500 border-b border-gold-500/10 pb-2">
                {partDetails[selectedPart].title}
              </h3>
              <p className="text-sm text-pink-100/80 leading-relaxed font-sans font-light">
                {partDetails[selectedPart].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <p className="text-xs italic text-pink-100/40 pt-4 border-t border-gold-500/10">
            * {t('guide.helpText')}
          </p>
        </div>
      </div>
    </div>
  );
}
