import React, { useState, useRef, useEffect } from 'react';
import './css/scrollbar.css';

export default function Scrollbar({ 
  children, 
  height = '300px',
  width = '100%',
  className = '',
  showScrollbar = true,
  onScroll = null,
  variant = 'vertical', // 'vertical' or 'horizontal'
  grid = false, // Enable grid layout
  gridCols = 3, // Number of columns for grid
  gridGap = '16px' // Gap between grid items
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartScrollTop, setDragStartScrollTop] = useState(0);
  const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);
  
  const containerRef = useRef(null);
  const scrollbarRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollInfo = () => {
      setScrollTop(container.scrollTop);
      setScrollLeft(container.scrollLeft);
      setScrollHeight(container.scrollHeight);
      setScrollWidth(container.scrollWidth);
      setClientHeight(container.clientHeight);
      setClientWidth(container.clientWidth);
    };

    updateScrollInfo();
    container.addEventListener('scroll', updateScrollInfo);
    window.addEventListener('resize', updateScrollInfo);

    return () => {
      container.removeEventListener('scroll', updateScrollInfo);
      window.removeEventListener('resize', updateScrollInfo);
    };
  }, []);

  const handleScroll = (e) => {
    if (onScroll) {
      onScroll(e);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    if (variant === 'vertical') {
      setDragStartY(e.clientY);
      setDragStartScrollTop(scrollTop);
    } else {
      setDragStartX(e.clientX);
      setDragStartScrollLeft(scrollLeft);
    }
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    if (variant === 'vertical') {
      const deltaY = e.clientY - dragStartY;
      const scrollRatio = deltaY / (clientHeight - thumbHeight);
      const newScrollTop = dragStartScrollTop + (scrollRatio * (scrollHeight - clientHeight));
      
      if (containerRef.current) {
        containerRef.current.scrollTop = Math.max(0, Math.min(newScrollTop, scrollHeight - clientHeight));
      }
    } else {
      const deltaX = e.clientX - dragStartX;
      const scrollRatio = deltaX / (clientWidth - thumbWidth);
      const newScrollLeft = dragStartScrollLeft + (scrollRatio * (scrollWidth - clientWidth));
      
      if (containerRef.current) {
        containerRef.current.scrollLeft = Math.max(0, Math.min(newScrollLeft, scrollWidth - clientWidth));
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = '';
  };

  const handleThumbClick = (e) => {
    e.stopPropagation();
  };

  const handleTrackClick = (e) => {
    const track = scrollbarRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    
    if (variant === 'vertical') {
      const clickY = e.clientY - rect.top;
      const trackHeight = rect.height;
      const scrollRatio = clickY / trackHeight;
      const newScrollTop = scrollRatio * (scrollHeight - clientHeight);
      
      if (containerRef.current) {
        containerRef.current.scrollTop = Math.max(0, Math.min(newScrollTop, scrollHeight - clientHeight));
      }
    } else {
      const clickX = e.clientX - rect.left;
      const trackWidth = rect.width;
      const scrollRatio = clickX / trackWidth;
      const newScrollLeft = scrollRatio * (scrollWidth - clientWidth);
      
      if (containerRef.current) {
        containerRef.current.scrollLeft = Math.max(0, Math.min(newScrollLeft, scrollWidth - clientWidth));
      }
    }
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
  }, [isDragging, dragStartY, dragStartX, dragStartScrollTop, dragStartScrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth]);

  // Vertical scrollbar calculations
  const verticalScrollRatio = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0;
  const thumbHeight = Math.max(40, Math.min(80, clientHeight * 0.3)); // Fixed size between 40-80px
  const thumbTop = verticalScrollRatio * (clientHeight - thumbHeight);

  // Horizontal scrollbar calculations
  const horizontalScrollRatio = scrollWidth > clientWidth ? scrollLeft / (scrollWidth - clientWidth) : 0;
  const thumbWidth = Math.max(40, Math.min(80, clientWidth * 0.3)); // Fixed size between 40-80px
  const thumbLeft = horizontalScrollRatio * (clientWidth - thumbWidth);

  const showVerticalScrollbar = variant === 'vertical' && showScrollbar && scrollHeight > clientHeight;
  const showHorizontalScrollbar = variant === 'horizontal' && showScrollbar && scrollWidth > clientWidth;

  const getGridStyle = () => {
    if (!grid || variant === 'horizontal') return {};
    
    return {
      display: 'flex',
      flexWrap: 'wrap',
      gap: gridGap,
      width: '100%'
    };
  };

  return (
    <div 
      className={`custom-scrollbar-container ${className} ${variant}`}
      style={{ height, width }}
    >
      <div 
        ref={containerRef}
        className={`custom-scrollbar-content ${variant}`}
        data-grid-cols={grid ? gridCols : undefined}
        onScroll={handleScroll}
      >
        <div style={getGridStyle()}>
          {React.Children.map(children, (child, index) => {
            if (grid && variant === 'vertical' && React.isValidElement(child)) {
              return React.cloneElement(child, {
                ...child.props,
                className: `grid-item ${child.props.className || ''}`.trim()
              });
            }
            return child;
          })}
        </div>
      </div>
      
      {showVerticalScrollbar && (
        <div 
          ref={scrollbarRef}
          className="custom-scrollbar-track vertical"
          onClick={handleTrackClick}
        >
          <div
            ref={thumbRef}
            className="custom-scrollbar-thumb"
            style={{
              height: `${thumbHeight}px`,
              top: `${thumbTop}px`
            }}
            onMouseDown={handleMouseDown}
            onClick={handleThumbClick}
          />
        </div>
      )}

      {showHorizontalScrollbar && (
        <div 
          ref={scrollbarRef}
          className="custom-scrollbar-track horizontal"
          onClick={handleTrackClick}
        >
          <div
            ref={thumbRef}
            className="custom-scrollbar-thumb"
            style={{
              width: `${thumbWidth}px`,
              left: `${thumbLeft}px`
            }}
            onMouseDown={handleMouseDown}
            onClick={handleThumbClick}
          />
        </div>
      )}
    </div>
  );
} 