'use client';

import { useState } from 'react';

interface SettingsModalProps {
  balance: number;
  settings: {
    defaultRiskPercentage: number;
    defaultLeverage: number;
    defaultStopLossPercentage: number;
  };
  onClose: () => void;
  onSave: (settings: {
    defaultRiskPercentage: number;
    defaultLeverage: number;
    defaultStopLossPercentage: number;
  }) => void;
  onUpdateBalance: (newBalance: number) => void;
}

export default function SettingsModal({
  balance,
  settings,
  onClose,
  onSave,
  onUpdateBalance
}: SettingsModalProps) {
  const [riskPercentage, setRiskPercentage] = useState(settings.defaultRiskPercentage.toString());
  const [leverage, setLeverage] = useState(settings.defaultLeverage.toString());
  const [stopLossPercentage, setStopLossPercentage] = useState(
    settings.defaultStopLossPercentage.toString()
  );
  const [newBalance, setNewBalance] = useState(balance.toString());
  const [error, setError] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const riskValue = parseFloat(riskPercentage);
    const leverageValue = parseFloat(leverage);
    const slValue = parseFloat(stopLossPercentage);
    const balanceValue = parseFloat(newBalance);
    
    if (isNaN(riskValue) || riskValue <= 0) {
      setError('Mức rủi ro phải là số dương');
      return;
    }
    
    if (isNaN(leverageValue) || leverageValue < 1) {
      setError('Đòn bẩy phải từ 1 trở lên');
      return;
    }
    
    if (isNaN(slValue) || slValue <= 0) {
      setError('SL phải là số dương');
      return;
    }
    
    if (isNaN(balanceValue) || balanceValue <= 0) {
      setError('Số dư phải là số dương');
      return;
    }

    // Update balance in localStorage if changed
    if (balanceValue !== balance) {
      const userData = JSON.parse(localStorage.getItem('tradingAppUser') || '{}');
      userData.balance = balanceValue;
      localStorage.setItem('tradingAppUser', JSON.stringify(userData));
      onUpdateBalance(balanceValue);
    }
    
    onSave({
      defaultRiskPercentage: riskValue,
      defaultLeverage: leverageValue,
      defaultStopLossPercentage: slValue
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="card" style={{ maxWidth: '28rem', width: '100%' }}>
        <h2 className="text-xl font-bold mb-6">Cài đặt</h2>
        
        <form onSubmit={handleSave} className="flex-col gap-4">
          <div className="mb-4">
            <label htmlFor="settingsBalance" className="label">Số dư tài khoản (USDT)</label>
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
            <label htmlFor="defaultRiskPercentage" className="label">Mức rủi ro mặc định (%)</label>
            <input
              id="defaultRiskPercentage"
              type="number"
              step="0.1"
              min="0.1"
              className="input"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="defaultLeverage" className="label">Đòn bẩy mặc định (x)</label>
            <input
              id="defaultLeverage"
              type="number"
              step="0.1"
              min="1"
              className="input"
              value={leverage}
              onChange={(e) => setLeverage(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="defaultStopLossPercentage" className="label">SL mặc định (%)</label>
            <input
              id="defaultStopLossPercentage"
              type="number"
              step="0.1"
              min="0.1"
              className="input"
              value={stopLossPercentage}
              onChange={(e) => setStopLossPercentage(e.target.value)}
            />
          </div>
          
          {error && (
            <div className="mb-4 text-sm" style={{ color: '#ef4444' }}>
              {error}
            </div>
          )}
          
          <div className="flex gap-2">
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
