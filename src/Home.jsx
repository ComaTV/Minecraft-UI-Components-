import React, { useState } from "react";
import Toggle from "./components/Toggle";
import Button from "./components/Button";
import ImageCard from "./components/ImageCard";
import Slider from "./components/Slider";
import Dropdown from "./components/Dropdown";
import Container from "./components/Container";
import poza from "./assets/react.svg"; // sau orice altă imagine

export default function Home() {

  return (
    <div className="p-4">
      {/* Exemplu 1: Container cu titlu și descriere - cu Tailwind */}
      <Container className="large">
        <h2 className="text-gray-300 mb-4">Demo Container</h2>
        <p className="text-gray-300 text-base">Acesta este un exemplu de container reutilizabil cu stil pixelat.</p>
      </Container>
      
      {/* Exemplu 2: Container pentru butoane - cu Tailwind */}
      <Container className="small">
        <h3 className="text-gray-300 mb-3 text-sm">Butoane</h3>
        <div className="flex gap-2 flex-wrap">
          <Button label="Click me" onClick={() => alert("Butonul a fost apăsat!")}/>
          <Button label="Alt buton" variant="green" onClick={() => alert("Alt buton!")}/>
          <Button label="Alt buton" variant="red" onClick={() => alert("Alt buton!")}/>
          <Button label="Alt buton" variant="purple" onClick={() => alert("Alt buton!")}/>
        </div>
      </Container>
      
      {/* Exemplu 3: Container pentru toggle-uri - cu Tailwind */}
      <Container className="compact">
        <h3 className="text-gray-300 mb-3 text-sm">Toggle-uri</h3>
        <div className="flex gap-4 items-center">
          <Toggle/>
          <span className="text-gray-300 text-xs">Toggle 1</span>
          <Toggle checked={true}/>
          <span className="text-gray-300 text-xs">Toggle 2</span>
        </div>
      </Container>
      
      {/* Exemplu 4: Dropdown cu container (deja implementat) */}
      <Dropdown 
        header="Header"
        label="Label"
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        onSelect={(option) => console.log("Selected:", option)}
      />
      
      {/* Exemplu 5: Container pentru card-uri de imagini - cu Tailwind */}
      <Container className="card">
        <h3 className="text-gray-300 mb-3 text-sm">Card-uri</h3>
        <div className="flex gap-4 flex-wrap">
          <ImageCard
            imageSrc={poza}
            label="World"
            description="description"
            onClick={() => alert("Ai apăsat pe cardul World!")}
          />
          <ImageCard
            imageSrc={poza}
            label="React"
            description="React logo"
            onClick={() => alert("Ai apăsat pe cardul React!")}
          />
        </div>
      </Container>
      
      {/* Exemplu 6: Container pentru controale de formular - cu Tailwind */}
      <Container className="form-container">
        <h3 className="text-gray-300 mb-3 text-sm">Controale</h3>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-gray-300 text-xs block mb-1">
              Slider 1
            </label>
            <Slider value={50} onChange={(value) => console.log("Slider 1:", value)}/>
          </div>
          <div>
            <label className="text-gray-300 text-xs block mb-1">
              Slider 2
            </label>
            <Slider value={75} onChange={(value) => console.log("Slider 2:", value)}/>
          </div>
        </div>
      </Container>
      
      {/* Exemplu 7: Container pentru sidebar - cu Tailwind */}
      <Container className="sidebar w-64 mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Sidebar</h3>
        <div className="flex flex-col gap-2">
          <Button label="Meniu 1" className="w-full"/>
          <Button label="Meniu 2" variant="purple" className="w-full"/>
          <Button label="Meniu 3" variant="red" className="w-full"/>
        </div>
      </Container>
    </div>
  );
}