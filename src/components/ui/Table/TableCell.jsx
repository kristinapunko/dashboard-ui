import React from 'react'

const TableCell = ({ children, className, color = "text-slate-300", align = "left" }) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <td className={`
        "px-4 py-1 sm:py-2 ${color} ${alignmentClasses[align]} text-[13px] whitespace-nowrap", 
        ${className}
      `}>
      {children}
    </td>
  )
}

export default TableCell