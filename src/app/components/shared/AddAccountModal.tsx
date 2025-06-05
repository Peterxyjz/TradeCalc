'use client';

import { useState } from 'react';
import { TradingMode } from '../../types';
import AccountSetup from './AccountSetup';

interface AddAccountModalProps {
  availableModes: TradingMode[];
  onComplete: (mode: TradingMode, balance: number) => void;
  onClose: () => void;
}

export default function AddAccountModal({
  availableModes,
  onComplete,
  onClose,
}: AddAccountModalProps) {
  const [selectedMode, setSelectedMode] = useState<TradingMode | null>(null);

  if (selectedMode) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div style={{ maxWidth: "28rem", width: "100%" }}>
          <AccountSetup
            mode={selectedMode}
            onComplete={(balance) => onComplete(selectedMode, balance)}
            onBack={() => setSelectedMode(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="card" style={{ maxWidth: "28rem", width: "100%" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Thêm tài khoản mới</h2>
          <button
            onClick={onClose}
            className="btn btn-secondary rounded-full p-2"
            style={{ width: "32px", height: "32px" }}
          >
            ×
          </button>
        </div>

        <p className="text-sm text-muted mb-6">
          Chọn loại tài khoản bạn muốn thêm:
        </p>

        <div className="space-y-3">
          {availableModes.map((mode) => (
            <button
              key={mode}
              className="card w-full p-4 text-left hover:border-blue-500 transition-colors cursor-pointer"
              style={{ border: '1px solid var(--border)' }}
              onClick={() => setSelectedMode(mode)}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">
                  {mode === 'crypto' ? '🚀' : '💱'}
                </span>
                <div>
                  <div className="font-semibold">
                    {mode === 'crypto' ? 'Crypto Trading' : 'Forex Trading'}
                  </div>
                  <div className="text-sm text-muted">
                    {mode === 'crypto' 
                      ? 'Giao dịch tiền điện tử với USDT'
                      : 'Giao dịch ngoại hối với USD'
                    }
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6">
          <button
            className="btn btn-secondary w-full"
            onClick={onClose}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
