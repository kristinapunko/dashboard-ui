import React from 'react';

const TrendChart = ({ trendData }) => {
  if (!trendData || trendData.length === 0) return null;

  // Розрахунок точок для SVG
  const points = trendData.map((d, i) => {
    const x = (i / (trendData.length - 1)) * 100;
    const y = 35 - (d.value / 100) * 30;
    return `${x},${y}`;
  }).join(' L');

  return (
    <div className="flex flex-col w-full">
      <div className="h-10 w-full relative">
        <svg
          className="w-full h-full text-blue-500 overflow-visible"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <path
            d={`M ${points}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
          />
        </svg>
      </div>

      <div className="flex justify-between w-full mt-1 px-1">
        {trendData.map((d, i) => (
          <span
            key={i}
            className="text-xs text-slate-500 tracking-tighter sm:tracking-widest"
          >
            {d.month}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrendChart;