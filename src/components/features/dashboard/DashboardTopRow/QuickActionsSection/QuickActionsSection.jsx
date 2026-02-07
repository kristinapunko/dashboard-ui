import React from 'react';
import QuickActions from './QuickActions';
import MarketIntelligence from './MarketIntelligence';

const QuickActionsSection = ({ quickActions, marketIntelligence }) => (
  <div className="w-full lg:w-full xl:w-[18%] flex flex-col gap-4 lg:gap-2 flex-shrink-0">
    <QuickActions actions={quickActions} />
    <MarketIntelligence items={marketIntelligence} />
  </div>
);

export default QuickActionsSection;
