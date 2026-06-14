import { Utensils, Droplet, Wifi, Shield, Soup, WashingMachine, CalendarDays, KeyRound } from 'lucide-react';
import { motion } from 'motion/react';

export default function Amenities() {
  const primaryAmenities = [
    {
      id: 'food',
      title: 'Hygienic Home-Style Food',
      description: 'Healthy and stomach-friendly South Indian home-style meals prepared thrice daily. Daily changing varied menu with unlimited servings of quality Rice, Chapati, Dal, Sambhar, Curries, and fresh curd.',
      moreInfo: 'Breakfast, Lunch, and Dinner provided with special meals on Sundays.',
      icon: Utensils,
      bgAccent: 'from-white to-teal-50/20 border-teal-100',
      iconColor: 'bg-teal-600 text-white',
    },
    {
      id: 'bathrooms',
      title: 'Modern Bathrooms & 24/7 Water',
      description: 'Fully tiled, modern, sanitized washrooms with reliable faucets and automatic geyser systems for hot winter showers. Enjoy uninterrupted 24/7 water supply from dual overhead storage tanks.',
      moreInfo: 'Sanitation team executes deep chemical sterilization thrice weekly.',
      icon: Droplet,
      bgAccent: 'from-white to-teal-50/20 border-teal-100',
      iconColor: 'bg-teal-600 text-white',
    },
    {
      id: 'wifi_ro',
      title: 'High-Speed Wi-Fi & RO Water',
      description: 'Unlimited fiber-optic internet accessible across all corners with separate access nodes per floor. Fully purified multi-stage reverse osmosis (RO) drinking water dispenser stationed inside the central lobby.',
      moreInfo: '200 Mbps dual-band connection. Clean chilled and warm water optionality.',
      icon: Wifi,
      bgAccent: 'from-white to-teal-50/20 border-teal-100',
      iconColor: 'bg-teal-600 text-white',
    },
    {
      id: 'security_power',
      title: '24/7 Gated Security & Power Backup',
      description: 'Fully monitored compound with high-definition CCTV security camera systems running 24/7. Outfitted with automatic power invertor grids to keep Wi-Fi, fans, lights, and safety corridors powered of outages.',
      moreInfo: 'Locked main gate with biometric authorization and full-time night watchman.',
      icon: Shield,
      bgAccent: 'from-white to-teal-50/20 border-teal-100',
      iconColor: 'bg-teal-600 text-white',
    },
  ];

  const secondaryAmenities = [
    { name: 'Self-Serve Washing Machines', icon: WashingMachine },
    { name: 'Daily Room Sweeping & Mopping', icon: CalendarDays },
    { name: 'Personal Lockable Cupboards', icon: KeyRound },
    { name: 'Healthy Veg & Non-Veg Menu Mix', icon: Soup },
  ];

  return (
    <section id="amenities" className="py-20 bg-slate-50 border-b border-slate-200/50 overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-mono tracking-widest text-teal-600 font-bold uppercase">
            WORLD-CLASS AMENITIES
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
            Designed for Comfort, Styled for Ease
          </h3>
          <p className="text-slate-600 font-sans font-light">
            We don&apos;t just provide beds. We provide a fully supported environment where you don&apos;t have to worry about water outages, internet drops, or cooking meals. Spend your focus on your professional or student goals.
          </p>
        </div>

        {/* Primary Amenities Bento-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {primaryAmenities.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${amenity.bgAccent} border-2 border-teal-50/50 shadow-sm hover:border-teal-500 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group`}
              >
                {/* Icon Container */}
                <div className={`p-4 rounded-2xl ${amenity.iconColor} shrink-0 shadow-md transform transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Text Content */}
                <div className="space-y-3 text-left">
                  <h4 className="text-xl font-display font-bold text-slate-900 tracking-tight group-hover:text-teal-600 transition-colors">
                    {amenity.title}
                  </h4>
                  <p className="text-slate-600 text-sm font-sans font-light leading-relaxed">
                    {amenity.description}
                  </p>
                  
                  {/* Subtle Sub-Feature text */}
                  <div className="pt-2 pl-3 border-l-2 border-teal-500 bg-teal-50/30 p-2.5 rounded-r-xl text-teal-800 text-xs font-mono">
                    {amenity.moreInfo}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supplementary Quick features bar */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-5xl mx-auto shadow-sm">
          <p className="text-center text-xs font-mono tracking-widest text-slate-400 font-bold uppercase mb-6">
            ADDITIONAL STANDARD CONVENIENCES INCLUDED
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryAmenities.map((item, idx) => {
              const SubIcon = item.icon;
              return (
                <div key={idx} className="flex items-center space-x-3 text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="p-2 bg-teal-50 rounded-xl text-teal-600 border border-teal-100">
                    <SubIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-slate-800 text-left">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
