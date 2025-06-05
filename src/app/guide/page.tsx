"use client";

import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="min-h-screen pb-8 pt-10">
      <div className="container">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="btn btn-secondary btn-sm">
              ← Quay lại
            </Link>
            <h1 className="text-xl font-bold">Hướng dẫn sử dụng</h1>
            <div></div>
          </div>
          <p className="text-sm text-muted text-center">
            Hướng dẫn chi tiết cách sử dụng TradeCalc - Multi-Mode Trading Calculator
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6">
          {/* Getting Started */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">🚀 Bắt đầu sử dụng</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium mb-2">
                  Bước 1: Nhập thông tin cá nhân
                </h3>
                <p className="text-sm text-muted mb-2">
                  Khi lần đầu mở ứng dụng:
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Nhập <strong>tên</strong> của bạn</li>
                  <li>• Nhấn <strong>"Tiếp tục"</strong></li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium mb-2">
                  Bước 2: Chọn loại tài khoản
                </h3>
                <p className="text-sm text-muted mb-2">
                  Chọn loại trading bạn muốn bắt đầu:
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>🚀 Crypto Trading</strong> - Giao dịch tiền điện tử với USDT</li>
                  <li>• <strong>💱 Forex Trading</strong> - Giao dịch ngoại hối với USD</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium mb-2">
                  Bước 3: Thiết lập số dư
                </h3>
                <p className="text-sm text-muted mb-2">
                  Nhập số dư tài khoản cho loại đã chọn:
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Crypto</strong>: Nhập số dư USDT</li>
                  <li>• <strong>Forex</strong>: Nhập số dư USD</li>
                  <li>• Nhấn <strong>"Hoàn tất thiết lập"</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Multi-Mode Features */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">🔄 Tính năng Multi-Mode</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Chuyển đổi giữa các mode:</h3>
                <div className="space-y-3">
                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Mode Toggle</h4>
                    <p className="text-sm text-muted">
                      Nhấn vào nút 🚀 Crypto hoặc 💱 Forex để chuyển đổi
                    </p>
                    <p className="text-xs mt-1">
                      <strong>Lưu ý:</strong> Ứng dụng nhớ mode cuối cùng bạn sử dụng
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Thêm tài khoản thứ 2</h4>
                    <p className="text-sm text-muted">
                      Nhấn nút "+" để thêm tài khoản cho mode còn lại
                    </p>
                    <p className="text-xs mt-1">
                      <strong>Ví dụ:</strong> Đã có Crypto → Thêm Forex, hoặc ngược lại
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Quản lý tài khoản</h4>
                    <p className="text-sm text-muted">
                      Nhấn ⚙️ góc trên phải để quản lý tất cả tài khoản
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Crypto Calculator */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">🚀 Crypto Calculator</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Ý nghĩa các thông số:</h3>
                <div className="space-y-3">
                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Mức rủi ro (%)</h4>
                    <p className="text-sm text-muted">
                      % số dư tài khoản bạn sẵn sàng mất nếu lệnh chạm SL
                    </p>
                    <p className="text-xs mt-1">
                      <strong>Ví dụ:</strong> Tài khoản 1000 USDT, rủi ro 2% = sẵn sàng mất 20 USDT
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Đòn bẩy (x)</h4>
                    <p className="text-sm text-muted">
                      Hệ số nhân từ sàn giao dịch
                    </p>
                    <p className="text-xs mt-1">
                      <strong>Ví dụ:</strong> 10x = có thể trade với số tiền gấp 10 lần
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">SL (%)</h4>
                    <p className="text-sm text-muted">
                      % giá có thể đi ngược lại trước khi cắt lỗ
                    </p>
                    <p className="text-xs mt-1">
                      <strong>Ví dụ:</strong> SL 2% = nếu giá giảm 2% thì tự động cắt lỗ
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-blue-50 border-blue-200 p-4">
                <h4 className="font-medium mb-2">Công thức Crypto:</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Giá vào lệnh = Risk Amount ÷ Đòn bẩy ÷ SL%</strong></p>
                  <div className="mt-3 space-y-1">
                    <p>• Số dư: <strong>1,000 USDT</strong></p>
                    <p>• Rủi ro: <strong>2%</strong> (= 20 USDT)</p>
                    <p>• Đòn bẩy: <strong>10x</strong></p>
                    <p>• SL: <strong>2%</strong></p>
                    <div className="mt-3 p-2 bg-white rounded border">
                      <p className="font-medium">
                        → Kết quả: <span className="text-accent">Giá vào lệnh 100 USDT</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Tính SL% từ giá thực tế:</h3>
                <div className="space-y-2 ml-4">
                  <p className="text-sm">• Nhấn <strong>"Nâng cao"</strong> bên cạnh ô SL</p>
                  <p className="text-sm">• Nhập <strong>giá Entry</strong> và <strong>giá SL</strong></p>
                  <p className="text-sm">• Nhấn <strong>"Tính SL%"</strong> → SL% tự động tính</p>
                </div>
              </div>
            </div>
          </div>

          {/* Forex Calculator */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">💱 Forex Calculator</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Đặc điểm Forex:</h3>
                <div className="space-y-3">
                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Đòn bẩy KHÔNG ảnh hưởng</h4>
                    <p className="text-sm text-muted">
                      Khác với Crypto, đòn bẩy chỉ ảnh hưởng margin, không ảnh hưởng position size
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Tính theo Pips</h4>
                    <p className="text-sm text-muted">
                      Forex tính theo số pips thay vì % giá
                    </p>
                    <p className="text-xs mt-1">
                      <strong>Auto-detect:</strong> JPY pairs (pips × 100) vs Major pairs (pips × 10000)
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Kết quả theo Lots</h4>
                    <p className="text-sm text-muted">
                      Hiển thị lot size thay vì dollar amount
                    </p>
                    <p className="text-xs mt-1">
                      <strong>Ví dụ:</strong> 0.27 lots, 1.50 lots
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-green-50 border-green-200 p-4">
                <h4 className="font-medium mb-2">Công thức Forex:</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Lot Size = Risk Amount ÷ (SL pips × Pip Value)</strong></p>
                  <div className="mt-3 space-y-1">
                    <p>• Số dư: <strong>200 USD</strong></p>
                    <p>• Rủi ro: <strong>10%</strong> (= 20 USD)</p>
                    <p>• Entry: <strong>1.14122</strong></p>
                    <p>• SL: <strong>1.14049</strong> (= 7.3 pips)</p>
                    <p>• Pip Value: <strong>$10/pip</strong> (standard)</p>
                    <div className="mt-3 p-2 bg-white rounded border">
                      <p className="font-medium">
                        → Kết quả: <span className="text-accent">0.27 lots</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Cách sử dụng:</h3>
                <div className="space-y-2 ml-4">
                  <p className="text-sm">• Nhập <strong>Risk %</strong> (khuyến nghị: 0.5-2%)</p>
                  <p className="text-sm">• Nhập <strong>giá Entry</strong> và <strong>giá SL</strong></p>
                  <p className="text-sm">• Ứng dụng tự tính pips và lot size</p>
                  <p className="text-sm">• <strong>Không cần</strong> quan tâm cặp tiền tệ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Position Reduction */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">📉 Giảm Position Size</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Khi nào sử dụng:</h3>
                <div className="space-y-2 ml-4">
                  <p className="text-sm">• Position size tính ra quá lớn</p>
                  <p className="text-sm">• Không chắc chắn về setup</p>
                  <p className="text-sm">• Muốn trade conservative hơn</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Cách sử dụng:</h3>
                <div className="space-y-3">
                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">0.5R (Quick)</h4>
                    <p className="text-sm text-muted">
                      Nhấn nút "0.5R" để giảm 50% ngay lập tức
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Tùy chỉnh</h4>
                    <p className="text-sm text-muted">
                      Nhập % muốn giảm (ví dụ: 30%, 70%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">⚙️ Quản lý Cài đặt</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Settings riêng cho từng mode:</h3>
                <div className="space-y-3">
                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">🚀 Crypto Settings</h4>
                    <p className="text-sm text-muted mb-2">
                      Nhấn ⚙️ trong Crypto Calculator:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Số dư USDT</li>
                      <li>• Risk % mặc định</li>
                      <li>• Đòn bẩy mặc định</li>
                      <li>• SL % mặc định</li>
                    </ul>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">💱 Forex Settings</h4>
                    <p className="text-sm text-muted mb-2">
                      Nhấn ⚙️ trong Forex Calculator:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Số dư USD</li>
                      <li>• Risk % mặc định</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Settings chung:</h3>
                <div className="bg-secondary p-3 rounded">
                  <h4 className="font-medium text-accent">⚙️ Global Settings</h4>
                  <p className="text-sm text-muted mb-2">
                    Nhấn ⚙️ ở góc trên phải màn hình chính:
                  </p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• Thay đổi tên</li>
                    <li>• Xem tất cả tài khoản</li>
                    <li>• Xóa tài khoản không dùng</li>
                    <li>• Đăng xuất tất cả</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">💡 Tips & Best Practices</h2>

            <div className="space-y-3">
              <div className="card bg-green-50 border-green-200 p-3">
                <h4 className="font-medium text-green-800 mb-1">✅ Crypto Trading</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Risk: 1-5% mỗi lệnh</li>
                  <li>• Leverage: 5-20x cho người mới</li>
                  <li>• SL: 2-8% tùy volatility</li>
                  <li>• Sử dụng 0.5R khi không chắc chắn</li>
                </ul>
              </div>

              <div className="card bg-blue-50 border-blue-200 p-3">
                <h4 className="font-medium text-blue-800 mb-1">✅ Forex Trading</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Risk: 0.5-2% mỗi lệnh</li>
                  <li>• Leverage không ảnh hưởng position</li>
                  <li>• SL: 10-50 pips tùy strategy</li>
                  <li>• Focus vào risk management</li>
                </ul>
              </div>

              <div className="card bg-yellow-50 border-yellow-200 p-3">
                <h4 className="font-medium text-yellow-800 mb-1">⚠️ Lưu ý chung</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Không risk quá 10% account total</li>
                  <li>• Cập nhật số dư định kỳ</li>
                  <li>• Kiểm tra kết quả trước khi vào lệnh</li>
                  <li>• Dữ liệu lưu trong máy, không sync cloud</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">❓ Câu hỏi thường gặp</h2>

            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium mb-1">Tôi chỉ cần 1 loại trading thôi?</h4>
                <p className="text-sm text-muted">
                  Hoàn toàn được! Chỉ setup Crypto hoặc Forex, không bắt buộc cả 2.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium mb-1">Position size quá lớn/nhỏ?</h4>
                <p className="text-sm text-muted">
                  Crypto: Điều chỉnh Risk%, Leverage, SL%. Forex: Điều chỉnh Risk% hoặc SL pips.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-medium mb-1">Mất dữ liệu cài đặt?</h4>
                <p className="text-sm text-muted">
                  Dữ liệu lưu trong browser. Tránh xóa cache hoặc dùng chế độ ẩn danh.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium mb-1">Crypto vs Forex khác nhau như nào?</h4>
                <p className="text-sm text-muted">
                  Crypto: Leverage ảnh hưởng position, SL theo %. Forex: Leverage không ảnh hưởng, SL theo pips.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 p-4">
            <h3 className="font-semibold mb-2">
              🎉 Chúc bạn trading thành công!
            </h3>
            <p className="text-sm text-muted mb-3">
              Risk management quan trọng hơn profit. Discipline is key! 📚✨
            </p>
            <div className="flex gap-2">
              <Link href="/" className="btn btn-primary w-full">
                Bắt đầu sử dụng TradeCalc
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
