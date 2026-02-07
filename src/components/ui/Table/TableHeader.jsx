import React from 'react';

const TableHeader = ({ columns, className = '' }) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <thead>
      <tr className={`bg-[var(--color-brand-border)]/40 ${className}`}>
        {columns.map((column, index) => {
          const isString = typeof column === 'string';
          const label = isString ? column : column.label;
          const align = isString ? 'left' : (column.align || 'left');

          return (
            <th
              key={index}
              className={`
                first:pl-4 py-2 text-slate-400 text-[9px] font-medium uppercase tracking-wider
                ${alignmentClasses[align]}
              `}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;