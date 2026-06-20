'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HelpCircle, PhoneCall, X } from 'lucide-react';

type ServiceKey = 'bridal' | 'designer' | 'chudithar' | 'pattuPavada' | 'kids' | 'alteration';

interface ServiceView {
  image: string;
  style?: React.CSSProperties;
  label: string;
  labelTa: string;
}

interface ServiceItem {
  key: ServiceKey;
  views: ServiceView[];
  title: string;
  desc: string;
  starting: string;
}

export default function Services() {
  const { t, language } = { ...useLanguage() };
  const [selectedService, setSelectedService] = useState<ServiceKey | null>(null);
  const [enquiryMessage, setEnquiryMessage] = useState('');

  // Slide index state for each card
  const [activeSlide, setActiveSlide] = useState<Record<ServiceKey, number>>({
    bridal: 0,
    designer: 0,
    chudithar: 0,
    pattuPavada: 0,
    kids: 0,
    alteration: 0,
  });

  const servicesData: ServiceItem[] = [
    {
      key: 'bridal',
      views: [
        { image: '/bridal-blouse.png', label: 'Full View', labelTa: 'முழு தோற்றம்' },
        { image: '/bridal-blouse.png', style: { transform: 'scale(1.9) translateY(18px)' }, label: 'Neck Detail', labelTa: 'கழுத்து பகுதி' },
        { image: '/designer-blouse.png', label: 'Front Styling', labelTa: 'முன்பக்க வடிவமைப்பு' },
        { image: '/bridal-blouse.png', style: { transform: 'scale(1.9) translate(-10px, -18px)' }, label: 'Sleeve Work', labelTa: 'கை எம்பிராய்டரி' },
        { image: '/chudithar.png', label: 'Stitch Detail', labelTa: 'தையல் விவரம்' },
      ],
      title: t('services.items.bridal.title'),
      desc: t('services.items.bridal.desc'),
      starting: t('services.items.bridal.starting'),
    },
    {
      key: 'designer',
      views: [
        { image: '/designer-blouse.png', label: 'Full View', labelTa: 'முழு தோற்றம்' },
        { image: '/designer-blouse.png', style: { transform: 'scale(1.9) translateY(18px)' }, label: 'Neck Cut', labelTa: 'கழுத்து வடிவமைப்பு' },
        { image: '/bridal-blouse.png', label: 'Embroidery Detail', labelTa: 'அலங்கார வேலைப்பாடு' },
        { image: '/designer-blouse.png', style: { transform: 'scale(1.9) translate(10px, -12px)' }, label: 'Sleeve Detail', labelTa: 'கை வடிவமைப்பு' },
        { image: '/chudithar.png', label: 'Stitch Quality', labelTa: 'தையல் தரம்' },
      ],
      title: t('services.items.designer.title'),
      desc: t('services.items.designer.desc'),
      starting: t('services.items.designer.starting'),
    },
    {
      key: 'chudithar',
      views: [
        { image: '/chudithar.png', label: 'Full View', labelTa: 'முழு தோற்றம்' },
        { image: '/chudithar.png', style: { transform: 'scale(1.8) translateY(12px)' }, label: 'Collar Style', labelTa: 'கழுத்துப் பட்டை' },
        { image: '/designer-blouse.png', label: 'Contrast Design', labelTa: 'மாறுபட்ட வடிவமைப்பு' },
        { image: '/chudithar.png', style: { transform: 'scale(1.8) translate(12px, -18px)' }, label: 'Sleeve Cut', labelTa: 'கை தையல்' },
        { image: '/bridal-blouse.png', label: 'Border Detail', labelTa: 'பார்டர் வடிவமைப்பு' },
      ],
      title: t('services.items.chudithar.title'),
      desc: t('services.items.chudithar.desc'),
      starting: t('services.items.chudithar.starting'),
    },
    {
      key: 'pattuPavada',
      views: [
        { image: '/pattu-pavadai.png', label: 'Full View', labelTa: 'முழு தோற்றம்' },
        { image: '/pattu-pavadai.png', style: { transform: 'scale(1.9) translateY(24px)' }, label: 'Silk Border', labelTa: 'பட்டு பார்டர்' },
        { image: '/kids-dress.png', label: 'Langa Frock Style', labelTa: 'பாவாடை பேட்டர்ன்' },
        { image: '/pattu-pavadai.png', style: { transform: 'scale(1.8) translate(-12px, -18px)' }, label: 'Puff Sleeve', labelTa: 'பஃப் கை' },
        { image: '/bridal-blouse.png', label: 'Border Trim', labelTa: 'பார்டர் ஒர்க்' },
      ],
      title: t('services.items.pattuPavada.title'),
      desc: t('services.items.pattuPavada.desc'),
      starting: t('services.items.pattuPavada.starting'),
    },
    {
      key: 'kids',
      views: [
        { image: '/kids-dress.png', label: 'Full Frock', labelTa: 'முழு ஃபிராக்' },
        { image: '/kids-dress.png', style: { transform: 'scale(1.8) translateY(15px)' }, label: 'Frock Neck', labelTa: 'ஃபிராக் கழுத்து' },
        { image: '/pattu-pavadai.png', label: 'Traditional Frock', labelTa: 'பாரம்பரிய சட்டை' },
        { image: '/kids-dress.png', style: { transform: 'scale(1.8) translate(18px, -18px)' }, label: 'Skirt Trim', labelTa: 'கீழ் பகுதி' },
        { image: '/designer-blouse.png', label: 'Stitch Quality', labelTa: 'தையல் தரம்' },
      ],
      title: t('services.items.kids.title'),
      desc: t('services.items.kids.desc'),
      starting: t('services.items.kids.starting'),
    },
    {
      key: 'alteration',
      views: [
        { image: '/alteration.png', label: 'Needle View', labelTa: 'தையல் ஊசி தோற்றம்' },
        { image: '/alteration.png', style: { transform: 'scale(1.8) translateY(15px)' }, label: 'Machine Stitch', labelTa: 'இயந்திர தையல்' },
        { image: '/chudithar.png', label: 'Fitting Adjust', labelTa: 'அளவு சரிசெய்தல்' },
        { image: '/alteration.png', style: { transform: 'scale(1.8) translate(-15px, -12px)' }, label: 'Gold Thread', labelTa: 'தங்க நூல் வேலை' },
        { image: '/designer-blouse.png', label: 'Piping Finish', labelTa: 'பைப்பிங் வேலைப்பாடு' },
      ],
      title: t('services.items.alteration.title'),
      desc: t('services.items.alteration.desc'),
      starting: t('services.items.alteration.starting'),
    },
  ];

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    const matchedService = servicesData.find((s) => s.key === selectedService);
    const serviceTitle = matchedService ? matchedService.title : selectedService;

    const phoneNumber = '7502540560';
    const messageText =
      language === 'ta'
        ? `வணக்கம் MAK லேடீஸ் டெய்லரிங், நான் "${serviceTitle}" தையல் சேவையின் விலை மற்றும் விவரங்களை அறிய விரும்புகிறேன்.\n\nகூடுதல் குறிப்பு: ${enquiryMessage || 'இல்லை'}`
        : `Hello MAK Ladies Tailoring, I am interested in inquiring about the price for the "${serviceTitle}" stitching service.\n\nDetails: ${enquiryMessage || 'None'}`;

    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
    setSelectedService(null);
    setEnquiryMessage('');
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <section className="relative py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.05]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-purple-800 font-bold bg-purple-900/5 px-4 py-1.5 rounded-full border border-purple-500/20">
            {t('nav.services')}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-purple-900 leading-tight">
            {t('services.title')}
          </h1>
          <p className="text-sm font-sans text-purple-950/60 max-w-xl mx-auto font-light tracking-wide">
            {t('services.subtitle')}
          </p>
          <div className="w-16 h-[1.5px] bg-purple-500/50 mx-auto mt-4" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const primaryImage = service.views[0].image;

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-purple-950 border border-gold-500/15 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between hover:border-gold-500/30 transition-all duration-500 card-glow"
              >
                {/* Service Card Image Frame */}
                <div className="relative h-64 overflow-hidden bg-purple-950">
                  {/* Main Display Image */}
                  <img
                    src={primaryImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500 scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/20 to-transparent pointer-events-none" />

                  {/* Starting price tag */}
                  <div className="absolute top-4 right-4 bg-purple-950/90 border border-gold-500/30 px-3 py-1 rounded-full text-xs font-semibold text-gold-500 pointer-events-none">
                    {service.starting}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-gold-500 font-medium transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs text-pink-100 font-sans leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedService(service.key)}
                    className="btn-premium w-full mt-4 py-2.5 rounded-full bg-gold-500 text-purple-950 hover:bg-pink-200 hover:text-purple-900 font-bold uppercase tracking-wider text-[10px] transition-all duration-300 cursor-pointer text-center"
                  >
                    {t('services.enquiry')}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Price Enquiry Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm">
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-purple-950 border border-gold-500/25 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative text-gold-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-pink-200/60 hover:text-gold-500 transition-colors duration-200 cursor-pointer"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-serif text-gold-500 mb-2">
                {t('services.enquiryModalTitle')}
              </h2>
              <p className="text-xs text-pink-100/60 mb-6 leading-relaxed font-light">
                {t('services.enquiryModalDesc')}
              </p>

              {/* Form */}
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-gold-500 block">
                    {t('services.labelService')}
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value as ServiceKey)}
                    className="w-full bg-purple-900/50 border border-gold-500/20 rounded-xl px-4 py-3 text-sm text-gold-100 focus:outline-none focus:border-gold-500 transition-all duration-300"
                  >
                    {servicesData.map((s) => (
                      <option key={s.key} value={s.key} className="bg-purple-950 text-gold-100">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-gold-500 block">
                    {t('services.labelMessage')}
                  </label>
                  <textarea
                    rows={4}
                    value={enquiryMessage}
                    onChange={(e) => setEnquiryMessage(e.target.value)}
                    placeholder={language === 'ta' ? 'உதாரணம்: ஆரி வேலைப்பாடு கொண்ட பச்சை நிற பிளவுஸ்...' : 'Example: Green blouse with heavy Aari work, urgent...'}
                    className="w-full bg-purple-900/50 border border-gold-500/20 rounded-xl p-4 text-sm text-gold-100 placeholder-pink-100/30 focus:outline-none focus:border-gold-500 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-premium w-full py-3.5 rounded-full bg-gold-500 text-purple-950 hover:bg-pink-100 font-bold uppercase tracking-widest text-[10px] transition-all duration-300 mt-4 cursor-pointer"
                >
                  {t('services.sendWhatsApp')}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
