'use client';

import { useState } from 'react';
import { TradingMode } from '../types';
import AccountSetup from './shared/AccountSetup';

interface UserFormProps {
  onComplete: (name: string, mode: TradingMode, balance: number) => void;
}

export default function UserForm({ onComplete }: UserFormProps) {
  const [step, setStep] = useState<'name' | 'mode' | 'setup'>('name');
  const [name, setName] = useState('');
  const [selectedMode, setSelectedMode] = useState<TradingMode>('crypto');
  const [error, setError] = useState('');

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Vui lòng nhập tên của bạn');
      return;
    }
    
    setError('');
    setStep('mode');
  };

  const handleModeSelect = (mode: TradingMode) => {
    setSelectedMode(mode);
    setStep('setup');
  };

  const handleAccountSetup = (balance: number) => {
    onComplete(name.trim(), selectedMode, balance);
  };

  if (step === 'name') {
    return (
      <div className="card">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">📊</div>
          <h2 className="text-xl font-bold mb-2">Chào mừng đến với TradeCalc</h2>
          <p className="text-sm text-muted">Máy tính giá vào lệnh thông minh</p>
        </div>

        <form onSubmit={handleNameSubmit} className="flex-col gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="label">Tên của bạn</label>
            <input
              id="name"
              type="text"
              className="input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Nhập tên của bạn"
              autoFocus
            />
          </div>
          
          {error && (
            <div className="mb-4 text-sm text-red-500">
              {error}
            </div>
          )}
          
          <button type="submit" className="btn btn-primary">
            Tiếp tục
          </button>
        </form>
      </div>
    );
  }

  if (step === 'mode') {
    return (
      <div className="card">
        <button
          type="button"
          className="btn btn-secondary btn-sm mb-4"
          onClick={() => setStep('name')}
        >
          ← Quay lại
        </button>

        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2">Xin chào, {name}!</h2>
          <p className="text-sm text-muted">Bạn muốn bắt đầu với loại tài khoản nào?</p>
        </div>

        <div className="space-y-3">
          <button
            className="card w-full p-4 text-left hover:border-blue-500 transition-colors cursor-pointer"
            style={{ border: '1px solid var(--border)' }}
            onClick={() => handleModeSelect('crypto')}
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">🚀</span>
              <div>
                <div className="font-semibold">Crypto Trading</div>
                <div className="text-sm text-muted">Giao dịch tiền điện tử với USDT</div>
              </div>
            </div>
          </button>

          <button
            className="card w-full p-4 text-left hover:border-blue-500 transition-colors cursor-pointer"
            style={{ border: '1px solid var(--border)' }}
            onClick={() => handleModeSelect('forex')}
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">💱</span>
              <div>
                <div className="font-semibold">Forex Trading</div>
                <div className="text-sm text-muted">Giao dịch ngoại hối với USD</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (step === 'setup') {
    return (
      <AccountSetup
        userName={name}
        mode={selectedMode}
        onComplete={handleAccountSetup}
        onBack={() => setStep('mode')}
      />
    );
  }

  return null;
}
