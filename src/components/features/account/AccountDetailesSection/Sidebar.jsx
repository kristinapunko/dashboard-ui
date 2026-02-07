import React from 'react';

const Sidebar = ({ sections }) => {
  if (!sections) return null;

  return (
    <div className="xl:w-80 border-r border-slate-800/60  select-none py-1 xl:py-3 px-2 xl:px-6">
      {sections.map((section, idx) => (
        <div key={idx} className={`mb-2 lg:mb-6 ${section.isOpen ? "bg-[var(--color-brand-border)]/40 rounded-xl p-2" : ''}`}>
          <div className={`flex items-center justify-between w-full px-2 py-1 rounded-full transition-colors ${section.isOpen ? '' : 'hover:bg-slate-800/20 cursor-pointer'}`}>

            <div className="flex items-center">
              <h2 className="uppercase text-xl tracking-tighter pl-2 leading-none">
                {section.title}
              </h2>
            </div>

            <span className={`${section.isOpen ? "border border-white" : "bg-[var(--color-brand-border)]/40"} text-lg p-2  rounded-lg leading-none flex items-center justify-center`}>
              {section.count}
            </span>

          </div>
          {section.isOpen && section.items && (
            <nav className="space-y-1 ml-4">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between px-4 py-1 xl:py-2.5 cursor-pointer rounded-lg transition-all group ${item.active
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                >
                  <span className="text-[13px] font-medium leading-snug tracking-wide">
                    {item.title}
                  </span>
                </div>
              ))}
            </nav>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;