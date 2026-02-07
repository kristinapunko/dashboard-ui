import React from 'react'
import Title from './Title';

const CardComponent = ({
  children,
  title,
  className = "",
}) => {
  return (
    <>
      {title && (
        <Title text={title} />
      )}
      <div className={`bg-[var(--color-brand-card)] rounded-2xl border border-white/10 ${className}`}>
        {children}
      </div>
    </>
  );
}

export default CardComponent