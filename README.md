# TradeCalc v2.0 - Multi-Mode Trading Calculator

> Ứng dụng tính toán position size chuyên nghiệp cho cả Crypto và Forex, được tối ưu hoàn toàn cho điện thoại di động với giao diện hiện đại và trải nghiệm người dùng mượt mà.

## 🚀 Tính Năng Chính

### 🎯 Multi-Mode Trading Support
- **🚀 Crypto Mode**: Tính position size với công thức `R / Leverage / SL%`
- **💱 Forex Mode**: Tính lot size với công thức `R / (|SL - Entry| × pips)`
- **🔄 Flexible**: Có thể dùng 1 mode hoặc cả 2, không bắt buộc
- **🎛️ Easy Switch**: Chuyển đổi mượt mà giữa Crypto và Forex

### ⚙️ Smart Account Management
- **👤 Shared User**: Tên dùng chung cho cả 2 modes
- **💰 Independent Balances**: Crypto (USDT) và Forex (USD) riêng biệt
- **📱 Progressive Setup**: Setup từng mode khi cần, không bắt buộc
- **🔧 Mode-Specific Settings**: Cài đặt riêng cho từng loại trading

### 🚀 Crypto Calculator Features
- **📈 Classic Formula**: R / Leverage / SL% (proven formula)
- **🎯 Advanced SL**: Tính SL% từ giá Entry và SL thực tế
- **📉 Position Reduction**: 0.5R hoặc custom % reduction
- **⚡ Real-time**: Cập nhật kết quả ngay lập tức
- **🎛️ Flexible Settings**: Default risk, leverage, SL values

### 💱 Forex Calculator Features  
- **🎯 Professional Formula**: Risk / (SL pips × Pip Value)
- **🤖 Smart Detection**: Auto-detect JPY pairs cho pip calculation
- **🚫 No Leverage Impact**: Đòn bẩy không ảnh hưởng position size (như Forex thực tế)
- **📊 Lot-based Results**: Hiển thị lot size (0.01, 0.1, 1.0...)
- **🔢 Simple Inputs**: Chỉ cần Risk%, Entry, SL prices

### 📉 Position Risk Management
- **0.5R Quick**: Giảm 50% position size một click
- **Custom Reduction**: Tùy chỉnh % giảm (0.1% - 99%)
- **Real-time Update**: Position size cập nhật ngay lập tức
- **Clear Info**: Hiển thị % giảm so với position gốc

### 🎨 Modern UI/UX
- **📱 Mobile-First**: Tối ưu hoàn toàn cho điện thoại
- **🎯 Clean Interface**: Giao diện sáng, hiện đại, intuitive
- **🔄 Smooth Transitions**: Chuyển đổi mode mượt mà
- **📊 Clear Results**: Typography và layout rõ ràng
- **⚡ Fast & Responsive**: Performance tối ưu

### 💾 Data Management
- **🏠 Local Storage**: Dữ liệu lưu trong browser, hoàn toàn private
- **🔒 No Cloud Sync**: Không upload data lên server
- **💾 Persistent**: Nhớ mode cuối sử dụng
- **🗑️ Easy Reset**: Logout để clear tất cả data

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: Next.js 15.3 với App Router
- **Frontend**: React 19 với TypeScript
- **Styling**: TailwindCSS 4 + Custom CSS Variables
- **Mobile-First**: Responsive design tối ưu cho mobile
- **PWA Ready**: Progressive Web App support
- **Typography**: Geist font family cho trải nghiệm đọc tốt nhất

## 📊 Công Thức Tính Toán

### 🚀 Crypto Formula
```
Position Size (USDT) = Risk Amount / Leverage / SL%

Trong đó:
- Risk Amount = (Risk% / 100) × Account Balance
- Leverage = Đòn bẩy từ exchange
- SL% = Stop Loss percentage / 100
```

**Ví dụ Crypto:**
```
Account: 1,000 USDT
Risk: 2% → Risk Amount = 20 USDT
Leverage: 10x
SL: 2% → 0.02

Position Size = 20 / 10 / 0.02 = 100 USDT
```

