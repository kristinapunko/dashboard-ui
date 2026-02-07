import { Ship } from 'lucide-react';
import React from 'react';

const AccountHeader = ({ name, address, id, broker, underwriter }) => (
  <div className="w-full max-w-full lg:max-w-[700px]">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <Ship size={28} className="text-blue-600 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
      </div>

      <div className="flex-1 min-w-0">
        <h2 className="text-xl sm:text-2xl font-thin text-white/90 tracking-[0.05em] antialiased -mt-1 mb-2 sm:mb-3">
          {name}
        </h2>

        <div className="flex flex-col gap-3 sm:hidden">
          <div>
            <p className="text-white text-[11px] font-medium tracking-[0.15em] break-words">
              {address}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="text-slate-400 text-[10px] uppercase mb-0.5">
                Account
              </div>
              <div className="text-white text-[11px] font-medium">
                {id}
              </div>
            </div>

            <div>
              <div className="text-slate-400 text-[10px] uppercase mb-0.5">
                Broker
              </div>
              <div className="text-white text-[11px] font-medium break-words">
                {broker}
              </div>
            </div>

            <div>
              <div className="text-slate-400 text-[10px] uppercase mb-0.5">
                Underwriter
              </div>
              <div className="text-white text-[11px] font-medium break-words">
                {underwriter}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] divide-x divide-slate-800 gap-2 items-start">
          <div>
            <p className="text-white text-[11px] font-medium tracking-[0.15em] break-words">
              {address}
            </p>
          </div>

          <div className="pl-2">
            <div className="text-slate-400 text-[11px] uppercase">
              Existing Account
            </div>
            <div className="text-white text-[11px] font-medium">
              {id}
            </div>
          </div>

          <div className="pl-2">
            <div className="text-slate-400 text-[11px] uppercase">
              Broker
            </div>
            <div className="text-white text-[11px] font-medium">
              {broker}
            </div>
          </div>

          <div className="pl-2">
            <div className="text-slate-400 text-[11px] uppercase tracking-[0.12em]">
              Underwriter
            </div>
            <div className="text-white text-[11px] font-medium tracking-[0.15em]">
              {underwriter}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccountHeader;