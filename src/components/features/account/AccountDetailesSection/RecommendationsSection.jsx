import React from 'react';
import { Sparkles } from 'lucide-react';
import RecommendationCard from './RecommendationCard';

const RecommendationsSection = ({ recommendations, handleApply }) => (
  <div className="max-w-6xl mx-auto px-2">
    <div className="bg-[var(--color-brand-border)]/40 rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-emerald-400" />
        <h2 className="text-emerald-400 text-lg tracking-wider font-medium">
          AI-Powered Recommendations
        </h2>
      </div>

      <div className="mb-4">
        {recommendations.map((rec) => (
          <RecommendationCard
            key={rec.id}
            title={rec.title}
            description={rec.description}
            onApply={() => handleApply(rec.id)}
          />
        ))}
      </div>
    </div>
  </div>
);

export default RecommendationsSection;
