"use client";

import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import Calculator from "./components/Calculator";

// Fix ESLint error
export default function Home() {
  const [userName, setUserName] = useState("");
  const [balance, setBalance] = useState(0);
  const [isSetup, setIsSetup] = useState(false);

  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem("tradingAppUser");
    if (userData) {
      const { name, balance } = JSON.parse(userData);
      setUserName(name);
      setBalance(balance);
      setIsSetup(true);
    }
  }, []);

  const handleUserSetup = (name: string, initialBalance: number) => {
    setUserName(name);
    setBalance(initialBalance);
    setIsSetup(true);
  };

  const handleUpdateBalance = (newBalance: number) => {
    setBalance(newBalance);
  };

  return (
    <div className="min-h-screen pb-8 pt-10">
      <div className="container">
        <header className="mb-6 text-center">
          <h1 className="text-xl font-bold">TradeCalc</h1>
          <p className="text-sm">Máy Tính Giá Vào Lệnh Thông Minh</p>
        </header>

        {!isSetup ? (
          <UserForm onComplete={handleUserSetup} />
        ) : (
          <Calculator
            userName={userName}
            balance={balance}
            onUpdateBalance={handleUpdateBalance}
          />
        )}

        <footer className="mt-6 text-center text-sm">
          <p>Copyright © 2025 Peterxyjz - Lê Quang Huy</p>
        </footer>
      </div>
    </div>
  );
}
