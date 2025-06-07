"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ForexAccount, ForexSettings } from "../../types";
import ForexSettingsModal from "./ForexSettingsModal";
import { 
  formatLotSize, 
  formatPips,
  validateForexInputs 
} from "../../utils/forex";

interface ForexCalculatorProps {
  userName: string;
  account: ForexAccount;
  onUpdateAccount: (account: ForexAccount) => void;
}

export default function ForexCalculator({
  userName,
  account,
  onUpdateAccount,
}: ForexCalculatorProps) {
  // Settings
  const [showSettings, setShowSettings] = useState(false);

  // Form values
  const [riskPercentage, setRiskPercentage] = useState(
    account.settings.defaultRiskPercentage.toString()
  );
  const [pipValue, setPipValue] = useState(
    account.settings.defaultPipValue?.toString() || "10"
  );
  const [entryPrice, setEntryPrice] = useState("");
  const [slPrice, setSlPrice] = useState("");

  // Result
  const [calculation, setCalculation] = useState<any>(null);
  const [error, setError] = useState<string>("");

  // Position reduction
  const [showPositionOptions, setShowPositionOptions] = useState(false);
  const [customRiskReduction, setCustomRiskReduction] = useState("");
  const [reducedLotSize, setReducedLotSize] = useState<number | null>(null);
  const [reductionType, setReductionType] = useState<"0.5R" | "custom">("0.5R");

  // Load settings from account
  useEffect(() => {
    setRiskPercentage(account.settings.defaultRiskPercentage.toString());
    setPipValue(account.settings.defaultPipValue?.toString() || "10");
  }, [account.settings]);

  // New Forex calculation with updated formula
  const calculateForexPosition = (riskAmount: number, entryPrice: number, slPrice: number, pipValue: number) => {
    // New formula: Lot = R / (|SL - Entry| × pips)
    const priceDifference = Math.abs(slPrice - entryPrice);
    const positionSize = riskAmount / (priceDifference * pipValue);
    
    // For display purposes, still show pips calculation
    const avgPrice = (entryPrice + slPrice) / 2;
    const isJPYPair = avgPrice > 50;
    const slPips = isJPYPair ? priceDifference * 100 : priceDifference * 10000;
    
    return {
      riskAmount,
      entryPrice,
      slPrice,
      slPips,
      pipValue,
      positionSize,
      isJPYPair,
      priceDifference
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (!riskPercentage.trim()) {
      setError("Vui lòng nhập mức rủi ro");
      return;
    }

    if (!entryPrice.trim()) {
      setError("Vui lòng nhập giá Entry");
      return;
    }

    if (!slPrice.trim()) {
      setError("Vui lòng nhập giá Stop Loss");
      return;
    }

    if (!pipValue.trim()) {
      setError("Vui lòng nhập giá trị pip");
      return;
    }

    const rValue = parseFloat(riskPercentage);
    const entryValue = parseFloat(entryPrice);
    const slValue = parseFloat(slPrice);
    const pipVal = parseFloat(pipValue);

    if (isNaN(rValue) || rValue <= 0) {
      setError("Mức rủi ro phải là số dương");
      return;
    }

    if (isNaN(entryValue) || entryValue <= 0) {
      setError("Giá Entry phải là số dương");
      return;
    }

    if (isNaN(slValue) || slValue <= 0) {
      setError("Giá Stop Loss phải là số dương");
      return;
    }

    if (isNaN(pipVal) || pipVal <= 0) {
      setError("Giá trị pip phải là số dương");
      return;
    }

    if (entryValue === slValue) {
      setError("Giá Entry và Stop Loss phải khác nhau");
      return;
    }

    // Calculate risk amount
    const riskAmount = (rValue / 100) * account.balance;

    // Validate forex inputs
    const validationError = validateForexInputs(riskAmount, entryValue, slValue, pipVal);
    if (validationError) {
      setError(validationError);
      return;
    }

    // Calculate position with new formula
    const result = calculateForexPosition(riskAmount, entryValue, slValue, pipVal);
    setCalculation(result);
    setShowPositionOptions(true);
    setReducedLotSize(null);
  };

  // Calculate reduced position lot size
  const calculateReducedPosition = (
    type: "0.5R" | "custom",
    customValue?: number
  ) => {
    if (!calculation) return;

    let reductionFactor: number;

    if (type === "0.5R") {
      reductionFactor = 0.5;
    } else {
      const value = customValue || parseFloat(customRiskReduction);
      if (isNaN(value) || value <= 0 || value >= 100) {
        setError("Vui lòng nhập tỷ lệ giảm hợp lệ (0-100%)");
        return;
      }
      reductionFactor = value / 100;
    }

    const reducedLots = calculation.positionSize * reductionFactor;
    setReducedLotSize(reducedLots);
    setError("");
  };

  // Get the display lot size (original or reduced)
  const getDisplayLotSize = () => {
    return reducedLotSize !== null ? reducedLotSize : calculation?.positionSize;
  };

  // Get the reduction info text
  const getReductionInfo = () => {
    if (reducedLotSize === null) return null;
    const percentage =
      reductionType === "0.5R" ? "50%" : `${customRiskReduction}%`;
    return `Giảm ${percentage} so với position gốc`;
  };

  const handleSaveSettings = (newSettings: ForexAccount['settings']) => {
    const updatedAccount = {
      ...account,
      settings: newSettings,
    };
    onUpdateAccount(updatedAccount);
    setShowSettings(false);

    // Apply new settings to current form
    setRiskPercentage(newSettings.defaultRiskPercentage.toString());
    setPipValue(newSettings.defaultPipValue?.toString() || "10");
  };

  // Calculate pips for display
  const calculatePipsForDisplay = () => {
    if (!entryPrice || !slPrice) return 0;
    const entryValue = parseFloat(entryPrice);
    const slValue = parseFloat(slPrice);
    const avgPrice = (entryValue + slValue) / 2;
    const isJPYPair = avgPrice > 50;
    const multiplier = isJPYPair ? 100 : 10000;
    return Math.abs((entryValue - slValue) * multiplier);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-4 right-4 btn-secondary rounded-full p-1"
        onClick={() => setShowSettings(true)}
        aria-label="Mở cài đặt"
      >
        <Image src="/settings-icon.svg" alt="Cài đặt" width={20} height={20} />
      </button>

      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">💱 Forex Calculator</h2>
          <div className="text-sm">
            <span className="text-base">
              Xin chào, <strong>{userName}</strong>
            </span>
            <div className="text-sm">
              Số dư:{" "}
              <span className="text-accent font-semibold">
                {account.balance.toFixed(2)} USD
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleCalculate} className="flex-col gap-4">
          <div className="mb-4">
            <label htmlFor="riskPercentage" className="label">
              Mức rủi ro (%)
            </label>
            <input
              id="riskPercentage"
              type="number"
              step="0.1"
              min="0.1"
              className="input"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(e.target.value)}
              placeholder="Ví dụ: 1"
            />
            {parseFloat(riskPercentage) > 0 && (
              <div className="text-sm mt-1 text-muted">
                ={" "}
                <span className="font-semibold text-accent">
                  {((parseFloat(riskPercentage) / 100) * account.balance).toFixed(2)}{" "}
                  USD
                </span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="pipValue" className="label">
              Giá trị pip (Pips)
            </label>
            <input
              id="pipValue"
              type="number"
              step="0.1"
              min="0.1"
              className="input"
              value={pipValue}
              onChange={(e) => setPipValue(e.target.value)}
              placeholder="Ví dụ: 10"
            />
            <div className="text-sm mt-1 text-muted">
              Giá trị mỗi pip (mặc định: $10/pip)
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="entryPrice" className="label">
              Giá Entry
            </label>
            <input
              id="entryPrice"
              type="number"
              step="0.00001"
              min="0"
              className="input"
              value={entryPrice}
              onChange={(e) => setEntryPrice(e.target.value)}
              placeholder="Ví dụ: 1.14122"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="slPrice" className="label">
              Giá Stop Loss
            </label>
            <input
              id="slPrice"
              type="number"
              step="0.00001"
              min="0"
              className="input"
              value={slPrice}
              onChange={(e) => setSlPrice(e.target.value)}
              placeholder="Ví dụ: 1.14049"
            />
            {entryPrice && slPrice && (
              <div className="text-sm mt-1 text-muted">
                SL = {formatPips(calculatePipsForDisplay())} pips
                {calculation?.isJPYPair && (
                  <span className="text-xs ml-2">(JPY pair detected)</span>
                )}
              </div>
            )}
          </div>

          {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

          <button type="submit" className="btn btn-primary mb-4">
            Tính lot size
          </button>

          {calculation && (
            <div
              className="card"
              style={{ backgroundColor: "var(--secondary)" }}
            >
              <h3 className="text-lg font-semibold mb-2">Kết quả</h3>
              <div className="space-y-2 mb-4">
                <div className="text-lg">
                  <span className="text-base font-medium">Lot size: </span>
                  <span className="text-accent font-bold">
                    {formatLotSize(getDisplayLotSize())} lots
                  </span>
                  {getReductionInfo() && (
                    <div className="text-xs mt-1 text-muted">
                      {getReductionInfo()}
                    </div>
                  )}
                </div>
                
                <div className="text-sm space-y-1">
                  <div>Risk: {calculation.riskAmount.toFixed(2)} USD</div>
                  <div>Price difference: {calculation.priceDifference.toFixed(5)}</div>
                  <div>Pip value: ${calculation.pipValue}/pip</div>
                  <div className="text-xs text-muted">Công thức: {calculation.riskAmount.toFixed(2)} / ({calculation.priceDifference.toFixed(5)} × {calculation.pipValue}) = {formatLotSize(getDisplayLotSize())} lots</div>
                </div>
              </div>

              {showPositionOptions && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-base font-semibold mb-3">
                    Giảm Position
                  </h4>

                  <div className="flex gap-2 mb-3">
                    <button
                      type="button"
                      className={`btn btn-sm ${
                        reductionType === "0.5R"
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                      onClick={() => {
                        setReductionType("0.5R");
                        calculateReducedPosition("0.5R");
                      }}
                      style={{ flex: 1 }}
                    >
                      0.5R
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${
                        reductionType === "custom"
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                      onClick={() => {
                        setReductionType("custom");
                        setReducedLotSize(null);
                        setCustomRiskReduction("");
                      }}
                      style={{ flex: 1 }}
                    >
                      Tùy chỉnh
                    </button>
                  </div>

                  {reductionType === "custom" && (
                    <div className="mb-3">
                      <label htmlFor="customRiskReduction" className="label">
                        Tỷ lệ giảm (%)
                      </label>
                      <input
                        id="customRiskReduction"
                        type="number"
                        step="0.1"
                        min="0.1"
                        max="99"
                        className="input"
                        value={customRiskReduction}
                        onChange={(e) => {
                          setCustomRiskReduction(e.target.value);
                          const value = parseFloat(e.target.value);
                          if (!isNaN(value) && value > 0 && value < 100) {
                            calculateReducedPosition("custom", value);
                          } else {
                            setReducedLotSize(null);
                          }
                        }}
                        placeholder="Ví dụ: 30"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </form>
      </div>

      {showSettings && (
        <ForexSettingsModal
          account={account}
          settings={account.settings}
          onClose={() => setShowSettings(false)}
          onSave={handleSaveSettings}
          onUpdateAccount={onUpdateAccount}
        />
      )}
    </div>
  );
}
