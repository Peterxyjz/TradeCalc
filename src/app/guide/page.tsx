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
            Hướng dẫn chi tiết cách sử dụng TradeCalc
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
                  Bước 1: Thiết lập tài khoản
                </h3>
                <p className="text-sm text-muted mb-2">
                  Khi lần đầu mở ứng dụng, bạn sẽ thấy form thiết lập:
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>
                    • Nhập <strong>tên</strong> của bạn
                  </li>
                  <li>
                    • Nhập <strong>số dư tài khoản</strong> (USDT)
                  </li>
                  <li>
                    • Nhấn <strong>&ldquo;Tiếp tục&rdquo;</strong>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium mb-2">
                  Bước 2: Tính toán giá vào lệnh
                </h3>
                <p className="text-sm text-muted mb-2">
                  Sau khi thiết lập, bạn sẽ thấy màn hình tính toán chính:
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>
                    • Nhập <strong>mức rủi ro (%)</strong> - ví dụ: 2
                  </li>
                  <li>
                    • Nhập <strong>đòn bẩy (x)</strong> - ví dụ: 10
                  </li>
                  <li>
                    • Nhập <strong>SL (%)</strong> - ví dụ: 2
                  </li>
                  <li>
                    • Nhấn <strong>&ldquo;Tính giá vào lệnh&rdquo;</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Basic Usage */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">📊 Tính toán cơ bản</h2>

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
                      <strong>Ví dụ:</strong> Tài khoản 1000 USDT, rủi ro 2% =
                      sẵn sàng mất 20 USDT
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">Đòn bẩy (x)</h4>
                    <p className="text-sm text-muted">
                      Hệ số nhân từ sàn giao dịch
                    </p>
                    <p className="text-xs mt-1">
                      <strong>Ví dụ:</strong> 10x = có thể trade với số tiền gấp
                      10 lần
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded">
                    <h4 className="font-medium text-accent">SL (%)</h4>
                    <p className="text-sm text-muted">
                      % giá có thể đi ngược lại trước khi cắt lỗ
                    </p>
                    <p className="text-xs mt-1">
                      <strong>Ví dụ:</strong> SL 2% = nếu giá giảm 2% thì tự
                      động cắt lỗ
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-blue-50 border-blue-200 p-4">
                <h4 className="font-medium mb-2">Ví dụ cụ thể:</h4>
                <div className="text-sm space-y-1">
                  <p>
                    • Số dư: <strong>1,000 USDT</strong>
                  </p>
                  <p>
                    • Rủi ro: <strong>2%</strong> (= 20 USDT)
                  </p>
                  <p>
                    • Đòn bẩy: <strong>10x</strong>
                  </p>
                  <p>
                    • SL: <strong>2%</strong>
                  </p>
                  <div className="mt-3 p-2 bg-white rounded border">
                    <p className="font-medium">
                      → Kết quả:{" "}
                      <span className="text-accent">Giá vào lệnh 100 USDT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">
              ⚡ Tính năng nâng cao
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">1. Tính SL% từ giá thực tế</h3>
                <p className="text-sm text-muted mb-3">
                  Thay vì nhập SL%, bạn có thể tính từ giá Entry và giá SL cụ
                  thể:
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-sm">
                    • Nhấn <strong>&ldquo;Nâng cao&rdquo;</strong> bên cạnh ô SL
                  </p>
                  <p className="text-sm">
                    • Nhập <strong>giá Entry</strong> (ví dụ: 100.5)
                  </p>
                  <p className="text-sm">
                    • Nhập <strong>giá SL</strong> (ví dụ: 98.5)
                  </p>
                  <p className="text-sm">
                    • Nhấn <strong>&ldquo;Tính SL%&rdquo;</strong>
                  </p>
                  <p className="text-sm">
                    • SL% sẽ được tự động tính và điền vào
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">2. Giảm Position Size</h3>
                <p className="text-sm text-muted mb-3">
                  Sau khi tính xong, bạn có thể giảm position nếu cảm thấy quá
                  lớn:
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-sm">
                    • Nhấn <strong>&ldquo;0.5R&rdquo;</strong> để giảm 50% ngay
                    lập tức
                  </p>
                  <p className="text-sm">
                    • Hoặc nhấn <strong>&ldquo;Tùy chỉnh&rdquo;</strong> và nhập
                    % muốn giảm
                  </p>
                  <p className="text-sm">• Giá vào lệnh sẽ cập nhật tự động</p>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">⚙️ Cài đặt</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Truy cập cài đặt:</h3>
                <p className="text-sm text-muted mb-3">
                  Nhấn vào biểu tượng <strong>⚙️</strong> ở góc trên bên phải
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Có thể thay đổi:</h3>
                <ul className="text-sm space-y-1 ml-4">
                  <li>
                    • <strong>Số dư tài khoản:</strong> Cập nhật khi có thay đổi
                  </li>
                  <li>
                    • <strong>Mức rủi ro mặc định:</strong> Giá trị sẵn có khi
                    mở app
                  </li>
                  <li>
                    • <strong>Đòn bẩy mặc định:</strong> Đòn bẩy thường dùng
                  </li>
                  <li>
                    • <strong>SL mặc định:</strong> SL% thường dùng
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-yellow-200 p-3 rounded border">
                <h4 className="font-medium text-yellow-800 mb-1">💡 Mẹo</h4>
                <p className="text-sm text-yellow-700">
                  Thiết lập giá trị mặc định phù hợp để không phải nhập lại
                  nhiều lần
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">
              💡 Mẹo sử dụng hiệu quả
            </h2>

            <div className="space-y-3">
              <div className="card bg-green-50 border-green-200 p-3">
                <h4 className="font-medium text-green-800 mb-1">✅ Nên làm</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Không risk quá 2-5% account cho 1 lệnh</li>
                  <li>• Cập nhật số dư account định kỳ</li>
                  <li>• Kiểm tra kết quả trước khi vào lệnh</li>
                  <li>• Sử dụng 0.5R khi không chắc chắn</li>
                </ul>
              </div>

              <div className="card bg-red-50 border-red-200 p-3">
                <h4 className="font-medium text-red-800 mb-1">❌ Tránh làm</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Không dùng leverage quá cao nếu chưa có kinh nghiệm</li>
                  <li>• Không bỏ qua stop loss vì cảm xúc</li>
                  <li>• Không trade hết số dư account</li>
                  <li>• Không thay đổi SL liên tục</li>
                </ul>
              </div>

              <div className="card bg-blue-50 border-blue-200 p-3">
                <h4 className="font-medium text-blue-800 mb-1">
                  🎯 Khuyến nghị cho người mới
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Risk: 1-2% mỗi lệnh</li>
                  <li>• Leverage: 5-10x</li>
                  <li>• SL: 2-5%</li>
                  <li>• Tập trung học quản lý rủi ro</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">
              ❓ Câu hỏi thường gặp
            </h2>

            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium mb-1">Position size quá lớn?</h4>
                <p className="text-sm text-muted">
                  Giảm % risk hoặc tăng % SL. Hoặc sử dụng tính năng giảm
                  position.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium mb-1">Position size quá nhỏ?</h4>
                <p className="text-sm text-muted">
                  Tăng % risk (trong giới hạn an toàn) hoặc giảm % SL.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-medium mb-1">Mất dữ liệu cài đặt?</h4>
                <p className="text-sm text-muted">
                  Dữ liệu lưu trong browser. Tránh xóa cache hoặc dùng chế độ ẩn
                  danh.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium mb-1">Dữ liệu có an toàn không?</h4>
                <p className="text-sm text-muted">
                  Hoàn toàn an toàn. Tất cả dữ liệu chỉ lưu trong máy của bạn,
                  không gửi lên server.
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
            <p className="text-sm text-muted">
              Discipline và risk management quan trọng hơn profit. Stay safe!
              📚✨
            </p>
            <div className="flex gap-2 mt-3">
              <Link href="/" className="btn btn-primary" style={{ flex: 2 }}>
                Bắt đầu sử dụng TradeCalc
              </Link>
              {/* <Link
                href="/donate"
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                ☕ Donate
              </Link> */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
