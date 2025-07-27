import React from 'react';
import './css/checkbox.css';

const Checkbox = ({ 
  label, 
  checked = false, 
  onChange, 
  disabled = false,
  id,
  className = ''
}) => {
  const handleChange = (e) => {
    if (disabled) return;
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const getWrapperClasses = () => {
    const classes = ['checkbox-wrapper'];
    if (disabled) classes.push('disabled');
    if (className) classes.push(className);
    return classes.join(' ');
  };

  return (
    <label className={getWrapperClasses()}>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        id={id}
      />
      <div className="checkbox-visual"></div>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox; 