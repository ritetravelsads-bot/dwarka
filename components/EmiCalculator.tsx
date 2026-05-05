"use client";

import { useState, useEffect } from "react";
import { X, Calculator } from "lucide-react";

interface EmiCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmiCalculator({ isOpen, onClose }: EmiCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    calculateEmi();
  }, [loanAmount, interestRate, tenure]);

  const calculateEmi = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    if (monthlyRate === 0) {
      setEmi(principal / months);
      setTotalPayment(principal);
      setTotalInterest(0);
      return;
    }

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPaymentValue = emiValue * months;
    const totalInterestValue = totalPaymentValue - principal;

    setEmi(Math.round(emiValue));
    setTotalPayment(Math.round(totalPaymentValue));
    setTotalInterest(Math.round(totalInterestValue));
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    }
    return `₹${value.toLocaleString("en-IN")}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#c8a55d]/10 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-[#c8a55d]" />
            </div>
            <h2 className="text-xl font-bold text-[#0f0f1a]">EMI Calculator</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Loan Amount</label>
              <span className="text-sm font-semibold text-[#c8a55d]">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min={500000}
              max={100000000}
              step={100000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c8a55d]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₹5L</span>
              <span>₹10Cr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Interest Rate</label>
              <span className="text-sm font-semibold text-[#c8a55d]">{interestRate}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={20}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c8a55d]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>5%</span>
              <span>20%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Loan Tenure</label>
              <span className="text-sm font-semibold text-[#c8a55d]">{tenure} Years</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c8a55d]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 Yr</span>
              <span>30 Yrs</span>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] rounded-xl p-6 text-white">
            <div className="text-center mb-6">
              <p className="text-white/60 text-sm mb-1">Monthly EMI</p>
              <p className="text-4xl font-bold text-[#c8a55d]">
                ₹{emi.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <p className="text-white/60 text-xs mb-1">Total Interest</p>
                <p className="text-lg font-semibold">{formatCurrency(totalInterest)}</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <p className="text-white/60 text-xs mb-1">Total Payment</p>
                <p className="text-lg font-semibold">{formatCurrency(totalPayment)}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="tel:+919354902932"
            className="block w-full bg-[#c8a55d] hover:bg-[#b8954d] text-white font-semibold py-4 rounded-lg text-center transition-colors"
          >
            Get Best Home Loan Rates
          </a>
        </div>
      </div>
    </div>
  );
}