### 💱 Forex Formula
```
Lot = R / (|SL - Entry| × pips)

Trong đó:
- R (Risk Amount) = (Risk% / 100) × Account Balance
- |SL - Entry| = Giá trị tuyệt đối của hiệu giá SL và Entry
- pips = Giá trị pip có thể cài đặt (mặc định: $10/pip)
```

**Ví dụ Forex:**
```
Account: 200 USD
Risk: 10% → R = 20 USD
Entry: 1.14122, SL: 1.14049 → |SL - Entry| = 0.00073
Pip Value: $10/pip (default setting)

Lot = 20 / (0.00073 × 10) = 2.74 lots
```

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

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

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

### 🆕 Lần đầu sử dụng
1. **Nhập thông tin**: Tên của bạn
2. **Chọn mode**: Crypto hoặc Forex
3. **Setup balance**: Nhập số dư tài khoản
4. **Bắt đầu**: Tính toán position size

### 🔄 Multi-Mode Usage
1. **Mode Toggle**: Nhấn 🚀/💱 để chuyển đổi
2. **Add Account**: Nhấn "+" để thêm mode thứ 2
3. **Global Settings**: Nhấn ⚙️ góc trên phải để quản lý

### 🚀 Crypto Trading
1. **Nhập mức rủi ro** (%) - ví dụ: 2%
2. **Nhập đòn bẩy** (x) - ví dụ: 10x  
3. **Nhập SL** (%) - ví dụ: 2%
   - *Hoặc dùng "Nâng cao" để tính từ giá Entry/SL*
4. **Tính position** → Nhận kết quả bằng USDT
5. **Tùy chọn giảm** position nếu cần

### 💱 Forex Trading
1. **Nhập mức rủi ro** (%) - ví dụ: 1%
2. **Nhập giá trị pip** - ví dụ: 10
3. **Nhập giá Entry** - ví dụ: 1.14122
4. **Nhập giá SL** - ví dụ: 1.14049
5. **Tính lot size** → Nhận kết quả bằng lots
6. **Tùy chọn giảm** position nếu cần

### ⚙️ Settings Management
- **Mode Settings**: Nhấn ⚙️ trong calculator để cài đặt riêng
- **Global Settings**: Nhấn ⚙️ góc trên phải để quản lý chung
- **Account Management**: Xem, xóa, thêm tài khoản

## 🏗️ Cấu Trúc Dự Án

```
src/app/
├── types/
│   └── index.ts                    # TypeScript definitions
├── utils/
│   ├── storage.ts                  # localStorage operations
│   └── forex.ts                    # Forex calculations
├── components/
│   ├── shared/
│   │   ├── ModeToggle.tsx          # Mode switching component
│   │   ├── AccountSetup.tsx        # Account creation flow
│   │   ├── AddAccountModal.tsx     # Add second account
│   │   └── GlobalSettingsModal.tsx # Global settings
│   ├── crypto/
│   │   ├── CryptoCalculator.tsx    # Crypto trading calculator
│   │   └── CryptoSettingsModal.tsx # Crypto-specific settings
│   ├── forex/
│   │   ├── ForexCalculator.tsx     # Forex trading calculator
│   │   └── ForexSettingsModal.tsx  # Forex-specific settings
│   └── UserForm.tsx                # Multi-step onboarding
├── guide/
│   └── page.tsx                    # Comprehensive guide page
├── globals.css                     # CSS design system
├── layout.tsx                      # App layout with PWA
└── page.tsx                        # Main app logic
```

## 💡 Key Features Deep Dive

### 🎯 Intelligent Position Sizing
- **Crypto**: Tính theo % account balance với leverage impact
- **Forex**: Tính theo pips với professional lot sizing
- **Risk Management**: Consistent risk % across both modes
- **Position Reduction**: Flexible scaling down options

### 🤖 Smart Auto-Detection
- **JPY Pairs**: Tự động detect để tính pips chính xác
- **Price Level Analysis**: Phân biệt JPY vs Major pairs
- **No Configuration**: Không cần manual setup currency pairs

