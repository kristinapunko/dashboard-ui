const StatusBadge = ({ status }) => {

  if (status === 'none') return null;

  return (
    <span className={`${status} bg-[var(--color-brand-accent)] px-3 py-1 rounded-full text-xs font-medium ${status === "new" ? "uppercase" : ''}`}>
      {status === "new" ? status : status.substring(0, 1).toUpperCase() + status.substring(1, status.length)}
    </span>
  );
};
export default StatusBadge