import React, { useState } from 'react';

const SearchBar = ({ showSort = false, showNewButton = false }) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filterType) => {
    setActiveFilter(activeFilter === filterType ? null : filterType);
  };

  return (
    <div className="mb-2 flex flex-col md:flex-row items-stretch md:items-center gap-2">
      <div className="flex-1 relative lg:min-w-[180px] lg:max-w-[200px]">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full bg-[var(--color-brand-card)] py-0.5 rounded-full pl-4 text-xs text-slate-300 placeholder-slate-500 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] focus:border-transparent transition-all duration-200"
        />
        {searchValue && (
          <button
            onClick={() => setSearchValue('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
        <button
          onClick={() => handleFilterClick('filter')}
          className={`flex items-center justify-center gap-2 py-0.5 px-5 rounded-full transition-all flex-1 md:flex-initial cursor-pointer ${activeFilter === 'filter'
              ? 'bg-blue-600 border border-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-transparent border border-blue-500 text-blue-400 hover:bg-slate-800'
            }`}
        >
          <span className="text-xs font-medium whitespace-nowrap">Filter</span>
        </button>

        {showSort && (
          <button
            onClick={() => handleFilterClick('sort')}
            className={`flex items-center justify-center gap-2 py-0.5 px-5 rounded-full transition-all flex-1 md:flex-initial cursor-pointer ${activeFilter === 'sort'
                ? 'bg-blue-600 border border-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-transparent border border-blue-500 text-blue-400 hover:bg-slate-800'
              }`}
          >
            <span className="text-xs font-medium whitespace-nowrap">Sort</span>
          </button>
        )}

        <button
          onClick={() => handleFilterClick('group')}
          className={`flex items-center justify-center gap-2 py-0.5 px-5 rounded-full transition-all flex-1 md:flex-initial cursor-pointer ${activeFilter === 'group'
              ? 'bg-blue-600 border border-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-transparent border border-blue-500 text-blue-400 hover:bg-slate-800'
            }`}
        >
          <span className="text-xs font-medium whitespace-nowrap">Group</span>
        </button>

        {showNewButton && (
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-0.5 px-6 rounded-full hover:bg-blue-500 active:scale-95 transition-all shadow-lg shadow-blue-600/30 flex-1 md:flex-initial">
            <span className="text-xs font-medium whitespace-nowrap">+ New</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;