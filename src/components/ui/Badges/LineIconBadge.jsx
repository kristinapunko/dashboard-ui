import { Briefcase, HelpCircle, Shield, Ship, UmbrellaIcon } from "lucide-react";

const LineIconBadge = ({ type }) => {
  const icons = {
    ship: Ship,
    shield: Shield,
    briefcase: Briefcase,
    umbrella: UmbrellaIcon
  };

  const colors = {
    ship: 'bg-blue-500',
    shield: 'bg-emerald-500',
    briefcase: 'bg-purple-500',
    umbrella: 'bg-red-500'
  };

  const Icon = icons[type] || HelpCircle;

  return (
    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${colors[type]}`}>
      <Icon className="w-3 h-3" />
    </div>
  );
};

export default LineIconBadge