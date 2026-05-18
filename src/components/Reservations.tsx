import { motion } from 'motion/react';
import { Calendar, Users, Clock, Mail } from 'lucide-react';

export default function Reservations() {
  return (
    <section id="reservations" className="py-32 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ivory -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-stretch">
        {/* Reservation Info */}
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-4">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">Join Us</span>
            <h2 className="font-display text-6xl italic leading-tight">Secure Your Table</h2>
            <p className="font-serif text-xl italic text-ivory/60 max-w-lg leading-relaxed">
              "We recommend booking at least two weeks in advance for weekends. For groups larger than six, please contact our events team directly."
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                <Clock className="text-gold w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Kitchen Hours</h4>
                <p className="text-ivory/60 italic">Tue-Sat: 18:30 — 22:30</p>
                <p className="text-ivory/60 italic">Sun: 12:00 — 15:30</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                <Mail className="text-gold w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Contact</h4>
                <p className="text-ivory/60 italic">concierge@lessence-paris.com</p>
                <p className="text-ivory/60 italic">+33 1 45 55 01 23</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 bg-white text-onyx p-12 shadow-2xl relative"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                  <input type="text" placeholder="Select Date" className="w-full bg-transparent border-b border-onyx/10 py-3 pl-8 text-sm focus:border-gold outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Guests</label>
                <div className="relative">
                  <Users className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                  <input type="number" placeholder="Number of guests" className="w-full bg-transparent border-b border-onyx/10 py-3 pl-8 text-sm focus:border-gold outline-none transition-colors" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
              <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-onyx/10 py-3 text-sm focus:border-gold outline-none transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
              <input type="email" placeholder="email@example.com" className="w-full bg-transparent border-b border-onyx/10 py-3 text-sm focus:border-gold outline-none transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Special Requests</label>
              <textarea placeholder="Allergies, celebrations, etc." rows={3} className="w-full bg-transparent border-b border-onyx/10 py-3 text-sm focus:border-gold outline-none transition-colors resize-none" />
            </div>

            <button type="submit" className="w-full bg-gold text-white py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-onyx transition-all duration-500">
              Request Reservation
            </button>
            <p className="text-[9px] text-center opacity-40 uppercase tracking-widest">Confirmation will be sent via email within 24 hours.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
