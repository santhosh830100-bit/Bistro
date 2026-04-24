import { useState } from "react";
import { motion } from "motion/react";
import { Search, ShoppingCart, Plus } from "lucide-react";
import { MENU_ITEMS, FoodItem } from "../types";

export function MenuScreen({ onAddToCart }: { onAddToCart: (item: FoodItem) => void }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Search Section */}
      <section>
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Taste the magic.</h1>
        <p className="text-on-surface-variant mb-6">What are you craving today?</p>
        
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 transition-colors group-focus-within:text-primary-container" />
          <input 
            type="text" 
            placeholder="Search the menu..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 bg-surface-container-high border border-outline-variant rounded-full pl-12 pr-4 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
          />
        </div>
      </section>

      {/* Category Tabs */}
      <section>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full border transition-all ${
                activeCategory === cat 
                  ? 'bg-secondary-container/20 border-secondary-container text-secondary-container' 
                  : 'border-outline-variant text-on-surface-variant hover:border-on-surface-variant'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Bento Menu Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item, index) => (
          <motion.article 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col bg-surface-container rounded-2xl overflow-hidden border border-white/5 group shadow-xl ${
              index === 0 && activeCategory === 'All' ? 'md:col-span-2 md:flex-row h-auto md:h-72' : ''
            }`}
          >
            <div className={`${index === 0 && activeCategory === 'All' ? 'md:w-1/2 w-full h-64 md:h-full' : 'h-48'} relative overflow-hidden`}>
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-lg font-bold border border-white/10 text-primary-fixed-dim">
                ₹{item.price.toFixed(2)}
              </div>
            </div>

            <div className={`p-6 flex flex-col justify-between ${index === 0 && activeCategory === 'All' ? 'md:w-1/2 w-full' : 'flex-grow'}`}>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-on-surface-variant line-clamp-3 mb-4">{item.description}</p>
                {item.tags && (
                  <div className="flex gap-2 mb-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-surface-container-high rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={() => onAddToCart(item)}
                className="w-full py-3 bg-primary-container text-white rounded-xl flex items-center justify-center gap-2 font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary-container/20"
              >
                <Plus className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
