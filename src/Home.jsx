import React from "react";
import Button from "./components/buttons";  

export default function Home() {
  function handleButtonClick() {
    alert("Butonul a fost apăsat!");
  }

  return (
    <div>
      <div>
        <Button label="LABEL" variant="green" style={{ marginBottom: 8 }} fontFamily="MinecraftTen"/>
      </div>
      <div>
        <Button label="LABEL" variant="red" style={{ marginBottom: 8 }} fontFamily="MinecraftTen"/>
      </div>
      <div>
        <Button label="Label" style={{ marginBottom: 8 }} fontFamily="MinecraftRegular"/>
      </div>
    </div>
  );
}