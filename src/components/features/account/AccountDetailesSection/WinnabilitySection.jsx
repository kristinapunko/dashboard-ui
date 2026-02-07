import WinnabilityItem from "./WinnabilityItem";

const WinnabilitySection = ({ title, icon: Icon, items, isIncreasing }) => {
  return (
    <div className="bg-[var(--color-brand-border)]/40 rounded-2xl px-1 sm:px-4 md:px-6 py-3 sm:py-4 flex-1">
      <div className="flex items-center gap-2 mb-4 sm:mb-6 md:mb-8">
        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center ${isIncreasing ? 'border-emerald-500' : 'border-amber-500'
          }`}>
          <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${isIncreasing ? 'text-emerald-500' : 'text-amber-500'}`} />
        </div>
        <h2 className="text-white text-sm sm:text-base md:text-lg font-medium tracking-wider">
          {title}
        </h2>
      </div>
      <div className="space-y-1 sm:space-y-1.5">
        {items.map((item) => (
          <WinnabilityItem
            key={item.id}
            number={item.id}
            label={item.label}
            percentage={item.percentage}
            isIncreasing={isIncreasing}
          />
        ))}
      </div>
    </div>
  );
};

export default WinnabilitySection;