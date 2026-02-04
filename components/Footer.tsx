import React from 'react';
import { RESTAURANT_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] pt-32 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
                <div className="md:col-span-2">
                    <span className="text-[#D6AD60] text-xs tracking-[0.2em] uppercase block mb-8">About</span>
                    <p className="font-sans text-white/50 text-sm leading-relaxed max-w-md">
                        Sky Dine is a celebration of the senses. Located in Vadodara, we offer a sanctuary where gastronomy meets the cosmos.
                        Every plate is a planet, every flavor a star.
                    </p>
                </div>

                <div>
                    <span className="text-[#D6AD60] text-xs tracking-[0.2em] uppercase block mb-8">Explore</span>
                    <ul className="space-y-4">
                        {['Menu', 'Story', 'Gallery', 'Contact'].map(item => (
                            <li key={item}>
                                <Link to={`/${item.toLowerCase() === 'story' ? 'about' : item.toLowerCase()}`} className="font-cinzel text-white text-lg hover:text-[#D6AD60] transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span className="text-[#D6AD60] text-xs tracking-[0.2em] uppercase block mb-8">Connect</span>
                    <ul className="space-y-4">
                        {['Instagram', 'Facebook', 'TripAdvisor'].map(item => (
                            <li key={item}>
                                <a href="#" className="font-sans text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Massive Brand Name */}
            <div className="border-t border-white/5 pt-12 text-center">
                <h1 className="font-cinzel text-[12vw] leading-none text-white/5 select-none pointer-events-none">
                    SKY DINE
                </h1>
                <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-white/20 text-[10px] uppercase tracking-widest font-mono">
                    <p>&copy; 2024 Sky Dine Experience.</p>
                    <p>{RESTAURANT_INFO.address}</p>
                </div>
            </div>

        </div>
    </footer>
  );
};

export default Footer;