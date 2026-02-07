import React from 'react'
import StatusBadge from './StatusBadge'
import { Paperclip } from 'lucide-react'

const CommunicationCard = ({ data, onClick, borderColor }) => {
  return (
    <div
      className={`${borderColor ? 'border-2 ' + borderColor : ''} bg-[var(--color-brand-border)]/40 rounded-3xl px-4 md:px-6 py-2 md:py-4 mb-2  hover:border-blue-500/90 transition-colors cursor-pointer`}
    >
      <div className="flex flex-col md:flex-row items-start gap-1 mb-1 mt-2">
        <StatusBadge status={data.status} />
        <h3 className="text-white text-lg tracking-wide font-medium flex-1">
          {data.subject}
        </h3>
      </div>

      <div className="text-slate-400 text-sm mb-1">
        {data.sender} // {data.date}
      </div>

      <p className="text-slate-300 text-sm mb-2">
        {data.preview}
      </p>

      {data.attachments > 0 && (
        <div className="flex items-center w-fit gap-2 bg-emerald-600/20 text-emerald-400 px-3 py-0.5 rounded-full text-sm mb-1">
          <Paperclip className="w-3 h-3" />
          <span>{data.attachments} attachments</span>
        </div>
      )}
      {onClick && (<button onClick={onClick} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 rounded-full text-sm font-medium transition-colors ml-auto cursor-pointer">
        Reply
      </button>)}

    </div>
  )
}

export default CommunicationCard