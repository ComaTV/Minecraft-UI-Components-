import React, { useState } from "react";
import Toggle from "./components/Toggle";
import Button from "./components/Button";
import ImageCard from "./components/ImageCard";
import Slider from "./components/Slider";
import Dropdown from "./components/Dropdown";
import Container from "./components/Container";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import LoadingBar from "./components/LoadingBar";
import ContainerExample from "./components/ContainerExample";
import MessageBox from "./components/MessageBox";
import poza from "./assets/react.svg"; // sau orice altă imagine

export default function Home() {
  const [checkboxStates, setCheckboxStates] = useState({
    normal: false,
    bifat: true,
    disabled: false,
    disabledBifat: true
  });

  const handleCheckboxChange = (key, checked) => {
    setCheckboxStates(prev => ({
      ...prev,
      [key]: checked
    }));
    console.warn(`Checkbox ${key}:`, checked);
  };

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
      
      {/* Exemplu 3.1: Container pentru checkbox-uri - cu Tailwind */}
      <Container className="compact mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Checkbox-uri</h3>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <Checkbox 
              label="Checkbox normal" 
              checked={checkboxStates.normal}
              onChange={(checked) => handleCheckboxChange('normal', checked)}
            />
            <Checkbox 
              label="Checkbox bifat" 
              checked={checkboxStates.bifat}
              onChange={(checked) => handleCheckboxChange('bifat', checked)}
            />
          </div>
          <div className="flex gap-4 items-center">
            <Checkbox 
              label="Checkbox disabled" 
              checked={checkboxStates.disabled}
              disabled={true}
              onChange={(checked) => handleCheckboxChange('disabled', checked)}
            />
            <Checkbox 
              label="Checkbox disabled bifat" 
              checked={checkboxStates.disabledBifat}
              disabled={true}
              onChange={(checked) => handleCheckboxChange('disabledBifat', checked)}
            />
          </div>
        </div>
      </Container>
      
      {/* Exemplu 3.2: Container pentru input-uri - cu Tailwind */}
      <Container className="compact mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Input-uri Text</h3>
        <div className="flex flex-col gap-4">
          <Input 
            placeholder="Placeholder"
            onChange={(value) => console.warn("Input value:", value)}
          />
          <Input 
            placeholder="Input with error"
            error={true}
            onChange={(value) => console.warn("Error input:", value)}
          />
          <Input 
            placeholder="Disabled input"
            disabled={true}
            onChange={(value) => console.warn("Disabled input:", value)}
          />
        </div>
      </Container>
      
      <Container className="small mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Dropdown Dark Mode</h3>
        <Dropdown 
          header="Header"
          label="White Dropdown"
          options={["White Option 1", "White Option 2", "White Option 3"]}
          onSelect={(option) => console.warn("White Selected:", option)}
        />
      </Container>
      {/* Exemplu 4.1: Dropdown Dark Mode */}
      <Container className="small mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Dropdown Dark Mode</h3>
        <Dropdown 
          header="Header"
          label="Dark Dropdown"
          options={["Dark Option 1", "Dark Option 2", "Dark Option 3"]}
          onSelect={(option) => console.warn("Dark Selected:", option)}
          dark={true}
        />
      </Container>
      
      {/* Exemplu 4.2: Dropdown Disabled */}
      <Container className="small mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Dropdown Disabled</h3>
        <Dropdown 
          header="Header"
          label="Disabled Dropdown"
          options={["Option 1", "Option 2", "Option 3"]}
          onSelect={(option) => console.warn("Selected:", option)}
          disabled={true}
        />
      </Container>
      
      {/* Exemplu 4.3: Dropdown Dark Mode + Disabled */}
      <Container className="small mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Dropdown Dark + Disabled</h3>
        <Dropdown 
          header="Header"
          label="Dark Disabled"
          options={["Option 1", "Option 2", "Option 3"]}
          onSelect={(option) => console.warn("Selected:", option)}
          dark={true}
          disabled={true}
        />
      </Container>
      
      {/* Exemplu 5: Container pentru card-uri de imagini - cu Tailwind */}
      <Container className="card">
        <h3 className="text-gray-300 mb-3 text-sm">Card-uri</h3>
        <div className="flex gap-4 flex-wrap">
          <ImageCard
            imageSrc={poza}
            label="World"
            description="description description description description description description description description description description description description description description description"
            onClick={() => alert("Ai apăsat pe cardul World!")}
          />
          <ImageCard
            imageSrc={poza}
            label="React"
            description="React warno"
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
            <Slider value={50} onChange={(value) => console.warn("Slider 1:", value)}/>
          </div>
          <div>
            <label className="text-gray-300 text-xs block mb-1">
              Slider 2
            </label>
            <Slider value={75} onChange={(value) => console.warn("Slider 2:", value)}/>
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
      
      {/* Exemplu 8: Loading Bar Examples */}
      <Container className="large mt-4">
        <LoadingBar progress={25} variant="blue" />
      </Container>

      {/* Exemplu 9: Container Examples - Noile variante */}
      <Container className="large mt-4">
        <ContainerExample />
      </Container>

      {/* Exemplu 10: NotificationBox Examples */}
      <Container variant="white" className="large mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">MessageBox Examples</h3>
        <div className="flex flex-col gap-4">
          <MessageBox 
            message="Acesta este un mesaj de informare"
            type="info"
          />
          <MessageBox 
            message="Operațiunea a fost finalizată cu succes!"
            type="success"
          />
          <MessageBox 
            message="Atenție! Aceasta este o notificare importantă"
            type="warning"
          />
          <MessageBox 
            message="Eroare! Ceva nu a mers bine"
            type="error"
          />
          <MessageBox 
            message="Acesta este un mesaj foarte lung care va face ca SVG-ul să se extindă pentru a se potrivi cu conținutul textului și să se împartă pe mai multe rânduri când este prea lung pentru o singură linie, demonstrând funcționalitatea de wrap text"
            type="info"
          />
          <MessageBox 
            message="Acesta este un mesaj extrem de lung care va testa funcționalitatea de wrap text la maximum. Mesajul va fi împărțit pe mai multe rânduri pentru a se potrivi în containerul SVG, demonstrând că componenta poate gestiona texte foarte lungi fără probleme de layout sau afișare."
            type="warning"
          />
          <MessageBox 
            message="Acesta este un mesaj care apare din stânga"
            type="success"
            direction="left"
          />
          <MessageBox 
            message="Acesta este un mesaj care apare din dreapta (implicit)"
            type="error"
            direction="right"
          />
        </div>
      </Container>

    </div>
  );
}