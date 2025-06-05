"use client";

import { useState } from "react";
import { AppState, TradingMode } from "../../types";
import { clearAppState } from "../../utils/storage";

interface GlobalSettingsModalProps {
  appState: AppState;
  onClose: () => void;
  onUpdateUserName: (name: string) => void;
  onRemoveAccount: (mode: TradingMode) => void;
}

export default function GlobalSettingsModal({
  appState,
  onClose,
  onUpdateUserName,
  onRemoveAccount,
}: GlobalSettingsModalProps) {
  const [userName, setUserName] = useState(appState.user.name);
  const [error, setError] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName.trim()) {
      setError("Vui lòng nhập tên");
      return;
    }

    onUpdateUserName(userName.trim());
    onClose();
  };

  const handleLogout = () => {
    clearAppState();
    window.location.reload();
  };

  const handleRemoveAccount = (mode: TradingMode) => {
    if (confirm(`Bạn có chắc muốn xóa tài khoản ${mode === 'crypto' ? 'Crypto' : 'Forex'}?`)) {
      onRemoveAccount(mode);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="card" style={{ maxWidth: "28rem", width: "100%" }}>
        <h2 className="text-xl font-bold mb-6">⚙️ Cài đặt chung</h2>

        <form onSubmit={handleSave} className="flex-col gap-4">
          <div className="mb-4">
            <label htmlFor="userName" className="label">
              Tên của bạn
            </label>
            <input
              id="userName"
              type="text"
              className="input"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                setError("");
              }}
            />
          </div>

          {error && (
            <div className="mb-4 text-sm text-red-500">
              {error}
            </div>
          )}

          <div className="flex gap-2 mb-4">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              style={{ flex: 1 }}
            >
              Hủy
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              Lưu
            </button>
          </div>
        </form>

        {/* Account Management */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="font-semibold mb-3">Quản lý tài khoản</h3>
          
          <div className="space-y-2 mb-4">
            {appState.user.hasSetup.crypto && (
              <div className="flex justify-between items-center p-3 bg-secondary rounded">
                <div>
                  <span className="font-medium">🚀 Crypto Account</span>
                  <div className="text-sm text-muted">
                    {appState.accounts.crypto?.balance.toFixed(2)} USDT
                  </div>
                </div>
                <button
                  className="btn btn-sm text-red-500"
                  onClick={() => handleRemoveAccount('crypto')}
                >
                  Xóa
                </button>
              </div>
            )}

            {appState.user.hasSetup.forex && (
              <div className="flex justify-between items-center p-3 bg-secondary rounded">
                <div>
                  <span className="font-medium">💱 Forex Account</span>
                  <div className="text-sm text-muted">
                    {appState.accounts.forex?.balance.toFixed(2)} USD
                  </div>
                </div>
                <button
                  className="btn btn-sm text-red-500"
                  onClick={() => handleRemoveAccount('forex')}
                >
                  Xóa
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="btn w-full"
            onClick={handleLogout}
            style={{ backgroundColor: "#ef4444", color: "#ffffff" }}
          >
            Đăng xuất tất cả
          </button>
        </div>
      </div>
    </div>
  );
}
