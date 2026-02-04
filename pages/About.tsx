import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#020202] min-h-screen text-[#C0C0C0]">
       
       {/* Hero Section */}
       <section className="h-screen flex items-center justify-center relative overflow-hidden px-6">
           <div className="absolute inset-0 opacity-20">
               <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1469&auto=format&fit=crop" className="w-full h-full object-cover" />
           </div>
           <div className="relative z-10 max-w-4xl text-center mix-blend-difference">
               <span className="text-[#D6AD60] text-xs tracking-[0.5em] uppercase block mb-8 animate-float">The Origin</span>
               <h1 className="font-cinzel text-5xl md:text-8xl text-white leading-tight mb-8">
                   A Sanctuary <br/> <span className="font-serif-italic text-[#D6AD60]">Above The Noise</span>
               </h1>
               <div className="w-[1px] h-24 bg-[#D6AD60] mx-auto"></div>
           </div>
       </section>

       {/* The Narrative */}
       <section className="py-32 px-6 md:px-20 max-w-[1400px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div>
                   <p className="font-cinzel text-3xl md:text-4xl text-white leading-snug mb-12">
                       "We didn't just build a restaurant. We built an <span className="text-[#D6AD60]">observatory</span> for the culinary arts."
                   </p>
                   <p className="font-sans font-light text-lg leading-loose text-white/60 text-justify">
                       Sky Dine sits perched on the 6th floor of Florence Excellence, floating above the vibrant chaos of Bhayli. 
                       It is an architectural response to the city—a glass dome that captures the starlight while offering 
                       seclusion. Here, the North Indian Tandoor meets the precision of Pan-Asian woks in a dance of fire and flavor.
                   </p>
               </div>
               <div className="relative h-[600px] group">
                   <div className="absolute inset-0 border border-[#D6AD60]/30 transform translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                   <img 
                       src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                       className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                       alt="Interior" 
                   />
               </div>
           </div>
       </section>

       {/* Statistics / Essence */}
       <section className="py-24 border-y border-white/5 bg-[#050505]">
           <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               {[
                   { label: "Altitude", val: "6th Floor" },
                   { label: "Cuisine", val: "Global Fusion" },
                   { label: "Ambiance", val: "Open Sky" }
               ].map((stat, idx) => (
                   <div key={idx} className="group cursor-default">
                       <span className="font-sans text-[#D6AD60] text-xs uppercase tracking-[0.3em] block mb-4 group-hover:text-white transition-colors">{stat.label}</span>
                       <span className="font-cinzel text-4xl md:text-6xl text-white group-hover:scale-110 inline-block transition-transform duration-500">{stat.val}</span>
                   </div>
               ))}
           </div>
       </section>

       {/* Philosophy */}
       <section className="py-40 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <span className="block w-24 h-[1px] bg-[#D6AD60] mx-auto mb-12"></span>
                <p className="font-serif-italic text-3xl md:text-5xl text-white/90 leading-relaxed">
                    Dining is an immersive act. It is the texture of linen, the weight of silver, and the way light refracts through wine.
                </p>
            </div>
       </section>

    </div>
  );
};

export default About;