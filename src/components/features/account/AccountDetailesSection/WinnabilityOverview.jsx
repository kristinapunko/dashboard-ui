import React from 'react';
import { ArrowUp, ArrowDown, Sparkles } from 'lucide-react';
import WinnabilitySection from './WinnabilitySection';
import Card from './Card';
import WinnabilityBadge from '../../../ui/Badges/WinnabilityBadge';
import TrendChart from './TrendChart';
import ProgressBar from '../../../ui/ProgressBar';

const WinnabilityOverview = ({ winData, winnabilityData }) => (
  <>
    <h1 className="text-5xl font-extralight my-4 tracking-tight text-slate-100 px-2">
      Winnability
    </h1>

    <div className="flex flex-col lg:flex-row items-stretch gap-2 px-2">
      <div className="md:flex-none min-w-[220px]">
        <Card title="Overall Score">
          <div className="flex items-center gap-1">
            <span className="text-5xl font-light">{winData.overallScore}%</span>
            <WinnabilityBadge text={winData.status} sizeLg />
          </div>
        </Card>
      </div>

      <div className="flex-initial min-w-[260px]">
        <Card title="Historical Trend">
          <TrendChart trendData={winData.trend} />
        </Card>
      </div>

      <div className="flex-1">
        <Card title="Position">
          {winData.positions.map((pos, idx) => (
            <ProgressBar key={idx} label={pos.label} score={pos.score} glow={pos.variant === 'primary'} />
          ))}
        </Card>
      </div>
    </div>

    <div className="mb-5 pt-2">
      <div className="mx-auto flex flex-col md:flex-row gap-2 px-2">
        <WinnabilitySection
          title="Increasing Winnability"
          icon={ArrowUp}
          items={winnabilityData.increasing}
          isIncreasing={true}
        />
        <WinnabilitySection
          title="Decreasing Winnability"
          icon={ArrowDown}
          items={winnabilityData.decreasing}
          isIncreasing={false}
        />
      </div>
    </div>
  </>
);

export default WinnabilityOverview;
