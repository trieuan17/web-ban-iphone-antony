import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ProductDetail from './ProductDetail'

// 1. Bạn phải đảm bảo đã tạo file Warranty.jsx và Contact.jsx trong thư mục src/pages/
import Warranty from './pages/Warranty' 
import Contact from './pages/Contact'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<App />} />
        
        {/* Trang chi tiết sản phẩm */}
        <Route path="/product/:id" element={<ProductDetail />} />
        
        {/* Trang Bảo hành - Thêm dòng này để hết lỗi */}
        <Route path="/warranty" element={<Warranty />} />
        
        {/* Trang Liên hệ - Thêm dòng này */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)