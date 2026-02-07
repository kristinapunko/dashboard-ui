import React from 'react';
import { Check } from 'lucide-react';
import CardComponent from '../../../ui/CardComponent';

const ComplianceDocumentation = ({ items }) => {
  return (
    <CardComponent className="p-2 xl:p-8 h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2  lg:gap-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center flex-shrink-0">
              <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-emerald-400" strokeWidth={3} />
            </div>

            <span className="text-xs lg:text-sm  font-light text-slate-300 tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </CardComponent>
  );
};

export default ComplianceDocumentation;