### 📱 Mobile-Optimized UX
- **Touch-Friendly**: Large buttons, easy inputs
- **Quick Actions**: 0.5R reduction, mode toggle
- **Progressive Disclosure**: Chỉ hiện tính năng khi cần
- **Consistent Navigation**: Clear flow between screens

### 💾 Privacy-First Data Storage
- **Local Only**: Tất cả data lưu trong browser
- **No Tracking**: Không collect user data
- **Offline Ready**: Hoạt động không cần internet
- **Easy Export**: có thể backup settings

## 🎯 Use Cases & Examples

### 📈 Crypto Day Trading
```
Account: 5,000 USDT
Strategy: Scalping BTC
Risk: 1% per trade
Leverage: 20x
SL: 0.5%

→ Position: 500 USDT per trade
→ Effective exposure: 10,000 USDT (20x)
→ Max loss: 50 USDT (1% account)
```

### 💱 Forex Swing Trading
```
Account: 10,000 USD  
Strategy: EURUSD swing
Risk: 2% per trade
Entry: 1.0850
SL: 1.0800
Pip Value: 10

→ Lot Size: 4.0 lots
→ Max loss: 200 USD (2% account)
→ Formula: 200 / (0.005 × 10) = 4.0 lots
```

### 🔄 Multi-Mode Trader
```
User: "John Trader"
├── Crypto Account: 3,000 USDT
│   ├── Risk: 2% default
│   ├── Leverage: 10x default  
│   └── SL: 3% default
└── Forex Account: 5,000 USD
    ├── Risk: 1% default
    └── Auto pip calculation
```

## 🔒 Lưu Ý Bảo Mật & Privacy

- **🏠 Local Storage**: Tất cả dữ liệu lưu trong máy của bạn
- **🚫 No Upload**: Không có data nào được gửi lên server
- **🔒 Private**: Hoàn toàn riêng tư, không theo dõi
- **🗑️ Easy Clean**: Logout để xóa tất cả data
- **⚠️ Browser Data**: Tránh xóa cache nếu muốn giữ settings

## 🎯 Roadmap Tương Lai

### Phase 1: Core Enhancements
- [ ] **Trading Journal**: Lưu lịch sử calculations
- [ ] **Portfolio Overview**: Tổng quan risk across positions
- [ ] **Export/Import**: Backup và restore settings

### Phase 2: Advanced Features  
- [ ] **Take Profit Calculator**: Multiple TP levels
- [ ] **Risk Heat Map**: Visual risk distribution
- [ ] **Performance Analytics**: Win rate, R:R tracking

### Phase 3: Integration
- [ ] **Real-time Prices**: API integration for live prices
- [ ] **Broker Integration**: Direct position sizing to MT4/5
- [ ] **Mobile App**: Native iOS/Android versions

### Phase 4: Professional Tools
- [ ] **Multi-Account**: Manage multiple trading accounts
- [ ] **Team Sharing**: Share calculations with team
- [ ] **Advanced Analytics**: Deep performance insights

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `npm install`
4. Create feature branch: `git checkout -b feature/amazing-feature`
5. Make changes and test: `npm run dev`
6. Commit changes: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📄 License

Copyright © 2025 Peterxyjz - Lê Quang Huy

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Tác Giả

**Lê Quang Huy (Peterxyjz)**
- 🔧 Chuyên gia React/Next.js và Trading Tools
- 📱 Tập trung vào Mobile-First UX/UI
- 💱 Kinh nghiệm trong Crypto và Forex trading
- 🎯 Passionate về Risk Management tools

## 🙏 Acknowledgments

- **Trading Community**: Feedback và suggestions từ traders
- **Open Source**: Libraries và tools được sử dụng
- **Mobile Users**: Beta testers trên mobile devices
- **Risk Management**: Best practices từ professional traders

## 📞 Support & Contact

- 📖 **Documentation**: Xem `/guide` trong app
- 🐛 **Bug Reports**: Create issue trên GitHub
- 💡 **Feature Requests**: Discussion tab trên GitHub  
- 📧 **Contact**: Via GitHub profile

---

⭐ **Nếu TradeCalc hữu ích cho bạn, hãy cho một star nhé!** ⭐

**Made with ❤️ for the Trading Community**
