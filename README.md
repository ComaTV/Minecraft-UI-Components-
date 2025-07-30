# MC UI ComaTV

A collection of Minecraft-styled React UI components with pixelated design. Perfect for creating game-like interfaces or retro-styled applications.

## 🎮 Features

- **Minecraft-inspired design** - Pixelated, retro gaming aesthetic
- **Fully customizable** - Easy to style and extend
- **TypeScript support** - Full type definitions included
- **Lightweight** - Minimal dependencies
- **Accessible** - Built with accessibility in mind
- **Custom scrollbars** - Modern dark-themed scrollbars with grid support
- **Adaptable buttons** - Custom dimensions, fonts, and icon support
- **Grid layouts** - Flexible grid system with automatic wrapping

## 📦 Installation

```bash
npm install mc-ui-comatv
```

## 🚀 Quick Start

```jsx
import React from 'react';
import { Button, Container, Scrollbar } from 'mc-ui-comatv';
import 'mc-ui-comatv/styles';

function App() {
  return (
    <Container className="large">
      <h2>Welcome to Minecraft UI!</h2>
      <Button 
        label="Click me!" 
        onClick={() => alert('Hello!')}
      />
      <Scrollbar height="300px" grid={true} gridCols={3}>
        {/* Your content here */}
      </Scrollbar>
    </Container>
  );
}
```

## 🧩 Components

### Button
A highly customizable button with Minecraft styling and advanced features.

```jsx
import { Button } from 'mc-ui-comatv';

// Basic usage
<Button label="Click me" onClick={() => console.log('clicked')} />

// Custom dimensions and fonts
<Button 
  label="Custom Button" 
  width={150} 
  height={45} 
  font="MinecraftTen"
  onClick={() => console.log('clicked')} 
/>

// With icons
<Button 
  label="Download" 
  icon="/path/to/icon.png"
  iconPosition="left"
  onClick={() => console.log('download')} 
/>

// Loading state
<Button 
  label="Saving..." 
  loading={true}
  onClick={() => console.log('saving')} 
/>

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
- `width` (number|string) - Custom width
- `height` (number|string) - Custom height
- `font` (string) - 'MinecraftRegular' | 'MinecraftTen'
- `icon` (string|ReactNode) - Icon (path or component)
- `iconPosition` (string) - 'left' | 'right'
- `loading` (boolean) - Loading state
- `disabled` (boolean) - Disabled state
- `fullWidth` (boolean) - Full width button
- `onClick` (function) - Click handler
- `className` (string) - Additional CSS classes
- `style` (object) - Inline styles

### Scrollbar
A custom scrollbar component with modern dark theme and grid support.

```jsx
import { Scrollbar } from 'mc-ui-comatv';

// Basic vertical scrollbar
<Scrollbar height="400px">
  {/* Your content here */}
</Scrollbar>

// Horizontal scrollbar
<Scrollbar height="200px" variant="horizontal">
  {/* Wide content */}
</Scrollbar>

// Grid layout with automatic wrapping
<Scrollbar height="400px" grid={true} gridCols={3} gridGap="16px">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> {/* Automatically wraps to next row */}
</Scrollbar>
```

**Props:**
- `height` (string) - Container height
- `width` (string) - Container width
- `variant` (string) - 'vertical' | 'horizontal'
- `grid` (boolean) - Enable grid layout (vertical only)
- `gridCols` (number) - Number of columns (2-6)
- `gridGap` (string) - Gap between grid items
- `showScrollbar` (boolean) - Show/hide scrollbar
- `onScroll` (function) - Scroll event handler
- `className` (string) - Additional CSS classes

### Container
A versatile container component for organizing content with multiple variants and sizes.

```jsx
import { Container } from 'mc-ui-comatv';

// Basic usage
<Container>
  <h2>Basic Container</h2>
  <p>Your content here</p>
</Container>

// Different sizes
<Container className="small">Small container</Container>
<Container className="large">Large container</Container>
<Container className="compact">Compact container</Container>

// Different variants
<Container className="card">Card-style container</Container>
<Container className="sidebar">Sidebar container</Container>
<Container className="form-container">Form container</Container>
<Container className="modal">Modal container</Container>

// Using variant prop
<Container variant="open">Open variant container</Container>
<Container variant="transparent">Transparent container</Container>
<Container variant="dark">Dark container</Container>
<Container variant="glass">Glass effect container</Container>
<Container variant="outlined">Outlined container</Container>
<Container variant="minimal">Minimal container</Container>
<Container variant="white">White container</Container>

// Using size prop
<Container size="small">Small size container</Container>
<Container size="large">Large size container</Container>
<Container size="compact">Compact size container</Container>

// With custom styling
<Container 
  className="custom-class"
  style={{ backgroundColor: '#2a2a2a' }}
>
  Custom styled container
</Container>
```

**Props:**
- `children` (ReactNode) - Content to be rendered inside the container
- `className` (string) - Additional CSS classes
- `style` (object) - Inline styles
- `variant` (string) - Container variant: 'default' | 'open' | 'transparent' | 'dark' | 'glass' | 'outlined' | 'minimal' | 'white' | 'card' | 'form' | 'sidebar' | 'modal'
- `size` (string) - Container size: 'default' | 'small' | 'large' | 'compact'

**Variants:**
- `default` - Standard container with pixelated border
- `open` - Container with open/expanded styling
- `transparent` - Transparent background container
- `dark` - Dark themed container
- `glass` - Glass morphism effect container
- `outlined` - Container with outline only
- `minimal` - Minimal styling container
- `white` - White themed container
- `card` - Card-style container (same as className="card")
- `form` - Form container (same as className="form-container")
- `sidebar` - Sidebar container (same as className="sidebar")
- `modal` - Modal container (same as className="modal")

**Sizes:**
- `default` - Standard size
- `small` - Smaller padding and spacing
- `large` - Larger padding and spacing
- `compact` - Minimal padding for tight layouts

**CSS Classes (alternative to variant prop):**
- `small` - Small size container
- `large` - Large size container
- `compact` - Compact size container
- `card` - Card-style container
- `form-container` - Form container
- `sidebar` - Sidebar container

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
A card component for displaying images with descriptions and icon arrays.

```jsx
import { ImageCard } from 'mc-ui-comatv';

<ImageCard
  imageSrc="/path/to/image.png"
  label="Card Title"
  description="This is a description of the card"
  iconImages={[
    "/path/to/icon1.png",
    "/path/to/icon2.png",
    "/path/to/icon3.png"
  ]}
  onClick={() => console.log('Card clicked')}
/>
```

**Props:**
- `imageSrc` (string) - Image source
- `label` (string) - Card title
- `description` (string) - Card description
- `iconImages` (array) - Array of icon image paths
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
```

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

- [x] Add custom scrollbar component
- [x] Add adaptable button dimensions
- [x] Add grid layout support
- [x] Add icon support for buttons and cards
- [ ] Add more component variants
- [ ] Add animation support
- [ ] Add theme customization
- [ ] Add more accessibility features
- [ ] Add unit tests

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
