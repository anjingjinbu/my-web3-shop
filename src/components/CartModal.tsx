import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl z-10 overflow-hidden animate-fade-in-up">
        <div className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-bold">购物车</h2>
          </div>
          <button onClick={onClose} className="hover:text-red-400 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>购物车是空的</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-100">
                  <div className="flex-1 pr-4">
                    <h4 className="text-sm font-medium text-slate-700 line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      ¥ {item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-fuchsia-600 text-sm">
                      ¥ {(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-600 font-medium">总计</span>
              <span className="text-xl font-bold text-fuchsia-600">¥ {total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors shadow-lg shadow-blue-500/30">
              立即结算
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;