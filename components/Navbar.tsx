import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/', label: '01', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop' },
    { name: 'The Menu', path: '/menu', label: '02', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop' },
    { name: 'Our Story', path: '/about', label: '03', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Visuals', path: '/gallery', label: '04', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop' },
    { name: 'Contact', path: '/contact', label: '05', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1500&auto=format&fit=crop' },
  ];

  return (
    <>
      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference transition-all duration-500">
        <Link to="/" className="group relative z-50">
          <h1 className="font-cinzel text-xl md:text-2xl text-white font-bold tracking-[0.2em] group-hover:text-[#D6AD60] transition-colors">
            SKY DINE
          </h1>
        </Link>

        <div className="flex items-center gap-8 relative z-50">
            <Link 
                to="/order-online" 
                className="hidden md:inline-block text-xs font-bold tracking-[0.2em] text-white uppercase border-b border-transparent hover:border-[#D6AD60] hover:text-[#D6AD60] transition-all pb-1"
            >
                Book Table
            </Link>
            
            <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-3 text-white group"
            >
                <span className="hidden md:inline text-xs tracking-[0.2em] uppercase group-hover:text-[#D6AD60] transition-colors">Menu</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D6AD60] group-hover:rotate-180 transition-all duration-500 bg-black/20 backdrop-blur-sm">
                    <MenuIcon className="w-4 h-4 text-white group-hover:text-[#D6AD60]" />
                </div>
            </button>
        </div>
      </header>

      {/* Full Screen Overlay */}
      <div 
        className={`fixed inset-0 z-[60] transition-all duration-[800ms] cubic-bezier(0.77, 0, 0.175, 1) flex overflow-hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
         {/* Background Layer with active image */}
         <div className="absolute inset-0 bg-[#020202]">
            {navLinks.map((link, idx) => (
                <div 
                    key={link.name}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        hoveredLink === idx ? 'opacity-40' : 'opacity-0'
                    }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
                    <img src={link.img} alt="" className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]" />
                </div>
            ))}
            {/* Default Background if none hovered */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredLink === null ? 'opacity-20' : 'opacity-0'}`}>
                 <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2560&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute inset-0 bg-[#020202]/60 z-0"></div>
         </div>

         {/* Close Button */}
         <div className="absolute top-8 right-6 md:right-12 z-50">
            <button 
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D6AD60] hover:rotate-90 transition-all duration-500 bg-black/50 backdrop-blur-md"
            >
                <X className="w-5 h-5 text-white hover:text-[#D6AD60]" />
            </button>
         </div>

         {/* Content Container */}
         <div className="relative z-20 w-full h-full flex flex-col md:flex-row">
            
            {/* Navigation Links */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:pl-24 lg:pl-32 relative">
                <nav className="flex flex-col space-y-2 md:space-y-4">
                    {navLinks.map((link, idx) => (
                        <div 
                            key={link.name}
                            className="overflow-hidden"
                            onMouseEnter={() => setHoveredLink(idx)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link
                                to={link.path}
                                className={`group flex items-center gap-6 transform transition-all duration-700 cubic-bezier(0.2, 1, 0.3, 1) ${
                                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                                style={{ transitionDelay: `${100 + (idx * 50)}ms` }}
                            >
                                <span className="font-mono text-xs text-[#D6AD60] opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 w-6">
                                    {link.label}
                                </span>
                                <span className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-white/70 group-hover:text-[#D6AD60] group-hover:translate-x-4 group-hover:scale-105 transition-all duration-500 uppercase tracking-tighter">
                                    {link.name}
                                </span>
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Info Panel (Right Side) */}
            <div className="hidden md:flex w-1/2 h-full flex-col justify-center items-start px-20 border-l border-white/5 relative bg-black/20 backdrop-blur-sm">
                <div className={`transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-[#D6AD60] text-xs tracking-[0.5em] uppercase block mb-8">Reservation</span>
                    <h3 className="font-cinzel text-3xl text-white mb-6">Ideally,<br/>Every Night.</h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-12">
                        Experience the zenith of culinary arts. Reservations are highly recommended for sunset and dinner service.
                    </p>
                    
                    <Link to="/order-online" className="group inline-flex items-center gap-4 px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-[#D6AD60] hover:border-[#D6AD60] hover:text-black transition-all duration-300">
                        Book A Table <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="mt-24 flex gap-12">
                        <div>
                            <span className="block text-xs text-white/30 uppercase tracking-widest mb-2">Call</span>
                            <span className="text-white font-cinzel">+91 72288 85060</span>
                        </div>
                        <div>
                            <span className="block text-xs text-white/30 uppercase tracking-widest mb-2">Find Us</span>
                            <span className="text-white font-cinzel">Florence Excellence, Vadodara</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Footer in Menu */}
            <div className={`md:hidden absolute bottom-12 left-6 right-6 transition-all duration-700 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                 <Link to="/order-online" className="block w-full text-center py-4 bg-[#D6AD60] text-black font-bold tracking-[0.2em] uppercase text-xs">
                    Reserve Table
                 </Link>
            </div>

         </div>
      </div>
    </>
  );
};

export default Navbar;