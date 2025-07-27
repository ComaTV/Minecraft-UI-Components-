import "./css/imageCard.css";

export default function ImageCard({ imageSrc, label, description, onClick }) {
  const Wrapper = onClick ? 'button' : 'div';
  
  const isLongLabel = label && label.length > 20;
  const isLongDescription = description && description.length > 50;
  const hasLongText = isLongLabel || isLongDescription;
  
  const getCardClasses = () => {
    const classes = ["image-card"];
    if (onClick) classes.push("image-card-clickable");
    if (hasLongText) classes.push("image-card-long-text");
    return classes.join(" ");
  };

  return (
    <Wrapper
      className={getCardClasses()}
      {...(onClick ? { onClick, type: "button", "aria-label": label } : {})}
    >
      <img src={imageSrc} alt={label} className="image-card-img" />
      <div className="image-card-info">
        <div className={`image-card-label ${isLongLabel ? 'image-card-label-long' : ''}`}>
          {label}
        </div>
        <div className={`image-card-description ${isLongDescription ? 'image-card-description-long' : ''}`}>
          {description}
        </div>
      </div>
    </Wrapper>
  );
} 