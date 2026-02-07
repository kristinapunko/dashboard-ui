import React from 'react';
import { Anchor, Shield, Briefcase, Home, Umbrella } from 'lucide-react';

import data from '../data/mockData.json';

import SearchBar from '../components/ui/SearchBar.jsx';
import CardComponent from '../components/ui/CardComponent.jsx';
import PolicyCards from '../components/features/account/PolicyCards/PolicyCards.jsx';
import PoliciesTable from '../components/features/account/PoliciesTable/ui/PoliciesTable.jsx';
import AccountTopSection from '../components/features/account/AccountTopSection/AccountTopSection.jsx';
import PerformanceMetricsWidget from '../components/features/account/PerformanceMetrics/PerformanceMetricsWidget.jsx';
import AccountStatusSection from '../components/features/account/AccountStatusSection/AccountStatusSection.jsx';
import AccountDetailSection from '../components/features/account/AccountDetailesSection/AccountDetailesSection.jsx';
import CommunicationSection from '../components/features/account/CommunicationSection/CommunicationSection.jsx';

const ICON_MAP = { Anchor, Shield, Briefcase, Home, Umbrella };

const AccountPage = () => {
  const { accountDetails } = data;
  const policies = accountDetails.policiesTableData
  const policiesData = (accountDetails.policiesData || []).map((p) => ({
    ...p,
    icon: ICON_MAP[p.icon] || Anchor,
  }));

  return (
    <div>
      <AccountTopSection
        accountDetails={accountDetails}
        breadcrumbItems={accountDetails.breadcrumb}
      />

      <PerformanceMetricsWidget
        metrics={accountDetails.metrics}
        exposureData={accountDetails.exposureData}
      />

      <CardComponent title='Policies' className='py-3 px-4 md:py-6 md:px-8'>
        <div className="overflow-x-auto no-scrollbar">
          <PolicyCards policies={policiesData} />
        </div>
      </CardComponent>

      <AccountStatusSection steps={accountDetails.steps} items={accountDetails.items} />

      <AccountDetailSection
        winData={accountDetails.dashboardData}
        winnabilityData={accountDetails.winnabilityData}
        recommendationsData={accountDetails.recommendationsData}
        handleApply={() => { }}
      />

      <CommunicationSection data={accountDetails.communicationData} />

      <CardComponent title="Policies" className="px-6 py-4 mt-4">
        <div className=" mx-auto">
          <SearchBar />
          <div className="overflow-x-auto no-scrollbar">
            <PoliciesTable policies={policies} />
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default AccountPage;