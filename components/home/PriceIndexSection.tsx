"use client";

import { TrendingUp, TrendingDown, Minus, Flame, Shield, Gem } from "lucide-react";

// Price data for Dwarka Expressway sectors (May 2026)
const priceData = [
  {
    sector: "Sector 112-113",
    developers: "M3M/Smartworld",
    avgPrice: "₹14,500",
    monthlyChange: "+3.2%",
    changeType: "up" as const,
    status: "High Demand",
    statusType: "hot" as const,
  },
  {
    sector: "Sector 106-109",
    developers: "Sobha/Elan",
    avgPrice: "₹11,500",
    monthlyChange: "+2.8%",
    changeType: "up" as const,
    status: "Best Value",
    statusType: "value" as const,
  },
  {
    sector: "Sector 102-103",
    developers: "Godrej/Whiteland",
    avgPrice: "₹15,200",
    monthlyChange: "+1.5%",
    changeType: "up" as const,
    status: "Stable",
    statusType: "stable" as const,
  },
  {
    sector: "Sector 104",
    developers: "Hero/Puri",
    avgPrice: "₹16,800",
    monthlyChange: "+0.8%",
    changeType: "up" as const,
    status: "Premium",
    statusType: "premium" as const,
  },
  {
    sector: "Sector 110-111",
    developers: "Puri/M3M",
    avgPrice: "₹10,500",
    monthlyChange: "+2.1%",
    changeType: "up" as const,
    status: "Emerging",
    statusType: "value" as const,
  },
];

const statusConfig = {
  hot: {
    bg: "bg-red-50",
    text: "text-red-600",
    border: "border-red-200",
    icon: Flame,
  },
  stable: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
    icon: Shield,
  },
  premium: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    icon: Gem,
  },
  value: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    icon: TrendingUp,
  },
};

export default function PriceIndexSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 border border-primary/20">
            Market Intelligence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 tracking-tight">
            Dwarka Expressway Price Index
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real-time sector-wise pricing trends updated monthly. Data sourced from recent transactions and market analysis.
          </p>
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-2xl border border-borderGrey shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="bg-slate-50 border-b border-borderGrey px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-dark">
                Monthly Report - May 2026
              </h3>
              <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-borderGrey">
                Trending 5 Sectors
              </span>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-borderGrey bg-slate-50/50">
                  <th className="text-left py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Sector
                  </th>
                  <th className="text-left py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Avg. Price (per sq. ft.)
                  </th>
                  <th className="text-left py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Monthly Change
                  </th>
                  <th className="text-right py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => {
                  const config = statusConfig[item.statusType];
                  const StatusIcon = config.icon;
                  return (
                    <tr
                      key={index}
                      className="border-b border-borderGrey last:border-b-0 hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-5 px-6">
                        <div>
                          <span className="font-semibold text-dark">
                            {item.sector}
                          </span>
                          <span className="text-slate-400 text-sm ml-2">
                            ({item.developers})
                          </span>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <span className="font-bold text-dark text-lg">
                          {item.avgPrice}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-1.5">
                          {item.changeType === "up" ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : item.changeType === "down" ? (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          ) : (
                            <Minus className="w-4 h-4 text-slate-400" />
                          )}
                          <span
                            className={`font-semibold ${
                              item.changeType === "up"
                                ? "text-green-600"
                                : item.changeType === "down"
                                ? "text-red-600"
                                : "text-slate-500"
                            }`}
                          >
                            {item.monthlyChange}
                          </span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-right">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${config.bg} ${config.text} ${config.border}`}
                        >
                          <StatusIcon className="w-3.5 h-3.5" />
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-borderGrey">
            {priceData.map((item, index) => {
              const config = statusConfig[item.statusType];
              const StatusIcon = config.icon;
              return (
                <div key={index} className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-semibold text-dark block">
                        {item.sector}
                      </span>
                      <span className="text-slate-400 text-sm">
                        {item.developers}
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${config.bg} ${config.text} ${config.border}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Avg. Price
                      </span>
                      <span className="font-bold text-dark text-lg">
                        {item.avgPrice}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">
                        Monthly
                      </span>
                      <div className="flex items-center gap-1">
                        {item.changeType === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : item.changeType === "down" ? (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400" />
                        )}
                        <span
                          className={`font-semibold ${
                            item.changeType === "up"
                              ? "text-green-600"
                              : item.changeType === "down"
                              ? "text-red-600"
                              : "text-slate-500"
                          }`}
                        >
                          {item.monthlyChange}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="bg-slate-50 border-t border-borderGrey px-6 py-4">
            <p className="text-xs text-slate-500">
              <strong>How do we get the data?</strong> We average the prices of
              3-4 major projects in each sector from recent transactions and
              apply market analysis to identify trends.
            </p>
          </div>
        </div>

        {/* Expert Verdict */}
        <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-borderGrey">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-dark mb-1">Expert Verdict</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sectors 112-113 are seeing a spike due to proximity to Delhi
                border and upcoming metro connectivity. Sectors 106-109 offer
                the best value for 2026 with 15-20% appreciation potential.
                Circle rates increased by up to 67% in April 2026, signaling
                strong government confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
