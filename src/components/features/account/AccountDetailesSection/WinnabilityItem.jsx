import ProgressBar from "../../../ui/ProgressBar";

const WinnabilityItem = ({ number, label, percentage, isIncreasing }) => {
  const absScore = Math.abs(percentage);

  return (
    <div className="flex items-start gap-2 mb-4">
      <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border-2 mt-1 ${isIncreasing ? 'border-emerald-500 text-emerald-500' : 'border-amber-500 text-amber-500'
        } text-sm font-bold`}>
        {number}
      </div>

      <div className="flex-1 ">
        <div className="text-gray-200 text-sm font-light tracking-wide">
          {label}
        </div>

        <ProgressBar
          score={absScore}
          showBackground={false}
          colorClass={isIncreasing
            ? "from-emerald-600/40 via-emerald-500 to-emerald-400"
            : "from-amber-600/40 via-amber-500 to-amber-400"
          }
        />
      </div>
    </div>
  );
};

export default WinnabilityItem