import React from 'react';
import CardComponent from '../../../../ui/CardComponent';
import Title from '../../../../ui/Title';
import Tabs from './Tabs';
import WorkQueueTable from './WorkQueueTable';

const WorkQueueSection = ({ workQueue }) => (
  <div className="w-full lg:w-[calc(65%-1rem)] flex-shrink-0">
    <CardComponent className='pb-1 sm:py-2 px-2 sm:px-5 h-full'>
      <Title text='Work Queue' className='text-base sm:text-[18px]' />
      <div className='sm:mt-2'>
        <Tabs tabs={workQueue.tabs} />
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <WorkQueueTable workQueue={workQueue.items} />
      </div>
    </CardComponent>
  </div>
);

export default WorkQueueSection;
