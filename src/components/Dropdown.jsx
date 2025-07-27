import React, { useState } from 'react';
import Container from './Container';
import './css/dropdown.css';

const Dropdown = ({ header, label, options, onSelect, variant = 'default', focused = false, pressed = false, dark = false, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const handleSelect = (option) => {
    if (disabled) return;
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const getWrapperClasses = () => {
    const classes = ['dropdown-wrapper'];
    if (dark) classes.push('dark');
    if (disabled) classes.push('disabled');
    return classes.join(' ');
  };

  return (
      <div className={getWrapperClasses()}>
        <div 
          className={`dropdown-select ${isOpen ? 'open' : ''}`}
          onClick={handleToggle}
        >
          <span className="dropdown-label">{selectedOption}</span>
          <span className="dropdown-chevron-text">^</span>
        </div>
        {isOpen && !disabled && (
          <div className="dropdown-options">
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default Dropdown; 