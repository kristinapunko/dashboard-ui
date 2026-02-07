import React from 'react';
import PolicyCard from './PolicyCard';

const PolicyCards = ({ policies }) => (
  <div className="flex gap-4 flex-nowrap">
    {policies.map((policy, index) => (
      <PolicyCard
        key={index}
        icon={policy.icon}
        title={policy.title}
        premium={policy.premium}
        effDate={policy.effDate}
        iconColor={policy.iconColor}
      />
    ))}
  </div>
);

export default PolicyCards;