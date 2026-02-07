import React from "react";

const Arrow = ({ position, label, isBottom = false, subLabel }) => {
  const numericPosition = Math.min(
    Math.max(parseFloat(position) || 0, 0),
    100
  );

  return (
    <div
      className={`absolute transform -translate-x-1/2 flex flex-col items-center ${isBottom ? "-bottom-2" : "-top-3"
        }`}
      style={{ left: `${numericPosition}%` }}
    >
      {!isBottom && (
        <div className="text-[8px] text-slate-400 whitespace-nowrap mb-0.5">
          {label}
        </div>
      )}

      <div
        className={`w-0 h-0
          border-l-[6px] border-l-transparent
          border-r-[6px] border-r-transparent
          ${isBottom
            ? "border-b-[7px] border-b-emerald-500"
            : "border-t-[7px] border-t-blue-500"
          }`}
      />

      {isBottom && (
        <div className="text-[8px] font-medium text-emerald-500 whitespace-nowrap mt-0.5">
          {subLabel}
        </div>
      )}
    </div>
  );
};

const getGreenEndPercent = (segments) => {
  let sum = 0;

  for (const segment of segments) {
    sum += segment.value;

    if (
      segment.color.includes("green") ||
      segment.color.includes("emerald")
    ) {
      return sum;
    }
  }

  return 0;
};

const SegmentedProgressBar = ({
  title,
  subtitle,
  segments,
  current,
  delta,
}) => {
  const greenEnd = getGreenEndPercent(segments);

  return (
    <div className="w-full">
      {title && (
        <div className="text-slate-300 text-[10px] font-semibold mb-1">
          {title}
        </div>
      )}

      <div className="relative py-4">
        <Arrow
          position={greenEnd}
          label={subtitle || `TG ${greenEnd}%`}
        />

        <div className="relative flex h-5 w-full overflow-hidden rounded-full bg-slate-700">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={segment.color}
              style={{ width: `${segment.value}%` }}
            />
          ))}

          <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold pointer-events-none">
            {current}%
          </div>
        </div>

        <Arrow
          position={current}
          isBottom
          subLabel={delta}
        />
      </div>
    </div>
  );
};

export default SegmentedProgressBar;
