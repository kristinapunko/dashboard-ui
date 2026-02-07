import React from 'react';
import PortfolioGoals from './PortfolioGoals';

const PortfolioGoalsSection = ({ goals }) => (
  <div className="w-full lg:w-[35%] xl:w-[17%] flex-shrink-0">
    <PortfolioGoals goals={goals} />
  </div>
);

export default PortfolioGoalsSection;
