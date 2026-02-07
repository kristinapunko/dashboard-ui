const ProgressBar = ({
  label,
  score,
  showBackground = true,
  showScore = true,
  showEndValue = false,
  endValue,
  showEndPercentage = false,
  colorClass = "bg-gradient-to-r from-blue-400/5 to-blue-400/80"
}) => {
  const numericScore = parseFloat(score) || 0;

  const getTooltipText = () => {
    let text = '';

    if (label) {
      text += `${label}`;
    }

    if (numericScore) {
      text += label ? `: ${numericScore}%` : `${numericScore}%`;
    }

    return text || 'Progress';
  };

  return (
    <div className="w-full" title={getTooltipText()}>
      {showBackground && (
        <div className="flex items-center mb-2 sm:mb-0 sm:hidden">
          <p className="text-xs text-white font-light whitespace-nowrap">
            {label ? `${label}` : ""}{showScore && ": " + numericScore + "%"}
          </p>
        </div>
      )}

      <div className={`flex w-full items-center ${showBackground ? 'sm:flex-row gap-2' : 'relative h-4'}`}>

        <div className={`
          relative w-full flex-1 transition-all duration-700
          ${showBackground
            ? `${showEndValue || showEndPercentage ? 'h-5 mb-5 sm:mb-0' : 'h-4'} bg-[var(--color-brand-border)]/90 rounded-r-full overflow-visible`
            : 'bg-transparent h-full'} 
        `}>
          <div
            className={`absolute top-0 left-0 h-full rounded-r-full transition-all duration-700 ease-out bg-gradient-to-r ${colorClass}`}
            style={{ width: `${numericScore}%` }}
          >
            {showEndValue && endValue !== undefined && (
              <div className="absolute top-0 right-0 flex items-center h-full pr-1 sm:pr-2">
                <span className="text-[8px] sm:text-xs text-white font-semibold whitespace-nowrap">
                  ${score}M
                </span>
              </div>
            )}

            {showEndPercentage && (
              <div className="absolute -bottom-5 right-2 sm:right-5 transform sm:translate-x-1/2">
                <span className="text-[8px] text-slate-400 font-medium whitespace-nowrap">
                  {numericScore}%
                </span>
              </div>
            )}
          </div>

          {!showBackground && (
            <div
              className="absolute top-0 flex items-center h-full ml-2 sm:ml-3 transition-all duration-700 ease-out"
              style={{ left: `${numericScore}%` }}
            >
              <span className="text-[10px] sm:text-xs text-white font-semibold whitespace-nowrap">
                +{numericScore}%
              </span>
            </div>
          )}
        </div>

        {showBackground && (
          <div className="hidden sm:flex items-center flex-shrink-0">
            <p className="text-sm text-white font-light whitespace-nowrap">
              {label ? `${label}` : ""}{showScore && ": " + numericScore + "%"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar