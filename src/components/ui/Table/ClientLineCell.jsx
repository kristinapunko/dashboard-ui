import LineIconBadge from "../Badges/LineIconBadge";

const ClientLineCell = ({
  icon,
  title,
  subtitle,
  className = ''
}) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-1">
        {icon && <LineIconBadge type={icon} />}
        <div className="text-[13px] text-white">{title}</div>
      </div>
      <div className="text-slate-500 text-xs">{subtitle}</div>
    </div>
  );
};

export default ClientLineCell;