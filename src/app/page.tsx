"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import UserForm from "./components/UserForm";
import CryptoCalculator from "./components/crypto/CryptoCalculator";
import ForexCalculator from "./components/forex/ForexCalculator";
import ModeToggle from "./components/shared/ModeToggle";
import AddAccountModal from "./components/shared/AddAccountModal";
import GlobalSettingsModal from "./components/shared/GlobalSettingsModal";
import { AppState, TradingMode } from "./types";
import {
  loadAppState,
  saveAppState,
  createInitialAppState,
  addAccount,
  switchMode,
} from "./utils/storage";

export default function Home() {
  const [appState, setAppState] = useState<AppState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const [showGlobalSettings, setShowGlobalSettings] = useState(false);

  useEffect(() => {
    // Load app state from localStorage
    const savedState = loadAppState();
    if (savedState) {
      setAppState(savedState);
    }
    setIsLoading(false);
  }, []);

  const handleUserSetup = (name: string, mode: TradingMode, balance: number) => {
    const newState = createInitialAppState(name, mode, balance);
    setAppState(newState);
    saveAppState(newState);
  };

  const handleModeChange = (mode: TradingMode) => {
    if (!appState || !appState.user.hasSetup[mode]) return;
    
    const newState = switchMode(appState, mode);
    setAppState(newState);
    saveAppState(newState);
  };

  const handleAddAccount = (mode: TradingMode, balance: number) => {
    if (!appState) return;
    
    const newState = addAccount(appState, mode, balance);
    setAppState(newState);
    saveAppState(newState);
    setShowAddAccountModal(false);
  };

  const handleUpdateCryptoAccount = (account: NonNullable<AppState['accounts']['crypto']>) => {
    if (!appState) return;
    
    const newState = {
      ...appState,
      accounts: {
        ...appState.accounts,
        crypto: account,
      },
    };
    setAppState(newState);
    saveAppState(newState);
  };

  const handleUpdateForexAccount = (account: NonNullable<AppState['accounts']['forex']>) => {
    if (!appState) return;
    
    const newState = {
      ...appState,
      accounts: {
        ...appState.accounts,
        forex: account,
      },
    };
    setAppState(newState);
    saveAppState(newState);
  };

  const handleUpdateUserName = (name: string) => {
    if (!appState) return;
    
    const newState = {
      ...appState,
      user: {
        ...appState.user,
        name,
      },
    };
    setAppState(newState);
    saveAppState(newState);
  };

  const handleRemoveAccount = (mode: TradingMode) => {
    if (!appState) return;
    
    const newState = {
      ...appState,
      user: {
        ...appState.user,
        hasSetup: {
          ...appState.user.hasSetup,
          [mode]: false,
        },
      },
      accounts: {
        ...appState.accounts,
        [mode]: null,
      },
    };

    // If removing current mode, switch to the other one
    if (appState.currentMode === mode) {
      const otherMode = mode === 'crypto' ? 'forex' : 'crypto';
      if (newState.user.hasSetup[otherMode]) {
        newState.currentMode = otherMode;
        newState.user.lastUsedMode = otherMode;
      }
    }

    setAppState(newState);
    saveAppState(newState);
    setShowGlobalSettings(false);
  };

  const getAvailableModesToAdd = (): TradingMode[] => {
    if (!appState) return [];
    
    const available: TradingMode[] = [];
    if (!appState.user.hasSetup.crypto) available.push('crypto');
    if (!appState.user.hasSetup.forex) available.push('forex');
    return available;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pb-8 pt-10">
        <div className="container">
          <div className="text-center">
            <div className="text-xl">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!appState) {
    return (
      <div className="min-h-screen pb-8 pt-10">
        <div className="container">
          <header className="mb-6 text-center">
            <h1 className="text-xl font-bold">TradeCalc</h1>
            <p className="text-sm">Máy Tính Giá Vào Lệnh Thông Minh</p>
          </header>

          <UserForm onComplete={handleUserSetup} />

          <footer className="mt-6 text-center text-sm">
            <div className="mb-3">
              <Link href="/guide" className="text-accent hover:underline">
                📖 Hướng dẫn sử dụng
              </Link>
            </div>
            <p>Copyright © 2025 Peterxyjz - Lê Quang Huy</p>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-8 pt-10">
      <div className="container relative">
        <button
          className="absolute top-0 right-4 btn-secondary rounded-full p-1"
          onClick={() => setShowGlobalSettings(true)}
          aria-label="Cài đặt chung"
        >
          <Image src="/settings-icon.svg" alt="Cài đặt" width={20} height={20} />
        </button>

        <header className="mb-6 text-center">
          <h1 className="text-xl font-bold">TradeCalc</h1>
          <p className="text-sm">Máy Tính Giá Vào Lệnh Thông Minh</p>
        </header>

        <ModeToggle
          currentMode={appState.currentMode}
          hasSetup={appState.user.hasSetup}
          cryptoBalance={appState.accounts.crypto?.balance}
          forexBalance={appState.accounts.forex?.balance}
          onModeChange={handleModeChange}
          onAddAccount={() => setShowAddAccountModal(true)}
        />

        {appState.currentMode === 'crypto' && appState.accounts.crypto && (
          <CryptoCalculator
            userName={appState.user.name}
            account={appState.accounts.crypto}
            onUpdateAccount={handleUpdateCryptoAccount}
          />
        )}

        {appState.currentMode === 'forex' && appState.accounts.forex && (
          <ForexCalculator
            userName={appState.user.name}
            account={appState.accounts.forex}
            onUpdateAccount={handleUpdateForexAccount}
          />
        )}

        <footer className="mt-6 text-center text-sm">
          <div className="mb-3">
            <Link href="/guide" className="text-accent hover:underline">
              📖 Hướng dẫn sử dụng
            </Link>
          </div>
          <p>Copyright © 2025 Peterxyjz - Lê Quang Huy</p>
        </footer>

        {showAddAccountModal && (
          <AddAccountModal
            availableModes={getAvailableModesToAdd()}
            onComplete={handleAddAccount}
            onClose={() => setShowAddAccountModal(false)}
          />
        )}

        {showGlobalSettings && (
          <GlobalSettingsModal
            appState={appState}
            onClose={() => setShowGlobalSettings(false)}
            onUpdateUserName={handleUpdateUserName}
            onRemoveAccount={handleRemoveAccount}
          />
        )}
      </div>
    </div>
  );
}
