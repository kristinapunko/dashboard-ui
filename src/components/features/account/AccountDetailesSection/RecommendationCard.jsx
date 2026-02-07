const RecommendationCard = ({ title, description, onApply }) => {
  return (
    <div className="mb-2 md:mb-4 last:mb-0">
      <div className="flex flex-col md:flex-row items-start justify-between gap-1 md:gap-8">
        <div className="flex-1 ml-2">
          <h3 className="text-white text-sm tracking-wide font-medium">
            {title}
          </h3>
          <p className="text-slate-400 text-sm tracking-wider leading-relaxed">
            {description}
          </p>
        </div>
        <button
          onClick={onApply}
          className="bg-emerald-400 hover:bg-emerald-600 text-slate-900 font-medium  mt-2 px-6 py-1 md:px-12 md:py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard