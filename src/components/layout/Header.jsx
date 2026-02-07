import React from 'react';
import { Avatar } from '../ui/Avatar';

const Header = ({ user }) => (
  <header className="border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-[var(--color-brand-dark)]">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
      <h1 className="text-sm sm:text-xl lg:text-2xl font-light tracking-wide text-slate-200 opacity-95 leading-tight">
        Hi {user.name.split(' ')[0]}, welcome! You have {user.openTasks} open tasks.
      </h1>
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        <div className="relative flex-1 sm:flex-initial">
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-56 md:w-64 lg:w-72 xl:w-90 bg-[var(--color-brand-card)] rounded-full pl-4 sm:py-2 text-sm text-slate-300 placeholder-slate-500 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] focus:border-transparent transition-all duration-200"
          />
        </div>
        <Avatar initials={user.initials} name={user.name} size='lg' />
      </div>
    </div>
  </header>
);

export default Header;