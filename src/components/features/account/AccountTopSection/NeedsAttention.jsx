import React from 'react';
import { AlertCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeedsAttention = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="bg-[var(--color-brand-card)] border border-[var(--color-status-warning)] rounded-2xl py-1.5 sm:py-2.5 px-4 shadow-lg shadow-black/20 w-full lg:w-fit h-fit">
      <div className="flex items-center gap-2 mb-1 md:mb-3 mt-0.5 ml-2">
        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-status-warning)] flex-shrink-0" />
        <h3 className="sm:text-lg font-thin text-[var(--color-status-warning)] tracking-[0.05em] antialiased">
          Needs Attention
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-4 ml-1">
        {alerts.map((alert, index) => (
          <div key={index} className="group">
            <h4 className="text-sm text-slate-100 tracking-wide">
              {alert.title}
            </h4>

            <p className="text-[12px] text-slate-500">
              {alert.subtitle}
            </p>

            <Link
              to={alert.path || "#"}
              className="text-xs text-[var(--color-brand-accent)] hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              {alert.linkText}
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedsAttention;