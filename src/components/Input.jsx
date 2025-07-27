import React from 'react';
import './css/input.css';

const Input = ({ 
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  type = 'text',
  id,
  className = ''
}) => {
  const handleChange = (e) => {
    if (disabled) return;
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const getWrapperClasses = () => {
    const classes = ['input-wrapper'];
    if (disabled) classes.push('disabled');
    if (error) classes.push('error');
    if (className) classes.push(className);
    return classes.join(' ');
  };

  return (
    <div className={getWrapperClasses()}>
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        id={id}
      />
    </div>
  );
};

export default Input; 