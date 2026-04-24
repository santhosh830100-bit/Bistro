import { motion } from "motion/react";
import { Minus, Plus, ArrowRight, Trash2 } from "lucide-react";
import { FoodItem } from "../types";

interface CartProps {
  items: { item: FoodItem; quantity: number }[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

export function CartScreen({ items, onUpdateQuantity, onCheckout }: CartProps) {
  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6">
          <Trash2 className="w-10 h-10 text-on-surface-variant" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-on-surface-variant max-w-xs">Explore our menu to find your next delicious meal.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-end justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight">Your Cart</h2>
        <span className="bg-primary-container/10 border border-primary-container/20 text-primary-container px-3 py-1 rounded-full text-sm font-bold">
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {items.map(({ item, quantity }, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex gap-4 glass-panel p-4 rounded-2xl items-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container-high relative z-10 border border-white/5">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col flex-grow z-10">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-xs text-on-surface-variant mb-4">{item.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary-fixed-dim">₹{item.price.toFixed(2)}</span>
                <div className="flex items-center glass-panel rounded-full p-1 border border-white/10">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center font-bold">{quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-surface-container-low/50 backdrop-blur-md rounded-2xl p-6 border border-white/5 space-y-4">
        <h3 className="text-xl font-bold border-b border-white/5 pb-3">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-on-surface-variant">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span>Tax (8.5%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-2xl font-bold text-primary pt-4 border-t border-white/5">
            <span>Total</span>
            <span className="glow-text tracking-tight">₹{total.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-xs text-right text-on-surface-variant opacity-60 italic">Counter Pickup • No Delivery Fee</p>
      </div>

      <button 
        onClick={onCheckout}
        className="w-full bg-primary-container text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold active-glow shadow-xl shadow-primary-container/20 group hover:brightness-110 active:scale-95 transition-all"
      >
        <span>Proceed to Payment</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
