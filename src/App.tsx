import React, { useState, useMemo } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import AnnouncementCard from './components/AnnouncementCard';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import { PRODUCTS } from '../constants';
import { CartItem, Product, ProductCategory } from './types';
import { Zap, LayoutGrid } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to add items to cart
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Function to remove items
  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Calculate total items
  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  // Define Sections
  const SECTIONS = [
    {
      id: 'kyc',
      category: ProductCategory.KYC,
      title: '撸毛KYC专区',
      icon: <div className="bg-slate-800 text-white px-1.5 py-0.5 rounded text-xs font-bold tracking-wide">KYC</div>
    },
    {
      id: 'proxy',
      category: ProductCategory.PROXY,
      title: '海外静态代理 | 测试水 | 撸毛套装',
      icon: <Zap className="w-5 h-5 text-blue-600 fill-current" />
    },
    // Add other sections if products exist
    {
      id: 'other',
      category: ProductCategory.SOCIAL,
      title: '社交媒体账号',
      icon: <LayoutGrid className="w-5 h-5 text-purple-600" />
    },
    {
      id: 'email',
      category: ProductCategory.EMAIL,
      title: '邮箱账号',
      icon: <LayoutGrid className="w-5 h-5 text-green-600" />
    }
  ];

  return (
    <div className="relative min-h-screen font-sans pb-20 text-slate-800">
      <Background />
      
      <Header 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="container mx-auto px-4 py-8 max-w-5xl relative z-10">
        <AnnouncementCard />
        
        {/* Product Sections Loop */}
        <div className="space-y-8">
          {SECTIONS.map((section) => {
             const sectionProducts = PRODUCTS.filter(p => p.category === section.category);
             if (sectionProducts.length === 0) return null;

             return (
               <ProductList 
                 key={section.id}
                 title={section.title}
                 headerIcon={section.icon}
                 products={sectionProducts} 
                 onAddToCart={addToCart} 
               />
             );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-slate-400 text-xs py-8 relative z-10">
        <p>© 2024 安静撸空投工具. All Rights Reserved.</p>
        <p className="mt-1">本站仅用于技术学习交流，请勿用于非法用途</p>
      </footer>

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default App;