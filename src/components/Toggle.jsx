import React, { useState } from "react";
import "./css/toggle.css";

export default function Toggle({ checked, onChange }) {
  const [isOn, setIsOn] = useState(checked || false);

  const handleClick = () => {
    setIsOn((prev) => {
      if (onChange) onChange(!prev);
      return !prev;
    });
  };

  return (
    <div className={`toggle-box${isOn ? " on" : " off"}`} onClick={handleClick}>
      <div
        className={`toggle-slider${isOn ? " on" : " off"}`}
        style={{ left: isOn ? "32px" : "0px" }}
      >
      </div>
    </div>
  );
}
