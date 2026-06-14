import { useState, useEffect } from 'react';
import { Menu, X, Building2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms & Pricing', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Stay Estimator', href: '#estimator' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-3'
          : 'bg-slate-50/80 backdrop-blur-sm border-b border-slate-100 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group focus:outline-none">
            <div className="p-2 bg-teal-600 rounded-xl text-white font-bold shadow-md transition-transform duration-300 group-hover:scale-105">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-black text-teal-950 tracking-tight leading-none">
                PNS <span className="text-teal-600">Hostel</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500 tracking-widest mt-0.5">
                &amp; PG · NAGARAM
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors duration-200 focus:outline-none focus:text-teal-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to action */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/9550309728?text=Hello%20PNS%20Hostel%2C%20I%20am%20interested%20in%20booking%20a%20stay.%20Please%20share%20joining%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full text-xs font-extrabold bg-amber-400 hover:bg-amber-500 text-amber-950 hover:text-amber-950 font-sans transition-all duration-300 shadow-md hover:shadow-amber-500/25 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-slate-600 hover:text-teal-600 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-750 hover:bg-slate-50 hover:text-teal-600 transition-all text-slate-800"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 px-3">
                <a
                  href="https://wa.me/9550309728?text=Hello%20PNS%20Hostel%2C%20I%20am%20interested%20in%20booking%20a%20stay.%20Please%20share%20joining%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-full text-sm font-semibold bg-amber-400 hover:bg-amber-500 text-amber-950 font-sans shadow-md"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Book Now via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
