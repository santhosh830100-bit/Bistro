import { motion } from "motion/react";
import { ShoppingCart, Utensils, ReceiptText, Bell } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  cartCount: number;
}

export function TopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 glass-panel h-16 border-b border-white/5 shadow-2xl">
      <div className="flex justify-between items-center h-full px-6 max-w-7xl mx-auto">
        <button className="w-9 h-9 rounded-full overflow-hidden border border-white/10 hover:border-primary-container transition-colors">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_txELsrg9rMhxO59O-QWKIu-rI3nMv0bYD9u3A26hQ_cP0ik2OrdzCudKeTq-snALNwn555O_LegpiWzD0JNiDOshXgzoHb0cpeVWKA-KeuGkAYSu6WPemja8QaLxPGYcsgxWlEphu2PXnvqpN5oMTk8HLpEBUnKmgRdEC84F_qSgBGQi9KIKgiXsZ8cDTEtISTEi4rKV4IHx2Y4CxIgAFXitjm-lIt7JsvMCbrKU4jrlsuiFQknW7WK3EXemO9COAqtTuUg3vIk" 
            alt="User profile" 
            className="w-full h-full object-cover"
          />
        </button>
        <h1 className="text-2xl font-black italic text-primary-container tracking-tighter glow-text">BISTRO</h1>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <Bell className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export function BottomNavBar({ activeTab, onTabChange, cartCount }: Omit<LayoutProps, 'children'>) {
  const tabs = [
    { id: 'menu', label: 'Menu', icon: Utensils },
    { id: 'cart', label: 'Cart', icon: ShoppingCart },
    { id: 'orders', label: 'Orders', icon: ReceiptText },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 glass-panel h-20 border-t border-white/5 rounded-t-xl px-4 flex justify-around items-center">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-90 duration-300 relative w-16 ${
              isActive ? 'text-primary-container' : 'text-on-surface-variant'
            }`}
          >
            <div className="relative">
              <Icon className={`w-6 h-6 ${isActive ? 'fill-primary-container/20' : ''}`} />
              {tab.id === 'cart' && cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-2 bg-primary-container text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full active-glow"
                >
                  {cartCount}
                </motion.span>
              )}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
            {isActive && (
              <motion.div 
                layoutId="activeTab"
                className="absolute -bottom-1 w-1 h-1 bg-primary-container rounded-full"
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
