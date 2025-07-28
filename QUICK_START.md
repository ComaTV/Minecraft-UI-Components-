# 🚀 Quick Start Guide

## Installation

```bash
npm install minecraft-ui-components
```

## Basic Usage

```jsx
import React from 'react';
import { Button, Container } from 'minecraft-ui-components';
import 'minecraft-ui-components/styles';

function App() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '20px' }}>
      <Container className="large">
        <h2 style={{ color: '#ffffff' }}>Welcome to Minecraft UI!</h2>
        <Button 
          label="Click me!" 
          onClick={() => alert('Hello!')}
        />
      </Container>
    </div>
  );
}
```

## Available Components

### Button
```jsx
<Button label="Click me" onClick={() => alert('clicked')} />
<Button label="Green" variant="green" />
<Button label="Red" variant="red" />
<Button label="Purple" variant="purple" />
<Button label="Disabled" disabled={true} />
```

### Container
```jsx
<Container className="small">Small container</Container>
<Container className="large">Large container</Container>
<Container className="compact">Compact container</Container>
<Container className="card">Card container</Container>
<Container className="sidebar">Sidebar container</Container>
<Container className="form-container">Form container</Container>
```

### Form Controls
```jsx
// Input
<Input 
  placeholder="Enter text..."
  onChange={(value) => console.log(value)}
/>

// Checkbox
<Checkbox 
  label="Accept terms"
  checked={checked}
  onChange={(checked) => setChecked(checked)}
/>

// Toggle
<Toggle checked={isOn} onChange={(checked) => setIsOn(checked)} />

// Slider
<Slider value={50} onChange={(value) => console.log(value)} />

// Dropdown
<Dropdown 
  header="Select option"
  label="Choose..."
  options={["Option 1", "Option 2", "Option 3"]}
  onSelect={(option) => console.log(option)}
/>
```

### Display Components
```jsx
// Image Card
<ImageCard
  imageSrc="/path/to/image.png"
  label="Card Title"
  description="Card description"
  onClick={() => console.log('clicked')}
/>

// Loading Bar
<LoadingBar progress={75} variant="blue" />

// Message Box
<MessageBox 
  message="Hello world!"
  type="info"
  direction="left"
/>
```

## Styling

The components come with built-in Minecraft-styled CSS. Import the styles:

```jsx
import 'minecraft-ui-components/styles';
```

You can also customize with CSS classes or inline styles:

```jsx
<Button 
  label="Custom Button" 
  className="my-custom-class"
  style={{ backgroundColor: '#ff0000' }}
/>
```

## Complete Example

```jsx
import React, { useState } from 'react';
import { 
  Button, 
  Container, 
  Input, 
  Checkbox, 
  Toggle, 
  Slider, 
  Dropdown,
  ImageCard,
  LoadingBar,
  MessageBox
} from 'minecraft-ui-components';
import 'minecraft-ui-components/styles';

function MinecraftApp() {
  const [inputValue, setInputValue] = useState('');
  const [checkboxState, setCheckboxState] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div style={{ 
      backgroundColor: '#1a1a1a', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Container className="large">
        <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>
          Minecraft UI Components Demo
        </h2>

        {/* Form Section */}
        <Container className="form-container">
          <h3 style={{ color: '#cccccc', marginBottom: '15px' }}>Form Controls</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <Input 
              placeholder="Enter your name..."
              value={inputValue}
              onChange={setInputValue}
            />
          </div>

          <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Checkbox 
              label="Accept terms and conditions"
              checked={checkboxState}
              onChange={setCheckboxState}
            />
          </div>

          <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Toggle checked={toggleState} onChange={setToggleState} />
            <span style={{ color: '#cccccc' }}>Enable notifications</span>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#cccccc', display: 'block', marginBottom: '5px' }}>
              Volume: {sliderValue}%
            </label>
            <Slider value={sliderValue} onChange={setSliderValue} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <Dropdown 
              header="Select your favorite game"
              label="Choose a game..."
              options={["Minecraft", "Terraria", "Stardew Valley", "Factorio"]}
              onSelect={(option) => alert(`Selected: ${option}`)}
            />
          </div>
        </Container>

        {/* Buttons Section */}
        <Container className="small" style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#cccccc', marginBottom: '10px' }}>Buttons</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button label="Default" onClick={() => alert('Default clicked!')} />
            <Button label="Green" variant="green" onClick={() => alert('Green clicked!')} />
            <Button label="Red" variant="red" onClick={() => alert('Red clicked!')} />
            <Button label="Purple" variant="purple" onClick={() => alert('Purple clicked!')} />
            <Button label="Disabled" disabled={true} />
          </div>
        </Container>

        {/* Cards Section */}
        <Container className="card" style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#cccccc', marginBottom: '10px' }}>Cards</h3>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <ImageCard
              imageSrc="https://via.placeholder.com/150x100/4CAF50/FFFFFF?text=Minecraft"
              label="Minecraft World"
              description="A beautiful survival world with amazing builds"
              onClick={() => alert('Minecraft card clicked!')}
            />
            <ImageCard
              imageSrc="https://via.placeholder.com/150x100/2196F3/FFFFFF?text=Terraria"
              label="Terraria Adventure"
              description="Explore the vast world of Terraria"
              onClick={() => alert('Terraria card clicked!')}
            />
          </div>
        </Container>

        {/* Progress Section */}
        <Container className="large" style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#cccccc', marginBottom: '10px' }}>Progress</h3>
          <LoadingBar progress={75} variant="blue" />
        </Container>

        {/* Chat Section */}
        <Container className="large" style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#cccccc', marginBottom: '10px' }}>Chat</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <MessageBox 
                message="Hello! Welcome to our Minecraft-themed app!"
                type="info"
                direction="left"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <MessageBox 
                message="Thanks! I love the pixelated design!"
                type="success"
                direction="right"
              />
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default MinecraftApp;
```

## 🎯 Next Steps

1. **Explore all components** in the documentation
2. **Customize the styling** to match your needs
3. **Check out the examples** in the README
4. **Report issues** on GitHub if you find any bugs

Happy coding! 🎮 