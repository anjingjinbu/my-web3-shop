import React from 'react';
import { ShoppingCart, Archive } from 'lucide-react';
import { Product } from '../types';

interface ProductListProps {
  title: string;
  headerIcon?: React.ReactNode;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ title, headerIcon, products, onAddToCart }) => {
  if (products.length === 0) return null;

  return (
    <div className="glass-panel rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10">
      {/* Header for the section */}
      <div className="bg-slate-50/80 backdrop-blur-sm px-6 py-4 border-b border-gray-200 flex items-center gap-3">
        {headerIcon}
        <h3 className="font-bold text-slate-800 text-lg tracking-tight">{title}</h3>
      </div>

      {/* Table Header (Hidden on mobile, visible on desktop) */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50/50 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-gray-100">
        <div className="col-span-7">商品名称 / Product Name</div>
        <div className="col-span-2 text-center">单价 / Price</div>
        <div className="col-span-1 text-center">库存 / Stock</div>
        <div className="col-span-2 text-right">操作 / Action</div>
      </div>

      {/* Product Rows */}
      <div className="divide-y divide-slate-100">
        {products.map((product) => {
          const isOutOfStock = product.stock === 0;
          const isStockUnknown = product.stock === -1;
          
          return (
            <div 
              key={product.id} 
              className="group relative md:grid md:grid-cols-12 md:gap-4 px-6 py-5 items-center hover:bg-blue-50/40 transition-colors duration-200"
            >
              {/* Hover indicator line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>

              {/* Name Column */}
              <div className="col-span-7 mb-3 md:mb-0 pr-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg overflow-hidden bg-slate-100 shadow-inner">
                    {product.icon ? (
                      product.icon.startsWith('http') ? (
                        <img src={product.icon} alt="" className="w-full h-full object-cover" />
                      ) : (
                         <span className="text-xl leading-none filter drop-shadow-sm">{product.icon}</span>
                      )
                    ) : (
                      <Archive className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 leading-relaxed group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h4>
                    {product.tags && product.tags.length > 0 && (
                      <div className="flex gap-1 mt-1.5">
                        {product.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded border border-red-100 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Price Column */}
              <div className="col-span-2 flex justify-between md:justify-center items-center mb-1 md:mb-0">
                <span className="md:hidden text-xs text-gray-400 font-medium">价格</span>
                <span className="text-fuchsia-600 font-bold text-base">¥ {product.price.toFixed(2)}</span>
              </div>

              {/* Stock Column */}
              <div className="col-span-1 flex justify-between md:justify-center items-center mb-3 md:mb-0">
                <span className="md:hidden text-xs text-gray-400 font-medium">库存</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isOutOfStock ? 'bg-gray-100 text-gray-400' : 'bg-green-100 text-green-700'}`}>
                  {isStockUnknown ? '充足' : product.stock}
                </span>
              </div>

              {/* Action Column */}
              <div className="col-span-2 flex justify-end">
                <button
                  onClick={() => !isOutOfStock && onAddToCart(product)}
                  disabled={isOutOfStock}
                  className={`
                    flex items-center justify-center gap-1.5 px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-sm
                    ${isOutOfStock 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-blue-200 hover:shadow-blue-300 transform active:scale-95'
                    }
                  `}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {isOutOfStock ? '缺货' : '购买'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;