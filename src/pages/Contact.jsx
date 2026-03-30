import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  // Thông tin cấu hình
  const MY_PHONE = "0862524754";
  const TELE_USER = "antbtdev";

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        {/* Nút quay lại */}
        <button 
          onClick={() => navigate('/')} 
          className="group mb-12 flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-all"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> QUAY LẠI TRANG CHỦ
        </button>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Cột trái: Thông điệp chính */}
          <div>
            <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-tight italic uppercase">
              Hỗ trợ <br /> 24/7 Online.
            </h1>
            <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
              Dù bạn ở đâu, chúng tôi luôn sẵn sàng tư vấn và giao hàng tận nơi. 
              Mọi sản phẩm đều được kiểm tra kỹ lưỡng trước khi đóng gói.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Tư vấn nhanh</p>
                <p className="text-lg font-bold text-gray-800 mb-4 italic">Giải đáp mọi thắc mắc qua Telegram</p>
                <a 
                  href={`https://t.me/${TELE_USER}`} 
                  target="_blank" 
                  className="inline-block bg-[#24A1DE] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 active:scale-95 transition-transform"
                >
                  NHẮN TIN NGAY
                </a>
              </div>

              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Hotline hỗ trợ</p>
                <p className="text-lg font-bold text-gray-800 mb-4 italic">Gọi trực tiếp để chốt đơn hỏa tốc</p>
                <a 
                  href={`tel:${MY_PHONE}`} 
                  className="inline-block bg-black text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-gray-200 active:scale-95 transition-transform"
                >
                  GỌI: {MY_PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Cột phải: Chính sách Online (Tạo sự tin tưởng) */}
          <div className="bg-blue-600 rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decor nền */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            
            <h2 className="text-3xl font-black mb-10 italic uppercase tracking-tighter relative z-10">Cam kết mua hàng Online.</h2>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-5">
                <span className="text-3xl">📦</span>
                <div>
                  <h3 className="font-bold text-lg">Đóng gói chuẩn Apple</h3>
                  <p className="text-blue-100 text-sm">Chống sốc 3 lớp, bảo hiểm hàng hóa 100% trong quá trình vận chuyển.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="text-3xl">🛡️</span>
                <div>
                  <h3 className="font-bold text-lg">Kiểm hàng rồi mới trả tiền</h3>
                  <p className="text-blue-100 text-sm">Bạn được quyền mở hộp, kiểm tra ngoại hình và chức năng trước khi thanh toán (Ship COD).</p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="text-3xl">📱</span>
                <div>
                  <h3 className="font-bold text-lg">Video thực tế 100%</h3>
                  <p className="text-blue-100 text-sm">Khách hàng cần xem máy nào shop sẽ quay video chi tiết máy đó gửi qua Tele trước khi gửi.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 text-center">
              <p className="text-xs font-bold text-blue-200 uppercase tracking-[0.3em]">Hàng chất - Giá thật - Uy tín làm đầu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}