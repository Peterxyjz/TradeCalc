export type TradingMode = 'crypto' | 'forex';

export interface UserProfile {
  name: string;
  hasSetup: {
    crypto: boolean;
    forex: boolean;
  };
  lastUsedMode: TradingMode;
}

export interface CryptoSettings {
  defaultRiskPercentage: number;
  defaultLeverage: number;
  defaultStopLossPercentage: number;
}

export interface ForexSettings {
  defaultRiskPercentage: number;
  preferredPairs: string[];
}

export interface CryptoAccount {
  balance: number; // USDT
  settings: CryptoSettings;
}

export interface ForexAccount {
  balance: number; // USD
  settings: ForexSettings;
}

export interface AccountData {
  crypto: CryptoAccount | null;
  forex: ForexAccount | null;
}

export interface AppState {
  user: UserProfile;
  currentMode: TradingMode;
  accounts: AccountData;
}

export interface ForexCalculation {
  riskAmount: number;
  entryPrice: number;
  slPrice: number;
  pairType: 'major' | 'minor' | 'exotic';
  pipValue: number;
  slPips: number;
  positionSize: number; // lots
  marginRequired?: number;
}

export const CURRENCY_PAIRS = {
  major: ['EURUSD', 'GBPUSD', 'USDCHF', 'USDJPY', 'USDCAD', 'AUDUSD', 'NZDUSD'],
  minor: ['EURJPY', 'GBPJPY', 'EURGBP', 'AUDCAD', 'AUDCHF', 'AUDNZD'],
  exotic: ['USDTRY', 'USDZAR', 'USDMXN', 'USDHKD']
} as const;
