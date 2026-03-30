import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [selected, setSelected] = useState(product.variants[0]);
  const [isHovered, setIsHovered] = useState(false);

  const displayImage = (isHovered && product.images && product.images.length > 1) 
    ? product.images[1] 
    : (product.images ? product.images[0] : product.image);

  return (
    <div 
      className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Phần trên: Ảnh và Tên */}
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="bg-[#f9f9fb] rounded-2xl mb-4 overflow-hidden aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <img 
            src={displayImage} 
            alt={product.name} 
            className="w-full h-full object-contain p-4 mix-blend-multiply transition-opacity duration-300" 
          />
          {selected.price < 10000000 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-sm">
              GIÁ TỐT
            </div>
          )}
        </div>
        <h3 className="font-bold text-lg text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
      </Link>
      
      {/* Phần giữa: Thông tin dung lượng và nút chọn */}
      <div className="flex-1 mt-1">
        <p className="text-gray-400 text-[10px] mb-3 font-black uppercase tracking-widest">
          DUNG LƯỢNG {product.storage}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-6">
          {product.variants.map((v) => (
            <button
              key={v.condition}
              onClick={(e) => {
                e.preventDefault();
                setSelected(v);
              }}
              className={`px-3 py-1.5 text-[10px] font-black rounded-xl border transition-all duration-300 ${
                selected.condition === v.condition 
                ? 'bg-black border-black text-white shadow-lg' 
                : 'border-gray-100 text-gray-400 hover:border-gray-300 bg-gray-50'
              }`}
            >
              {v.condition}
            </button>
          ))}
        </div>
      </div>

      {/* Phần dưới: Giá và Nút (ĐÃ FIX TRÀN) */}
      <div className="pt-4 border-t border-gray-50 flex items-center gap-2 mt-auto">
        <div className="min-w-0 flex-1"> {/* min-w-0 giúp con số không đẩy văng container */}
          <span className="text-[10px] text-gray-400 font-bold uppercase block tracking-tighter">Giá từ</span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xl font-black text-red-600 tracking-tighter truncate">
              {new Intl.NumberFormat('vi-VN').format(selected.price)}
            </span>
            <span className="text-sm font-bold text-red-600">đ</span>
          </div>
        </div>
        
        <Link 
          to={`/product/${product.id}`} 
          className="bg-gray-100 text-gray-900 group-hover:bg-blue-600 group-hover:text-white px-3 py-2.5 rounded-2xl text-[10px] font-black transition-all shadow-sm active:scale-90 whitespace-nowrap"
        >
          CHI TIẾT
        </Link>
      </div>
    </div>
  );
}