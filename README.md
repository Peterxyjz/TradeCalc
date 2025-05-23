# TradeCalc - Máy Tính Giá Vào Lệnh Thông Minh

> Ứng dụng tính toán giá vào lệnh cho trader, được tối ưu hoàn toàn cho điện thoại di động với giao diện hiện đại và trải nghiệm người dùng mượt mà.

## 🚀 Tính Năng Chính

### ⚙️ Thiết lập tài khoản
- Người dùng cần nhập **tên** và **số dư tài khoản (USDT)** khi lần đầu sử dụng
- Thông tin được lưu trữ an toàn trong trình duyệt

### 📊 Tính toán giá vào lệnh
Sử dụng công thức chuẩn: **`R / Đòn bẩy / SL%`**

**Các thông số:**
- **R (Risk)**: Phần trăm rủi ro chấp nhận được (% số dư tài khoản)
- **Đòn bẩy**: Hệ số nhân đòn bẩy (1x, 10x, 50x...)
- **SL (Stop Loss)**: Phần trăm stop loss

### 🎯 Tính toán SL% nâng cao
- **Chế độ thường**: Nhập trực tiếp % SL
- **Chế độ nâng cao**: Tính SL% từ giá Entry và giá SL thực tế
- Chuyển đổi linh hoạt giữa 2 chế độ

### 📉 Giảm Position Size
Tính năng mới cho phép điều chỉnh position size sau khi tính toán:
- **0.5R**: Giảm position xuống 50% (1 click)
- **Tùy chỉnh**: Nhập % giảm bất kỳ (0.1% - 99%)
- **Real-time**: Cập nhật giá vào lệnh ngay lập tức
- **Thông tin rõ ràng**: Hiển thị % giảm so với position gốc

### ⚙️ Cài đặt linh hoạt
- Thay đổi số dư tài khoản
- Thiết lập giá trị mặc định cho R, Đòn bẩy, và SL
- Đăng xuất và reset dữ liệu

### 💾 Lưu trữ dữ liệu
- Sử dụng **localStorage** để lưu trữ an toàn
- Không cần đăng ký tài khoản
- Dữ liệu chỉ lưu trong máy của bạn

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: Next.js 15.3 với App Router
- **Frontend**: React 19 với TypeScript
- **Styling**: TailwindCSS 4 + Custom CSS Variables
- **Mobile-First**: Responsive design tối ưu cho mobile
- **PWA Ready**: Progressive Web App support
- **Typography**: Geist font family cho trải nghiệm đọc tốt nhất

## 📱 Đặc điểm UI/UX

- **Mobile-First Design**: Tối ưu hoàn toàn cho điện thoại
- **Clean Interface**: Giao diện sáng, hiện đại, dễ sử dụng
- **Consistent Typography**: Hệ thống typography đồng nhất
- **Intuitive Navigation**: Luồng sử dụng trực quan
- **Real-time Feedback**: Cập nhật kết quả ngay lập tức
- **Error Handling**: Validation và thông báo lỗi rõ ràng

## 🚀 Cài Đặt & Chạy Dự Án

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### Chạy server phát triển
```bash
npm run dev
# hoặc
yarn dev
```

### Build sản phẩm
```bash
npm run build
# hoặc
yarn build
```

### Chạy bản build
```bash
npm run start
# hoặc
yarn start
```

## 📖 Hướng Dẫn Sử Dụng

### Lần đầu sử dụng
1. Mở ứng dụng
2. Nhập **tên** của bạn
3. Nhập **số dư tài khoản** (USDT)
4. Nhấn "Tiếp tục"

### Tính toán giá vào lệnh
1. Nhập **mức rủi ro** (%) - ví dụ: 2%
2. Nhập **đòn bẩy** (x) - ví dụ: 10x  
3. Nhập **SL** (%) - ví dụ: 2%
   - *Hoặc sử dụng chế độ "Nâng cao" để tính từ giá Entry/SL*
4. Nhấn "Tính giá vào lệnh"
5. Xem kết quả **Giá vào lệnh**

### Điều chỉnh position size
1. Sau khi có kết quả, sử dụng section "Giảm Position"
2. Chọn **0.5R** để giảm 50% ngay lập tức
3. Hoặc chọn **Tùy chỉnh** và nhập % muốn giảm
4. Giá vào lệnh sẽ cập nhật tự động

### Cài đặt ứng dụng
1. Nhấn biểu tượng **⚙️** ở góc trên bên phải
2. Điều chỉnh:
   - Số dư tài khoản
   - Giá trị mặc định cho R, Đòn bẩy, SL
3. Nhấn "Lưu" để áp dụng

## 🏗️ Cấu Trúc Dự Án

```
src/
├── app/
│   ├── components/
│   │   ├── Calculator.tsx      # Component tính toán chính
│   │   ├── SettingsModal.tsx   # Modal cài đặt
│   │   └── UserForm.tsx        # Form thiết lập ban đầu
│   ├── globals.css             # CSS global và design system
│   ├── layout.tsx              # Layout chính
│   └── page.tsx                # Trang chủ
public/
├── app-icon.svg                # Icon ứng dụng
├── settings-icon.svg           # Icon cài đặt
└── manifest.json               # PWA manifest
```

## 💡 Công Thức Tính Toán

### Giá vào lệnh cơ bản
```
Giá vào lệnh = (Risk Amount) / (Leverage) / (SL%)

Trong đó:
- Risk Amount = (Risk% / 100) × Số dư tài khoản
- Leverage = Đòn bẩy
- SL% = Stop Loss % / 100
```

### Ví dụ cụ thể
```
Số dư: 1000 USDT
Risk: 2% → Risk Amount = 20 USDT
Đòn bẩy: 10x
SL: 2% → 0.02

Giá vào lệnh = 20 / 10 / 0.02 = 100 USDT
```

### Giảm position size
```
Position giảm = Giá vào lệnh gốc × (% giảm / 100)

Ví dụ: 100 USDT × 50% = 50 USDT
```

## 🔒 Lưu Ý Bảo Mật

- **Dữ liệu local**: Tất cả thông tin được lưu trong trình duyệt của bạn
- **Không upload**: Không có dữ liệu nào được gửi lên server
- **Privacy-first**: Hoàn toàn riêng tư và an toàn
- **No tracking**: Không theo dõi hoặc thu thập dữ liệu người dùng

## 🎯 Roadmap Tương Lai

- [ ] **Lịch sử giao dịch**: Lưu và phân tích các lần tính toán
- [ ] **Take Profit Calculator**: Tính toán multiple TP levels
- [ ] **Risk Management**: Portfolio risk calculator
- [ ] **Multi-currency**: Hỗ trợ nhiều loại tài sản
- [ ] **Real-time Prices**: Tích hợp API giá crypto
- [ ] **Dark Mode**: Theme tối
- [ ] **Export Data**: Xuất dữ liệu CSV/Excel

## 👨‍💻 Tác Giả

**Lê Quang Huy (Peterxyjz)**
- Chuyên gia về React/Next.js và Trading Tools
- Tập trung vào UX/UI cho ứng dụng mobile

## 📄 License

Copyright © 2025 Peterxyjz - Lê Quang Huy

---

⭐ **Nếu bạn thấy dự án hữu ích, hãy cho một star nhé!**
