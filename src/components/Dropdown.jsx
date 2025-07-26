import React, { useState } from 'react';
import Container from './Container';
import './css/dropdown.css';

const Dropdown = ({ header, label, options, onSelect, variant = 'default', focused = false, pressed = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
      <div className="dropdown-wrapper">
        <div 
          className={`dropdown-select ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="dropdown-label">{selectedOption}</span>
          <span className="dropdown-chevron-text">^</span>
        </div>
        {isOpen && (
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