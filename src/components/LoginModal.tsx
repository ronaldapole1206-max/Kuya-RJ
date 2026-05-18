import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-onyx/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white text-onyx p-12 z-[70] shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-onyx/20 hover:text-onyx transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <LogIn className="text-gold w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h2 className="font-display text-4xl italic">Welcome Back</h2>
                <p className="font-serif text-lg italic text-onyx/60">
                  Sign in to manage your reservations and preferences.
                </p>
              </div>

              <div className="pt-8 space-y-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full flex items-center justify-center gap-4 border border-onyx/10 py-4 hover:bg-onyx hover:text-ivory transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">Continue with Google</span>
                </button>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-onyx/5"></div>
                  </div>
                  <div className="relative flex justify-center text-[10px] uppercase tracking-widest text-onyx/30 bg-white px-4">
                    Or via Email
                  </div>
                </div>

                <div className="space-y-4 opacity-40 grayscale pointer-events-none cursor-not-allowed">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    disabled
                    className="w-full border-b border-onyx/10 py-3 text-sm outline-none"
                  />
                  <button 
                    disabled
                    className="w-full bg-onyx/10 py-4 text-xs uppercase tracking-widest"
                  >
                    Send Magic Link
                  </button>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-onyx/40 text-center">
                  Email sign-in is coming soon.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
