import React from 'react';
import ProgressBar from '../../../ui/ProgressBar';
import CardComponent from '../../../ui/CardComponent';

const ExposureDistribution = ({ data }) => {
  return (
    <CardComponent className="w-full py-2 px-5 h-fit">
      <h3 className="text-lg sm:text-xl font-thin text-white/90 tracking-wide mb-1 mt-5 antialiased">
        Exposure Distribution
      </h3>

      <div className="space-y-1.5">
        {data.map((pos, idx) => (
          <ProgressBar
            key={idx}
            label={pos.label}
            score={pos.percentage}
            glow={pos.variant === 'primary'}
          />
        ))}
      </div>
    </CardComponent>
  )
};

export default ExposureDistribution;