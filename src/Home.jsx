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
      {/* Example 1: Container with title and description - with Tailwind */}
      <Container className="large">
        <h2 className="text-gray-300 mb-4">Demo Container</h2>
        <p className="text-gray-300 text-base">This is an example of a reusable container with pixelated style.</p>
      </Container>
      
      {/* Example 2: Container for buttons - with Tailwind */}
      <Container className="small">
        <h3 className="text-gray-300 mb-3 text-sm">Buttons</h3>
        <div className="flex gap-2 flex-wrap">
          <Button label="Click me" onClick={() => alert("Button was clicked!")}/>
          <Button label="Another button" variant="green" onClick={() => alert("Another button!")}/>
          <Button label="Another button" variant="red" onClick={() => alert("Another button!")}/>
          <Button label="Another button" variant="purple" onClick={() => alert("Another button!")}/>
        </div>
      </Container>
      
      {/* Example 3: Container for toggles - with Tailwind */}
      <Container className="compact">
        <h3 className="text-gray-300 mb-3 text-sm">Toggles</h3>
        <div className="flex gap-4 items-center">
          <Toggle/>
          <span className="text-gray-300 text-xs">Toggle 1</span>
          <Toggle checked={true}/>
          <span className="text-gray-300 text-xs">Toggle 2</span>
        </div>
      </Container>
      
      {/* Example 3.1: Container for checkboxes - with Tailwind */}
      <Container className="compact mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Checkboxes</h3>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <Checkbox 
              label="Normal checkbox" 
              checked={checkboxStates.normal}
              onChange={(checked) => handleCheckboxChange('normal', checked)}
            />
            <Checkbox 
              label="Checked checkbox" 
              checked={checkboxStates.bifat}
              onChange={(checked) => handleCheckboxChange('bifat', checked)}
            />
          </div>
          <div className="flex gap-4 items-center">
            <Checkbox 
              label="Disabled checkbox" 
              checked={checkboxStates.disabled}
              disabled={true}
              onChange={(checked) => handleCheckboxChange('disabled', checked)}
            />
            <Checkbox 
              label="Disabled checked checkbox" 
              checked={checkboxStates.disabledBifat}
              disabled={true}
              onChange={(checked) => handleCheckboxChange('disabledBifat', checked)}
            />
          </div>
        </div>
      </Container>
      
      {/* Example 3.2: Container for inputs - with Tailwind */}
      <Container className="compact mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Text Inputs</h3>
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
      {/* Example 4.1: Dropdown Dark Mode */}
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
      
      {/* Example 4.2: Dropdown Disabled */}
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
      
      {/* Example 4.3: Dropdown Dark Mode + Disabled */}
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
      
      {/* Example 5: Container for image cards - with Tailwind */}
      <Container className="card">
        <h3 className="text-gray-300 mb-3 text-sm">Cards</h3>
        <div className="flex gap-4 flex-wrap">
          <ImageCard
            imageSrc={poza}
            label="World"
            description="description description description description description description description description description description description description description description description"
            onClick={() => alert("You clicked on the World card!")}
          />
          <ImageCard
            imageSrc={poza}
            label="React"
            description="React warno"
            onClick={() => alert("You clicked on the React card!")}
          />
        </div>
      </Container>
      
      {/* Example 6: Container for form controls - with Tailwind */}
      <Container className="form-container">
        <h3 className="text-gray-300 mb-3 text-sm">Controls</h3>
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
      
      {/* Example 7: Container for sidebar - with Tailwind */}
      <Container className="sidebar w-64 mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Sidebar</h3>
        <div className="flex flex-col gap-2">
          <Button label="Menu 1" className="w-full"/>
          <Button label="Menu 2" variant="purple" className="w-full"/>
          <Button label="Menu 3" variant="red" className="w-full"/>
        </div>
      </Container>
      
      {/* Example 8: Loading Bar Examples */}
      <Container className="large mt-4">
        <LoadingBar progress={25} variant="blue" />
      </Container>

      {/* Example 9: Container Examples - New variants */}
      <Container className="large mt-4">
        <ContainerExample />
      </Container>

      {/* Example 10: Chat between 2 people */}
      <Container className="large mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Chat between Alex and Maria</h3>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start">
            <MessageBox 
              message="Hello! How are you?"
              type="info"
              direction="left"
            />
          </div>
          
          <div className="flex justify-end">
            <MessageBox 
              message="Hello Alex! I'm fine, thank you! How about you?"
              type="success"
              direction="right"
            />
          </div>
          
          <div className="flex justify-start">
            <MessageBox 
              message="Perfect! I finished the project I was working on. Want to see it?"
              type="info"
              direction="left"
            />
          </div>
          
          <div className="flex justify-end">
            <MessageBox 
              message="Yes, sure! I'm very curious to see what you've done"
              type="success"
              direction="right"
            />
          </div>
          
          <div className="flex justify-start">
            <MessageBox 
              message="Warning! The project is very large and complex, with many advanced features including animations, visual effects and a very intuitive interface for users"
              type="warning"
              direction="left"
            />
          </div>
          
          <div className="flex justify-end">
            <MessageBox 
              message="Wow! Sounds impressive! I can't wait to see it"
              type="success"
              direction="right"
            />
          </div>
          
          <div className="flex justify-start">
            <MessageBox 
              message="Error! I forgot to save the latest changes... 😅"
              type="error"
              direction="left"
            />
          </div>
          
          <div className="flex justify-end">
            <MessageBox 
              message="No worries! It happens to everyone. You can redo it quickly"
              type="success"
              direction="right"
            />
          </div>
          
          <div className="flex justify-start">
            <MessageBox 
              message="Thank you for understanding! I'll be more careful next time"
              type="info"
              direction="left"
            />
          </div>
        </div>
      </Container>

    </div>
  );
}