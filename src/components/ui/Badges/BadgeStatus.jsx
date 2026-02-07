const STATUS_STYLES = {
  active: {
    dot: "bg-emerald-500",
  },
  pending: {
    dot: "bg-[var(--color-status-warning)]",
  },
  completed: {
    dot: "bg-emerald-500",
  },
  "under-review": {
    dot: "bg-[var(--color-brand-accent)]",
  },
  new: {
    dot: "bg-[var(--color-brand-accent)]",
  },
};

const BadgeStatus = ({ status = "active" }) => {
  const styles = STATUS_STYLES[status] || STATUS_STYLES.default;

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${styles.dot}`} />
      <span className="text-slate-300 text-xs">
        {status.substring(0, 1).toUpperCase() + status.substring(1, status.length)}
      </span>
    </div>
  );
};

export default BadgeStatus;
