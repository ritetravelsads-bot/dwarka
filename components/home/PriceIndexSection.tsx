"use client";

import { TrendingUp, TrendingDown, Minus, Flame, Shield, Gem } from "lucide-react";

const priceData = [
  {
    sector: "Sector 112–114",
    developers: "M3M / Smartworld",
    avgPrice: "₹14,500",
    monthlyChange: "+3.2%",
    changeType: "up" as const,
    status: "High Demand",
    statusType: "hot" as const,
  },
  {
    sector: "Sector 106–109",
    developers: "Sobha / Elan",
    avgPrice: "₹11,500",
    monthlyChange: "+2.8%",
    changeType: "up" as const,
    status: "Best Value",
    statusType: "value" as const,
  },
  {
    sector: "Sector 102–105",
    developers: "Godrej / Hero / Puri",
    avgPrice: "₹15,200",
    monthlyChange: "+1.5%",
    changeType: "up" as const,
    status: "Stable",
    statusType: "stable" as const,
  },
  {
    sector: "Sector 110–111",
    developers: "Puri / M3M Crown",
    avgPrice: "₹13,800",
    monthlyChange: "+2.1%",
    changeType: "up" as const,
    status: "Premium",
    statusType: "premium" as const,
  },
  {
    sector: "Sector 84–88",
    developers: "Signature Global / GLS",
    avgPrice: "₹8,200",
    monthlyChange: "+4.1%",
    changeType: "up" as const,
    status: "High Demand",
    statusType: "hot" as const,
  },
  {
    sector: "Sector 37D",
    developers: "Signature Global / Sobha",
    avgPrice: "₹9,800",
    monthlyChange: "+3.6%",
    changeType: "up" as const,
    status: "Emerging",
    statusType: "value" as const,
  },
  {
    sector: "Kherki Daula (Sec 81–99)",
    developers: "DLF / Central Park",
    avgPrice: "₹7,500",
    monthlyChange: "+2.4%",
    changeType: "up" as const,
    status: "Best Value",
    statusType: "value" as const,
  },
];

const statusConfig = {
  hot: {
    bg: "bg-red-50",
    text: "text-red-600",
    border: "border-red-200",
    dot: "bg-red-500",
    icon: Flame,
  },
  stable: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    dot: "bg-green-500",
    icon: Shield,
  },
  premium: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    dot: "bg-amber-500",
    icon: Gem,
  },
  value: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    dot: "bg-blue-500",
    icon: TrendingUp,
  },
};

export default function PriceIndexSection() {
  return (
    <section className="py-12 px-4 bg-lightGrey">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary uppercase tracking-widest text-[10px] font-bold mb-2 border border-primary/20">
              Market Intelligence
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-dark leading-tight">
              Dwarka Expressway Live Price Index
              <span className="ml-2 text-sm font-normal text-slate-400 align-middle">— All Clusters</span>
            </h2>
          </div>
          <span className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-borderGrey self-start sm:self-end whitespace-nowrap">
            Monthly Report · May 2026
          </span>
        </div>

        {/* Table card */}
        <div className="bg-white rounded-xl border border-borderGrey shadow-sm overflow-hidden">

          {/* Desktop table */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-borderGrey text-xs uppercase tracking-wider text-slate-500">
                  <th className="text-left py-3 pl-5 pr-3 font-semibold w-[38%]">Sector</th>
                  <th className="text-left py-3 px-3 font-semibold w-[22%]">Avg. Price / sq.ft.</th>
                  <th className="text-left py-3 px-3 font-semibold w-[20%]">Monthly Change</th>
                  <th className="text-right py-3 pl-3 pr-5 font-semibold w-[20%]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderGrey">
                {priceData.map((item, index) => {
                  const config = statusConfig[item.statusType];
                  const StatusIcon = config.icon;
                  return (
                    <tr key={index} className="hover:bg-slate-50/60 transition-colors">
                      {/* Sector */}
                      <td className="py-3 pl-5 pr-3">
                        <span className="font-semibold text-dark">{item.sector}</span>
                        <span className="text-slate-400 text-xs ml-1.5">({item.developers})</span>
                      </td>
                      {/* Price */}
                      <td className="py-3 px-3">
                        <span className="font-bold text-dark">{item.avgPrice}</span>
                      </td>
                      {/* Change */}
                      <td className="py-3 px-3">
                        <span className={`inline-flex items-center gap-1 font-semibold ${
                          item.changeType === "up" ? "text-green-600" :
                          item.changeType === "down" ? "text-red-600" : "text-slate-500"
                        }`}>
                          {item.changeType === "up" ? <TrendingUp className="w-3.5 h-3.5" /> :
                           item.changeType === "down" ? <TrendingDown className="w-3.5 h-3.5" /> :
                           <Minus className="w-3.5 h-3.5" />}
                          {item.monthlyChange}
                        </span>
                      </td>
                      {/* Status */}
                      <td className="py-3 pl-3 pr-5 text-right">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${config.bg} ${config.text} ${config.border}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
                          <StatusIcon className="w-3 h-3" />
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden divide-y divide-borderGrey">
            {priceData.map((item, index) => {
              const config = statusConfig[item.statusType];
              const StatusIcon = config.icon;
              return (
                <div key={index} className="flex items-center justify-between px-4 py-3 gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-dark text-sm truncate">{item.sector}</p>
                    <p className="text-xs text-slate-400 truncate">{item.developers}</p>
                  </div>
                  <div className="text-right flex-shrink-0 space-y-1">
                    <p className="font-bold text-dark text-sm">{item.avgPrice}</p>
                    <span className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
                      item.changeType === "up" ? "text-green-600" : "text-slate-500"
                    }`}>
                      {item.changeType === "up" ? <TrendingUp className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                      {item.monthlyChange}
                    </span>
                  </div>
                  <span className={`flex-shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-bold border ${config.bg} ${config.text} ${config.border}`}>
                    <StatusIcon className="w-3 h-3" />
                    {item.status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="bg-slate-50 border-t border-borderGrey px-5 py-3">
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-600">How do we get the data?</strong>{" "}
              We average prices of 3–4 major projects per sector from recent transactions and apply market analysis to identify trends.
            </p>
          </div>
        </div>

        {/* Expert Verdict */}
        <div className="mt-4 flex items-start gap-3 bg-white border border-borderGrey rounded-xl px-5 py-4 shadow-sm">
          <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-dark">Expert Verdict:</strong>{" "}
            Sectors 112–114 and 110–111 lead on luxury demand due to Delhi border proximity and metro connectivity.
            Sector 37D and Sectors 84–88 are the fastest-rising clusters in 2026 with 3.6–4.1% monthly gains, driven by affordable 2 &amp; 3 BHK launches.
            Kherki Daula (Sec 81–99) offers the best entry price point. Circle rates rose up to 67% in April 2026, signalling strong government confidence across all zones.
          </p>
        </div>

      </div>
    </section>
  );
}
