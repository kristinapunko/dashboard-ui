import { Info } from 'lucide-react';

const InfoButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer"
      title='See more'
    >
      <Info className="w-5 h-5 text-white" />
    </button>
  );
};

export default InfoButton