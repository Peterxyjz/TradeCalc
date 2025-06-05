'use client';

import { useState } from 'react';
import { TradingMode } from '../../types';

interface AccountSetupProps {
  userName?: string;
  mode: TradingMode;
  onComplete: (balance: number) => void;
  onBack?: () => void;
}

export default function AccountSetup({ userName, mode, onComplete, onBack }: AccountSetupProps) {
  const [balance, setBalance] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const balanceValue = parseFloat(balance);
    if (isNaN(balanceValue) || balanceValue <= 0) {
      setError('Vui lòng nhập số dư tài khoản hợp lệ');
      return;
    }
    
    onComplete(balanceValue);
  };

  const getModeInfo = () => {
    switch (mode) {
      case 'crypto':
        return {
          title: 'Thiết lập Crypto Account',
          icon: '🚀',
          currency: 'USDT',
          placeholder: 'Ví dụ: 1000',
          description: 'Nhập số dư USDT cho trading crypto'
        };
      case 'forex':
        return {
          title: 'Thiết lập Forex Account',
          icon: '💱',
          currency: 'USD',
          placeholder: 'Ví dụ: 500',
          description: 'Nhập số dư USD cho trading forex'
        };
    }
  };

  const modeInfo = getModeInfo();

  return (
    <div className="card">
      {onBack && (
        <button
          type="button"
          className="btn btn-secondary btn-sm mb-4"
          onClick={onBack}
        >
          ← Quay lại
        </button>
      )}

      <div className="text-center mb-6">
        <div className="text-4xl mb-2">{modeInfo.icon}</div>
        <h2 className="text-xl font-bold mb-2">{modeInfo.title}</h2>
        {userName && (
          <p className="text-sm text-muted mb-2">
            Xin chào, <strong>{userName}</strong>
          </p>
        )}
        <p className="text-sm text-muted">{modeInfo.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex-col gap-4">
        <div className="mb-4">
          <label htmlFor="balance" className="label">
            Số dư tài khoản ({modeInfo.currency})
          </label>
          <input
            id="balance"
            type="number"
            step="0.01"
            min="0"
            className="input"
            value={balance}
            onChange={(e) => {
              setBalance(e.target.value);
              setError('');
            }}
            placeholder={modeInfo.placeholder}
            autoFocus
          />
        </div>
        
        {error && (
          <div className="mb-4 text-sm text-red-500">
            {error}
          </div>
        )}
        
        <button type="submit" className="btn btn-primary">
          Hoàn tất thiết lập
        </button>
      </form>
    </div>
  );
}
