const PolicyCard = ({ icon: Icon, title, premium, effDate, iconColor }) => (
  <div className="bg-[var(--color-brand-border)]/30 rounded-3xl p-5 flex-1 min-w-[240px]">
    <div className="flex items-center gap-3 mb-1">
      <Icon className={`w-5 h-5 ${iconColor}`} />
      <h4 className="text-lg font-normal text-white tracking-wide">{title}</h4>
    </div>
    <div>
      <p className="text-sm text-slate-400 font-light">
        Premium: <span className="text-slate-300">{premium}</span>
      </p>
      <p className="text-sm text-slate-400 font-light">
        Eff Date: <span className="text-slate-300">{effDate}</span>
      </p>
    </div>
  </div>
);

export default PolicyCard
