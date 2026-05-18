import { Instagram, Facebook, Twitter, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-onyx text-ivory py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="text-gold w-6 h-6" />
            <span className="font-display text-xl font-bold tracking-tighter uppercase italic">L'Essence</span>
          </div>
          <p className="text-sm font-serif italic text-ivory/50 leading-relaxed">
            Cultivating the sublime through the pure essence of taste since 2012.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Dining</h4>
          <ul className="space-y-4 text-sm font-medium opacity-60">
            <li><a href="#menu" className="hover:text-gold transition-colors">The Menu</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Wine List</a></li>
            <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Private Dining</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Reach Out</h4>
          <ul className="space-y-4 text-sm font-medium opacity-60">
            <li>72 Rue de Varenne</li>
            <li>75007 Paris, France</li>
            <li>+33 1 45 55 01 23</li>
            <li>contact@lessence.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Journal</h4>
          <p className="text-sm italic opacity-50">Subscribe for early access to seasonal updates and events.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-gold transition-colors text-sm"
            />
            <button className="absolute right-0 bottom-2 text-xs uppercase tracking-widest font-bold text-gold">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] opacity-30">
        <p>© 2024 L'Essence Paris — All Rights Reserved</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
