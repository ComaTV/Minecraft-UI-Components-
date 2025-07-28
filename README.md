# MC UI ComaTV

A collection of Minecraft-styled React UI components with pixelated design. Perfect for creating game-like interfaces or retro-styled applications.

## 🎮 Features

- **Minecraft-inspired design** - Pixelated, retro gaming aesthetic
- **Fully customizable** - Easy to style and extend
- **TypeScript support** - Full type definitions included
- **Lightweight** - Minimal dependencies
- **Accessible** - Built with accessibility in mind

## 📦 Installation

```bash
npm install mc-ui-comatv
```

## 🚀 Quick Start

```jsx
import React from 'react';
import { Button, Container } from 'mc-ui-comatv';
import 'mc-ui-comatv/styles';

function App() {
  return (
    <Container className="large">
      <h2>Welcome to Minecraft UI!</h2>
      <Button 
        label="Click me!" 
        onClick={() => alert('Hello!')}
      />
    </Container>
  );
}
```

## 🧩 Components

### Button
A customizable button with Minecraft styling.

```jsx
import { Button } from 'mc-ui-comatv';

// Basic usage
<Button label="Click me" onClick={() => console.log('clicked')} />

// With variants
<Button label="Green Button" variant="green" />
<Button label="Red Button" variant="red" />
<Button label="Purple Button" variant="purple" />

// Disabled state
<Button label="Disabled" disabled={true} />
```

**Props:**
- `label` (string) - Button text
- `variant` (string) - 'default' | 'green' | 'red' | 'purple'
- `disabled` (boolean) - Disabled state
- `onClick` (function) - Click handler
- `className` (string) - Additional CSS classes
- `style` (object) - Inline styles
- `fontFamily` (string) - Custom font family

### Container
A versatile container component for organizing content.

```jsx
import { Container } from 'mc-ui-comatv';

// Different sizes
<Container className="small">Small container</Container>
<Container className="large">Large container</Container>
<Container className="compact">Compact container</Container>
<Container className="card">Card-style container</Container>
<Container className="sidebar">Sidebar container</Container>
<Container className="form-container">Form container</Container>
```

### Checkbox
A Minecraft-styled checkbox component.

```jsx
import { Checkbox } from 'mc-ui-comatv';

<Checkbox 
  label="Accept terms" 
  checked={checked}
  onChange={(checked) => setChecked(checked)}
/>

// Disabled state
<Checkbox 
  label="Disabled checkbox" 
  disabled={true}
  checked={true}
/>
```

**Props:**
- `label` (string) - Checkbox label
- `checked` (boolean) - Checked state
- `onChange` (function) - Change handler
- `disabled` (boolean) - Disabled state

### Input
A text input with Minecraft styling.

```jsx
import { Input } from 'mc-ui-comatv';

<Input 
  placeholder="Enter text..."
  onChange={(value) => console.log(value)}
/>

// With error state
<Input 
  placeholder="Error input"
  error={true}
  onChange={(value) => console.log(value)}
/>

// Disabled state
<Input 
  placeholder="Disabled"
  disabled={true}
  onChange={(value) => console.log(value)}
/>
```

**Props:**
- `placeholder` (string) - Placeholder text
- `onChange` (function) - Change handler
- `error` (boolean) - Error state
- `disabled` (boolean) - Disabled state

### Toggle
A toggle switch component.

```jsx
import { Toggle } from 'mc-ui-comatv';

<Toggle checked={isOn} onChange={(checked) => setIsOn(checked)} />
```

### Slider
A slider component for numeric inputs.

```jsx
import { Slider } from 'mc-ui-comatv';

<Slider 
  value={50} 
  onChange={(value) => console.log(value)}
/>
```

### Dropdown
A dropdown/select component.

```jsx
import { Dropdown } from 'mc-ui-comatv';

<Dropdown 
  header="Select option"
  label="Choose..."
  options={["Option 1", "Option 2", "Option 3"]}
  onSelect={(option) => console.log(option)}
/>

// Dark variant
<Dropdown 
  header="Dark dropdown"
  label="Choose..."
  options={["Option 1", "Option 2"]}
  dark={true}
  onSelect={(option) => console.log(option)}
/>

// Disabled state
<Dropdown 
  header="Disabled"
  label="Choose..."
  options={["Option 1", "Option 2"]}
  disabled={true}
  onSelect={(option) => console.log(option)}
/>
```

**Props:**
- `header` (string) - Dropdown header
- `label` (string) - Dropdown label
- `options` (array) - Available options
- `onSelect` (function) - Selection handler
- `dark` (boolean) - Dark theme
- `disabled` (boolean) - Disabled state

### ImageCard
A card component for displaying images with descriptions.

```jsx
import { ImageCard } from 'mc-ui-comatv';

<ImageCard
  imageSrc="/path/to/image.png"
  label="Card Title"
  description="This is a description of the card"
  onClick={() => console.log('Card clicked')}
/>
```

**Props:**
- `imageSrc` (string) - Image source
- `label` (string) - Card title
- `description` (string) - Card description
- `onClick` (function) - Click handler

### LoadingBar
A progress bar component.

```jsx
import { LoadingBar } from 'mc-ui-comatv';

<LoadingBar progress={75} variant="blue" />
```

**Props:**
- `progress` (number) - Progress percentage (0-100)
- `variant` (string) - Color variant

### MessageBox
A message component for chat-like interfaces.

```jsx
import { MessageBox } from 'mc-ui-comatv';

<MessageBox 
  message="Hello world!"
  type="info"
  direction="left"
/>

// Different types
<MessageBox message="Success!" type="success" direction="right" />
<MessageBox message="Warning!" type="warning" direction="left" />
<MessageBox message="Error!" type="error" direction="left" />
```

**Props:**
- `message` (string) - Message text
- `type` (string) - 'info' | 'success' | 'warning' | 'error'
- `direction` (string) - 'left' | 'right'

## 🎨 Styling

The components come with built-in Minecraft-styled CSS. To use the styles, import them:

```jsx
import 'mc-ui-comatv/styles';

You can also customize the components using CSS classes or inline styles:

```jsx
<Button 
  label="Custom Button" 
  className="my-custom-class"
  style={{ backgroundColor: '#ff0000' }}
/>
```

## 📚 Examples

Check out the demo in the `src/Home.jsx` file for comprehensive examples of all components.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🎯 Roadmap

- [ ] Add more component variants
- [ ] Add animation support
- [ ] Add theme customization
- [ ] Add more accessibility features
- [ ] Add unit tests

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
