import CardComponent from "../../../../ui/CardComponent";
import Title from "../../../../ui/Title";

const MarketIntelligence = ({ items }) => {
  const iconColors = {
    red: 'bg-red-500',
    yellow: 'bg-amber-500',
    blue: 'bg-blue-500'
  };

  return (
    <CardComponent className="p-1 sm:p-2">
      <Title className='text-[18px]' text='Market intelligence' />
      <div className="space-y-1.5  p-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-start gap-3 ${index !== items.length - 1 ? 'border-b border-slate-700/50' : ''
              }`}
          >
            <div className={`w-3 h-3 rounded-full shrink-0  ${iconColors[item.icon]}`}></div>
            <p className="text-slate-300 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </CardComponent>
  );
};

export default MarketIntelligence