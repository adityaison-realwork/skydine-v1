import React, { useState } from 'react';
import { SOCIAL_LINKS, OFFERS, RESTAURANT_INFO } from '../constants';
import { ExternalLink, Star, Utensils, Bike, Phone, Clock, ArrowRight, Check, Calendar } from 'lucide-react';

const OrderOnline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dine-in' | 'delivery'>('dine-in');

  const reservationPartners = SOCIAL_LINKS.filter(link => 
    ['Dineout', 'EazyDiner', 'Justdial'].includes(link.name)
  );

  const deliveryPartners = SOCIAL_LINKS.filter(link => 
    ['Swiggy', 'Magicpin'].includes(link.name)
  );

  return (
    <div className="bg-[#020202] min-h-screen pt-32 pb-20 overflow-x-hidden">
        
        {/* Page Header */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 text-center">
             <span className="text-[#D6AD60] text-xs tracking-[0.6em] uppercase block mb-4 animate-[slideUp_1s_ease-out]">The Concierge</span>
             <h1 className="font-cinzel text-5xl md:text-8xl text-white mb-8 animate-[slideUp_1.2s_ease-out]">ACCESS</h1>
             <p className="text-white/40 max-w-2xl mx-auto font-light animate-[slideUp_1.4s_ease-out]">
                Secure your place beneath the stars or bring the celestial experience to your doorstep.
             </p>
        </div>

        {/* The Toggle Switch */}
        <div className="flex justify-center mb-24 animate-[slideUp_1.6s_ease-out]">
            <div className="bg-white/5 border border-white/10 p-1 rounded-full flex relative w-[300px]">
                <div 
                    className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#D6AD60] rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeTab === 'dine-in' ? 'left-1' : 'left-[calc(50%+4px)]'}`}
                ></div>
                <button 
                    onClick={() => setActiveTab('dine-in')}
                    className={`relative z-10 w-1/2 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-colors duration-500 ${activeTab === 'dine-in' ? 'text-black' : 'text-white/50 hover:text-white'}`}
                >
                    Reserve
                </button>
                <button 
                    onClick={() => setActiveTab('delivery')}
                    className={`relative z-10 w-1/2 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-colors duration-500 ${activeTab === 'delivery' ? 'text-black' : 'text-white/50 hover:text-white'}`}
                >
                    Delivery
                </button>
            </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 min-h-[500px]">
            
            {/* --- DINE IN CONTENT --- */}
            {activeTab === 'dine-in' && (
                <div className="animate-fade-up">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                         {/* Info Card */}
                         <div className="bg-white/[0.03] border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:bg-white/[0.05] transition-colors duration-500">
                             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Utensils className="w-32 h-32 text-white" />
                             </div>
                             <h3 className="font-cinzel text-3xl text-white mb-6">The Table</h3>
                             <p className="text-white/60 leading-relaxed mb-8 text-sm md:text-base">
                                 Reservations are highly recommended for dinner service and large groups. 
                                 Experience our rooftop ambience with priority seating.
                             </p>
                             <div className="space-y-4 border-t border-white/10 pt-8">
                                 <div className="flex items-center gap-4 text-white">
                                     <Phone className="w-5 h-5 text-[#D6AD60]" />
                                     <span className="font-cinzel text-xl">{RESTAURANT_INFO.phone[0]}</span>
                                 </div>
                                 <div className="flex items-center gap-4 text-white/60">
                                     <Clock className="w-5 h-5 text-[#D6AD60]" />
                                     <span className="font-sans text-sm">{RESTAURANT_INFO.hours}</span>
                                 </div>
                             </div>
                             
                             <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                 <a href={`tel:${RESTAURANT_INFO.phone[0]}`} className="flex-1 py-4 bg-[#D6AD60] text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors text-center">
                                     Call Now
                                 </a>
                                 <a href="https://wa.me/917228885060" target="_blank" rel="noreferrer" className="flex-1 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors text-center">
                                     WhatsApp
                                 </a>
                             </div>
                         </div>

                         {/* Booking Partners Grid */}
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {reservationPartners.map((link, idx) => (
                                <a 
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative flex flex-col justify-between bg-white/[0.02] border border-white/10 p-8 hover:border-[#D6AD60] transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <Calendar className="w-6 h-6 text-white/30 group-hover:text-[#D6AD60] transition-colors" />
                                        <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <span className="text-[#D6AD60] text-[10px] uppercase tracking-widest block mb-2 opacity-50 group-hover:opacity-100">Book via</span>
                                        <h4 className="font-cinzel text-2xl text-white">{link.name}</h4>
                                    </div>
                                </a>
                            ))}
                            
                            {/* Visual Filler */}
                            <div className="relative overflow-hidden border border-white/5 opacity-50">
                                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
                            </div>
                         </div>
                     </div>
                </div>
            )}

            {/* --- DELIVERY CONTENT --- */}
            {activeTab === 'delivery' && (
                <div className="animate-fade-up">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {deliveryPartners.map((link, idx) => (
                             <a 
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative h-96 bg-white/[0.02] border border-white/10 hover:border-[#D6AD60] transition-all duration-500 overflow-hidden flex flex-col justify-between p-10"
                             >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                                <div className="absolute inset-0 bg-[#D6AD60]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                
                                <div className="z-20 flex justify-between items-start">
                                    <Bike className="w-10 h-10 text-white/20 group-hover:text-[#D6AD60] transition-colors" />
                                    <div className="p-2 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>

                                <div className="z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-[#D6AD60] text-[10px] uppercase tracking-[0.2em] block mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Instant Delivery</span>
                                    <h3 className="font-cinzel text-3xl text-white group-hover:text-[#D6AD60] transition-colors">{link.name}</h3>
                                </div>
                             </a>
                         ))}
                         
                         {/* Fallback / Info Card */}
                         <div className="bg-white/[0.02] border border-white/10 p-10 flex flex-col justify-center text-center">
                             <p className="font-cinzel text-xl text-white mb-4">Direct Order?</p>
                             <p className="text-white/50 text-sm mb-8">
                                 For bulk orders or special requests, please contact us directly.
                             </p>
                             <a href={`tel:${RESTAURANT_INFO.phone[0]}`} className="text-[#D6AD60] uppercase tracking-widest text-xs border-b border-[#D6AD60] pb-1 w-fit mx-auto hover:text-white hover:border-white transition-colors">
                                 Call Restaurant
                             </a>
                         </div>
                     </div>
                     
                     <div className="mt-16 text-center">
                         <p className="text-white/30 text-xs italic font-serif-italic">
                            * Delivery range and availability subject to partner apps.
                         </p>
                     </div>
                </div>
            )}

            {/* Privileges (Offers) Section - Always Visible */}
            <div className="mt-32 pt-20 border-t border-white/5">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-[1px] bg-[#D6AD60]"></div>
                    <span className="text-[#D6AD60] text-xs tracking-[0.3em] uppercase">Active Privileges</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {OFFERS.map((offer, idx) => (
                        <div key={idx} className="p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all group">
                             <div className="w-8 h-8 rounded-full border border-[#D6AD60]/50 flex items-center justify-center text-[#D6AD60] text-xs font-bold mb-6 group-hover:bg-[#D6AD60] group-hover:text-black transition-colors">
                                 %
                             </div>
                             <h4 className="font-cinzel text-lg text-white mb-2">{offer.title}</h4>
                             <p className="text-white/50 text-xs mb-4 leading-relaxed">{offer.details}</p>
                             <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-wider">
                                 <Check className="w-3 h-3" /> {offer.conditions.substring(0, 20)}...
                             </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    </div>
  );
};

export default OrderOnline;