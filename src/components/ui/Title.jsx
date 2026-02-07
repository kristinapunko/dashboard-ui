import React from 'react';

const Title = ({ text, className }) => {
  return (
    <h3 className={`text-2xl font-thin text-white/90 p-2 tracking-wider antialiased ${className}`}>
      {text}
    </h3>

  );
};

export default Title;