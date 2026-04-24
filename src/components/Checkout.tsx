import { motion } from "motion/react";
import { ArrowLeft, Clock, CreditCard, Wallet, Banknote, ShieldCheck, MapPin } from "lucide-react";

export function CheckoutScreen({ onBack, onComplete }: { onBack: () => void, onComplete: () => void }) {
  return (
    <div className="flex flex-col gap-8 pb-32">
      <header className="flex items-center gap-4">
        <button onClick={onBack} className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-surface-container transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-3xl font-extrabold tracking-tight">Checkout</h1>
      </header>

      {/* Delivery Section */}
      <section className="glass-panel p-6 rounded-2xl space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-primary-container" />
          </div>
          <div className="flex-grow">
            <h2 className="font-bold">Counter Pickup</h2>
            <p className="text-sm text-on-surface-variant">BISTRO Downtown • Counter 4</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-high rounded-xl p-3 border border-white/5">
          <Clock className="w-5 h-5 text-secondary-container" />
          <div className="text-sm">
            <span className="font-bold">Estimated Ready Time: </span>
            <span className="text-on-surface-variant">15 - 20 mins</span>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Payment Method</h3>
        <div className="flex flex-col gap-3">
          {[
            { id: 'card', name: 'Credit / Debit Card', info: 'Ending in 4242', icon: CreditCard },
            { id: 'upi', name: 'UPI / Digital Wallet', info: 'Instant verification', icon: Wallet },
            { id: 'cash', name: 'Cash at Counter', info: 'Pay upon arrival', icon: Banknote },
          ].map((method) => (
            <label key={method.id} className="relative flex items-center p-4 glass-panel rounded-xl cursor-pointer group hover:bg-surface-container-high transition-all">
              <input type="radio" name="payment" className="peer sr-only" defaultChecked={method.id === 'card'} />
              <div className="w-5 h-5 rounded-full border-2 border-outline-variant mr-4 flex items-center justify-center peer-checked:border-primary-container peer-checked:bg-primary-container transition-all">
                <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                  <method.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">{method.name}</p>
                  <p className="text-xs text-on-surface-variant">{method.info}</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-transparent rounded-xl peer-checked:border-primary-container/50 pointer-events-none" />
            </label>
          ))}
        </div>
      </section>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 w-full p-6 glass-panel border-t border-white/5 z-50">
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={onComplete}
            className="w-full bg-primary-container text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold active-glow hover:brightness-110 active:scale-95 transition-all"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Confirm Order & Pay</span>
          </button>
        </div>
      </div>
    </div>
  );
}
