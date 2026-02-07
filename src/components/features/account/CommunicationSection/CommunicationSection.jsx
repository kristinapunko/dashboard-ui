import React from 'react';
import CardComponent from '../../../ui/CardComponent';
import SearchBar from '../../../ui/SearchBar';
import CommunicationCard from './CommunicationCard';

const CommunicationSection = ({ data }) => {
  return (
    <CardComponent title="Communication" className="px-6 py-4 my-4">
      <div className="mx-auto">
        <SearchBar />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-2 my-3 md:my-6">
          <div>
            {data.slice(0, 2).map((item, index) => (
              <CommunicationCard
                key={item.id}
                data={item}
                onClick={() => { }}
                borderColor={index === 0 ? 'border-blue-900' : 'border-blue-500/50'}
              />
            ))}
          </div>

          <div>
            {data.slice(2).map((item) => (
              <CommunicationCard
                key={item.id}
                data={item}
                onClick={item.attachments === 0 ? null : () => { }}
              />
            ))}
          </div>
        </div>
      </div>
    </CardComponent>
  );
};

export default CommunicationSection;
