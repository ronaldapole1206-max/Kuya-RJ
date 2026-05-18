import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-ivory text-onyx">
      <div className="max-w-7xl mx-auto grid lg:grid-template-columns-[1fr_1.2fr] gap-24 items-center">
        {/* Left: Image with dramatic frame */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group lg:order-1"
        >
          <div className="absolute -inset-4 border-2 border-gold/30 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative overflow-hidden aspect-[4/5] bg-onyx">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Culinary excellence"
              className="w-full h-full object-cover transition-transform duration-[15s] hover:scale-125"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-8 -right-12 bg-white p-8 shadow-2xl hidden md:block">
            <span className="font-display text-4xl font-bold italic text-gold leading-none">12+</span>
            <p className="text-[10px] uppercase tracking-widest font-bold mt-2">Michelin <br />Accolades</p>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-12 lg:order-2"
        >
          <div className="space-y-4">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Our Heritage</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold italic leading-tight">
              Crafted with <br />
              <span className="not-italic text-onyx/20">Obsessive</span> Detail
            </h2>
          </div>
          
          <div className="space-y-8 font-serif text-xl leading-relaxed text-onyx/80 italic">
            <p>
              "At L'Essence, we believe that dining is more than just a meal—it's a dialogue between nature and the senses. Founded by Chef Julian Vance, our kitchen is a laboratory of taste where seasonal integrity meets artistic expression."
            </p>
            <p>
              From our rooftop herb gardens to the hand-forged ceramics on your table, every detail is considered. We source only from sustainable micro-farms within a 50-mile radius, ensuring that every bite tells the story of the land.
            </p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-12 border-t border-onyx/10">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">The Chef</h4>
              <p className="text-sm italic opacity-60">Julian Vance, Founder</p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">The Vibe</h4>
              <p className="text-sm italic opacity-60">Minimalist Fine Dining</p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Location</h4>
              <p className="text-sm italic opacity-60">Paris, Rue de Varenne</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
