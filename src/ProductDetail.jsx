import { useParams, useNavigate } from 'react-router-dom';
import { products } from './data';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  
  // Quản lý ảnh đang hiển thị và variant đang chọn
  const [selected, setSelected] = useState(null);
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    if (product) {
      setSelected(product.variants[0]);
      // Nếu data có mảng images thì lấy cái đầu tiên, không thì lấy image đơn
      setActiveImg(product.images ? product.images[0] : product.image);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product || !selected) return <div className="p-20 text-center font-bold text-gray-400 font-sans">Đang tải sản phẩm...</div>;

  const MY_PHONE = "0862524754"; 
  const TELE_USER = "antbtdev"; 

  const handleTeleOrder = () => {
    const text = `Chào bạn, mình muốn mua: ${product.name} (${product.storage}) - Bản ${selected.condition}. Giá: ${new Intl.NumberFormat('vi-VN').format(selected.price)}đ.`;
    window.open(`https://t.me/${TELE_USER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${MY_PHONE}`;
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <button onClick={() => navigate(-1)} className="group flex items-center gap-2 text-gray-400 hover:text-black font-bold transition-all uppercase text-xs tracking-widest">
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span> Quay lại cửa hàng
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 pb-20">
        
        {/* KHỐI ALBUM ẢNH */}
        <div className="space-y-4">
          <div className="bg-[#fbfbfd] rounded-[40px] p-10 flex items-center justify-center border border-gray-50 shadow-sm overflow-hidden h-[500px]">
            <img 
              src={activeImg} 
              alt={product.name} 
              className="w-full h-full object-contain mix-blend-multiply transition-all duration-500" 
            />
          </div>
          
          {/* Danh sách ảnh nhỏ bên dưới (Thumbnail) */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-4 justify-center">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImg(img)}
                  className={`w-20 h-20 rounded-2xl border-2 overflow-hidden bg-gray-50 p-2 transition-all ${activeImg === img ? 'border-blue-500 scale-105 shadow-md' : 'border-gray-100 opacity-60'}`}
                >
                  <img src={img} className="w-full h-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* KHỐI THÔNG TIN */}
        <div className="flex flex-col justify-center">
          <div className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black tracking-[0.2em] mb-4 w-fit uppercase">
            Sẵn hàng tại kho
          </div>
          
          <h1 className="text-5xl font-black text-gray-900 mb-1 leading-tight tracking-tighter">
            {product.name}
          </h1>
          <p className="text-2xl text-gray-400 font-medium mb-8 uppercase tracking-widest italic">
            {product.storage} • MÁY ĐẸP TUYỂN CHỌN
          </p>

          <div className="mb-10">
            <p className="text-xs font-black text-gray-900 mb-4 uppercase tracking-widest">
               1. Chọn ngoại hình mong muốn:
            </p>
            <div className="flex flex-wrap gap-3">
              {product.variants.map(v => (
                <button 
                  key={v.condition}
                  onClick={() => setSelected(v)}
                  className={`px-6 py-4 rounded-2xl border-2 font-black transition-all duration-300 ${
                    selected.condition === v.condition 
                    ? 'border-black bg-black text-white scale-105 shadow-xl shadow-gray-200' 
                    : 'border-gray-100 text-gray-400 hover:border-gray-300'
                  }`}
                >
                  {v.condition}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <p className="text-xs font-black text-gray-400 uppercase mb-2">Giá chốt ưu đãi:</p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black text-red-600 tracking-tighter">
                {new Intl.NumberFormat('vi-VN').format(selected.price)}
              </span>
              <span className="text-2xl font-bold text-red-600">đ</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onClick={handleCall} className="bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-3">
              📞 GỌI TRỰC TIẾP
            </button>
            <button onClick={handleTeleOrder} className="bg-[#24A1DE] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#208fbc] transition-all active:scale-95 flex items-center justify-center gap-3">
              ✈️ TELEGRAM
            </button>
          </div>
          
          {/* Cam kết bổ sung */}
          <div className="mt-10 p-6 bg-blue-50/50 rounded-3xl border border-blue-100/50">
             <h4 className="font-bold text-blue-800 text-sm mb-2 uppercase italic italic">Dịch vụ đặc biệt:</h4>
             <ul className="text-xs text-blue-700 space-y-2 font-medium">
                <li>• Trả góp 0% qua thẻ tín dụng hoặc CCCD.</li>
                <li>• Thu cũ đổi mới lên đời trợ giá đến 2 triệu.</li>
                <li>• Tặng dán cường lực & ốp lưng trọn đời máy.</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}