import React from 'react';
import { Check } from 'lucide-react';
import CardComponent from '../../../ui/CardComponent';

const AccountStatus = ({steps}) => {
  return (
    <CardComponent className="p-4 xl:p-8">
      <div className="hidden lg:flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center shrink-0">
              <div
                className={`w-5 h-5 md:w-7 md:h-7 rounded-full border-2 flex items-center justify-center transition-all duration-500 mb-3 relative z-10 bg-[var(--color-brand-card)] ${
                  step.completed
                    ? 'border-emerald-500'
                    : 'border-slate-500 border-dashed opacity-60'
                }`}
              >
                <Check 
                  className={`w-3.5 h-3.5 ${step.completed ? 'text-emerald-400' : 'text-slate-500 opacity-40'}`} 
                  strokeWidth={4} 
                />
              </div>

              <span className="text-slate-100 text-base lg:text-lg font-normal tracking-tight">
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div 
                style={{
                  minWidth: "clamp(50px, (100vw - 1420px) * 9999, 95px)",
                }} 
                className="flex-grow min-w-[60px]  -mx-[10px] mb-10">
                <div
                  className="h-[0.5px] w-full"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${
                      step.completed && steps[index + 1].completed ? '#10b981' : '#475569'
                    } 70%, transparent 30%)`,
                    backgroundSize: '6px 10px',
                    backgroundRepeat: 'repeat-x',
                  }}
                />
              </div>
            )}

          </React.Fragment>
        ))}
      </div>

      {/* Mobile Progress */}
      <div className="flex lg:hidden flex-col space-y-4 sm:space-y-5">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3 sm:gap-4">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center flex-shrink-0 bg-[var(--color-brand-card)] ${step.completed ? 'border-emerald-500' : 'border-slate-500 border-dashed'}`}>
              <Check className={`w-4 h-4 sm:w-5 sm:h-5 ${step.completed ? 'text-emerald-400' : 'text-slate-600'}`} strokeWidth={3} />
            </div>
            <span className="text-slate-100 text-base sm:text-lg">{step.label}</span>
          </div>
        ))}
      </div>
    </CardComponent>
  );
};

export default AccountStatus;