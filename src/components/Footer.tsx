import { MapPin, Phone, Mail, Building2, ExternalLink } from 'lucide-react';

export default function Footer() {
  const WHATSAPP_NUM = '9550309728';
  const EMAIL_ADDR = 'pnshostel25@gmail.com';
  const LOCATION_URL = 'https://share.google/0PfGNL6FwVB60Nqhz';

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 font-sans pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Left Column Logo & Info, Right column structured links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand/Summary Column, occupies 5 spans */}
          <div className="md:col-span-5 space-y-5">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="p-2 bg-teal-600 rounded-xl text-white font-bold">
                <Building2 className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold text-white tracking-tight leading-none">
                  PNS <span className="text-teal-400">Hostel</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-widest mt-0.5">
                  &amp; PG · NAGARAM
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
               Providing modern, safe, clean, and highly hygienic student and executive lodging accommodations near Nagaram Main Road in Hyderabad. We aim to construct an incredibly warm, disciplined co-living environment that replicates domestic comforts fully.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Nagaram Branch, Secunderabad Dist • Govt Regd. PG
            </div>
          </div>

          {/* Quick link columns, occupies 3 spans */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-slate-500 font-bold uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-teal-400 transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-teal-400 transition-colors">
                  Rooms &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-teal-400 transition-colors">
                  Key Amenities
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-teal-400 transition-colors">
                  Stay Estimator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">
                  Guidelines FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">
                  Contact &amp; Book
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Direct coordinates, occupies 4 spans */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-slate-500 font-bold uppercase">
              Official Coordinates
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-light">
                  PNS Hostel &amp; PG, Near Highway, Nagaram, Secunderabad, Telangana - 500083
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${WHATSAPP_NUM}`} className="text-slate-300 hover:text-teal-400 transition-colors font-mono font-medium">
                  +91 {WHATSAPP_NUM}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${EMAIL_ADDR}`} className="text-slate-300 hover:text-teal-400 transition-colors font-mono">
                  {EMAIL_ADDR}
                </a>
              </li>
              <li className="pt-1.5">
                <a
                  href={LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/35 text-slate-200 transition-all cursor-pointer"
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-600 font-mono">
          <p>© {new Date().getFullYear()} PNS Hostel &amp; PG. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Designed elegantly in Nagaram, Hyderabad</p>
        </div>

      </div>

      {/* Floating Sticky Quick WhatsApp button at bottom right */}
      <a
        href={`https://wa.me/91${WHATSAPP_NUM}?text=Hello%20PNS%20Hostel%2C%20I%20am%20interested%20in%20booking%20a%20stay.%20Please%20share%20joining%20details.`}
        target="_blank"
        rel="noopener noreferrer"
        title="Direct WhatsApp Support"
        className="fixed bottom-6 right-6 z-40 p-4 bg-emerald-500 text-slate-950 hover:bg-emerald-400 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center space-x-1 border border-emerald-400 cursor-pointer shadow-emerald-500/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.6 1.451 5.4 0 9.8-4.394 9.8-9.8.001-5.399-4.396-9.79-9.8-9.79-5.4 0-9.8 4.395-9.8 9.8-.001 2.15.55 3.9 1.65 5.5l-.95 3.498 3.5-.948zM17.5 14.5c-.3-.15-1.7-.85-2.0-.95-.2-.1-.4-.15-.55.12-.15.28-.6 1-.72 1.15-.15.15-.28.15-.6.02-1.9-.95-3.1-1.95-4.1-3.65-.25-.45.28-.42.75-1.4.08-.18.05-.35-.02-.5-.08-.15-.55-1.35-.75-1.85-.2-.48-.4-.4-.55-.4h-.48c-.18 0-.48.08-.72.35-.25.28-1 1-1 2.45s1.05 2.85 1.2 3.05c.15.18 2.1 3.2 5.1 4.5.7.3 1.28.48 1.7.6.7.25 1.39.2 1.9.1.58-.08 1.7-.7 1.95-1.38.25-.68.25-1.28.18-1.38-.08-.13-.25-.18-.55-.33z"/>
        </svg>
      </a>
    </footer>
  );
}
