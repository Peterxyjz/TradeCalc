import { ForexCalculation, CURRENCY_PAIRS } from '../types';

export const calculatePips = (entryPrice: number, slPrice: number, pair: string): number => {
  const priceDiff = Math.abs(entryPrice - slPrice);
  
  // JPY pairs have 2 decimal places for pips
  if (pair.includes('JPY')) {
    return priceDiff * 100;
  }
  
  // Most other pairs have 4 decimal places for pips  
  return priceDiff * 10000;
};

export const getPipValue = (pair: string, lotSize: number = 1): number => {
  // Standard pip values for 1 lot in USD account
  const pipValues: Record<string, number> = {
    // Major pairs
    'EURUSD': 10,
    'GBPUSD': 10,
    'AUDUSD': 10,
    'NZDUSD': 10,
    'USDCHF': 10,
    'USDCAD': 10,
    'USDJPY': 10,
    
    // Cross pairs (approximate)
    'EURJPY': 10,
    'GBPJPY': 10,
    'EURGBP': 10,
    'AUDCAD': 10,
    'AUDCHF': 10,
    'AUDNZD': 10,
    
    // Exotic pairs (approximate)
    'USDTRY': 10,
    'USDZAR': 10,
    'USDMXN': 10,
    'USDHKD': 10,
  };

  const basePipValue = pipValues[pair.toUpperCase()] || 10;
  return basePipValue * lotSize;
};

export const getPairType = (pair: string): 'major' | 'minor' | 'exotic' => {
  const upperPair = pair.toUpperCase();
  
  if ((CURRENCY_PAIRS.major as readonly string[]).includes(upperPair)) {
    return 'major';
  }
  
  if ((CURRENCY_PAIRS.minor as readonly string[]).includes(upperPair)) {
    return 'minor';
  }
  
  return 'exotic';
};

export const calculateForexPosition = (
  riskAmount: number,
  entryPrice: number,
  slPrice: number,
  pair: string = 'EURUSD'
): ForexCalculation => {
  const slPips = calculatePips(entryPrice, slPrice, pair);
  const pairType = getPairType(pair);
  const pipValue = getPipValue(pair, 1); // For 1 lot
  
  // Position size in lots = Risk Amount / (SL in pips × Pip Value per lot)
  const positionSize = riskAmount / (slPips * pipValue);
  
  // Calculate actual pip value for this position size
  const actualPipValue = getPipValue(pair, positionSize);
  
  return {
    riskAmount,
    entryPrice,
    slPrice,
    pairType,
    pipValue: actualPipValue,
    slPips,
    positionSize,
  };
};

export const formatLotSize = (lotSize: number): string => {
  if (lotSize >= 1) {
    return lotSize.toFixed(2);
  } else if (lotSize >= 0.1) {
    return lotSize.toFixed(3);
  } else {
    return lotSize.toFixed(4);
  }
};

export const formatPips = (pips: number): string => {
  return pips.toFixed(1);
};

// Common forex pairs for dropdown
export const getAllPairs = (): string[] => {
  return [
    ...CURRENCY_PAIRS.major,
    ...CURRENCY_PAIRS.minor,
    ...CURRENCY_PAIRS.exotic,
  ];
};

export const getMajorPairs = (): string[] => {
  return [...CURRENCY_PAIRS.major];
};

// Validate forex inputs
export const validateForexInputs = (
  riskAmount: number,
  entryPrice: number,
  slPrice: number
): string | null => {
  if (riskAmount <= 0) {
    return 'Risk amount phải lớn hơn 0';
  }
  
  if (entryPrice <= 0) {
    return 'Entry price phải lớn hơn 0';
  }
  
  if (slPrice <= 0) {
    return 'Stop Loss price phải lớn hơn 0';
  }
  
  if (entryPrice === slPrice) {
    return 'Entry price và Stop Loss price phải khác nhau';
  }
  
  return null;
};
