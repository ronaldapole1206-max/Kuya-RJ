import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920&h=1080')`
          } as React.CSSProperties}
        />
        <div className="absolute inset-0 bg-onyx/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-gold text-sm tracking-[0.4em] uppercase block mb-4">Established 2012 — Paris</span>
          <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter leading-none italic">
            The Art of <br />
            <span className="not-italic text-gold">Pure Flavor</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-ivory/80 max-w-2xl mx-auto leading-relaxed italic">
            "Experience an orchestral fusion of seasonal ingredients and avant-garde culinary techniques in the heart of the city."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
            <button className="bg-gold text-onyx px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-ivory transition-all transform hover:-translate-y-1">
              View the Menu
            </button>
            <button className="border border-ivory text-ivory px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-ivory hover:text-onyx transition-all transform hover:-translate-y-1">
              Our Philosophy
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
        <ChevronDown className="text-gold w-6 h-6" />
      </motion.div>
      
      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 hidden xl:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/5 hidden xl:block" />
    </section>
  );
}
