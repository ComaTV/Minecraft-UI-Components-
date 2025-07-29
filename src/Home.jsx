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
import Scrollbar from "./components/Scrollbar";
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
        <h3 className="text-gray-300 mb-3 text-sm">Basic Buttons</h3>
        <div className="flex gap-2 flex-wrap">
          <Button label="Click me" onClick={() => alert("Button was clicked!")}/>
          <Button label="Green" variant="green" onClick={() => alert("Green button!")}/>
          <Button label="Red" variant="red" onClick={() => alert("Red button!")}/>
          <Button label="Purple" variant="purple" onClick={() => alert("Purple button!")}/>
        </div>
      </Container>

      {/* Example 2.1: Custom dimensions and fonts */}
      <Container className="small mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Custom Dimensions & Fonts</h3>
        <div className="flex gap-2 flex-wrap items-center">
          <Button 
            label="Small" 
            width={80} 
            height={32} 
            font="MinecraftRegular"
            onClick={() => alert("Small button!")}
          />
          <Button 
            label="Tall" 
            width={120} 
            height={60} 
            font="MinecraftTen"
            variant="green"
            onClick={() => alert("Tall button!")}
          />
          <Button 
            label="Wide" 
            width={200} 
            height={40} 
            font="MinecraftRegular"
            variant="red"
            onClick={() => alert("Wide button!")}
          />
        </div>
      </Container>

      {/* Example 2.2: Buttons with icons and custom fonts */}
      <Container className="small mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Buttons with Icons & Custom Fonts</h3>
        <div className="flex gap-2 flex-wrap">
          <Button 
            label="Download" 
            icon="/src/assets/techno/js.webp"
            font="MinecraftTen"
            width={140}
            height={45}
            onClick={() => alert("Download button!")}
          />
          <Button 
            label="Settings" 
            icon="/src/assets/techno/ts.webp"
            iconPosition="right"
            variant="green"
            font="MinecraftRegular"
            width={130}
            height={42}
            onClick={() => alert("Settings button!")}
          />
          <Button 
            label="Delete" 
            icon="/src/assets/techno/css.webp"
            variant="red"
            font="MinecraftTen"
            width={110}
            height={38}
            onClick={() => alert("Delete button!")}
          />
        </div>
      </Container>

      {/* Example 2.3: Loading and disabled states */}
      <Container className="small mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Loading & Disabled States</h3>
        <div className="flex gap-2 flex-wrap">
          <Button 
            label="Loading..." 
            loading={true}
            onClick={() => alert("This won't trigger!")}
          />
          <Button 
            label="Disabled" 
            disabled={true}
            onClick={() => alert("This won't trigger!")}
          />
          <Button 
            label="Full Width" 
            fullWidth={true}
            variant="purple"
            onClick={() => alert("Full width button!")}
          />
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
            iconImages={[
              "/src/assets/techno/java.webp",
              "/src/assets/techno/py.webp",
              "/src/assets/techno/c.webp",
              "/src/assets/techno/c++.webp",
              "/src/assets/techno/cs.webp",
              "/src/assets/techno/css.webp",
              "/src/assets/techno/js.webp",
              "/src/assets/techno/ts.webp",
              "/src/assets/techno/mongo.webp",
              "/src/assets/techno/sql.webp",
            ]}
            onClick={() => alert("You clicked on the World card!")}
          />
          <ImageCard
            imageSrc={poza}
            label="React"
            description="description description description description description description description description description description description description description description description"
            iconImages={[
              "/src/assets/techno/mongo.webp",
              "/src/assets/techno/js.webp",
              "/src/assets/techno/ts.webp",
              "/src/assets/techno/css.webp"
            ]}
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

      {/* Example 10: Chat between 2 people with Custom Scrollbar */}
      <Container className="large mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Chat between Alex and Maria (Vertical Scrollbar)</h3>
        <Scrollbar height="300px" width="100%" variant="vertical">
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
            
            <div className="flex justify-end">
              <MessageBox 
                message="Of course! We all make mistakes sometimes. The important thing is to learn from them"
                type="success"
                direction="right"
              />
            </div>
            
            <div className="flex justify-start">
              <MessageBox 
                message="You're absolutely right! By the way, I also added some new features to the project that I think you'll really like"
                type="info"
                direction="left"
              />
            </div>
            
            <div className="flex justify-end">
              <MessageBox 
                message="Really? What kind of features? I'm getting more and more excited to see this project!"
                type="success"
                direction="right"
              />
            </div>
            
            <div className="flex justify-start">
              <MessageBox 
                message="Well, I implemented a custom scrollbar component, improved the button adaptability, and added icon support to image cards. The UI is now much more polished and user-friendly!"
                type="info"
                direction="left"
              />
            </div>
            
            <div className="flex justify-end">
              <MessageBox 
                message="That sounds amazing! I can see you've been working really hard on this. The attention to detail is impressive!"
                type="success"
                direction="right"
              />
            </div>
            
            <div className="flex justify-start">
              <MessageBox 
                message="Thank you! I really wanted to make something special. The scrollbar you're using right now to read this conversation is actually one of the new components I created!"
                type="info"
                direction="left"
              />
            </div>
            
            <div className="flex justify-end">
              <MessageBox 
                message="Wait, really? That's so cool! I can see it has a really nice dark theme and smooth scrolling. You've done an incredible job!"
                type="success"
                direction="right"
              />
            </div>
            
            <div className="flex justify-start">
              <MessageBox 
                message="Yes! It has a modern design with gradients, 3D effects, and smooth interactions. I'm really happy with how it turned out"
                type="info"
                direction="left"
              />
            </div>
            
            <div className="flex justify-end">
              <MessageBox 
                message="You should be proud! This is exactly the kind of quality work that makes a difference. I can't wait to see the rest of the project!"
                type="success"
                direction="right"
              />
            </div>
          </div>
        </Scrollbar>
      </Container>

      {/* Example 10.1: Horizontal Scrollbar */}
      <Container className="large mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Horizontal Scrollbar Example</h3>
        <Scrollbar height="200px" width="100%" variant="horizontal">
          <div className="flex gap-4" style={{ width: 'max-content', minWidth: '100%' }}>
            <div className="bg-gray-700 p-4 rounded min-w-[300px]">
              <h4 className="text-white font-bold mb-2">Card 1</h4>
              <p className="text-gray-300 text-sm">This is a wide card that demonstrates horizontal scrolling.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded min-w-[300px]">
              <h4 className="text-white font-bold mb-2">Card 2</h4>
              <p className="text-gray-300 text-sm">Another card with some content to scroll through.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded min-w-[300px]">
              <h4 className="text-white font-bold mb-2">Card 3</h4>
              <p className="text-gray-300 text-sm">Third card showing the horizontal scrollbar in action.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded min-w-[300px]">
              <h4 className="text-white font-bold mb-2">Card 4</h4>
              <p className="text-gray-300 text-sm">Fourth card to ensure scrolling is needed.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded min-w-[300px]">
              <h4 className="text-white font-bold mb-2">Card 5</h4>
              <p className="text-gray-300 text-sm">Fifth card completing the horizontal scroll demonstration.</p>
            </div>
          </div>
        </Scrollbar>
      </Container>

      {/* Example 10.2: Grid Scrollbar */}
      <Container className="large mt-4">
        <h3 className="text-gray-300 mb-3 text-sm">Grid Layout with Scrollbar</h3>
        <Scrollbar height="400px" width="100%" variant="vertical" grid={true} gridCols={3}>
          {Array.from({ length: 12 }, (_, i) => (
            <Container>
              <h4 className="text-white font-bold mb-2">Grid Item {i + 1}</h4>
              <p className="text-gray-300 text-sm">This is a grid item in a scrollable grid layout.</p>
              <div className="mt-2 flex gap-2">
                <Button label="Action" size="small" width={60} height={24} font="MinecraftRegular" />
                <Button label="More" variant="green" size="small" width={60} height={24} font="MinecraftRegular" />
              </div>
            </Container>
          ))}
        </Scrollbar>
      </Container>
    </div>
  );
}