import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Navbar = ({ tabs }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [tabs]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  if (!tabs) return null;

  return (
    <div className="flex items-center gap-2">
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex items-center gap-2 px-6 py-4 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {tabs.map((tab) => {
          const LucideIcon = Icons[tab.iconName] || Icons.HelpCircle;
          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-1 sm:py-2 border border-slate-800 rounded-full text-sm tracking-tighter transition-all whitespace-nowrap ${isActive
                  ? 'bg-[var(--color-brand-accent)] text-white shadow-lg shadow-blue-900/20'
                  : 'text-white hover:bg-[var(--color-brand-card)] hover:text-slate-300'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <LucideIcon className={`w-4 h-4 ${isActive ? 'text-white' : "text-[var(--color-brand-accent)]"}`} />
                  {tab.label}
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      <div className="flex items-center gap-1 ml-2">
        {(showLeftButton || showRightButton) && (
          <>
            <button
              onClick={() => scroll('left')}
              disabled={!showLeftButton}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${showLeftButton
                  ? 'bg-[var(--color-brand-card)] text-white hover:bg-[var(--color-brand-hover)] border border-slate-800'
                  : 'bg-slate-800/30 text-slate-600 cursor-not-allowed'
                }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!showRightButton}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${showRightButton
                  ? 'bg-[var(--color-brand-card)] text-white hover:bg-[var(--color-brand-hover)] border border-slate-800'
                  : 'bg-slate-800/30 text-slate-600 cursor-not-allowed'
                }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;