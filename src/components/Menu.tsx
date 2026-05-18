import { motion } from 'motion/react';
import { useState } from 'react';

const MENU_DATA = {
  Starters: [
    { name: "Smoked Scallops", price: "€28", description: "Yuzu gel, pickled radish, brown butter emulsion" },
    { name: "Forest Mushroom Consommé", price: "€24", description: "Winter truffle, wild herbs, crispy shallots" },
    { name: "Heritage Beetroot", price: "€22", description: "Goat's curd, hazelnut crumble, balsamic pearls" },
  ],
  Mains: [
    { name: "Atlantic Cod", price: "€42", description: "Saffron risotto, samphire, champagne foam" },
    { name: "Aged Wagyu Sirloin", price: "€65", description: "Bone marrow jus, pomme purée, charred leeks" },
    { name: "Roasted Artichoke", price: "€38", description: "Almond crema, preserved lemon, herb oil" },
  ],
  Desserts: [
    { name: "Dark Chocolate Fondant", price: "€18", description: "Salted caramel, espresso gelato, gold leaf" },
    { name: "Lemon Bergamot Tart", price: "€16", description: "Meringue cloud, basil sorbet, mint" },
    { name: "Artisanal Cheese Board", price: "€22", description: "Selection of 5 regional cheeses, quince paste" },
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof MENU_DATA>('Starters');

  return (
    <section id="menu" className="py-32 bg-onyx text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <span className="text-gold tracking-[0.4em] uppercase text-xs">Curated Selection</span>
          <h2 className="font-display text-6xl italic">The Seasonal Menu</h2>
          <div className="h-[1px] w-48 bg-gold/30 mx-auto mt-8" />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-12 mb-20">
          {(Object.keys(MENU_DATA) as Array<keyof typeof MENU_DATA>).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-[0.3em] transition-all relative py-2 ${
                activeCategory === cat ? 'text-gold' : 'text-ivory/40 hover:text-ivory'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="menuUnderline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          {MENU_DATA[activeCategory].map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group border-b border-white/5 pb-8 flex flex-col justify-between hover:border-gold/30 transition-colors"
            >
              <div className="flex justify-between items-end mb-4">
                <h3 className="font-display text-2xl group-hover:text-gold transition-colors italic">{item.name}</h3>
                <span className="font-mono text-sm tracking-tighter opacity-60">{item.price}</span>
              </div>
              <p className="font-serif italic text-lg text-ivory/60 leading-relaxed max-w-md">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-[10px] text-ivory/30 uppercase tracking-[0.5em] mb-8">Full Experience Tasting Menu Available — €185</p>
          <button className="border border-gold text-gold px-12 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-onyx transition-all duration-300">
            Download Wine List
          </button>
        </div>
      </div>
    </section>
  );
}
