import { motion } from "motion/react";
import { CheckCircle2, QrCode, ArrowRight, Bike, CookingPot, ReceiptText, MessageCircle, Phone } from "lucide-react";

export function TrackingScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col gap-10">
      <header className="text-center pt-8">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex glass-panel p-6 rounded-full mb-6 active-glow"
        >
          <CheckCircle2 className="w-16 h-16 text-primary-container" />
        </motion.div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Confirmed!</h1>
        <p className="text-on-surface-variant max-w-[280px] mx-auto">
          Show this confirmation at the counter to collect your food.
        </p>
      </header>

      {/* Order Identity Card */}
      <section className="glass-panel rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
        <div className="p-8 flex flex-col items-center text-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-on-surface-variant">Order Number</span>
            <span className="text-5xl font-black text-primary-fixed-dim glow-text">#1024</span>
          </div>

          <div className="p-4 bg-white rounded-3xl active-glow">
            <div className="w-48 h-48 bg-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <QrCode className="w-40 h-40 text-white" />
              {/* Scan Overlay Effect */}
              <motion.div 
                animate={{ y: [0, 160, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-full h-1 bg-primary-container/60 blur-[2px]" 
              />
            </div>
          </div>
          
          <p className="text-xs font-bold text-on-surface-variant opacity-60 tracking-widest uppercase italic">Scan at Pickup</p>
        </div>

        {/* Tracking Details bento-style */}
        <div className="border-t border-dashed border-outline-variant/40 p-8 bg-surface-container-high/40 space-y-6">
           <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary-container">
               <CookingPot className="w-5 h-5" />
             </div>
             <div className="flex-grow">
               <p className="font-bold text-sm">Chef Marco is cooking</p>
               <p className="text-xs text-on-surface-variant">Estimated arrival: 8:45 PM</p>
             </div>
             <div className="flex gap-1">
                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary-container rounded-full" />
             </div>
           </div>

           <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-highest/20 border border-white/5">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTWMTY8zCKJ14Pg4rU8HHNbV9aiBIn6rNU66WCq_thjhxDRBylSJ6g6OSR586UhWzLnaH-gIz2OyZfLSRzBFQU_Vx2I1b29wSDriUEvqqPSFlJemF1UqRV_UbcTbiFrBUg1iBsr0xWtpyJYJKcrOD6atLFNUaOGLuN3JIuCcasYGkY7Q65vfLY2kzB04jkBO6kuMewWXw80iJheFm-XXGnq9G-SMgysasO5qfMbIA4QnglvMsXbJ4xt4ouQ45Kli7kOVQ9viAbOOQ" 
               className="w-12 h-12 rounded-full object-cover border border-white/10" 
               alt="Delivery Hero" 
             />
             <div className="flex-grow">
               <p className="font-bold text-sm">Alex M.</p>
               <p className="text-[10px] text-secondary-container">⭐ 4.9 (240+ deliveries)</p>
             </div>
             <div className="flex gap-2">
               <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-primary transition-colors">
                 <MessageCircle className="w-5 h-5" />
               </button>
               <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-primary transition-colors">
                 <Phone className="w-5 h-5" />
               </button>
             </div>
           </div>
        </div>
      </section>

      <button 
        onClick={onReset}
        className="w-full bg-primary-container text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold active-glow hover:brightness-110 active:scale-95 transition-all"
      >
        <ArrowRight className="w-5 h-5" />
        <span>Return to Menu</span>
      </button>
    </div>
  );
}
