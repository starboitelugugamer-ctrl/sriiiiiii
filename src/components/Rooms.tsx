import { Check, Star, Sparkles, User, Users, Group } from 'lucide-react';
import { motion } from 'motion/react';
import { RoomOption } from '../types';

import singleRoomImg from '../assets/images/single_room_1781338107709.jpg';
import twinRoomImg from '../assets/images/twin_room_1781338121669.jpg';
import dormRoomImg from '../assets/images/dorm_room_1781338140056.jpg';

interface RoomsProps {
  onSelectRoom: (sharingType: 'single' | 'double' | 'quad') => void;
  selectedRoom: string;
}

export default function Rooms({ onSelectRoom, selectedRoom }: RoomsProps) {
  const rooms: RoomOption[] = [
    {
      id: 'single',
      sharingType: 'single',
      name: 'Single Sharing Room',
      price: 6000,
      description: 'The absolute choice for professionals and students seeking maximum privacy and standard focus.',
      privacy: 'Maximum Personal Space',
      storage: 'Dedicated Cupboards & Storage',
      companionship: 'Independent focus, distraction-free',
      features: [
        'Spacious, lockable dedicated storage cupboard',
        'Comfortable cozi-bed with pillow & mattress',
        'Proper window ventilation & charging nodes',
        'Includes 3 times daily premium food',
        '24/7 Hot water & housecleaning accessibility',
      ],
      image: singleRoomImg,
    },
    {
      id: 'double',
      sharingType: 'double',
      name: '2-Sharing Twin Room',
      price: 5000,
      popularity: true,
      description: 'Perfect harmony of shared pricing and comfortable living standard with high privacy borders.',
      privacy: 'Balanced Room share',
      storage: 'Individual Lockers',
      companionship: 'Excellent bonding, peer-learning support',
      features: [
        'Twin independent beds side-parallel',
        'Two separate study chairs & workspaces',
        'Double independent lockable closets',
        'Direct charging outlets per student',
        'Includes 3 times daily premium food',
        '24/7 Hot water & housecleaning accessibility',
      ],
      image: twinRoomImg,
    },
    {
      id: 'quad',
      sharingType: 'quad',
      name: '4-Sharing Dorm Room',
      price: 4500,
      description: 'The most economical, highly interactive, and vibrant student community lodging style.',
      privacy: 'Active Dorm environment',
      storage: 'Secure Built-In locker boxes',
      companionship: 'Vibrant co-living and shared camaraderie',
      features: [
        'Sturdy wooden modular bunk beds',
        'Integrated bed-mounted power sockets',
        'Individual lockable closet space',
        'Cozy collective study environments',
        'Includes 3 times daily premium food',
        '24/7 Hot water & housecleaning accessibility',
      ],
      image: dormRoomImg,
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white border-b border-secondary-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-mono tracking-widest text-teal-600 font-bold uppercase transition-colors">
            ROOMS &amp; PRICING OPTIONS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
            Find the Space that Fits Your Lifestyle
          </h3>
          <p className="text-slate-600 font-sans font-light">
            No hidden charges, no brokerage. PNS Hostel offers straightforward tiered monthly options. All options include comprehensive access to our elite food, utilities, and high-security ecosystem.
          </p>
        </div>
 
        {/* Pricing Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {rooms.map((room) => {
            const isSelected = selectedRoom === room.sharingType;
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col rounded-3xl overflow-hidden border-2 transition-all duration-300 transform bg-white ${
                  room.popularity
                    ? 'border-teal-500 shadow-xl shadow-teal-500/5 relative ring-2 ring-teal-50'
                    : 'border-slate-100 shadow-md hover:border-teal-500 hover:-translate-y-1'
                } ${isSelected ? 'ring-4 ring-amber-400 border-amber-400 shadow-2xl scale-[1.01]' : ''}`}
              >
                {/* Popularity Banner Badge */}
                {room.popularity && (
                  <div className="absolute top-4 right-4 z-20 bg-teal-600 text-white font-sans font-extrabold text-[11px] px-3.5 py-1 rounded-full flex items-center space-x-1 uppercase shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular Choice</span>
                  </div>
                )}
 
                {/* Card Top Image View */}
                <div className="relative h-60 overflow-hidden group">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Share Icon indicator */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="p-1.5 rounded-lg bg-teal-600 text-white shadow">
                      {room.sharingType === 'single' && <User className="w-4 h-4" />}
                      {room.sharingType === 'double' && <Users className="w-4 h-4" />}
                      {room.sharingType === 'quad' && <Group className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-white uppercase bg-teal-900/90 px-2.5 py-1 rounded-lg border border-teal-800">
                      {room.sharingType === 'single' ? 'Max Privacy' : room.sharingType === 'double' ? 'Twin Companion' : 'Supreme Saving'}
                    </span>
                  </div>
                </div>
 
                {/* Content Block */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Name & Pricing */}
                    <div className="space-y-1">
                      <h4 className="text-xl font-display font-bold text-slate-900 tracking-tight">{room.name}</h4>
                      <div className="flex items-baseline space-x-1.5">
                        <span className="text-4xl font-display font-extrabold text-teal-600">
                          ₹{room.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-sm font-sans font-normal text-slate-500">/ month</span>
                      </div>
                      <p className="text-slate-500 text-xs font-sans font-light mt-2 italic">
                        *Electricity &amp; water charges fully included. No hidden maintenance bills.
                      </p>
                    </div>
 
                    <div className="h-px bg-slate-100" />
 
                    {/* Highlights pill tags */}
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-slate-400 mr-1">Privacy:</span>
                        <span className="text-slate-700 font-medium">{room.privacy}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-slate-400 mr-1">Storage:</span>
                        <span className="text-slate-700 font-medium">{room.storage}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-slate-400 mr-1">Vibe:</span>
                        <span className="text-slate-700 font-medium">{room.companionship}</span>
                      </div>
                    </div>
 
                    <div className="h-px bg-slate-100" />
 
                    {/* Features checklist */}
                    <div className="space-y-3">
                      <p className="text-xs font-mono tracking-wider font-bold text-slate-400 uppercase">
                        What is included in Rent:
                      </p>
                      <ul className="space-y-2.5">
                        {room.features.map((feature, idx) => (
                           <li key={idx} className="flex items-start space-x-2.5">
                            <Check className="w-4 h-4 text-teal-650 text-teal-600 shrink-0 mt-0.5" />
                            <span className="text-sm font-sans text-slate-600 tracking-wide font-light">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
 
                  {/* Primary card CTA */}
                  <div className="pt-8">
                    <a
                      href="#contact"
                      onClick={() => onSelectRoom(room.sharingType)}
                      className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-bold font-sans transition-all duration-300 shadow-md ${
                        isSelected
                          ? 'bg-amber-400 text-amber-950 hover:bg-amber-500 shadow-amber-400/20'
                          : 'bg-teal-600 text-white hover:bg-teal-700'
                      }`}
                    >
                      {isSelected ? 'Room Selected in Inquiry!' : 'Inquire for this Room'}
                    </a>
                  </div>
                </div>
 
              </motion.div>
            );
          })}
        </div>
 
      </div>
    </section>
  );
}
