import React from 'react';
import WorkQueueSection from './WorkQueueSection/WorkQueueSection';
import PortfolioGoalsSection from './PortfolioGoalsSection/PortfolioGoalsSection';
import QuickActionsSection from './QuickActionsSection/QuickActionsSection';

const DashboardTopRow = ({ dashbordData }) => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-4 lg:gap-2 mb-6">
      <WorkQueueSection workQueue={dashbordData.workQueue} />
      <PortfolioGoalsSection goals={dashbordData.portfolioGoals} />
      <QuickActionsSection
        quickActions={dashbordData.quickActions}
        marketIntelligence={dashbordData.marketIntelligence}
      />
    </div>
  );
};

export default DashboardTopRow;
