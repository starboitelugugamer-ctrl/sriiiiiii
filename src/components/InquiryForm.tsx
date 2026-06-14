import { useState, FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, ExternalLink, MessageCircle, CalendarDays, User, Smartphone, BadgeAlert, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BookingInquiry } from '../types';

interface InquiryFormProps {
  sharingType: 'single' | 'double' | 'quad';
  setSharingType: (sharingType: 'single' | 'double' | 'quad') => void;
}

export default function InquiryForm({ sharingType, setSharingType }: InquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const WHATSAPP_NUM = '9550309728';
  const EMAIL_ADDR = 'pnshostel25@gmail.com';
  const LOCATION_URL = 'https://share.google/0PfGNL6FwVB60Nqhz';

  const roomNames = {
    single: 'Single Sharing (₹6,000/mo)',
    double: '2-Sharing Twin (₹5,000/mo)',
    quad: '4-Sharing Dorm (₹4,500/mo)',
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your full name before submitting.');
      return;
    }

    if (!phone.trim() || phone.length < 10) {
      setError('Please enter a valid 10-digit smartphone/WhatsApp contact number.');
      return;
    }

    if (!checkInDate) {
      setError('Please select a target check-in date.');
      return;
    }

    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const sharingLabel = roomNames[sharingType];
    const message = `Hello PNS Hostel & PG! 🌟
I would like to make an inquiry for booking a room. Here are my details:

• *Name*: ${name.trim()}
• *Phone*: ${phone.trim()}
• *Room Option*: ${sharingLabel}
• *Target Check-In Date*: ${checkInDate}
• *Additional Notes*: ${notes.trim() ? notes.trim() : 'None'}

Please confirm room availability and direct me on the next booking steps. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setCheckInDate('');
    setNotes('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual glowing decorations */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-mono tracking-widest text-teal-600 font-bold uppercase">
            CONTACT &amp; INQUIRY
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
            Schedule a Visit or Book Your Bed
          </h3>
          <p className="text-slate-600 font-sans font-light">
            Fill out the fast inquiry form below to pre-register your interest. Directly launch WhatsApp to finish authorization. Our warden team will finalize your allotment room number immediately.
          </p>
        </div>

        {/* Combined Split layout: Side Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel: Quick Contact cards, spans 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            
            <div className="space-y-6">
              <h4 className="text-xl font-display font-black text-slate-955 text-slate-900">
                Official Hostel Details
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Feel free to directly call, email, or physically visit our hostel grounds in Nagaram. We recommend visiting during morning hours to view live room allocations.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-teal-500/50 transition-all">
              <div className="flex items-center space-x-3 text-teal-600">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="text-sm font-mono font-bold tracking-wider uppercase">HOSTEL LOCATION ADDRESS</span>
              </div>
              <p className="text-slate-700 text-sm font-sans leading-relaxed font-medium">
                PNS Hostel &amp; PG,<br />
                Near Main Highway, Nagaram,<br />
                Keera, Secunderabad, Telangana - 500083
              </p>
              <a
                href={LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700 pt-1.5 transition-colors focus:outline-none"
              >
                <span>Navigate on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-teal-500/50 transition-all">
              <div className="flex items-center space-x-3 text-teal-600">
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm font-mono font-bold tracking-wider uppercase">DIRECT PHONE &amp; WHATSAPP</span>
              </div>
              <div className="space-y-1.5">
                <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                  Call / WhatsApp: <span className="font-mono font-bold text-teal-800">+91 {WHATSAPP_NUM}</span>
                </p>
                <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                  Email support: <span className="font-mono font-bold text-teal-800">{EMAIL_ADDR}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-1.5">
                <a
                  href={`tel:${WHATSAPP_NUM}`}
                  className="px-3.5 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 hover:border-teal-500/30 hover:bg-teal-50/55 text-slate-700 font-bold flex items-center space-x-1.5 transition-all"
                >
                  <Phone className="w-3 h-3 text-slate-500" />
                  <span>Call Warden</span>
                </a>
                <a
                  href={`mailto:${EMAIL_ADDR}`}
                  className="px-3.5 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 hover:border-teal-500/30 hover:bg-teal-50/55 text-slate-700 font-bold flex items-center space-x-1.5 transition-all"
                >
                  <Mail className="w-3 h-3 text-slate-500" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right panel: Form block, spans 7 columns */}
          <div className="lg:col-span-7 bg-white border border-slate-200/85 rounded-3xl p-6 sm:p-8 relative shadow-lg">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="inquiry_form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                >
                  <h4 className="text-xl font-display font-black text-slate-950 mb-2">
                    Online Pre-Booking Form
                  </h4>

                  {/* Errors display */}
                  {error && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-600 rounded-2xl text-xs flex items-center space-x-2.5 font-semibold">
                      <BadgeAlert className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Input: Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide block">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Input: Phone number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide block">
                      WhatsApp Contact Number (10 digits)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="e.g. 9550309728"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* Input Flex Row: Share Option & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Share option dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide block">
                        Preferred Sharing Style
                      </label>
                      <select
                        value={sharingType}
                        onChange={(e) => setSharingType(e.target.value as 'single' | 'double' | 'quad')}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-3.5 text-sm text-slate-850 focus:outline-none focus:border-teal-500/50 transition-colors cursor-pointer text-slate-800"
                      >
                        <option value="single">Single Sharing — ₹6,000</option>
                        <option value="double">2-Sharing Twin — ₹5,000</option>
                        <option value="quad">4-Sharing Dorm — ₹4,500</option>
                      </select>
                    </div>

                    {/* Check In Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide block">
                        Target Check-in Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={checkInDate}
                          onChange={(e) => setCheckInDate(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-teal-500/50 transition-colors cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Input: Custom Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide block">
                      Additional Room Notes / Special Requests (Optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g., preference for bottom bunk bed, vegetarian-only plate custom request, parking requirements..."
                      rows={3}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Primary Form Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-teal-600 hover:bg-teal-700 text-white font-sans font-bold text-sm rounded-2xl transition-all duration-300 shadow-md shadow-teal-500/10 flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider"
                    >
                      <Send className="w-4 h-4" />
                      <span>Proceed with Pre-Booking</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success_panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6 text-center py-6"
                >
                  {/* Success Icon */}
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 border border-teal-150 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-display font-black text-slate-900">
                      Inquiry Processed!
                    </h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto font-light">
                      Your details are secured. To complete allocation priority and notify the Nagaram branch warden immediately, tap the button below to connect with us on WhatsApp.
                    </p>
                  </div>

                  {/* Rounded Summary Card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs max-w-md mx-auto space-y-2.5 shadow-xs animate-fade-in">
                    <p className="font-mono text-teal-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-2 font-black">
                      INQUIRY SLIP SUMMARY
                    </p>
                    <p className="text-slate-600"><span className="text-slate-400 font-bold">Lodger Name:</span> <span className="text-slate-800 font-semibold">{name}</span></p>
                    <p className="text-slate-600"><span className="text-slate-400 font-bold">Contact Phone:</span> <span className="text-slate-800 font-mono font-semibold">{phone}</span></p>
                    <p className="text-slate-600"><span className="text-slate-400 font-bold font-sans">Desired Bed:</span> <span className="text-teal-700 font-bold">{roomNames[sharingType]}</span></p>
                    <p className="text-slate-600"><span className="text-slate-400 font-bold">Check-In Target:</span> <span className="text-slate-800 font-mono font-semibold">{checkInDate}</span></p>
                    {notes.trim() && <p className="text-slate-600"><span className="text-slate-400 font-bold mb-1 block">Your Notes:</span> <span className="text-slate-700 block italic bg-white rounded-lg p-2.5 border border-slate-250 leading-relaxed">{notes}</span></p>}
                  </div>

                  {/* Immediate WhatsApp connect CTA */}
                  <div className="space-y-3 pt-4 max-w-md mx-auto">
                    <a
                      href={`https://wa.me/91${WHATSAPP_NUM}?text=${getWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-emerald-500 text-white hover:bg-emerald-600 rounded-2xl font-sans font-extrabold text-sm tracking-widest uppercase flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4 fill-current shrink-0 text-white" />
                      <span>Send to WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={handleReset}
                      type="button"
                      className="text-xs text-slate-450 hover:text-slate-600 transition-colors focus:outline-none border-b border-transparent hover:border-slate-400 pb-0.5 cursor-pointer text-slate-500 font-medium"
                    >
                      Start Over / Register Another Guest
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
