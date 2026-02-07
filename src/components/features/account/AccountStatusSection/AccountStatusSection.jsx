import React from 'react'
import Title from '../../../ui/Title'
import AccountStatus from './AccountStatus'
import { ChevronRight } from 'lucide-react'
import ComplianceDocumentation from './ComplianceDocumentation'

const AccountStatusSection = ({ steps, items }) => {
  return (
    <div className="flex flex-col xl:flex-row items-stretch gap-4  mb-6 sm:mb-10">

      <div className="flex flex-col w-full lg:w-auto  ">
        <Title text='Account Status' />
        <AccountStatus steps={steps} />
      </div>

      <div className="flex flex-col w-full lg:flex-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">

          <Title text="Compliance & Documentation" className='text-[22px]' />

          <a
            href="#"
            className="px-2 mb-2 text-xs sm:text-sm text-[var(--color-brand-accent)] hover:text-blue-400 flex items-center gap-1 transition-colors font-light whitespace-nowrap"
          >
            See history
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2} />
          </a>
        </div>

        <div className="flex-1">
          <ComplianceDocumentation items={items} />
        </div>
      </div>

    </div>

  )
}

export default AccountStatusSection