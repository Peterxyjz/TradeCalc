'use client';

import { useState } from 'react';

interface UserFormProps {
  onComplete: (name: string, balance: number) => void;
}

export default function UserForm({ onComplete }: UserFormProps) {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Vui lòng nhập tên của bạn');
      return;
    }
    
    const balanceValue = parseFloat(balance);
    if (isNaN(balanceValue) || balanceValue <= 0) {
      setError('Vui lòng nhập số dư tài khoản hợp lệ');
      return;
    }
    
    // Save to localStorage
    localStorage.setItem('tradingAppUser', JSON.stringify({
      name: name.trim(),
      balance: balanceValue
    }));
    
    onComplete(name.trim(), balanceValue);
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-6">Thiết lập tài khoản</h2>
      <form onSubmit={handleSubmit} className="flex-col gap-4">
        <div className="mb-4">
          <label htmlFor="name" className="label">Tên của bạn</label>
          <input
            id="name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của bạn"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="balance" className="label">Số dư tài khoản (USDT)</label>
          <input
            id="balance"
            type="number"
            step="0.01"
            className="input"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="Ví dụ: 1000"
          />
        </div>
        
        {error && (
          <div className="mb-4 text-sm" style={{ color: '#ef4444' }}>
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
