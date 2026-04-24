/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FoodItem } from "./types";
import { TopAppBar, BottomNavBar } from "./components/Shared";
import { WelcomeScreen } from "./components/Welcome";
import { MenuScreen } from "./components/Menu";
import { CartScreen } from "./components/Cart";
import { CheckoutScreen } from "./components/Checkout";
import { TrackingScreen } from "./components/Tracking";

type AppView = "welcome" | "menu" | "cart" | "checkout" | "tracking" | "orders";

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>("welcome");
  const [cart, setCart] = useState<{ item: FoodItem; quantity: number }[]>([]);

  const cartCount = useMemo(() => cart.reduce((acc, curr) => acc + curr.quantity, 0), [cart]);

  const addToCart = (item: FoodItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(i => {
        if (i.item.id === id) {
          const next = i.quantity + delta;
          return { ...i, quantity: Math.max(0, next) };
        }
        return i;
      }).filter(i => i.quantity > 0);
    });
  };

  const renderView = () => {
    switch (currentView) {
      case "welcome":
        return <WelcomeScreen onStart={() => setCurrentView("menu")} />;
      case "menu":
        return <MenuScreen onAddToCart={addToCart} />;
      case "cart":
        return (
          <CartScreen 
            items={cart} 
            onUpdateQuantity={updateQuantity} 
            onCheckout={() => setCurrentView("checkout")} 
          />
        );
      case "checkout":
        return (
          <CheckoutScreen 
            onBack={() => setCurrentView("cart")} 
            onComplete={() => {
              setCart([]);
              setCurrentView("tracking");
            }} 
          />
        );
      case "tracking":
        return <TrackingScreen onReset={() => setCurrentView("menu")} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center py-24">
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <button onClick={() => setCurrentView("menu")} className="mt-4 text-primary underline">Back to Menu</button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentView !== "welcome" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TopAppBar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`mx-auto max-w-7xl px-6 ${currentView === 'welcome' ? 'p-0' : 'pt-24 pb-32'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {currentView !== "welcome" && currentView !== "checkout" && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
          >
            <BottomNavBar 
              activeTab={currentView === 'tracking' ? 'orders' : currentView} 
              onTabChange={(tab) => setCurrentView(tab as AppView)}
              cartCount={cartCount}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
