# TradeCalc - Máy Tính Giá Vào Lệnh

Ứng dụng tính toán giá vào lệnh cho trader, tối ưu cho điện thoại di động.

## Tính Năng Chính

- **Thiết lập tài khoản**: Người dùng cần nhập tên và số dư tài khoản (USDT) khi lần đầu sử dụng
- **Tính giá vào lệnh**: Dựa trên công thức R/Đòn bẫy/SL
  - **R (Risk)**: Phần trăm rủi ro chấp nhận được
  - **Đòn bẩy**: Hệ số nhân đòn bẩy
  - **SL (Stop Loss)**: Phần trăm stop loss
- **Cài đặt**: Cho phép người dùng thay đổi:
  - Số dư tài khoản
  - Giá trị mặc định cho R, Đòn bẩy, và SL

## Công Nghệ Sử Dụng

- Next.js 15.3
- React 19
- TypeScript
- CSS (TailwindCSS)
- LocalStorage để lưu trữ dữ liệu

## Cài Đặt

```bash
# Cài đặt dependencies
npm install

# Chạy server phát triển
npm run dev

# Build sản phẩm
npm run build

# Chạy bản build
npm run start
```

## Sử Dụng

1. Khi lần đầu truy cập, nhập tên và số dư tài khoản
2. Ở màn hình tính toán, nhập:
   - Mức rủi ro (%)
   - Đòn bẩy (x)
   - SL (%)
3. Nhấn "Tính giá vào lệnh" để xem kết quả
4. Sử dụng nút cài đặt (⚙️) để điều chỉnh các giá trị mặc định và số dư tài khoản

## Lưu Ý

- Tất cả dữ liệu được lưu trong trình duyệt của người dùng (localStorage)
- Ứng dụng được tối ưu cho thiết bị di động
- Giao diện sáng, hiện đại và dễ sử dụng
