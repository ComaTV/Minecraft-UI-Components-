import React, { useState, useRef, useEffect } from 'react';
import './css/Slider.css';

const Slider = ({ 
  value = 100, 
  max = 100, 
  label = "Set to the max", 
  showPercentage = true,
  onChange,
  disabled = false
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);

  const percentage = Math.min((currentValue / max) * 100, 100);

  const updateValue = (clientX) => {
    if (!trackRef.current || disabled) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const trackWidth = rect.width;
    
    let newPercentage = (clickX / trackWidth) * 100;
    newPercentage = Math.max(0, Math.min(100, newPercentage));
    
    const newValue = Math.round((newPercentage / 100) * max);
    setCurrentValue(newValue);
    
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleMouseDown = (e) => {
    if (disabled) return;
    setIsDragging(true);
    updateValue(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging && !disabled) {
      updateValue(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div 
      ref={trackRef}
      className={`progress-slider-track ${disabled ? 'disabled' : ''}`}
      onMouseDown={handleMouseDown}
    >
      <div 
        className="progress-slider-fill" 
        style={{ width: `${percentage}%` }}
      />
      <div 
        className={`progress-slider-thumb ${isDragging ? 'dragging' : ''}`}
        style={{ left: `calc(${percentage}% - 8px)` }}
      />
    </div>
  );
};

export default Slider; 