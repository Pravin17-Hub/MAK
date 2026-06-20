'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  const { t, language } = { ...useLanguage() };

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
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <section className="relative py-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.05]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-purple-800 font-bold bg-purple-900/5 px-4 py-1.5 rounded-full border border-purple-500/20">
            {t('nav.contact')}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-purple-900 leading-tight">
            {t('contact.title')}
          </h1>
          <p className="text-sm font-sans text-purple-950/60 max-w-xl mx-auto font-light tracking-wide">
            {t('contact.subtitle')}
          </p>
          <div className="w-16 h-[1.5px] bg-purple-500/50 mx-auto mt-4" />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-6 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Column 1: Contact Details & Quick Call/WhatsApp Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-between bg-purple-950 border border-gold-500/15 rounded-3xl p-6 md:p-10 shadow-xl"
          >
            <div className="space-y-8">
              <div className="border-b border-gold-500/10 pb-4">
                <h2 className="text-2xl font-serif text-gold-500">MAK Ladies Tailoring</h2>
                <p className="text-xs uppercase tracking-widest text-pink-200/50 mt-1">
                  {language === 'ta' ? 'பெண்களுக்கான பிரத்யேக தையலகம்' : 'Exclusive Ladies Boutique'}
                </p>
              </div>

              {/* Address Details */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-950/40 border border-gold-500/20 rounded-xl text-gold-500 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-1">
                    {t('contact.addressTitle')}
                  </h3>
                  <p className="text-sm text-pink-100/80 font-sans leading-relaxed font-light">
                    {t('contact.address')}
                  </p>
                </div>
              </div>

              {/* Contact phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-950/40 border border-gold-500/20 rounded-xl text-gold-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-1">
                    {language === 'ta' ? 'தொடர்பு எண்' : 'Call & Enquire'}
                  </h3>
                  <a
                    href="tel:7502540560"
                    className="text-lg text-pink-100 hover:text-gold-500 transition-colors duration-200 font-serif"
                  >
                    7502540560
                  </a>
                </div>
              </div>

              {/* Business hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-950/40 border border-gold-500/20 rounded-xl text-gold-500 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-1">
                    {t('contact.timingsTitle')}
                  </h3>
                  <p className="text-sm text-pink-100/80 font-sans whitespace-pre-line leading-relaxed font-light">
                    {t('contact.timings')}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-6 border-t border-gold-500/10">
              <a
                href="tel:7502540560"
                className="btn-premium flex items-center justify-center space-x-2 py-4 rounded-full bg-gold-500 text-purple-950 hover:bg-pink-100 hover:text-purple-900 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.2)] cursor-pointer"
              >
                <Phone size={14} />
                <span>{t('contact.callUs')}</span>
              </a>

              <button
                onClick={handleWhatsAppRedirect}
                className="btn-premium flex items-center justify-center space-x-2 py-4 rounded-full border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-purple-950 font-bold uppercase tracking-widest text-xs transition-all duration-300 cursor-pointer"
              >
                <MessageSquare size={14} />
                <span>{t('contact.whatsappUs')}</span>
              </button>
            </div>
          </motion.div>

          {/* Column 2: Google Maps Integration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="bg-purple-950 border border-gold-500/15 rounded-3xl p-4 shadow-xl flex flex-col justify-between"
          >
            {/* Embed Google map */}
            <div className="relative w-full h-[350px] lg:h-full rounded-2xl overflow-hidden border border-gold-500/10 group">
              <iframe
                title="MAK Ladies Tailoring Location Map"
                src="https://maps.google.com/maps?q=3QQJ%2B92%20Karaikudi,%20Tamil%20Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.2)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-500 group-hover:grayscale-0 group-hover:invert-0"
              />
            </div>
            
            {/* Directions link */}
            <div className="flex justify-between items-center px-2 pt-4">
              <span className="text-xs text-pink-200/50">
                {t('contact.googleMaps')}
              </span>
              <a
                href="https://maps.google.com/?q=3QQJ%2B92+Karaikudi,+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gold-500 hover:text-pink-100 flex items-center space-x-1 transition-colors duration-200"
              >
                <span>{language === 'ta' ? 'வழிகாட்டி பெற' : 'Get Directions'}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
