import React, { useRef, useEffect } from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <div className="bg-[#020202] h-screen flex flex-col justify-center overflow-hidden relative">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D6AD60]/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="px-6 md:px-12 mb-12 flex justify-between items-end max-w-[1800px] mx-auto w-full z-10">
            <div>
                <span className="text-[#D6AD60] text-xs tracking-[0.5em] uppercase block mb-4">The Guestbook</span>
                <h1 className="font-cinzel text-5xl md:text-7xl text-white">VOICES</h1>
            </div>
            <div className="hidden md:flex gap-4 text-white/30 text-xs tracking-widest uppercase">
                <span>Scroll</span> <span>&rarr;</span>
            </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-12 px-6 md:px-12 pb-20 scrollbar-hide items-center w-full z-10"
            style={{ scrollSnapType: 'x mandatory' }}
        >
            {REVIEWS.map((review, idx) => (
                <div 
                    key={idx} 
                    className="min-w-[85vw] md:min-w-[600px] p-12 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative group transition-all duration-500 hover:border-[#D6AD60]/30 hover:bg-white/[0.05]"
                    style={{ scrollSnapAlign: 'center' }}
                >
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-[#D6AD60]/20 transition-colors" />
                    
                    <div className="flex gap-1 mb-8">
                         {[...Array(5)].map((_, i) => (
                             <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-[#D6AD60] text-[#D6AD60]' : 'text-white/10'}`} />
                         ))}
                    </div>

                    <p className="font-serif-italic text-2xl md:text-3xl text-white/90 leading-relaxed mb-12">
                        "{review.text}"
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-[#D6AD60]"></div>
                        <span className="font-cinzel text-white text-sm tracking-widest uppercase">{review.name}</span>
                    </div>
                </div>
            ))}
            
            {/* End spacer */}
            <div className="min-w-[10vw]"></div>
        </div>
    </div>
  );
};

export default Reviews;