/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

export default function App() {
  // Sharing type state synchronized between Rooms card elements and Inquiry forms
  const [sharingType, setSharingType] = useState<'single' | 'double' | 'quad'>('double');

  const handleSelectRoom = (type: 'single' | 'double' | 'quad') => {
    setSharingType(type);
  };

  return (
    <div className="bg-slate-50 text-slate-850 min-h-screen selection:bg-teal-600 selection:text-white flex flex-col font-sans">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Bold and Welcoming Hero Segment */}
      <Hero />

      {/* 4. Core Features & Amenities */}
      <Amenities />

      {/* 3. Rooms Comparison & Monthly Tiered Pricing Matrix */}
      <Rooms onSelectRoom={handleSelectRoom} selectedRoom={sharingType} />

      {/* 5. Interactive Cost Range & Addon Estimator */}
      <Calculator />

      {/* 6. Collapsible FAQ Accordion for Guidelines */}
      <FAQ />

      {/* 7. Booking Inquiry Forms with Formatted WhatsApp redirection */}
      <InquiryForm sharingType={sharingType} setSharingType={setSharingType} />

      {/* 8. Contact, Navigation Links & Static maps Footer anchor */}
      <Footer />

      {/* 9. Floating Gemini AI Warden Chat Assistant */}
      <AIChatBot />
    </div>
  );
}
