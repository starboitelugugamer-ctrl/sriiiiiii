import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('gate');

  const faqs: FAQItem[] = [
    {
      id: 'gate',
      question: 'What are the main entry gate timings and curfew rules?',
      answer: 'For the safety and peace of all occupants, the main gate locks at 10:30 PM daily. However, working professionals or students with late college shifts can coordinate with the Warden in advance to secure a late-entry digital card clearance.',
    },
    {
      id: 'food_timing',
      question: 'What are the timing slots for Breakfast, Lunch, and Dinner?',
      answer: 'Meals are served fresh daily in the central dining hall: Breakfast is between 7:30 AM – 9:30 AM; Lunch (careers packable) is from 12:30 PM – 2:30 PM; and Dinner is ready from 7:30 PM – 9:30 PM. Warm milk and pure cooled RO drinking water are accessible throughout the day.',
    },
    {
      id: 'visitors',
      question: 'Are parents or outside visitors allowed inside the rooms?',
      answer: 'Parents and immediate relatives are highly welcome to inspect our facilities and wait in the ground floor visitor lounge. For compliance and resident privacy, outside visitors are restricted from sleeping over in the individual rooms.',
    },
    {
      id: 'wifi_charges',
      question: 'Are high-speed Wi-Fi, electricity, and water bills charged separately?',
      answer: 'No, all essential bills are entirely inclusive in your monthly rent! There are absolutely zero secondary maintenance charges or surprise utility fees for standard ceiling lights, laptops, phone chargers, or high-speed Wi-Fi.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-mono tracking-widest text-teal-600 font-bold uppercase">
            HOSTEL GUIDELINES FAQ
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-600 font-sans font-light max-w-2xl mx-auto">
            Clear guidelines foster a safe, clean, and collaborative atmosphere. If you have any additional queries, please directly ring our management.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border-2 transition-all duration-300 bg-white ${
                  isOpen ? 'border-teal-500/40 shadow-sm' : 'border-slate-200/60 hover:border-teal-500/40'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none group cursor-pointer"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors pr-4 ${
                    isOpen ? 'text-teal-900 group-hover:text-teal-600' : 'text-slate-800 group-hover:text-teal-600'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg shrink-0 ${isOpen ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-400'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-teal-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer Pane */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-slate-600 text-sm font-sans font-light leading-relaxed text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
