'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="relative bg-purple-950 text-pink-100/90 border-t border-gold-500/25 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <Logo className="h-16 w-auto text-gold-500 group-hover:text-pink-100 mb-2" />
            </Link>
            <p className="text-sm font-sans italic text-gold-200/80 pr-4">
              "{t('footer.tagline')}"
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/mak_ladies_tailoring?igsh=eGRwaWhrbThjMW00"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-gold-500/25 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-purple-950 transition-all duration-300"
                title="Instagram"
              >
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-serif uppercase tracking-widest text-gold-500 mb-6 font-semibold">
              {language === 'ta' ? 'பக்கங்கள்' : 'Quick Links'}
            </h3>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link href="/" className="hover:text-gold-500 transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-500 transition-colors duration-200">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-500 transition-colors duration-200">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-500 transition-colors duration-200">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-500 transition-colors duration-200">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-base font-serif uppercase tracking-widest text-gold-500 mb-6 font-semibold">
              {t('nav.services')}
            </h3>
            <ul className="space-y-3 text-sm font-sans text-pink-100/70">
              <li>{t('services.items.bridal.title')}</li>
              <li>{t('services.items.designer.title')}</li>
              <li>{t('services.items.chudithar.title')}</li>
              <li>{t('services.items.pattuPavada.title')}</li>
              <li>{t('services.items.kids.title')}</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-base font-serif uppercase tracking-widest text-gold-500 mb-6 font-semibold">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-4 text-sm font-sans">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t('contact.address')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-gold-500 shrink-0" />
                <a href="tel:7502540560" className="hover:underline hover:text-gold-500">
                  7502540560
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{t('contact.timings')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gold-500/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-pink-100/60 font-sans">
          <p>
            &copy; {new Date().getFullYear()} MAK Ladies Tailoring. {t('footer.rights')}
          </p>
          <p className="flex items-center mt-2 sm:mt-0">
            {t('footer.by')}{' '}
            <Heart size={10} className="fill-gold-500 text-gold-500 mx-1 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
