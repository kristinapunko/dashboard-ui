import React from 'react';
import { ChevronRight } from 'lucide-react';
import CardComponent from '../../../ui/CardComponent';

const MetricCard = ({ title, value, subtitle, detail, link, rating }) => (
  <CardComponent className="p-4 h-full min-h-[180px]  flex flex-col">
    <div className="flex items-center my-1 md:my-3 ml-2">
      <h4 className="text-sm sm:text-base font-light text-slate-300 tracking-wide">{title}</h4>
      {rating && (
        <div className="flex gap-1 ml-2">
          {[...Array(rating)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500"></div>
          ))}
        </div>
      )}
    </div>

    <div className="flex-1 mb-1 sm:mb-4">
      <div className="flex items-baseline gap-2">
        <div className="text-2xl sm:text-5xl font-extralight text-white tracking-tight leading-none">
          {value}
        </div>
        {subtitle && (
          <span className="text-sm text-slate-500 font-light tracking-wide">
            {subtitle}
          </span>
        )}
      </div>
      {detail && (
        <div className="text-sm text-slate-500 font-light mt-2 tracking-wide">
          {detail}
        </div>
      )}
    </div>

    <a
      href="#"
      className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 font-normal transition-colors mt-auto"
    >
      {link} <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
    </a>
  </CardComponent>
);

export default MetricCard;