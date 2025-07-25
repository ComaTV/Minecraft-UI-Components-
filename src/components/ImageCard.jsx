import React from "react";
import "./css/imageCard.css";

export default function ImageCard({ imageSrc, label, description, onClick }) {
  const Wrapper = onClick ? 'button' : 'div';
  return (
    <Wrapper
      className={"image-card" + (onClick ? " image-card-clickable" : "")}
      {...(onClick ? { onClick, type: "button", "aria-label": label } : {})}
    >
      <img src={imageSrc} alt={label} className="image-card-img" />
      <div className="image-card-info">
        <div className="image-card-label">{label}</div>
        <div className="image-card-description">{description}</div>
      </div>
    </Wrapper>
  );
} 