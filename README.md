# Minecraft-Inspired React Components - Documentation

A comprehensive collection of UI components built with React, inspired by the visual style and atmosphere of Minecraft. Each component features pixel-art design, custom fonts, and interactive effects that bring the familiar Minecraft aesthetic to modern web applications.

## 🎨 Components Overview

### 1. Button Component

A versatile button component with multiple color variants and interactive effects.

#### Props
- `label` (string, required): Button text
- `variant` (string, optional): Color variant - `'default'`, `'green'`, `'red'`, `'purple'`
- `disabled` (boolean, optional): Disable the button
- `onClick` (function, optional): Click handler
- `className` (string, optional): Additional CSS classes
- `style` (object, optional): Inline styles
- `fontFamily` (string, optional): Custom font family

#### Examples

```jsx
import Button from './components/Button';

// Default button
<Button label="Click me" onClick={() => alert("Button clicked!")} />

// Colored variants
<Button label="Success" variant="green" onClick={handleSuccess} />
<Button label="Danger" variant="red" onClick={handleDelete} />
<Button label="Magic" variant="purple" onClick={handleMagic} />

// Disabled state
<Button label="Disabled" disabled={true} />

// With custom styling
<Button 
  label="Custom" 
  className="w-full" 
  style={{ marginTop: '10px' }}
  fontFamily="Arial"
/>
```

### 2. Container Component

A flexible container component with multiple variants for different use cases.

#### Props
- `children` (ReactNode, required): Content to display
- `variant` (string, optional): Container style variant
- `size` (string, optional): Size variant - `'small'`, `'large'`, `'compact'`
- `className` (string, optional): Additional CSS classes
- `style` (object, optional): Inline styles

#### Variants
- `'default'`: Standard pixel container
- `'open'`: Transparent background with border
- `'transparent'`: Black background with blur effect
- `'dark'`: Very dark background for maximum contrast
- `'glass'`: Glass effect with blur
- `'outlined'`: Dashed border for drop zones
- `'minimal'`: Simple border design
- `'white'`: White background with gray bottom line
- `'card'`: Card-style with shadow
- `'form'`: Darker background for forms
- `'sidebar'`: Sidebar styling
- `'modal'`: Modal overlay styling

#### Examples

```jsx
import Container from './components/Container';

// Basic container
<Container>
  <p>This is a basic container</p>
</Container>

// Different variants
<Container variant="glass" size="large">
  <h2>Glass Container</h2>
  <p>With glass effect and large size</p>
</Container>

<Container variant="card">
  <h3>Card Container</h3>
  <p>Perfect for displaying cards</p>
</Container>

<Container variant="form" size="compact">
  <form>
    <input type="text" placeholder="Form input" />
  </form>
</Container>

// Sidebar example
<Container variant="sidebar" className="w-64">
  <nav>
    <ul>
      <li>Menu Item 1</li>
      <li>Menu Item 2</li>
    </ul>
  </nav>
</Container>
```

### 3. Toggle Component

A Minecraft-style toggle switch component.

#### Props
- `checked` (boolean, optional): Initial state
- `onChange` (function, optional): State change handler
- `disabled` (boolean, optional): Disable the toggle

#### Examples

```jsx
import Toggle from './components/Toggle';

// Basic toggle
<Toggle onChange={(isOn) => console.log('Toggle:', isOn)} />

// Controlled toggle
const [isEnabled, setIsEnabled] = useState(false);
<Toggle checked={isEnabled} onChange={setIsEnabled} />

// Disabled toggle
<Toggle checked={true} disabled={true} />
```

### 4. Checkbox Component

A custom checkbox component with Minecraft styling.

#### Props
- `label` (string, optional): Checkbox label
- `checked` (boolean, optional): Checked state
- `onChange` (function, optional): Change handler
- `disabled` (boolean, optional): Disable the checkbox
- `id` (string, optional): Input ID
- `className` (string, optional): Additional CSS classes

#### Examples

```jsx
import Checkbox from './components/Checkbox';

// Basic checkbox
<Checkbox 
  label="Accept terms" 
  onChange={(checked) => console.log('Checked:', checked)} 
/>

// Controlled checkbox
const [agreed, setAgreed] = useState(false);
<Checkbox 
  label="I agree to terms" 
  checked={agreed} 
  onChange={setAgreed} 
/>

// Disabled states
<Checkbox label="Disabled" disabled={true} />
<Checkbox label="Disabled checked" checked={true} disabled={true} />
```

