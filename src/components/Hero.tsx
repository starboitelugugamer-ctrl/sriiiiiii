import { ArrowRight, Sparkles, Star, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import heroImg from '../assets/images/hostel_hero_1781338091286.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative bg-slate-50 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative radial gradients for ambient depth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px] translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text content: 7 columns on large screens */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Admission Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-teal-700 font-mono font-bold shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>Hostel Admissions Open • 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping inline-block" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.15]"
            >
              Your <span className="text-teal-600">Home Away</span> <br />
              From Home <br />
              in Nagaram
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans font-light"
            >
              PNS Hostel &amp; PG offers clean, executive, and high-quality co-living spaces in Nagaram, Hyderabad. Enjoy freshly cooked home-style meals, high-speed Wi-Fi, robust 24/7 safety gates, and premium hygiene — tailored for professionals &amp; students.
            </motion.p>

            {/* Quick trust metrics checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-y-3 gap-x-4 max-w-lg pt-2 text-sm text-slate-600"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <span className="font-medium text-slate-700">Hygienic Home Food</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <span className="font-medium text-slate-700">24/7 Security &amp; Safety</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <span className="font-medium text-slate-700">High-Speed Wi-Fi &amp; RO</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <span className="font-medium text-slate-700">Power &amp; Water Backup</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold font-sans transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Book / Inquire Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#rooms"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl font-bold font-sans transition-all duration-300 text-center shadow-sm"
              >
                View Rooms &amp; Pricing
              </a>
            </motion.div>
          </div>

          {/* Hero visual component: 5 columns on large screens */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-teal-500/5 aspect-[4/3] sm:aspect-[16:9] lg:aspect-[4/3] group"
            >
              {/* Main Photo of Hostel */}
              <img
                src={heroImg}
                alt="PNS Hostel Exterior Facade"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent pointer-events-none" />

              {/* Floating Meta-Badges */}
              
              {/* Badge 1: Rating */}
              <div className="absolute top-4 left-4 flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-slate-850 leading-none">4.8 / 5.0</span>
                <span className="text-[10px] text-slate-500 font-sans">Rating</span>
              </div>

              {/* Badge 2: Near Street / Location */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span className="text-xs font-semibold text-slate-800 leading-none">Nagaram, Hyderabad</span>
              </div>

              {/* Badge 3: Trust Verify */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-extrabold text-teal-900 leading-none">Verified PG</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
