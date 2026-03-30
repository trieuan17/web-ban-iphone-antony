import { useNavigate } from 'react-router-dom';

export default function Warranty() {
  const navigate = useNavigate();
  
  const policies = [
    { title: "Dùng thử 7 ngày", desc: "Lỗi là đổi, không cần lý do. Hoàn tiền 100% nếu máy không zin." },
    { title: "Bảo hành phần cứng", desc: "12 tháng lỗi nhà sản xuất. Hỗ trợ thay thế linh kiện giá gốc trọn đời." },
    { title: "Bảo hành Pin", desc: "Thay pin miễn phí nếu dung lượng dưới 80% trong 6 tháng đầu." },
    { title: "Phần mềm", desc: "Hỗ trợ fix lỗi, nâng cấp iOS, cài đặt app bản quyền miễn phí vĩnh viễn." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button onClick={() => navigate('/')} className="mb-10 font-bold text-blue-600">← TRANG CHỦ</button>
        
        <h1 className="text-5xl font-black mb-4 tracking-tighter">Chế độ hậu mãi.</h1>
        <p className="text-xl text-gray-500 mb-16">Chúng tôi cam kết chất lượng trên từng chiếc máy bán ra.</p>

        <div className="grid gap-8">
          {policies.map((p, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-[30px] border border-gray-100 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-black mb-2 italic uppercase text-blue-600">{p.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}