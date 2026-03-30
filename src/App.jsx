import { useState } from 'react'
import { Link } from 'react-router-dom' // Cần import Link để điều hướng
import { products } from './data'
import ProductCard from './ProductCard'

function App() {
  const [filter, setFilter] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');

  // Thông tin cấu hình nhanh
  const MY_PHONE = "0862524754";
  const TELE_USER = "antbtdev";

  const categories = ['Tất cả', '12 Series', '13 Series', '14 Series', '15 Series', '16 Series'];

  const filteredProducts = products.filter(item => {
    const matchesCategory = filter === 'Tất cả' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f5f5f7] pb-32">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-black tracking-tighter text-blue-600">ANTONY IPHONE STORE</Link>
          
          <div className="hidden md:flex gap-6 text-sm font-bold text-gray-600">
            <Link to="/" className="text-blue-600 underline underline-offset-4">Trang chủ</Link>
            <Link to="/warranty" className="hover:text-blue-600 transition-colors">Bảo hành</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Liên hệ</Link>
          </div>

          <div className="md:hidden font-bold text-xs bg-gray-100 px-3 py-1 rounded-full">
            Menu
          </div>
        </div>
      </nav>

      {/* Hero & Search */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 uppercase italic tracking-tighter">Bảng giá hôm nay</h2>
          <p className="text-gray-500 font-medium">Sản phẩm tuyển chọn • Zin nguyên bản • Góp 0%</p>
        </div>

        {/* Thanh tìm kiếm */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Bạn đang tìm iPhone?"
              className="w-full px-6 py-4 rounded-2xl border-none bg-white shadow-xl shadow-gray-200/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all pr-12 text-lg"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
          </div>
        </div>

        {/* Bộ lọc nút bấm */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl font-black text-xs transition-all duration-300 ${
                filter === cat 
                ? 'bg-black text-white shadow-xl scale-105' 
                : 'bg-white text-gray-400 border border-gray-100 hover:border-gray-300'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid sản phẩm */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg italic font-medium">Chưa có máy này, nhắn tin shop đặt hàng nhé!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>

      {/* MOBILE DOCK - Thanh công cụ dưới cùng cho điện thoại */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-[100] md:hidden">
        <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-2 shadow-2xl flex items-center justify-between border border-white/10">
          <Link to="/warranty" className="flex flex-col items-center px-4 py-2">
            <span className="text-xl">🛡️</span>
            <span className="text-[10px] text-white font-bold mt-1">Bảo hành</span>
          </Link>
          
          <div className="h-8 w-[1px] bg-white/20"></div>

          <a href={`tel:${MY_PHONE}`} className="bg-white text-black px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-lg active:scale-95 transition-transform">
            📞 GỌI NGAY
          </a>

          <div className="h-8 w-[1px] bg-white/20"></div>

          <a href={`https://t.me/${TELE_USER}`} className="flex flex-col items-center px-4 py-2">
            <span className="text-xl">✈️</span>
            <span className="text-[10px] text-white font-bold mt-1">Tele</span>
          </a>
        </div>
      </div>

      {/* Footer desktop */}
      <footer className="max-w-6xl mx-auto px-4 mt-20 pt-10 border-t border-gray-200 text-center">
        <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">© 2026 ANTONY IPHONE STORE - Đã qua sử dụng nhưng vẫn như mới</p>
      </footer>
    </div>
  )
}

export default App