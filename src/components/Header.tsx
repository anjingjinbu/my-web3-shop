import React from 'react';
import { ShoppingCart, Search, Headset, LogIn } from 'lucide-react';
import { SITE_NAME } from '../constants';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 text-white shadow-xl supports-[backdrop-filter]:bg-[#0f172a]/60">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 md:gap-4 cursor-pointer group select-none">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
            
            {/* Logo Image Container */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden border-2 border-slate-700/50 group-hover:border-yellow-500/50 transition-colors shadow-lg">
               {/* 
                  NOTE: To use your custom uploaded image:
                  1. Place your image file in the public/assets folder (or similar)
                  2. Change the src below to require it or point to it, e.g., src="/assets/avatar.png"
               */}
               <img 
                 src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Destiny" 
                 alt="Store Logo" 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
               />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-black tracking-tight leading-none text-white group-hover:text-slate-100 transition-colors">
              {SITE_NAME}
            </h1>
            <span className="text-[10px] md:text-xs text-slate-400 font-bold tracking-[0.2em] mt-0.5 group-hover:text-yellow-500/80 transition-colors">PREMIUM WEB3 TOOLS</span>
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-2 md:gap-6 text-sm font-medium text-slate-300">
          <button 
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-all px-3 py-1.5 rounded-full hover:bg-white/10 active:scale-95"
          >
            <LogIn className="w-4 h-4" />
            <span>登录</span>
          </button>

          <div className="h-5 w-px bg-white/10 hidden md:block"></div>

          <button 
            onClick={onOpenCart}
            className="flex items-center gap-1.5 hover:text-white transition-all relative px-2 py-1.5 rounded-lg hover:bg-white/5 active:scale-95 group"
          >
            <ShoppingCart className="w-5 h-5 group-hover:fill-white/10" />
            <span className="hidden md:inline">购物车</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-md ring-2 ring-[#0f172a] animate-pulse-short">
                {cartCount}
              </span>
            )}
          </button>

          <button className="flex items-center gap-1.5 hover:text-white transition-all px-2 py-1.5 rounded-lg hover:bg-white/5 active:scale-95">
            <Search className="w-5 h-5" />
            <span className="hidden md:inline">查订单</span>
          </button>

          <button className="flex items-center gap-1.5 hover:text-white transition-all px-2 py-1.5 rounded-lg hover:bg-white/5 active:scale-95">
            <Headset className="w-5 h-5" />
            <span className="hidden md:inline">客服</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;