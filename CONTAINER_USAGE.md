# How to use the Container component in your components

## Introduction
The Container is a reusable component with a retro pixelated style that can be used to wrap any content in your application.

## Import
```jsx
import Container from './components/Container';
```

## Basic usage
```jsx
<Container>
  <p>Your content here</p>
</Container>
```

### With Tailwind CSS
```jsx
<Container>
  <h2 className="text-gray-300 mb-4 text-2xl font-bold">Title</h2>
  <p className="text-gray-300 text-base leading-relaxed">Your content here</p>
</Container>
```

## Available variants

### 1. Small container (`.small`)
For compact content:
```jsx
<Container className="small">
  <Button label="Click me" onClick={() => alert("Hello!")}/>
</Container>
```

### 2. Large container (`.large`)
For extended content:
```jsx
<Container className="large">
  <h2 style={{color: '#CCCCCC', margin: '0 0 16px 0'}}>Title</h2>
  <p style={{color: '#CCCCCC', margin: '0'}}>Long description...</p>
</Container>
```

### 3. Compact container (`.compact`)
For content without minimum height:
```jsx
<Container className="compact">
  <Toggle/>
</Container>
```

### 4. Card container (`.card`)
For cards with shadow:
```jsx
<Container className="card">
  <ImageCard
    imageSrc={image}
    label="Title"
    description="Description"
  />
</Container>
```

### 5. Form container (`.form-container`)
For form controls:
```jsx
<Container className="form-container">
  <h3 style={{color: '#CCCCCC', margin: '0 0 12px 0', fontSize: '14px'}}>Settings</h3>
  <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
    <Slider value={50} onChange={(value) => console.log(value)}/>
    <Toggle/>
  </div>
</Container>
```

### 6. Sidebar container (`.sidebar`)
For side menus:
```jsx
<Container className="sidebar" style={{width: '250px'}}>
  <h3 style={{color: '#CCCCCC', margin: '0 0 12px 0', fontSize: '14px'}}>Menu</h3>
  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
    <Button label="Option 1" variant="secondary" style={{width: '100%'}}/>
    <Button label="Option 2" variant="secondary" style={{width: '100%'}}/>
  </div>
</Container>
```

### 7. Modal container (`.modal`)
For modal windows:
```jsx
<Container className="modal">
  <h2 style={{color: '#CCCCCC', margin: '0 0 16px 0'}}>Modal</h2>
  <p style={{color: '#CCCCCC', margin: '0 0 16px 0'}}>Modal content...</p>
  <Button label="Close" onClick={() => setShowModal(false)}/>
</Container>
```

## Practical examples with your components

### For Button
```jsx
<Container className="small">
  <h3 style={{color: '#CCCCCC', margin: '0 0 12px 0', fontSize: '14px'}}>Actions</h3>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <Button label="Save" onClick={handleSave}/>
    <Button label="Cancel" variant="secondary" onClick={handleCancel}/>
  </div>
</Container>
```

**With Tailwind CSS:**
```jsx
<Container className="small">
  <h3 className="text-gray-300 mb-3 text-sm font-semibold">Actions</h3>
  <div className="flex gap-2 flex-wrap">
    <Button label="Save" onClick={handleSave}/>
    <Button label="Cancel" variant="secondary" onClick={handleCancel}/>
  </div>
</Container>
```

### For Toggle
```jsx
<Container className="compact">
  <h3 style={{color: '#CCCCCC', margin: '0 0 12px 0', fontSize: '14px'}}>Options</h3>
  <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
    <Toggle onChange={(checked) => setOption1(checked)}/>
    <span style={{color: '#CCCCCC', fontSize: '12px'}}>Option 1</span>
    <Toggle checked={option2} onChange={(checked) => setOption2(checked)}/>
    <span style={{color: '#CCCCCC', fontSize: '12px'}}>Option 2</span>
  </div>
</Container>
```

### For ImageCard
```jsx
<Container className="card">
  <h3 style={{color: '#CCCCCC', margin: '0 0 12px 0', fontSize: '14px'}}>Gallery</h3>
  <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
    <ImageCard imageSrc={img1} label="Image 1" description="Description 1"/>
    <ImageCard imageSrc={img2} label="Image 2" description="Description 2"/>
  </div>
</Container>
```

### For Slider
```jsx
<Container className="form-container">
  <h3 style={{color: '#CCCCCC', margin: '0 0 12px 0', fontSize: '14px'}}>Controls</h3>
  <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
    <div>
      <label style={{color: '#CCCCCC', fontSize: '12px', display: 'block', marginBottom: '4px'}}>
        Volume
      </label>
      <Slider value={volume} onChange={setVolume}/>
    </div>
    <div>
      <label style={{color: '#CCCCCC', fontSize: '12px', display: 'block', marginBottom: '4px'}}>
        Brightness
      </label>
      <Slider value={brightness} onChange={setBrightness}/>
    </div>
  </div>
</Container>
```

## Custom styling
You can add custom styles through the `style` prop:
```jsx
<Container 
  className="large" 
  style={{maxWidth: '500px', margin: '0 auto'}}
>
  <p>Centered content</p>
</Container>
```

**With Tailwind CSS:**
```jsx
<Container className="large max-w-lg mx-auto">
  <p>Centered content</p>
</Container>
```

## Combining classes
You can combine multiple classes for custom effects:
```jsx
<Container className="large card with-header">
  <h2>Title with separator line</h2>
  <p>Content...</p>
</Container>
```

## Responsive Design
The Container is responsive and automatically adapts to small screens. For additional customizations, you can use media queries in your CSS. 