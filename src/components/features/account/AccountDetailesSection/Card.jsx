import React from 'react';

const Card = ({ title, children }) => (
  <div className="bg-[var(--color-brand-border)]/40 rounded-2xl p-5 h-full flex-1 shadow-xl">
    <h3 className="text-slate-400 text-md tracking-wider mb-1">{title}</h3>
    {children}
  </div>
);

export default Card