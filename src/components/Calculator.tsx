import { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export default function Calculator() {
  const [sharingType, setSharingType] = useState<'single' | 'double' | 'quad'>('double');
  const [months, setMonths] = useState<number>(3);

  // Core pricing metrics
  const prices = {
    single: 6000,
    double: 5000,
    quad: 4500,
  };

  const monthlyBaseRent = prices[sharingType];
  const grandTotalLease = monthlyBaseRent * months;

  return (
    <section id="estimator" className="py-20 bg-white border-t border-b border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-mono tracking-widest text-teal-600 font-bold uppercase">
            COST ESTIMATOR
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
            Transparent pricing, no surprises
          </h3>
          <p className="text-slate-600 font-sans font-light">
            Estimate your total stay expense down to the rupee. We believe in 100% financial clarity. Select your room configuration and planned stay duration below for an immediate cost breakdown.
          </p>
        </div>

        {/* Calculator layout: Split-screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel: Inputs, spans 7 cols */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-center text-left space-y-8">
            
            {/* Input Group 1: Room sharing Selection */}
            <div className="space-y-4">
              <label className="text-sm font-mono text-slate-500 font-bold uppercase tracking-wider block">
                1. Select Room Share Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'single', name: 'Single-Share', desc: '₹6,000/mo' },
                  { key: 'double', name: '2-Sharing', desc: '₹5,000/mo' },
                  { key: 'quad', name: '4-Sharing', desc: '₹4,500/mo' },
                ].map((item) => (
                  <button
                     key={item.key}
                     type="button"
                     onClick={() => setSharingType(item.key as 'single' | 'double' | 'quad')}
                     className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                       sharingType === item.key
                         ? 'bg-teal-600 border-teal-600 text-white font-bold'
                         : 'bg-white border-slate-200 text-slate-700 hover:border-teal-500'
                     }`}
                  >
                    <span className="block text-xs sm:text-sm tracking-tight leading-none mb-1">{item.name}</span>
                    <span className={`text-[10px] block font-mono ${sharingType === item.key ? 'text-teal-100 font-semibold' : 'text-slate-500'}`}>
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Group 2: Estimated months lease */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-mono text-slate-500 font-bold uppercase tracking-wider">
                  2. Choose Planned Stay Duration
                </label>
                <span className="text-sm font-bold text-teal-700 font-mono bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                  {months} {months === 1 ? 'Month' : 'Months'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-2 bg-slate-250 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 Month (Min. Stay)</span>
                <span>6 Months</span>
                <span>12 Months (Long term)</span>
              </div>
            </div>

          </div>

          {/* Right panel: Output Billing Statement, spans 5 cols */}
          <div className="lg:col-span-5 bg-gradient-to-b from-teal-950 to-teal-900 border border-teal-950 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left relative shadow-xl">
            <div className="absolute top-4 right-4 text-teal-800/20">
              <CalcIcon className="w-16 h-16 stroke-[1]" />
            </div>

            <div className="space-y-6 relative z-10 w-full">
              <h4 className="text-lg font-display font-extrabold text-white tracking-tight flex items-center space-x-2">
                <CalcIcon className="w-5 h-5 text-amber-400" />
                <span>Estimated Stay Cost</span>
              </h4>

              {/* Billing Itemized Rows */}
              <div className="space-y-3.5 pt-2">
                
                {/* Base Monthly Rent */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-teal-200">Monthly Rent ({sharingType === 'single' ? 'Single' : sharingType === 'double' ? '2-Share' : '4-Share'}):</span>
                  <span className="font-mono text-white font-semibold">₹{monthlyBaseRent.toLocaleString('en-IN')}</span>
                </div>

                {/* Duration Row */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-teal-200">Planned Stay Duration:</span>
                  <span className="font-mono text-white font-semibold">{months} {months === 1 ? 'Month' : 'Months'}</span>
                </div>

                <div className="h-px bg-teal-800 my-4" />

                {/* Total stay fee */}
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-sm font-bold text-white block">Total Stay Expense:</span>
                    <span className="text-[10px] text-teal-350 block font-light leading-none mt-0.5">Rent for {months} {months === 1 ? 'Month' : 'Months'}</span>
                  </div>
                  <span className="text-2xl font-display font-extrabold text-amber-400 font-mono">
                    ₹{grandTotalLease.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="h-px bg-teal-800 my-2" />

                {/* Subsequent Months Due */}
                <div className="flex justify-between items-center text-xs text-teal-350 pt-1">
                  <span>Standard rent due monthly:</span>
                  <span className="font-mono text-white font-medium">₹{monthlyBaseRent.toLocaleString('en-IN')} / mo</span>
                </div>

              </div>
            </div>

            {/* Action helper */}
            <div className="mt-8">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center py-3.5 bg-amber-400 text-amber-950 hover:bg-amber-500 font-sans font-bold text-sm rounded-2xl transition-all duration-300 shadow-lg shadow-amber-400/10 hover:shadow-amber-400/20 text-center cursor-pointer uppercase tracking-wider"
              >
                Book with this Estimate
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
