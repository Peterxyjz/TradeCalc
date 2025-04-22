'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SettingsModal from './SettingsModal';

interface CalculatorProps {
  userName: string;
  balance: number;
  onUpdateBalance: (newBalance: number) => void;
}

interface Settings {
  defaultRiskPercentage: number;
  defaultLeverage: number;
  defaultStopLossPercentage: number;
}

export default function Calculator({ userName, balance, onUpdateBalance }: CalculatorProps) {
  // Settings
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    defaultRiskPercentage: 2,
    defaultLeverage: 10,
    defaultStopLossPercentage: 2,
  });

  // Form values
  const [riskPercentage, setRiskPercentage] = useState(settings.defaultRiskPercentage.toString());
  const [leverage, setLeverage] = useState(settings.defaultLeverage.toString());
  const [stopLossPercentage, setStopLossPercentage] = useState(settings.defaultStopLossPercentage.toString());
  
  // Result
  const [entryPrice, setEntryPrice] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  
  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('tradingAppSettings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      
      // Set initial form values from saved settings
      setRiskPercentage(parsedSettings.defaultRiskPercentage.toString());
      setLeverage(parsedSettings.defaultLeverage.toString());
      setStopLossPercentage(parsedSettings.defaultStopLossPercentage.toString());
    }
  }, []);
  
  // Calculate entry price
  const calculateEntryPrice = () => {
    const riskAmount = (parseFloat(riskPercentage) / 100) * balance;
    const leverageValue = parseFloat(leverage);
    const slPercentage = parseFloat(stopLossPercentage) / 100;
    
    if (isNaN(riskAmount) || isNaN(leverageValue) || isNaN(slPercentage) || slPercentage === 0) {
      return null;
    }
    
    // Formula: R / Leverage / SL
    const entry = riskAmount / leverageValue / slPercentage;
    return entry;
  };
  
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate inputs
    if (!riskPercentage.trim()) {
      setError('Vui lòng nhập mức rủi ro');
      return;
    }
    
    if (!leverage.trim()) {
      setError('Vui lòng nhập đòn bẩy');
      return;
    }
    
    if (!stopLossPercentage.trim()) {
      setError('Vui lòng nhập SL');
      return;
    }
    
    const rValue = parseFloat(riskPercentage);
    const lValue = parseFloat(leverage);
    const slValue = parseFloat(stopLossPercentage);
    
    if (isNaN(rValue) || rValue <= 0) {
      setError('Mức rủi ro phải là số dương');
      return;
    }
    
    if (isNaN(lValue) || lValue <= 0) {
      setError('Đòn bẩy phải là số dương');
      return;
    }
    
    if (isNaN(slValue) || slValue <= 0) {
      setError('SL phải là số dương');
      return;
    }
    
    const calculatedEntry = calculateEntryPrice();
    setEntryPrice(calculatedEntry);
  };
  
  const handleSaveSettings = (newSettings: Settings) => {
    setSettings(newSettings);
    localStorage.setItem('tradingAppSettings', JSON.stringify(newSettings));
    setShowSettings(false);
    
    // Apply new settings to current form if user wants
    setRiskPercentage(newSettings.defaultRiskPercentage.toString());
    setLeverage(newSettings.defaultLeverage.toString());
    setStopLossPercentage(newSettings.defaultStopLossPercentage.toString());
  };

  return (
    <div className="relative">
      <button 
        className="absolute top-4 right-4 btn-secondary rounded-full p-2"
        onClick={() => setShowSettings(true)}
        aria-label="Mở cài đặt"
      >
        <Image 
          src="/settings-icon.svg" 
          alt="Cài đặt" 
          width={20} 
          height={20} 
        />
      </button>
      
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Máy tính vào lệnh</h2>
          <div className="text-sm">
            <span>Xin chào, <strong>{userName}</strong></span>
            <div>Số dư: <span className="text-accent font-bold">{balance.toFixed(2)} USDT</span></div>
          </div>
        </div>
        
        <form onSubmit={handleCalculate} className="flex-col gap-4">
          <div className="mb-4">
            <label htmlFor="riskPercentage" className="label">Mức rủi ro (%)</label>
            <input
              id="riskPercentage"
              type="number"
              step="0.1"
              min="0.1"
              className="input"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(e.target.value)}
              placeholder="Ví dụ: 2"
            />
            {parseFloat(riskPercentage) > 0 && (
              <div className="text-sm mt-1">
                = <span className="font-bold text-accent">
                  {((parseFloat(riskPercentage) / 100) * balance).toFixed(2)} USDT
                </span>
              </div>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="leverage" className="label">Đòn bẩy (x)</label>
            <input
              id="leverage"
              type="number"
              step="0.1"
              min="1"
              className="input"
              value={leverage}
              onChange={(e) => setLeverage(e.target.value)}
              placeholder="Ví dụ: 10"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="stopLossPercentage" className="label">SL (%)</label>
            <input
              id="stopLossPercentage"
              type="number"
              step="0.1"
              min="0.1"
              className="input"
              value={stopLossPercentage}
              onChange={(e) => setStopLossPercentage(e.target.value)}
              placeholder="Ví dụ: 2"
            />
          </div>
          
          {error && (
            <div className="mb-4 text-sm" style={{ color: '#ef4444' }}>
              {error}
            </div>
          )}
          
          <button type="submit" className="btn btn-primary mb-4">
            Tính giá vào lệnh
          </button>
          
          {entryPrice !== null && (
            <div className="card" style={{ backgroundColor: 'var(--secondary)' }}>
              <h3 className="font-bold mb-2">Kết quả</h3>
              <div className="text-lg">
                Giá vào lệnh: <span className="text-accent font-bold">{entryPrice.toFixed(2)} USDT</span>
              </div>
            </div>
          )}
        </form>
      </div>
      
      {showSettings && (
        <SettingsModal
          balance={balance}
          settings={settings}
          onClose={() => setShowSettings(false)}
          onSave={handleSaveSettings}
          onUpdateBalance={onUpdateBalance}
        />
      )}
    </div>
  );
}
