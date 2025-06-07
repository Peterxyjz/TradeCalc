"use client";

import { useState } from "react";
import { ForexAccount } from "../../types";

interface ForexSettingsModalProps {
  account: ForexAccount;
  settings: ForexAccount['settings'];
  onClose: () => void;
  onSave: (settings: ForexAccount['settings']) => void;
  onUpdateAccount: (account: ForexAccount) => void;
}

export default function ForexSettingsModal({
  account,
  settings,
  onClose,
  onSave,
  onUpdateAccount,
}: ForexSettingsModalProps) {
  const [riskPercentage, setRiskPercentage] = useState(
    settings.defaultRiskPercentage.toString()
  );
  const [pipValue, setPipValue] = useState(
    settings.defaultPipValue?.toString() || "10"
  );
  const [newBalance, setNewBalance] = useState(account.balance.toString());
  const [error, setError] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const riskValue = parseFloat(riskPercentage);
    const pipVal = parseFloat(pipValue);
    const balanceValue = parseFloat(newBalance);

    if (isNaN(riskValue) || riskValue <= 0) {
      setError("Mức rủi ro phải là số dương");
      return;
    }

    if (isNaN(pipVal) || pipVal <= 0) {
      setError("Giá trị pip phải là số dương");
      return;
    }

    if (isNaN(balanceValue) || balanceValue <= 0) {
      setError("Số dư phải là số dương");
      return;
    }

    // Update account if balance changed
    if (balanceValue !== account.balance) {
      const updatedAccount = {
        ...account,
        balance: balanceValue,
      };
      onUpdateAccount(updatedAccount);
    }

    onSave({
      defaultRiskPercentage: riskValue,
      defaultPipValue: pipVal,
      preferredPairs: settings.preferredPairs, // Keep existing
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="card" style={{ maxWidth: "28rem", width: "100%" }}>
        <h2 className="text-xl font-bold mb-6">💱 Cài đặt Forex</h2>

        <form onSubmit={handleSave} className="flex-col gap-4">
          <div className="mb-4">
            <label htmlFor="settingsBalance" className="label">
              Số dư tài khoản (USD)
            </label>
            <input
              id="settingsBalance"
              type="number"
              step="0.01"
              min="0"
              className="input"
              value={newBalance}
              onChange={(e) => setNewBalance(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="defaultRiskPercentage" className="label">
              Mức rủi ro mặc định (%)
            </label>
            <input
              id="defaultRiskPercentage"
              type="number"
              step="0.1"
              min="0.1"
              className="input"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(e.target.value)}
            />
            <div className="text-xs mt-1 text-muted">
              Mức rủi ro phù hợp cho từng lệnh Forex (khuyến nghị: 0.5-2%)
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="defaultPipValue" className="label">
              Giá trị pip mặc định
            </label>
            <input
              id="defaultPipValue"
              type="number"
              step="0.1"
              min="0.1"
              className="input"
              value={pipValue}
              onChange={(e) => setPipValue(e.target.value)}
            />
            <div className="text-xs mt-1 text-muted">
              Giá trị mỗi pip (mặc định: $10/pip cho hầu hết các cặp tiền tệ)
            </div>
          </div>

          {error && (
            <div className="mb-4 text-sm" style={{ color: "#ef4444" }}>
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
      </div>
    </div>
  );
}
