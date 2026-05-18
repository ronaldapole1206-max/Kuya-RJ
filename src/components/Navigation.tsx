import { motion } from 'motion/react';
import { Menu, X, UtensilsCrossed, User as UserIcon, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-onyx/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <UtensilsCrossed className="text-gold w-8 h-8" />
            <span className="font-display text-2xl font-bold tracking-tighter uppercase italic text-ivory">L'Essence</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors text-ivory"
              >
                {link.name}
              </motion.a>
            ))}
            
            <div className="h-4 w-[1px] bg-white/20 mx-2" />

            {user ? (
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-ivory">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gold/30">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon size={16} className="m-auto mt-1" />
                    )}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 max-w-[80px] truncate">
                    {user.displayName?.split(' ')[0]}
                  </span>
                </div>
                <button 
                  onClick={logout}
                  className="text-ivory/40 hover:text-gold transition-colors"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <motion.button
                onClick={() => setIsLoginOpen(true)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs uppercase tracking-[0.2em] text-ivory hover:text-gold transition-all duration-300 flex items-center gap-2"
              >
                <UserIcon size={16} />
                Sign In
              </motion.button>
            )}

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-onyx transition-all duration-300"
            >
              Book Table
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={false}
          animate={isOpen ? { x: 0 } : { x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-onyx z-40 md:hidden flex flex-col items-center justify-center gap-12"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-display italic text-ivory hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          {user ? (
            <button onClick={logout} className="text-xl font-display italic text-ivory/50">Logout</button>
          ) : (
            <button onClick={() => { setIsOpen(false); setIsLoginOpen(true); }} className="text-xl font-display italic text-ivory/50">Sign In</button>
          )}
          <button className="border border-gold text-gold px-12 py-4 text-sm uppercase tracking-widest hover:bg-gold hover:text-onyx transition-all">
            Reservations
          </button>
        </motion.div>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
