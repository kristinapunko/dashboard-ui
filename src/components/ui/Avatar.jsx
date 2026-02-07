export const Avatar = ({
  initials,
  name,
  size = "md",
  className = "",
}) => {
  const sizes = {
    sm: "w-5 h-5 sm:w-6 sm:h-6 text-[8px] sm:text-[10px]",
    lg: "w-7 h-7 sm:w-9 sm:h-9 text-xs sm:text-base",
  };

  return (
    <div
      className={`
        shrink-0 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-sm font-semibold text-white shadow-lg ring-2 ring-slate-700/50 hover:ring-[var(--color-brand-accent)]/50 transition-all duration-200 cursor-pointer
        ${sizes[size]}
        ${className}
      `}
      title={name}
    >
      {initials}
    </div>
  );
};
