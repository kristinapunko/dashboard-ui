import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="py-2 sm:py-3 flex items-center text-[10px] sm:text-[11px] text-slate-400 tracking-[0.1em] overflow-x-auto scrollbar-hide">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap relative group"
                title={item.label}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-[var(--color-brand-accent)] font-medium whitespace-nowrap"
                title={item.label}
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <span className="mx-1 sm:mx-1.5 text-slate-600 select-none flex-shrink-0">//</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;