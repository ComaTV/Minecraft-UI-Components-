import React from 'react';
import './css/buttons.css';

function Button({ 
  label, 
  variant = 'default', 
  width = 'auto',
  height = 'auto',
  font = 'MinecraftRegular',
  disabled = false, 
  loading = false,
  icon = null,
  iconPosition = 'left',
  onClick, 
  className = '', 
  style, 
  fullWidth = false,
  type = 'button'
}) {
  const getButtonClasses = () => {
    const classes = ['btn', variant];
    if (disabled) classes.push('disabled');
    if (loading) classes.push('loading');
    if (fullWidth) classes.push('full-width');
    if (font === 'MinecraftTen') classes.push('font-ten');
    if (className) classes.push(className);
    return classes.join(' ');
  };

  const getButtonStyle = () => {
    const baseStyle = { fontFamily: font };
    
    if (width !== 'auto') {
      baseStyle.width = typeof width === 'number' ? `${width}px` : width;
    }
    
    if (height !== 'auto') {
      baseStyle.height = typeof height === 'number' ? `${height}px` : height;
      baseStyle.minHeight = typeof height === 'number' ? `${height}px` : height;
    }

    return { ...baseStyle, ...style };
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    const iconElement = typeof icon === 'string' ? (
      <img src={icon} alt="" className="btn-icon" />
    ) : (
      icon
    );

    return (
      <span className={`btn-icon-wrapper ${iconPosition}`}>
        {iconElement}
      </span>
    );
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <span className="btn-loading-spinner"></span>
          <span className="btn-loading-text">{label}</span>
        </>
      );
    }

    return (
      <>
        {iconPosition === 'left' && renderIcon()}
        <span className="btn-text">{label}</span>
        {iconPosition === 'right' && renderIcon()}
      </>
    );
  };

  return (
    <button
      className={getButtonClasses()}
      disabled={disabled || loading}
      onClick={onClick}
      style={getButtonStyle()}
      type={type}
    >
      {renderContent()}
    </button>
  );
}
  
export default Button;
  