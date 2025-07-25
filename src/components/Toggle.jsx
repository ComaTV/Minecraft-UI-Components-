import React, { useState } from "react";
import "./css/toggle.css";

export default function Toggle({ checked, onChange, disabled = false }) {
  const [isOn, setIsOn] = useState(checked || false);

  const handleClick = () => {
    if (disabled) return;
    setIsOn((prev) => {
      if (onChange) onChange(!prev);
      return !prev;
    });
  };

  return (
    <div
      className={`toggle-box${isOn ? " on" : " off"}${disabled ? " disabled" : ""}`}
      onClick={handleClick}
      aria-disabled={disabled}
    >
      <div
        className={`toggle-slider${isOn ? " on" : " off"}${disabled ? " disabled" : ""}`}
        style={{ left: isOn ? "32px" : "0px" }}
      >
      </div>
    </div>
  );
}
