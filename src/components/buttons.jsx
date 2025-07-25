import './css/buttons.css';

function Button({ label, variant = 'default', disabled = false, onClick, className = '', style, fontFamily }) {
  return (
    <button
      className={`btn ${variant} ${disabled ? 'disabled' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
      style={{ ...style, fontFamily }}
    >
      {label}
    </button>
  );
}
  
export default Button;
  