### 5. Input Component

A styled text input component.

#### Props
- `placeholder` (string, optional): Input placeholder
- `value` (string, optional): Input value
- `onChange` (function, optional): Change handler
- `disabled` (boolean, optional): Disable the input
- `error` (boolean, optional): Show error state
- `type` (string, optional): Input type (default: 'text')
- `id` (string, optional): Input ID
- `className` (string, optional): Additional CSS classes

#### Examples

```jsx
import Input from './components/Input';

// Basic input
<Input 
  placeholder="Enter your name" 
  onChange={(value) => console.log('Input:', value)} 
/>

// Controlled input
const [username, setUsername] = useState('');
<Input 
  placeholder="Username" 
  value={username} 
  onChange={setUsername} 
/>

// Error state
<Input 
  placeholder="Email" 
  error={true} 
  onChange={(value) => console.log('Email:', value)} 
/>

// Disabled input
<Input 
  placeholder="Read only" 
  disabled={true} 
  value="Cannot edit this" 
/>
```

### 6. Dropdown Component

A customizable dropdown/select component.

#### Props
- `header` (string, optional): Dropdown header
- `label` (string, required): Default/selected option text
- `options` (array, required): Array of option strings
- `onSelect` (function, optional): Selection handler
- `variant` (string, optional): Style variant
- `focused` (boolean, optional): Focus state
- `pressed` (boolean, optional): Pressed state
- `dark` (boolean, optional): Dark mode styling
- `disabled` (boolean, optional): Disable the dropdown

#### Examples

```jsx
import Dropdown from './components/Dropdown';

// Basic dropdown
<Dropdown 
  label="Select option"
  options={["Option 1", "Option 2", "Option 3"]}
  onSelect={(option) => console.log('Selected:', option)}
/>

// Dark mode dropdown
<Dropdown 
  label="Dark dropdown"
  options={["Dark 1", "Dark 2", "Dark 3"]}
  dark={true}
  onSelect={(option) => console.log('Dark selected:', option)}
/>

// Disabled dropdown
<Dropdown 
  label="Disabled"
  options={["Option 1", "Option 2"]}
  disabled={true}
  onSelect={(option) => console.log('Selected:', option)}
/>
```

### 7. ImageCard Component

A card component for displaying images with labels and descriptions.

#### Props
- `imageSrc` (string, required): Image source URL
- `label` (string, required): Card title
- `description` (string, optional): Card description
- `onClick` (function, optional): Click handler (makes card clickable)

#### Examples

```jsx
import ImageCard from './components/ImageCard';

// Basic image card
<ImageCard
  imageSrc="/path/to/image.jpg"
  label="Minecraft World"
  description="A beautiful Minecraft world"
/>

// Clickable card
<ImageCard
  imageSrc="/path/to/image.jpg"
  label="Clickable Card"
  description="Click to view details"
  onClick={() => alert('Card clicked!')}
/>

// Long text handling
<ImageCard
  imageSrc="/path/to/image.jpg"
  label="Very long title that will be handled automatically"
  description="Very long description that will be truncated or handled with special styling to maintain the card's appearance"
/>
```

### 8. Slider Component

A progress slider component with Minecraft styling.

#### Props
- `value` (number, optional): Current value (default: 100)
- `max` (number, optional): Maximum value (default: 100)
- `label` (string, optional): Slider label
- `showPercentage` (boolean, optional): Show percentage (default: true)
- `onChange` (function, optional): Value change handler
- `disabled` (boolean, optional): Disable the slider

#### Examples

```jsx
import Slider from './components/Slider';

// Basic slider
<Slider 
  value={50} 
  onChange={(value) => console.log('Slider value:', value)} 
/>

// Custom range
<Slider 
  value={75} 
  max={200} 
  onChange={(value) => console.log('Value:', value)} 
/>

// Disabled slider
<Slider 
  value={25} 
  disabled={true} 
  onChange={(value) => console.log('Value:', value)} 
/>
```

### 9. LoadingBar Component

A progress bar component for loading states.

#### Props
- `progress` (number, optional): Progress percentage 0-100 (default: 0)
- `variant` (string, optional): Color variant (default: 'blue')
- `height` (string, optional): Bar height (default: '4px')
- `width` (string, optional): Bar width (default: '100%')
- `className` (string, optional): Additional CSS classes
- `style` (object, optional): Inline styles

