'use client';

import { TradingMode } from '../../types';

interface ModeToggleProps {
  currentMode: TradingMode;
  hasSetup: {
    crypto: boolean;
    forex: boolean;
  };
  cryptoBalance?: number;
  forexBalance?: number;
  onModeChange: (mode: TradingMode) => void;
  onAddAccount?: (mode: TradingMode) => void;
}

export default function ModeToggle({
  currentMode,
  hasSetup,
  cryptoBalance,
  forexBalance,
  onModeChange,
  onAddAccount,
}: ModeToggleProps) {
  const canAddAccount = !hasSetup.crypto || !hasSetup.forex;

  return (
    <div className="mb-6">
      {/* Mode Tabs */}
      <div className="flex gap-2 mb-4">
        {hasSetup.crypto && (
          <button
            className={`btn ${
              currentMode === 'crypto' ? 'btn-primary' : 'btn-secondary'
            } flex-1`}
            onClick={() => onModeChange('crypto')}
          >
            <span className="mr-2">🚀</span>
            Crypto
          </button>
        )}

        {hasSetup.forex && (
          <button
            className={`btn ${
              currentMode === 'forex' ? 'btn-primary' : 'btn-secondary'
            } flex-1`}
            onClick={() => onModeChange('forex')}
          >
            <span className="mr-2">💱</span>
            Forex
          </button>
        )}

        {/* Add Account Button */}
        {canAddAccount && onAddAccount && (
          <div className="relative">
            <button
              className="btn btn-secondary p-2 rounded-full"
              onClick={() => {
                if (!hasSetup.crypto) {
                  onAddAccount('crypto');
                } else if (!hasSetup.forex) {
                  onAddAccount('forex');
                }
              }}
              title="Thêm tài khoản"
            >
              <span className="text-lg">+</span>
            </button>
          </div>
        )}
      </div>

      {/* Account Info */}
      <div className="text-sm space-y-1">
        {hasSetup.crypto && (
          <div className={`${currentMode === 'crypto' ? 'text-accent font-semibold' : 'text-muted'}`}>
            🚀 Crypto: {cryptoBalance?.toFixed(2)} USDT
          </div>
        )}
        
        {hasSetup.forex && (
          <div className={`${currentMode === 'forex' ? 'text-accent font-semibold' : 'text-muted'}`}>
            💱 Forex: {forexBalance?.toFixed(2)} USD
          </div>
        )}
      </div>
    </div>
  );
}
