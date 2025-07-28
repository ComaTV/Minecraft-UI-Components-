import React from 'react';
import './css/messageBox.css';

function MessageBox({ 
  type = "info",
  message = "",
  direction = "right",
  className = '',
  style 
}) {
  const getTypeColor = (type) => {
    switch (type) {
      case 'success': return '#28a745';
      case 'warning': return '#ffc107';
      case 'error': return '#dc3545';
      case 'info':
      default: return '#3884d9';
    }
  };

  const calculateTextLayout = (text) => {
    if (typeof window === 'undefined') return { lines: [text], width: 0, height: 49 };
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'bold 14px Arial';
    
    const maxWidth = 300;
    const lineHeight = 18;
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    let maxLineWidth = 0;
    
    for (let word of words) {
      const testLine = currentLine ? currentLine + ' ' + word : word;
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > maxWidth && currentLine !== '') {
        lines.push(currentLine);
        maxLineWidth = Math.max(maxLineWidth, context.measureText(currentLine).width);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    
    if (currentLine) {
      lines.push(currentLine);
      maxLineWidth = Math.max(maxLineWidth, context.measureText(currentLine).width);
    }
    
    const textAreaHeight = lines.length * lineHeight;
    const topPadding = 30;
    const bottomPadding = 30;
    const totalHeight = Math.max(49, textAreaHeight + topPadding + bottomPadding);
    const finalWidth = Math.max(170, maxLineWidth + 60);
    
    return { lines, width: finalWidth, height: totalHeight };
  };

  const { lines, width: dynamicWidth, height: dynamicHeight } = calculateTextLayout(message);
  const typeColor = getTypeColor(type);
  
  const pointerWidth = 14;
  const pointerHeight = 12;
  const pointerBaseY = dynamicHeight - pointerHeight;
  
  let pointerLeft, pointerRight;
  if (direction === "left") {
    pointerLeft = 13;
    pointerRight = 13 + pointerWidth;
  } else {
    pointerLeft = dynamicWidth - pointerWidth - 13;
    pointerRight = dynamicWidth - 13;
  }
  
  let pointerPath;
  if (direction === "left") {
    pointerPath = `
      M${pointerRight} ${pointerBaseY}
      V${pointerBaseY + 4}
      H${pointerRight - 4}
      V${pointerBaseY + 8}
      H${pointerRight - 8}
      V${pointerBaseY + 12}
      H${pointerLeft}
      V${pointerBaseY}
      H${pointerRight}
      Z
    `;
  } else {
    pointerPath = `
      M${pointerLeft} ${pointerBaseY}
      V${pointerBaseY + 4}
      H${pointerLeft + 4}
      V${pointerBaseY + 8}
      H${pointerLeft + 8}
      V${pointerBaseY + 12}
      H${pointerRight}
      V${pointerBaseY}
      H${pointerLeft}
      Z
    `;
  }
  
  const dynamicSvg = `
    <svg
      width="${dynamicWidth}"
      height="${dynamicHeight}"
      viewBox="0 0 ${dynamicWidth} ${dynamicHeight}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="crispEdges"
    >
      <path
        d="M9 3 H${dynamicWidth - 9} V6 H${dynamicWidth - 4} V${dynamicHeight - pointerHeight - 3} H${dynamicWidth - 9} V${dynamicHeight - pointerHeight} H9 V${dynamicHeight - pointerHeight - 3} H4 V6 H9 V3 Z"
        fill="${typeColor}"
      />
      <path
        d="${pointerPath}"
        fill="${typeColor}"
      />
      ${lines.map((line, index) => `
        <text
          x="20"
          y="${30 + index * 18}"
          text-anchor="start"
          fill="white"
          dominant-baseline="middle"
        >${line}</text>
      `).join('')}
    </svg>
  `;

  return (
    <div className={`message-box ${type} ${className}`} style={style}>
      <div className="message-background">
        <div 
          dangerouslySetInnerHTML={{ __html: dynamicSvg }}
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
}

export default MessageBox;
