import React from 'react'
import data from '../data/mockData.json';
import CardComponent from '../components/ui/CardComponent';
import Title from '../components/ui/Title';
import SearchBar from '../components/ui/SearchBar';
import AccountTable from '../components/features/dashboard/AccountTable';
import DashboardTopRow from '../components/features/dashboard/DashboardTopRow/DashboardTopRow';

const DashboardPage = () => {
  const dashbordData = data.dashboardData
  return (
    <>
      <DashboardTopRow dashbordData={dashbordData} />

      <CardComponent className='py-1 px-2 sm:py-2 sm:px-6'>
        <div className="flex flex-col lg:flex-row md:gap-2">
          <Title className='text-[18px]' text='My Accounts' />
          <SearchBar showSort showNewButton />
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <AccountTable accounts={dashbordData.accounts} />
        </div>
      </CardComponent>
    </>
  )
}

export default DashboardPage