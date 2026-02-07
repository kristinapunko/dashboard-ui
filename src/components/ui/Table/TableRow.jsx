const TableRow = ({ children, index, className = '' }) => {
  const rowBg = index % 2 === 0
    ? 'bg-[var(--color-brand-card)]'
    : 'bg-[var(--color-brand-border)]/40';

  return (
    <tr className={`${rowBg} hover:bg-slate-700/80 transition-colors ${className}`}>
      {children}
    </tr>
  );
};

export default TableRow;