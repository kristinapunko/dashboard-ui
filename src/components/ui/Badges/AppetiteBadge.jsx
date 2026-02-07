const AppetiteBadge = ({ level, info }) => {
  return (
    <div
      className="px-2 py-0.5 rounded-full bg-[#1E2B58] hover:bg-[#1E2B58]/60 text-[9px] text-center cursor-help"
      title={info || `Appetite level: ${level}`}
    >
      {level.toUpperCase()}
    </div>
  );
};

export default AppetiteBadge