import React from 'react';
import MetricCard from './MetricCard';
import ExposureDistribution from './ExposureDistribution';
import Title from '../../../ui/Title';

const PerformanceMetricsWidget = ({ metrics, exposureData }) => (
  <div>
    <Title text="Performance Metrics" />
    <div className="flex flex-col xl:flex-row justify-center gap-2 md:gap-4 mb-4 sm:mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
      <div className="w-full xl:w-auto xl:min-w-[380px] xl:max-w-[420px]">
        <ExposureDistribution data={exposureData} />
      </div>
    </div>
  </div>
);

export default PerformanceMetricsWidget;