#### Examples

```jsx
import LoadingBar from './components/LoadingBar';

// Basic loading bar
<LoadingBar progress={25} />

// Custom styling
<LoadingBar 
  progress={75} 
  variant="blue" 
  height="8px" 
  width="300px" 
/>

// With custom styles
<LoadingBar 
  progress={50} 
  className="my-4" 
  style={{ borderRadius: '10px' }} 
/>
```

### 10. MessageBox Component

A chat-style message component with different types and directions.

#### Props
- `type` (string, optional): Message type - `'info'`, `'success'`, `'warning'`, `'error'` (default: 'info')
- `message` (string, required): Message text
- `direction` (string, optional): Message direction - `'left'`, `'right'` (default: 'right')
- `className` (string, optional): Additional CSS classes
- `style` (object, optional): Inline styles

#### Examples

```jsx
import MessageBox from './components/MessageBox';

// Basic message
<MessageBox 
  message="Hello! How are you?" 
  type="info" 
  direction="left" 
/>

// Success message
<MessageBox 
  message="Operation completed successfully!" 
  type="success" 
  direction="right" 
/>

// Warning message
<MessageBox 
  message="Warning! This action cannot be undone." 
  type="warning" 
  direction="left" 
/>

// Error message
<MessageBox 
  message="Error! Something went wrong." 
  type="error" 
  direction="right" 
/>

// Chat conversation example
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
      message="I'm fine, thank you!" 
      type="success" 
      direction="right" 
    />
  </div>
</div>
```

## 🎯 Complete Example

Here's a complete example showing how to use multiple components together:

```jsx
import React, { useState } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Toggle from './components/Toggle';
import Checkbox from './components/Checkbox';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
import Slider from './components/Slider';
import LoadingBar from './components/LoadingBar';
import MessageBox from './components/MessageBox';

function App() {
  const [username, setUsername] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Form submitted!');
    }, 2000);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Form Container */}
      <Container variant="form" size="large">
        <h2 className="text-gray-300 mb-4">User Registration</h2>
        
        <div className="space-y-4">
          <Input 
            placeholder="Enter username" 
            value={username} 
            onChange={setUsername} 
          />
          
          <div className="flex items-center gap-4">
            <Toggle checked={isEnabled} onChange={setIsEnabled} />
            <span className="text-gray-300 text-sm">Enable notifications</span>
          </div>
          
          <Checkbox 
            label="I agree to the terms and conditions" 
            checked={agreed} 
            onChange={setAgreed} 
          />
          
          <div>
            <label className="text-gray-300 text-sm block mb-2">Volume Level</label>
            <Slider 
              value={sliderValue} 
              onChange={setSliderValue} 
            />
          </div>
          
          {loading && <LoadingBar progress={75} />}
          
          <Button 
            label="Submit" 
            variant="green" 
            onClick={handleSubmit}
            disabled={!username || !agreed}
          />
        </div>
      </Container>

      {/* Chat Container */}
      <Container variant="glass">
        <h3 className="text-gray-300 mb-4">Chat</h3>
        <div className="space-y-4">
          <div className="flex justify-start">
            <MessageBox 
              message="Welcome to our app!" 
              type="info" 
              direction="left" 
            />
          </div>
          <div className="flex justify-end">
            <MessageBox 
              message="Thank you! I'm excited to try it." 
              type="success" 
              direction="right" 
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
```

## 🎨 Styling

All components use custom CSS with Minecraft-inspired pixel art styling. The components are designed to work with Tailwind CSS for additional utility classes.

### Fonts
- `MinecraftRegular`: Regular text
- `MinecraftTen`: Bold text (used in buttons)

### Color Scheme
- Primary colors: Various shades of gray for containers
- Accent colors: Green, red, purple for buttons
- Text colors: White, gray for different contexts

## 🔧 Customization

You can customize components by:
1. Modifying the CSS files in `src/components/css/`
2. Using the `className` prop for additional styling
3. Using the `style` prop for inline styles
4. Extending components with additional props

## 📱 Responsive Design

All components are responsive and work well on mobile devices. The Container component includes specific mobile optimizations.

## 🤝 Contributing

Feel free to contribute by:
- Adding new component variants
- Improving existing components
- Adding new components
- Fixing bugs
- Improving documentation

Open an issue or submit a pull request!
