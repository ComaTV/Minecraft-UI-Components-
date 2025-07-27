import React from 'react';
import './css/container.css';

const Container = ({ 
  children, 
  className = '', 
  style = {}, 
  variant = 'default',
  size = 'default'
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'open':
        return 'pixel-container-open';
      case 'transparent':
        return 'pixel-container-transparent';
      case 'dark':
        return 'pixel-container-dark';
      case 'glass':
        return 'pixel-container-glass';
      case 'outlined':
        return 'pixel-container-outlined';
      case 'minimal':
        return 'pixel-container-minimal';
      case 'white':
        return 'pixel-container-white';
      case 'card':
        return 'pixel-container card';
      case 'form':
        return 'pixel-container form-container';
      case 'sidebar':
        return 'pixel-container sidebar';
      case 'modal':
        return 'pixel-container modal';
      default:
        return 'pixel-container';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      case 'compact':
        return 'compact';
      default:
        return '';
    }
  };

  const containerClasses = [
    getVariantClass(),
    getSizeClass(),
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} style={style}>
      {children}
    </div>
  );
};

export default Container; 