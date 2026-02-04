import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop", class: "col-span-1 md:col-span-2 row-span-2", title: "The Atmosphere" },
    { url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop", class: "col-span-1 row-span-1", title: "Private Dining" },
    { url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1469&auto=format&fit=crop", class: "col-span-1 row-span-1", title: "Artifacts" },
    { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1374&auto=format&fit=crop", class: "col-span-1 row-span-2", title: "Nightfall" },
    { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop", class: "col-span-1 md:col-span-2 row-span-1", title: "Culinary Craft" },
    { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop", class: "col-span-1 row-span-1", title: "Fresh Produce" },
  ];

  return (
    <div className="bg-[#020202] min-h-screen pt-32 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <header className="mb-24">
                 <span className="text-[#D6AD60] text-xs tracking-[0.5em] uppercase block mb-4">Perspective</span>
                 <h1 className="font-cinzel text-6xl md:text-9xl text-white tracking-tighter">VISUALS</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[350px]">
                {images.map((img, idx) => (
                    <div key={idx} className={`${img.class} relative group overflow-hidden cursor-none`}>
                        {/* Image Layer */}
                        <img 
                            src={img.url} 
                            alt={img.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                        />
                        
                        {/* Overlay Layer */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                            {/* Floating Lens Effect */}
                            <div className="w-32 h-32 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 delay-100">
                                <span className="font-cinzel text-white text-[10px] uppercase tracking-[0.25em] text-center px-2">
                                    {img.title}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center">
                 <p className="font-serif-italic text-white/40 text-2xl">"We eat first with our eyes."</p>
            </div>
        </div>
    </div>
  );
};

export default Gallery;