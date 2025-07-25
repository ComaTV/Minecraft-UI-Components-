import React, { useState } from "react";
import Toggle from "./components/Toggle";
import Button from "./components/Button";
import ImageCard from "./components/ImageCard";
import poza from "./assets/react.svg"; // sau orice altă imagine

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);

  return (
    <div className="p-4">
      <Toggle checked={isOn} onChange={setIsOn}/>
      <div className="mt-4"/>
      <Toggle checked={isOn} onChange={setIsOn2} disabled={isOn}/>
      <div className="mt-4"/>
      <Button
        label="I want to opt in"
        onClick={() => alert("Butonul a fost apăsat!")}
        variant={isOn2 ? "purple" : "default"}
      />
      <div className="mt-4"/>
      <ImageCard
        imageSrc={poza}
        label="World"
        description="description"
        onClick={() => alert("Ai apăsat cardul!")} // ← cardul devine buton
      />
    </div>
  );
}