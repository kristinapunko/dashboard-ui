import React from 'react';
import Sidebar from './Sidebar';
import WinnabilityOverview from './WinnabilityOverview';
import RecommendationsSection from './RecommendationsSection';
import CardComponent from '../../../ui/CardComponent';

const AccountDetailSection = ({ winData, winnabilityData, recommendationsData, handleApply }) => {
  return (
    <CardComponent title="Account Details" className="flex flex-col xl:flex-row my-2 py-5">
      <Sidebar sections={winData.sections} />

      <main className="flex-1 lg:pl-3 mt-8 lg:mt-0 border-t xl:border-t-0 xl:border-l border-dashed border-slate-700">
        <WinnabilityOverview winData={winData} winnabilityData={winnabilityData} />
        <RecommendationsSection recommendations={recommendationsData} handleApply={handleApply} />
      </main>
    </CardComponent>
  );
};

export default AccountDetailSection;
