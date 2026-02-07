const Tabs = ({ tabs, onTabChange = () => { } }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${tab.active
              ? 'bg-[var(--color-brand-accent)] text-white'
              : 'bg-[var(--color-brand-dark)] text-slate-300 hover:bg-[var(--color-brand-dark)]/50'
            }`}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
};

export default Tabs