import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MENU } from '../constants';
import { Search, X } from 'lucide-react';

const Menu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Filtering Logic
  const filteredMenu = useMemo(() => {
    if (!searchQuery) return MENU;
    
    return MENU.map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.items.length > 0);
  }, [searchQuery]);

  // Dynamic Scroll Highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveCategory(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the upper-middle part of screen
        threshold: 0
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredMenu]);

  // Smooth Scroll Handler to avoid Anchor tag routing issues
  const scrollToCategory = (index: number) => {
    const element = sectionRefs.current[index];
    if (element) {
        const yOffset = -150; // Offset for fixed header/padding
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] pb-32">
        <div className="max-w-[1600px] mx-auto relative">
            
            {/* Header Section */}
            <div className="px-6 md:px-12 pt-32 mb-20">
                <header className="text-center relative z-20">
                    <span className="text-[#D6AD60] text-xs tracking-[0.6em] uppercase block mb-6 animate-[slideUp_1s_ease-out]">Culinary Arts</span>
                    <h1 className="font-cinzel text-5xl md:text-8xl text-white mb-12 animate-[slideUp_1.2s_ease-out]">THE MENU</h1>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative group z-20 animate-[slideUp_1.4s_ease-out]">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-white/30 group-focus-within:text-[#D6AD60] transition-colors duration-300" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search delicacies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-full py-4 pl-14 pr-12 text-white placeholder-white/30 focus:outline-none focus:border-[#D6AD60] focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(214,173,96,0.1)] transition-all duration-300 font-sans tracking-wide text-sm backdrop-blur-md"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/30 hover:text-white transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </header>
            </div>

            <div className="flex flex-col lg:flex-row relative">
                
                {/* 
                    Fixed Sidebar Strategy:
                    Use sticky + top-0 + h-screen + flex-col + justify-center 
                    This keeps the menu vertically centered in the viewport while sticking to the container.
                */}
                <div className="hidden lg:flex lg:flex-col lg:w-1/4 lg:sticky lg:top-0 lg:h-screen lg:justify-center lg:pl-12 z-10 pointer-events-none">
                    <div className="pointer-events-auto border-l border-white/5 py-4 backdrop-blur-sm bg-black/20 pr-4">
                        {filteredMenu.map((cat, idx) => (
                            <button 
                                key={idx}
                                onClick={() => scrollToCategory(idx)}
                                className={`block w-full text-left pl-6 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-500 relative group flex items-center gap-4
                                    ${activeCategory === idx ? 'text-[#D6AD60] pl-10' : 'text-white/30 hover:text-white hover:pl-8'}`}
                            >
                                <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#D6AD60] transition-all duration-500
                                     ${activeCategory === idx ? 'w-6' : 'w-0'}`}></span>
                                {cat.title}
                            </button>
                        ))}
                        {filteredMenu.length === 0 && (
                             <span className="block pl-6 py-2 text-white/20 text-xs uppercase tracking-widest italic">No results</span>
                        )}
                    </div>
                </div>

                {/* Mobile Sticky Category Bar */}
                <div className="lg:hidden sticky top-[80px] z-30 bg-[#020202]/90 backdrop-blur-md border-y border-white/10 py-4 px-6 mb-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="flex gap-6">
                         {filteredMenu.map((cat, idx) => (
                             <button
                                key={idx}
                                onClick={() => scrollToCategory(idx)}
                                className={`text-xs uppercase tracking-widest transition-colors ${activeCategory === idx ? 'text-[#D6AD60]' : 'text-white/40'}`}
                             >
                                {cat.title}
                             </button>
                         ))}
                    </div>
                </div>

                {/* Menu Content */}
                <div className="w-full lg:w-3/4 px-6 md:px-12 space-y-40 min-h-[50vh] pb-20">
                    {filteredMenu.length > 0 ? (
                        filteredMenu.map((category, idx) => (
                            <div 
                                key={`${category.title}`} 
                                id={`category-${idx}`} 
                                data-index={idx}
                                ref={(el) => (sectionRefs.current[idx] = el)}
                                className="scroll-mt-48"
                            >
                                 <div className="flex items-end gap-6 mb-16 pb-6 border-b border-white/10">
                                    <span className="font-serif-italic text-6xl text-white/5 font-bold leading-none -mb-2">0{idx+1}</span>
                                    <h2 className="font-cinzel text-3xl md:text-5xl text-white">{category.title}</h2>
                                 </div>

                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                                    {category.items.map((item, i) => (
                                        <div 
                                            key={`${item.name}-${i}`} 
                                            className="group relative"
                                        >
                                            <div className="flex justify-between items-baseline mb-3 relative overflow-hidden">
                                                <h3 className="text-xl text-white font-medium tracking-wide group-hover:text-[#D6AD60] transition-colors duration-300">{item.name}</h3>
                                                
                                                {/* Dotted Line Spacer */}
                                                <div className="flex-grow mx-4 border-b border-white/10 border-dotted relative top-[-4px]"></div>
                                                
                                                <span className="font-cinzel text-lg text-[#D6AD60]">{item.price}</span>
                                            </div>
                                            <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors duration-300 max-w-[90%]">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                 </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20">
                            <p className="font-cinzel text-2xl text-white/40 mb-4">No celestial dishes found.</p>
                            <button onClick={() => setSearchQuery('')} className="text-[#D6AD60] hover:text-white border-b border-[#D6AD60] pb-1 text-xs uppercase tracking-widest transition-colors">
                                View Full Menu
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="text-center mt-20 pt-12 border-t border-white/5 mx-6 md:mx-12">
                <p className="text-white/20 text-[10px] uppercase tracking-widest font-mono">
                    * All prices are subject to government taxes. Please inform us of any food allergies.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Menu;