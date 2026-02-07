import React from 'react'

const WinnabilityBadge = ({ text, sizeLg, textOnly = false }) => {
    return (
        <div
            className={`inline-flex flex items-center ${textOnly ? "" : "gap-2"} ${sizeLg ? " px-3 py-1.5" : "px-2 py-0.5"} border border-blue-500 rounded-full`}
            title={text}
        >
            <div className="flex gap-1">
                {!textOnly && [...Array(4)].map((_, i) => (
                    <div key={i} className={` ${sizeLg ? "w-2 h-2" : 'w-1.5 h-1.5'} rounded-full bg-blue-500`} />
                ))}
            </div>
            <span className={`text-blue-400 ${sizeLg ? "text-[10px]" : 'text-[9px]'} tracking-wider`}>{text}</span>
        </div>
    )
}

export default WinnabilityBadge