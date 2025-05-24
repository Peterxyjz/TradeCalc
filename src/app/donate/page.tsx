"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DonatePage() {
  const [copiedText, setCopiedText] = useState("");
  const [selectedOption, setSelectedOption] = useState<"bank" | "usdt">("bank");

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const usdtAddress = "0xb5b4ff39871343c35582bf8f45e737c6fea20377";
  const accountOwner = "LE QUANG HUY";
  const accountNumber = "05653083301";

  return (
    <div className="min-h-screen pb-8 pt-10">
      <div className="container">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Link href="/guide" className="btn btn-secondary btn-sm">
              ← Quay lại
            </Link>
            <h1 className="text-xl font-bold">Donate</h1>
            <div></div>
          </div>
          <p className="text-sm text-muted text-center">
            Ủng hộ phát triển TradeCalc ☕
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6">
          {/* Thank you message */}
          <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-3">🙏 Cảm ơn bạn!</h2>
              <p className="text-sm text-muted mb-4">
                TradeCalc được phát triển hoàn toàn miễn phí. Nếu ứng dụng hữu
                ích với bạn, hãy ủng hộ tác giả để tiếp tục phát triển và cải
                thiện!
              </p>
              <div className="flex items-center justify-center gap-2 text-lg">
                <span>💜</span>
                <span className="font-medium">
                  Mọi đóng góp đều được trân trọng
                </span>
                <span>💜</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4 text-center">
              💰 Chọn phương thức ủng hộ
            </h3>

            {/* Radio Options */}
            <div className="space-y-3 mb-6">
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-secondary">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={selectedOption === "bank"}
                  onChange={(e) =>
                    setSelectedOption(e.target.value as "bank" | "usdt")
                  }
                  className="w-4 h-4"
                />
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏦</span>
                  <div>
                    <div className="font-medium">Chuyển khoản ngân hàng</div>
                    <div className="text-sm text-muted">Quét mã QR VietQR</div>
                  </div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-secondary">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="usdt"
                  checked={selectedOption === "usdt"}
                  onChange={(e) =>
                    setSelectedOption(e.target.value as "bank" | "usdt")
                  }
                  className="w-4 h-4"
                />
                <div className="flex items-center gap-2">
                  <span className="text-lg">💰</span>
                  <div>
                    <div className="font-medium">USDT (BEP-20)</div>
                    <div className="text-sm text-muted">Crypto payment</div>
                  </div>
                </div>
              </label>
            </div>

            {/* Payment Details */}
            <div className="border-t pt-4">
              {selectedOption === "bank" ? (
                // Bank Transfer Option
                <div>
                  <h4 className="font-semibold mb-4 text-center text-accent">
                    🏦 Chuyển khoản ngân hàng
                  </h4>

                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="https://img.vietqr.io/image/TPB-05653083301-compact.png"
                        alt="VietQR Code"
                        width={300}
                        height={300}
                        className="mx-auto rounded-lg border"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>

                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm text-muted">
                            Chủ tài khoản:
                          </span>
                          <div className="flex items-center justify-center gap-2 mt-1">
                            <span className="font-semibold text-accent">
                              {accountOwner}
                            </span>
                          </div>
                        </div>

                        <div className="text-sm text-muted">
                          <p>
                            Ngân hàng: <strong>TPBank</strong>
                          </p>
                          <p>
                            Số tài khoản: <strong>{accountNumber}</strong>
                            <button
                              onClick={() =>
                                copyToClipboard(accountNumber, "owner")
                              }
                              className="btn-secondary btn-sm text-xs p-1 rounded"
                              title="Sao chép tên"
                            >
                              {copiedText === "owner" ? "✓" : "📋"}
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-muted mt-3">
                      📱 Quét mã QR bằng app ngân hàng để chuyển khoản nhanh
                    </p>
                  </div>
                </div>
              ) : (
                // USDT Option
                <div>
                  <h4 className="font-semibold mb-4 text-center text-accent">
                    💰 USDT (BEP-20)
                  </h4>

                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
                          usdtAddress
                        )}`}
                        alt="USDT Address QR Code"
                        width={250}
                        height={250}
                        className="mx-auto rounded-lg border"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                    <p className="text-xs text-muted mb-4">
                      📱 Quét mã QR bằng ví crypto để sao chép địa chỉ
                    </p>
                  </div>

                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="mb-3">
                      <div className="text-sm text-muted mb-2">Địa chỉ ví:</div>
                      <div className="bg-card p-3 rounded border break-all font-mono text-sm">
                        {usdtAddress}
                      </div>
                    </div>

                    <button
                      onClick={() => copyToClipboard(usdtAddress, "usdt")}
                      className="btn btn-primary w-full"
                    >
                      {copiedText === "usdt"
                        ? "✓ Đã sao chép!"
                        : "📋 Sao chép địa chỉ"}
                    </button>
                  </div>

                  <div className="mt-4">
                    <div className="card bg-yellow-50 border-yellow-200 p-3">
                      <h4 className="font-medium text-yellow-800 mb-1">
                        ⚠️ Lưu ý quan trọng
                      </h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>
                          • Chỉ gửi{" "}
                          <strong>
                            USDT trên mạng BEP-20 (Binance Smart Chain)
                          </strong>
                        </li>
                        <li>
                          • Không gửi token khác hoặc mạng khác (ERC-20,
                          TRC-20...)
                        </li>
                        <li>• Kiểm tra kỹ địa chỉ trước khi gửi</li>
                        <li>• Gửi nhầm sẽ mất tiền vĩnh viễn</li>
                      </ul>
                    </div>

                    <div className="text-center mt-3">
                      <p className="text-xs text-muted">
                        🔗 Network: <strong>BEP-20 (BSC)</strong> | Token:{" "}
                        <strong>USDT</strong>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back to app */}
        <footer className="mt-8 text-center">
          <div className="flex gap-2">
            <Link href="/" className="btn btn-primary" style={{ flex: 1 }}>
              🧮 Sử dụng TradeCalc
            </Link>
            <Link
              href="/guide"
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              📖 Quay lại hướng dẫn
            </Link>
          </div>

          <p className="text-xs text-muted mt-4">
            Copyright © 2025 Peterxyjz - Lê Quang Huy
          </p>
        </footer>
      </div>
    </div>
  );
}
