'use client';

import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import LoadingScreen from './LoadingScreen';
import FabricBackground from './FabricBackground';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <FabricBackground />
      <Navbar />
      <main className="flex-1 flex flex-col min-h-screen pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </LanguageProvider>
  );
}
