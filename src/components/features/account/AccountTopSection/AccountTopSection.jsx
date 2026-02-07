import React from 'react';
import Breadcrumbs from '../../../layout/Breadcrumbs';
import AccountHeader from './AccountHeader';
import NeedsAttention from './NeedsAttention';

const AccountTopSection = ({ accountDetails, breadcrumbItems }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 mb-5">
      <div className="lg:mr-10">
        <div className="mb-3 sm:mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <AccountHeader
          name={accountDetails.name}
          address={accountDetails.address}
          id={accountDetails.id}
          broker={accountDetails.broker}
          underwriter={accountDetails.underwriter}
        />
      </div>

      <div className="lg:mt-5">
        <NeedsAttention alerts={accountDetails.alerts} />
      </div>
    </div>
  );
};

export default AccountTopSection;
