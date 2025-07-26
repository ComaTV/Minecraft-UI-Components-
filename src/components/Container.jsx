import React from 'react';
import './css/container.css';

const Container = ({ children, className = '', style = {} }) => {
  return (
    <div className={`pixel-container ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Container; 