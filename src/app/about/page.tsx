'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import MeasurementGuide from '../../components/MeasurementGuide';
import { Shield, Sparkles, CheckCircle } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: <Shield className="text-gold-500" size={24} />,
      title: language === 'ta' ? 'நம்பகத்தன்மை' : 'Years of Trust',
      desc: language === 'ta' ? 'கடந்த 10+ வருடங்களாக வாடிக்கையாளர்களின் நம்பிக்கையை பெற்றுள்ளோம்.' : 'Building customer relationships with excellent tailoring for over 10 years.',
    },
    {
      icon: <Sparkles className="text-gold-500" size={24} />,
      title: language === 'ta' ? 'நவீன டிசைன்கள்' : 'Exclusive Designs',
      desc: language === 'ta' ? 'உங்களின் விருப்பத்திற்கு ஏற்ப நவீன மற்றும் பாரம்பரிய டிசைன்கள்.' : 'Fusing traditional handcraft with contemporary fashion silhouettes.',
    },
    {
      icon: <CheckCircle className="text-gold-500" size={24} />,
      title: language === 'ta' ? 'கச்சிதமான அளவு' : 'Perfect Fit Guarantee',
      desc: language === 'ta' ? 'அளவுகள் கச்சிதமாக இருக்கும், தேவைப்பட்டால் இலவச மாற்றங்கள்.' : 'Stitched to your exact contours with free alteration services.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* 1. Header Hero Area */}
      <section className="relative py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.05]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-purple-800 font-bold bg-purple-900/5 px-4 py-1.5 rounded-full border border-purple-500/20">
            {t('about.title')}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-purple-900 leading-tight">
            {t('about.subtitle')}
          </h1>
          <div className="w-16 h-[1.5px] bg-purple-500/50 mx-auto mt-4" />
        </div>
      </section>

      {/* 2. Brand Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3.5xl font-serif text-purple-900 leading-snug">
              {language === 'ta' ? 'உங்களின் அழகை மேம்படுத்தும் பிரத்யேக தையல் கலை' : 'Crafting Bespoke Attire That Empowers Your Confidence'}
            </h2>
            <p className="text-sm font-sans text-purple-950/80 leading-relaxed font-light">
              {t('about.p1')}
            </p>
            <p className="text-sm font-sans text-purple-950/80 leading-relaxed font-light">
              {t('about.p2')}
            </p>

            {/* Core Values List */}
            <div className="space-y-4 pt-4 border-t border-gold-500/10">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-2.5 bg-purple-950 border border-gold-500/20 rounded-xl mt-1 shadow-sm">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-serif text-purple-900 font-semibold">{val.title}</h3>
                    <p className="text-xs text-purple-900 font-sans mt-0.5 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Luxury Frame Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[30px] overflow-hidden border border-gold-500/30 shadow-[0_15px_40px_rgba(29,10,36,0.15)] group">
              <div className="absolute inset-0 bg-purple-950/10 z-10 transition-colors duration-300 group-hover:bg-purple-950/0" />
              <img
                src="/boutique-interior.png"
                alt="MAK Ladies Tailoring Craft"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Luxury gold frame overlay */}
              <div className="absolute inset-4 border border-gold-500/20 rounded-[20px] pointer-events-none z-20" />
            </div>
            
            {/* Quick stats floating badge */}
            <div className="absolute bottom-6 right-6 md:-right-6 bg-purple-950 border border-gold-500/25 p-5 rounded-2xl shadow-xl z-20 text-center max-w-[160px] animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="text-2xl font-serif text-gold-500 font-bold">{t('about.happyClients')}</div>
              <div className="text-[10px] uppercase tracking-widest text-pink-200/70 font-sans mt-1 leading-normal">
                {t('about.happyClientsDesc')}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.5. Founder Section */}
      <section className="bg-purple-950 border-y border-gold-500/20 py-16 px-6 my-8 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Elegant Founder Portrait - Left Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[30px] overflow-hidden border-2 border-gold-500 shadow-[0_20px_50px_rgba(29,10,36,0.3)] bg-purple-950">
                <img
                  src="/founder.jpg"
                  alt="Founder Mrs. R. Rajalakshmi"
                  className="w-full h-full object-cover"
                />
                {/* Luxury inner shadow/border */}
                <div className="absolute inset-4 border border-gold-500/30 rounded-[20px] pointer-events-none" />
                
                {/* Gold nameplate badge overlay */}
                <div className="absolute bottom-6 inset-x-6 bg-purple-950/90 border border-gold-500/40 p-4 rounded-xl text-center backdrop-blur-sm">
                  <h3 className="text-lg font-serif text-gold-500 font-bold">Mrs. R. Rajalakshmi</h3>
                  <p className="text-[10px] uppercase tracking-widest text-pink-200 mt-0.5">
                    {language === 'ta' ? 'நிறுவனர் & வடிவமைப்பாளர்' : 'Founder & Lead Designer'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Founder Message - Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-500 font-semibold flex items-center gap-1.5">
                  ❤️ {language === 'ta' ? 'MAK-ன் பின்னணியில் உள்ள இதயம்' : 'The Heart Behind MAK Ladies Tailoring'}
                </span>
                <h2 className="text-3xl font-serif text-gold-100 leading-tight">
                  {language === 'ta' ? 'நிறுவனரின் செய்தி' : 'Founder’s Vision & Message'}
                </h2>
                <div className="w-12 h-[1.5px] bg-gold-500 mt-2" />
              </div>

              <div className="text-sm font-sans text-pink-100 leading-relaxed space-y-4 font-light">
                {language === 'ta' ? (
                  <>
                    <p>
                      திருமதி ஆர். ராஜலட்சுமி அவர்கள் பல ஆண்டுகளாக பெண்களுக்கான அழகான மற்றும் சரியான பொருத்தமுள்ள உடைகளை உருவாக்கும் பணியில் அர்ப்பணிப்புடன் செயல்பட்டு வருகிறார். தையலின் மீது கொண்ட ஆர்வத்திலிருந்து தொடங்கிய இந்த பயணம் இன்று MAK Ladies Tailoring என்ற நம்பிக்கைக்குரிய நிறுவனமாக வளர்ந்துள்ளது.
                    </p>
                    <p>
                      ஒவ்வொரு பெண்மணியும் தன்னம்பிக்கையுடனும் அழகுடனும் திகழ வேண்டும் என்பதே அவரது நோக்கம். டிசைனர் பிளவுஸ், மணப்பெண் பிளவுஸ், சுடிதார் மற்றும் பாரம்பரிய உடைகள் என ஒவ்வொரு தையலிலும் அவரது அக்கறையும் திறமையும் வெளிப்படுகிறது.
                    </p>
                    <p>
                      தரம், நம்பிக்கை மற்றும் வாடிக்கையாளர் திருப்தி ஆகியவற்றை அடிப்படையாகக் கொண்டு MAK Ladies Tailoring தொடர்ந்து சேவை செய்து வருகிறது.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      For years, Mrs. R. Rajalakshmi has dedicated herself to creating beautiful, comfortable, and perfectly fitted garments for women of all ages. What started as a passion for tailoring has grown into MAK Ladies Tailoring, a trusted name known for quality craftsmanship, attention to detail, and customer satisfaction.
                    </p>
                    <p>
                      Her vision is simple: every woman deserves clothing that makes her feel confident, elegant, and special. From designer blouses and bridal collections to traditional and modern outfits, every stitch reflects her commitment to perfection.
                    </p>
                    <p>
                      Today, MAK Ladies Tailoring continues to serve customers with the same values of trust, quality, and personalized care that inspired its beginning.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 3. Measurement Guide Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-purple-500 font-bold">
            {language === 'ta' ? 'அளவுகள் எடுக்க' : 'Self Measurements'}
          </span>
          <h2 className="text-3xl font-serif text-purple-900">
            {language === 'ta' ? 'உங்கள் அளவுகளை சரிபார்க்கவும்' : 'Bespoke Measurement Assistant'}
          </h2>
          <div className="w-16 h-[1.5px] bg-purple-500/50 mx-auto mt-3" />
        </div>
        <MeasurementGuide />
      </section>
    </div>
  );
}
