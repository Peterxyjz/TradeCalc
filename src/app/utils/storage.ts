import { AppState, TradingMode, CryptoAccount, ForexAccount } from '../types';

const STORAGE_KEY = 'tradeCalc';

export const defaultCryptoSettings = {
  defaultRiskPercentage: 2,
  defaultLeverage: 10,
  defaultStopLossPercentage: 2,
};

export const defaultForexSettings = {
  defaultRiskPercentage: 1,
  preferredPairs: ['EURUSD', 'GBPUSD', 'USDJPY'],
};

export const loadAppState = (): AppState | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const saveAppState = (state: AppState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save app state:', error);
  }
};

export const clearAppState = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear app state:', error);
  }
};

export const createInitialAppState = (
  name: string, 
  mode: TradingMode, 
  balance: number
): AppState => {
  const cryptoAccount: CryptoAccount | null = mode === 'crypto' ? {
    balance,
    settings: defaultCryptoSettings,
  } : null;

  const forexAccount: ForexAccount | null = mode === 'forex' ? {
    balance,
    settings: defaultForexSettings,
  } : null;

  return {
    user: {
      name,
      hasSetup: {
        crypto: mode === 'crypto',
        forex: mode === 'forex',
      },
      lastUsedMode: mode,
    },
    currentMode: mode,
    accounts: {
      crypto: cryptoAccount,
      forex: forexAccount,
    },
  };
};

export const updateUserName = (state: AppState, name: string): AppState => ({
  ...state,
  user: {
    ...state.user,
    name,
  },
});

export const addAccount = (
  state: AppState, 
  mode: TradingMode, 
  balance: number
): AppState => {
  const newAccount = mode === 'crypto' 
    ? { balance, settings: defaultCryptoSettings }
    : { balance, settings: defaultForexSettings };

  return {
    ...state,
    user: {
      ...state.user,
      hasSetup: {
        ...state.user.hasSetup,
        [mode]: true,
      },
    },
    accounts: {
      ...state.accounts,
      [mode]: newAccount,
    },
  };
};

export const removeAccount = (state: AppState, mode: TradingMode): AppState => {
  const newState = {
    ...state,
    user: {
      ...state.user,
      hasSetup: {
        ...state.user.hasSetup,
        [mode]: false,
      },
    },
    accounts: {
      ...state.accounts,
      [mode]: null,
    },
  };

  // If removing current mode, switch to the other one
  if (state.currentMode === mode) {
    const otherMode = mode === 'crypto' ? 'forex' : 'crypto';
    if (newState.user.hasSetup[otherMode]) {
      newState.currentMode = otherMode;
      newState.user.lastUsedMode = otherMode;
    }
  }

  return newState;
};

export const updateAccountBalance = (
  state: AppState, 
  mode: TradingMode, 
  balance: number
): AppState => {
  if (!state.accounts[mode]) return state;

  return {
    ...state,
    accounts: {
      ...state.accounts,
      [mode]: {
        ...state.accounts[mode]!,
        balance,
      },
    },
  };
};

export const switchMode = (state: AppState, mode: TradingMode): AppState => ({
  ...state,
  currentMode: mode,
  user: {
    ...state.user,
    lastUsedMode: mode,
  },
});
