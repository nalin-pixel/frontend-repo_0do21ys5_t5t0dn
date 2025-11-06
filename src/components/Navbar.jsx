import { useState } from 'react';
import { ShoppingCart, Search, User, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 grid place-items-center text-white">
            <Sparkles size={16} />
          </div>
          <span className="text-xl font-semibold tracking-tight text-neutral-900 group-hover:text-teal-700 transition-colors">GiftRush</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-neutral-700">
          <a href="#shop" className="hover:text-neutral-900 transition-colors">Shop</a>
          <a href="#vendors" className="hover:text-neutral-900 transition-colors">Vendors</a>
          <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-100/80 focus-within:ring-2 ring-teal-500">
            <Search size={18} className="text-neutral-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find the perfect gift near you"
              className="bg-transparent outline-none placeholder:text-neutral-500 text-sm w-64"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors" aria-label="Account">
            <User size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors" aria-label="Cart">
            <ShoppingCart size={20} />
          </button>
          <a
            href="#vendors"
            className="hidden sm:inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            Become a Vendor
          </a>
        </div>
      </div>
    </header>
  );
}
