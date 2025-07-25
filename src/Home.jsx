import React from "react";
import Button from "./components/buttons";  

export default function Home() {
  function handleButtonClick() {
    alert("Butonul a fost apăsat!");
  }

  return (
    <div>
      {/* NESERIOS */}
      <div>
        <Button label="LABEL" variant="important" style={{ marginBottom: 8 }}/>
      </div>
      {/* SERIOS */}
      <div>
        <Button label="Label" style={{ marginBottom: 8 }}/>
      </div>
    </div>
  );
}