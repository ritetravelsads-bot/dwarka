"use client";

import { useState } from "react";

interface EmiCalculatorProps {
  isOpen?: boolean;
  onClose: () => void;
}

export default function EmiCalculator({ isOpen = true, onClose }: EmiCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emiResult, setEmiResult] = useState("");

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const years = parseFloat(tenure);

    if (!principal || !rate || !years) {
      setEmiResult("Please fill all fields");
      return;
    }

    const monthlyRate = rate / 12 / 100;
    const months = years * 12;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmiResult(`Your Monthly EMI: ₹${Math.round(emi).toLocaleString("en-IN")}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border-t-8 border-primary animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-dark transition-transform hover:rotate-90"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">EMI Calculator</h2>
        <p className="text-gray-500 text-sm mb-6">Calculate your monthly mortgage payments instantly.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="5,000,000"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">
                Rate (%)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="8.5"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">
                Years
              </label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                placeholder="20"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all"
              />
            </div>
          </div>

          <button
            onClick={calculateEMI}
            className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform active:scale-95"
          >
            Calculate Monthly EMI
          </button>

          {emiResult && (
            <div className="mt-2 text-center py-4 rounded-xl font-bold text-lg text-primary bg-primary/5 border border-primary/10">
              {emiResult}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
