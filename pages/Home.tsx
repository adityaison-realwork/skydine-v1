import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { REVIEWS, RESTAURANT_INFO } from '../constants';
import { ArrowRight, Star, Quote, ChevronDown, MoveRight } from 'lucide-react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal-text, .reveal-lux, .fade-up, .draw-line').forEach((el) => {
      observer.observe(el);
    });

    return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
    }
  }, []);

  // Parallax Calculation
  // We want the text to move slightly and the image to move at a different rate
  const textTranslate = scrollY * 0.2;
  const imageTranslate = scrollY * 0.1;

  return (
    <div className="w-full bg-[#020202] overflow-x-hidden text-[#C0C0C0]">
      
      {/* 1. HERO SECTION: Asymmetric Luxury Split */}
      <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between overflow-hidden pt-20 lg:pt-0">
        
        {/* RIGHT SIDE: The Visual Anchor (Background on Mobile, Right Split on Desktop) */}
        <div 
            className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0 pointer-events-none"
        >
            {/* The Image Container with Gradient Mask */}
            <div className="w-full h-full mask-gradient-left" style={{ transform: `translateY(${imageTranslate}px)` }}>
                 {/* Ken Burns Effect Image */}
                 <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2560&auto=format&fit=crop" 
                    alt="Rooftop Dining Ambience" 
                    className="w-full h-full object-cover animate-ken-burns opacity-60 lg:opacity-80"
                 />
            </div>
            
            {/* Ambient Glow behind image for the "Opening Brightly" feel */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D6AD60]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        </div>

        {/* LEFT SIDE: The Narrative (Text) */}
        <div className="relative z-10 w-full lg:w-[45%] h-full flex flex-col justify-center px-6 md:px-12 lg:pl-24 pt-32 lg:pt-0">
            
            <div style={{ transform: `translateY(-${textTranslate}px)` }} className="relative">
                {/* Decorative Label */}
                <div className="flex items-center gap-4 mb-8 animate-slide-right delay-100">
                    <div className="w-12 h-[1px] bg-[#D6AD60]"></div>
                    <span className="text-[#D6AD60] text-xs font-bold tracking-[0.4em] uppercase">Est. 2024</span>
                </div>

                {/* Main Title - Left Aligned & Stacked */}
                <h1 className="font-cinzel text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white tracking-tighter mb-8 animate-slide-right delay-200">
                    <span className="block text-shimmer">SKY</span>
                    <span className="block text-white">DINE</span>
                </h1>

                {/* Subtitle / Description */}
                <p className="font-serif-italic text-2xl md:text-3xl text-white/80 font-light mb-8 max-w-md animate-slide-right delay-300">
                    Taste the horizon.
                </p>
                <p className="font-sans text-white/50 text-sm leading-relaxed max-w-sm mb-12 animate-slide-right delay-500 hidden md:block">
                    A celestial dining experience perched above Vadodara. 
                    Where culinary artistry meets the infinite sky.
                </p>

                {/* Action Buttons - Left Aligned */}
                <div className="flex flex-col sm:flex-row gap-6 animate-slide-right delay-700">
                    <Link 
                        to="/order-online" 
                        className="group relative px-10 py-5 bg-[#D6AD60] overflow-hidden flex items-center justify-between w-fit gap-8"
                    >
                        <div className="absolute inset-0 w-0 bg-white transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black text-xs font-bold uppercase tracking-[0.25em] group-hover:text-black transition-colors z-10">
                            Reserve Table
                        </span>
                        <MoveRight className="relative w-4 h-4 text-black z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link 
                        to="/menu" 
                        className="group relative px-10 py-5 border border-white/20 overflow-hidden flex items-center justify-center w-fit"
                    >
                        <span className="relative text-white text-xs font-bold uppercase tracking-[0.25em] group-hover:text-[#D6AD60] transition-colors">
                            Explore Menu
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        
        {/* Scroll Indicator (Absolute Bottom Left) */}
        <div className="absolute bottom-12 left-6 md:left-24 z-20 animate-fade-up delay-700 flex items-center gap-4">
             <div className="w-[1px] h-12 bg-gradient-to-b from-[#D6AD60] to-transparent"></div>
             <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 writing-vertical-rl rotate-180">Scroll to Explore</span>
        </div>

      </section>


      {/* 2. THE EDITORIAL: Vision & Philosophy */}
      <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Image Composition - Using enhanced lux reveal */}
            <div className="relative group">
                <div className="reveal-lux aspect-[3/4] md:aspect-[4/5] overflow-hidden border border-white/5 bg-white/5 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                        alt="Interior" 
                        className="reveal-lux-inner w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -right-10 md:-right-10 bg-[#D6AD60] p-8 md:p-10 z-20 fade-up transition-transform duration-500 hover:scale-105 shadow-[0_0_50px_rgba(214,173,96,0.2)]">
                    <h3 className="font-cinzel text-black text-5xl md:text-6xl font-bold leading-none">06</h3>
                    <p className="text-black/80 text-xs uppercase tracking-widest mt-2 font-bold">Floor<br/>Level</p>
                </div>
            </div>
            
            {/* Text Content */}
            <div className="lg:pl-12">
                <div className="mb-6 fade-up">
                     <span className="text-[#D6AD60] font-cinzel text-sm tracking-[0.4em] uppercase block">The Vision</span>
                </div>
                
                <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1] fade-up tracking-tight">
                    A SANCTUARY <br/>
                    <span className="font-serif-italic text-[#D6AD60] text-3xl md:text-4xl lg:text-5xl">For The Senses.</span>
                </h2>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#D6AD60] to-transparent mb-10 opacity-50 relative draw-line"></div>

                <div className="fade-up space-y-6">
                    <p className="text-white/60 font-light leading-relaxed text-lg">
                        Sky Dine is not merely a restaurant; it is an observatory for the senses. 
                        Perched above the city's cacophony, we offer a sanctuary of silence, starlight, and spice.
                    </p>
                    <p className="text-white/40 font-light leading-relaxed text-sm">
                        Our glass dome seating provides an uninterrupted dialogue with the sky, while our kitchen
                        orchestrates a symphony of North Indian fire and Pan-Asian precision.
                    </p>
                </div>

                <div className="mt-12 fade-up">
                    <Link to="/about" className="group inline-flex items-center gap-4 text-white uppercase tracking-[0.2em] text-xs font-bold hover:text-[#D6AD60] transition-colors">
                        Read Our Story <div className="w-8 h-[1px] bg-white group-hover:w-16 group-hover:bg-[#D6AD60] transition-all"></div>
                    </Link>
                </div>
            </div>
        </div>
      </section>


      {/* 3. THE TRIPTYCH: Highlights (Refined) */}
      <section className="py-24 px-6 md:px-12 border-y border-white/5 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
            {/* Centered Header */}
            <div className="text-center mb-20 fade-up">
                <span className="text-[#D6AD60] text-xs uppercase tracking-[0.6em] block mb-4">Curated</span>
                <h2 className="font-cinzel text-4xl md:text-5xl text-white">SIGNATURES</h2>
                <div className="w-[1px] h-12 bg-white/10 mx-auto mt-8"></div>
            </div>

            {/* Cards - Enhanced lux reveal staggered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "The Tandoor", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1500&auto=format&fit=crop", desc: "Smoked & Charred" },
                    { title: "The Wok", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1469&auto=format&fit=crop", desc: "Steam & Spice" },
                    { title: "The Spirits", img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1469&auto=format&fit=crop", desc: "Mocktails & Elixirs" }
                ].map((item, idx) => (
                    <Link to="/menu" key={idx} className="group relative block w-full max-w-sm mx-auto md:max-w-none reveal-lux overflow-hidden h-[400px] md:h-[500px]" style={{ transitionDelay: `${idx * 0.2}s` }}>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10"></div>
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="reveal-lux-inner w-full h-full object-cover transition-transform duration-[1.5s] ease-out"
                        />
                        
                        {/* Elegant Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="font-cinzel text-2xl text-white mb-2">{item.title}</h3>
                            <div className="flex items-center gap-4">
                                <span className="text-[#D6AD60] text-[10px] uppercase tracking-widest">{item.desc}</span>
                                <div className="h-[1px] w-8 bg-white/30 group-hover:w-16 group-hover:bg-[#D6AD60] transition-all"></div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
            <div className="mt-16 text-center fade-up">
                 <Link to="/menu" className="inline-block px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                        View Full Menu
                 </Link>
            </div>
        </div>
      </section>

      {/* 4. FEATURED REVIEW */}
      <section className="py-32 md:py-48 px-6 bg-[#020202] border-b border-white/5 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D6AD60]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="fade-up">
                <Quote className="w-8 h-8 text-[#D6AD60] mx-auto mb-12 opacity-80" />
            </div>
            <p className="font-serif-italic text-3xl md:text-5xl text-white/90 leading-relaxed mb-12 fade-up">
                "{REVIEWS[4].text}"
            </p>
            <div className="flex flex-col items-center gap-4 mb-12 fade-up">
                 <div className="flex gap-2 text-[#D6AD60]">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                 </div>
                 <span className="font-cinzel text-white text-xs tracking-[0.2em] uppercase">{REVIEWS[4].name}</span>
            </div>
            <div className="fade-up">
                <Link to="/reviews" className="text-white/50 border-b border-white/20 hover:text-[#D6AD60] hover:border-[#D6AD60] transition-colors pb-1 text-xs uppercase tracking-widest">
                    View The Guestbook
                </Link>
            </div>
        </div>
      </section>

      {/* 5. CONTACT & LOCATION */}
      <section className="py-32 px-6 bg-[#050505] border-b border-white/5 relative z-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="fade-up order-2 lg:order-1">
                <span className="text-[#D6AD60] text-xs tracking-[0.5em] uppercase block mb-6">Reach Us</span>
                <h2 className="font-cinzel text-5xl md:text-6xl text-white mb-10 leading-none">Begin Your<br/>Ascent.</h2>
                <div className="space-y-8 text-white/60 font-light mb-12">
                    <p className="max-w-md text-lg leading-relaxed">{RESTAURANT_INFO.address}</p>
                    <p className="font-cinzel text-white text-2xl">{RESTAURANT_INFO.phone[0]}</p>
                </div>
                <Link to="/contact" className="group inline-flex items-center gap-4 text-white uppercase tracking-[0.2em] text-xs font-bold hover:text-[#D6AD60] transition-colors border-b border-white/20 pb-2 hover:border-[#D6AD60]">
                    Visit Contact Page <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
            
            {/* Maps iframe reveal enhanced */}
            <div className="relative h-[400px] w-full bg-white/5 reveal-lux order-1 lg:order-2 border border-white/10 group shadow-2xl">
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#D6AD60] opacity-50 z-20"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#D6AD60] opacity-50 z-20"></div>
                
                <iframe 
                    src={RESTAURANT_INFO.mapEmbedUrl} 
                    className="w-full h-full grayscale invert opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                ></iframe>
            </div>
        </div>
      </section>

      {/* 6. FINAL INVITATION */}
      <section className="h-[50vh] flex items-center justify-center relative bg-[#020202] overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-radial-gradient from-[#D6AD60]/10 to-transparent opacity-30 animate-pulse"></div>
        
        <div className="relative z-10 text-center px-6">
                <div className="fade-up mb-8">
                     <Star className="w-6 h-6 text-[#D6AD60] mx-auto animate-spin-slow" />
                </div>
                
                <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-6 leading-tight fade-up">
                We Await The Pleasure<br/> Of Your Company.
                </h2>
                
                <p className="font-serif-italic text-white/50 text-xl mb-10 fade-up">
                    Come, dine amongst the stars.
                </p>
        </div>
      </section>

    </div>
  );
};

export default Home;