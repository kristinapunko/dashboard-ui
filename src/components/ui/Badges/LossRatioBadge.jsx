const LossRatioBadge = ({ ratio, color }) => {
  const colors = {
    green: 'bg-emerald-500 text-white',
    yellow: 'bg-amber-500 text-slate-900',
    red: 'bg-red-500 text-white',
    gray: ''
  };

  if (ratio === 'N/A') {
    return <span className="text-slate-500 text-xs">{ratio}</span>;
  }

  return (
    <span
      className={`${colors[color]} px-2 py-0.5 rounded-full text-[11px] font-medium`}
      title={`Loss ratio: ${ratio}`}
    >
      {ratio}
    </span>
  );
};

export default LossRatioBadge