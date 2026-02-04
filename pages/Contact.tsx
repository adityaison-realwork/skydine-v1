import React, { useState } from 'react';
import { RESTAURANT_INFO, SOCIAL_LINKS } from '../constants';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, Send, ArrowUpRight, Clock, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Format WhatsApp message
    const text = `*New Inquiry via Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp (using first phone number from constants, stripped of non-digits)
    const ownerPhone = RESTAURANT_INFO.phone[0].replace(/\D/g, ''); 
    window.open(`https://wa.me/${ownerPhone}?text=${text}`, '_blank');
  };

  const handleDirections = () => {
    // Open Google Maps Directions
    window.open(`https://www.google.com/maps/dir/?api=1&destination=Sky+Dine+Restaurant+Vadodara`, '_blank');
  };

  const handleCall = () => {
     window.location.href = `tel:${RESTAURANT_INFO.phone[0]}`;
  };

  return (
    <div className="bg-[#020202] min-h-screen pt-32 pb-20 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            
            <header className="mb-16">
                 <span className="text-[#D6AD60] text-xs tracking-[0.5em] uppercase block mb-4">Uplink</span>
                 <h1 className="font-cinzel text-5xl md:text-7xl text-white">CONTACT</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
                
                {/* Left Column: Transmission Form */}
                <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 md:p-12 relative group h-fit">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent opacity-50"></div>
                    
                    <h2 className="font-cinzel text-2xl md:text-3xl text-white mb-8 flex items-center gap-4">
                        <MessageCircle className="text-[#D6AD60] w-6 h-6" /> 
                        <span>Direct Transmission</span>
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group/input relative">
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D6AD60] transition-colors peer placeholder-transparent"
                                    placeholder="Name"
                                />
                                <label className="absolute left-0 top-3 text-white/40 text-xs uppercase tracking-widest peer-focus:-translate-y-6 peer-focus:text-[#D6AD60] peer-focus:text-[10px] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[#D6AD60] peer-not-placeholder-shown:text-[10px] transition-all cursor-text pointer-events-none">
                                    Full Name *
                                </label>
                            </div>
                            <div className="group/input relative">
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange} 
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D6AD60] transition-colors peer placeholder-transparent"
                                    placeholder="Phone"
                                />
                                <label className="absolute left-0 top-3 text-white/40 text-xs uppercase tracking-widest peer-focus:-translate-y-6 peer-focus:text-[#D6AD60] peer-focus:text-[10px] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[#D6AD60] peer-not-placeholder-shown:text-[10px] transition-all cursor-text pointer-events-none">
                                    Phone Number
                                </label>
                            </div>
                        </div>

                        <div className="group/input relative">
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D6AD60] transition-colors peer placeholder-transparent"
                                placeholder="Email"
                            />
                            <label className="absolute left-0 top-3 text-white/40 text-xs uppercase tracking-widest peer-focus:-translate-y-6 peer-focus:text-[#D6AD60] peer-focus:text-[10px] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[#D6AD60] peer-not-placeholder-shown:text-[10px] transition-all cursor-text pointer-events-none">
                                Email Address
                            </label>
                        </div>

                        <div className="group/input relative">
                            <textarea 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D6AD60] transition-colors peer placeholder-transparent resize-none"
                                placeholder="Message"
                            ></textarea>
                            <label className="absolute left-0 top-3 text-white/40 text-xs uppercase tracking-widest peer-focus:-translate-y-6 peer-focus:text-[#D6AD60] peer-focus:text-[10px] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[#D6AD60] peer-not-placeholder-shown:text-[10px] transition-all cursor-text pointer-events-none">
                                Your Message *
                            </label>
                        </div>

                        <button type="submit" className="w-full py-4 bg-[#D6AD60] text-black font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 group/btn text-sm">
                            <span>Send via WhatsApp</span>
                            <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>

                {/* Right Column: Info & Actions */}
                <div className="flex flex-col gap-8">
                    
                    {/* Explicit Contact Details */}
                    <div className="bg-white/[0.02] border border-white/10 p-8 backdrop-blur-md space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-3 text-[#D6AD60]">
                                <MapPin className="w-5 h-5" />
                                <span className="text-xs uppercase tracking-widest">Coordinates</span>
                            </div>
                            <p className="text-white/80 font-serif-italic text-xl leading-relaxed">
                                {RESTAURANT_INFO.address}
                            </p>
                        </div>

                        <div className="w-full h-[1px] bg-white/5"></div>

                        <div>
                            <div className="flex items-center gap-3 mb-3 text-[#D6AD60]">
                                <Phone className="w-5 h-5" />
                                <span className="text-xs uppercase tracking-widest">Communications</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                {RESTAURANT_INFO.phone.map((ph, i) => (
                                    <a key={i} href={`tel:${ph}`} className="text-white font-cinzel text-2xl hover:text-[#D6AD60] transition-colors w-fit">
                                        {ph}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-white/5"></div>

                        <div>
                            <div className="flex items-center gap-3 mb-3 text-[#D6AD60]">
                                <Clock className="w-5 h-5" />
                                <span className="text-xs uppercase tracking-widest">Temporal</span>
                            </div>
                            <p className="text-white/80 font-sans text-lg font-light">
                                {RESTAURANT_INFO.hours}
                            </p>
                        </div>
                    </div>

                    {/* Primary Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button 
                            onClick={handleCall}
                            className="bg-white/5 border border-white/10 hover:border-[#D6AD60] p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 group hover:bg-[#D6AD60]/10"
                        >
                            <Phone className="w-6 h-6 text-white group-hover:text-[#D6AD60] mb-1" />
                            <span className="font-cinzel text-white text-sm">Call Owner</span>
                        </button>

                        <button 
                            onClick={handleSubmit} // Re-opens WA chat
                            className="bg-white/5 border border-white/10 hover:border-[#25D366] p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 group hover:bg-[#25D366]/10"
                        >
                            <MessageCircle className="w-6 h-6 text-white group-hover:text-[#25D366] mb-1" />
                            <span className="font-cinzel text-white text-sm">WhatsApp</span>
                        </button>

                        <button 
                            onClick={handleDirections}
                            className="md:col-span-2 bg-[#D6AD60] text-black border border-[#D6AD60] p-4 flex items-center justify-center gap-3 transition-all duration-300 group hover:bg-white hover:border-white"
                        >
                            <Navigation className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-[0.2em] text-sm">Get Directions</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>

                    {/* External Networks */}
                    <div className="grid grid-cols-2 gap-4">
                        {SOCIAL_LINKS.filter(l => l.name === 'Justdial' || l.name === 'EazyDiner').map((link) => (
                            <a 
                                key={link.name} 
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between p-4 border border-white/10 bg-white/[0.02] hover:border-[#D6AD60] hover:bg-white/5 transition-all group"
                            >
                                <span className="font-cinzel text-white text-sm">{link.name}</span>
                                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-[#D6AD60]" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dedicated Map Section */}
            <div className="w-full border border-white/10 relative group bg-black/50">
                <div className="absolute -top-3 left-6 bg-[#020202] px-4 z-10">
                    <span className="text-[#D6AD60] text-xs tracking-widest uppercase">Satellite Uplink</span>
                </div>
                
                <div className="h-[400px] w-full relative overflow-hidden">
                     {/* Overlay for inactive state to match theme */}
                     <div className="absolute inset-0 bg-[#D6AD60]/5 pointer-events-none z-10 mix-blend-overlay"></div>
                     
                     <iframe 
                        src={RESTAURANT_INFO.mapEmbedUrl} 
                        className="w-full h-full filter grayscale invert contrast-100 opacity-80 hover:opacity-100 hover:filter-none transition-all duration-700"
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        title="Restaurant Location"
                    ></iframe>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Contact;