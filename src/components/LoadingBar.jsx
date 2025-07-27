import './css/loadingBar.css';

function LoadingBar({ 
  progress = 0, 
  variant = 'blue', 
  height = '4px', 
  width = '100%', 
  className = '',
  style = {}
}) {
  // Asigură-te că progress este între 0 și 100
  const clampedProgress = Math.max(0, Math.min(100, progress));
  
  return (
    <div 
      className={`loading-bar-container ${className}`}
      style={{ 
        width, 
        height, 
        ...style 
      }}
    >
      <div 
        className={`loading-bar-fill ${variant}`}
        style={{ 
          width: `${clampedProgress}%`,
          height: '100%'
        }}
      />
    </div>
  );
}

export default LoadingBar; 