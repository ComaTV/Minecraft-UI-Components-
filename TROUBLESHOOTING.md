# 🔧 Troubleshooting Guide

## Probleme comune și soluții

### ❌ Eroare: "React is not defined"

**Problema:**
```
Button.jsx:4 Uncaught ReferenceError: React is not defined
```

**Cauza:**
Componentele nu importau React explicit, ceea ce cauza probleme în versiuni mai vechi de React.

**Soluția:**
Această problemă a fost rezolvată în versiunea `1.0.1`. Actualizează pachetul:

```bash
npm update mc-ui-comatv
# sau
npm install mc-ui-comatv@latest
```

**Pentru versiuni mai vechi:**
Dacă folosești o versiune mai veche, asigură-te că importezi React în aplicația ta:

```jsx
import React from 'react';
import { Button } from 'mc-ui-comatv';
```

### ❌ Eroare: "CSS not loading"

**Problema:**
Stilurile nu se încarcă și componentele arată fără stil.

**Soluția:**
Asigură-te că importezi stilurile:

```jsx
import 'mc-ui-comatv/styles';
```

**Exemplu complet:**
```jsx
import React from 'react';
import { Button, Container } from 'mc-ui-comatv';
import 'mc-ui-comatv/styles'; // IMPORTANT!

function App() {
  return (
    <Container className="large">
      <Button label="Click me!" />
    </Container>
  );
}
```

### ❌ Eroare: "Module not found"

**Problema:**
```
Module not found: Can't resolve 'mc-ui-comatv'
```

**Soluția:**
1. Verifică că pachetul este instalat:
   ```bash
   npm list mc-ui-comatv
   ```

2. Reinstalează pachetul:
   ```bash
   npm uninstall mc-ui-comatv
   npm install mc-ui-comatv
   ```

3. Verifică că folosești numele corect:
   ```jsx
   import { Button } from 'mc-ui-comatv'; // ✅ Corect
   import { Button } from 'minecraft-ui-components'; // ❌ Greșit
   ```

### ❌ Eroare: "Component is not a function"

**Problema:**
```
TypeError: Component is not a function
```

**Soluția:**
Asigură-te că importezi componentele corect:

```jsx
// ✅ Corect - import cu destructuring
import { Button, Container } from 'mc-ui-comatv';

// ❌ Greșit - import default
import Button from 'mc-ui-comatv';
```

### ❌ Eroare: "Fonts not loading"

**Problema:**
Fonturile Minecraft nu se încarcă.

**Soluția:**
Fonturile sunt incluse în pachet. Asigură-te că importezi stilurile:

```jsx
import 'mc-ui-comatv/styles';
```

Dacă problema persistă, poți încărca fonturile manual:

```css
@font-face {
  font-family: 'MinecraftRegular';
  src: url('path/to/MinecraftRegular.ttf') format('truetype');
}

@font-face {
  font-family: 'MinecraftTen';
  src: url('path/to/MinecraftTen.ttf') format('truetype');
}
```

### ❌ Eroare: "Props not working"

**Problema:**
Props-urile nu funcționează cum te aștepți.

**Soluția:**
Verifică că folosești props-urile corecte:

```jsx
// ✅ Corect
<Button 
  label="Click me" 
  variant="green" 
  onClick={() => alert('clicked')} 
/>

// ❌ Greșit
<Button 
  text="Click me"  // Ar trebui să fie 'label'
  color="green"    // Ar trebui să fie 'variant'
/>
```

### 🔍 Debugging

**Pentru a verifica că pachetul funcționează:**

1. Creează un test simplu:
```jsx
import React from 'react';
import { Button } from 'mc-ui-comatv';
import 'mc-ui-comatv/styles';

function TestComponent() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a1a' }}>
      <Button 
        label="Test Button" 
        onClick={() => console.log('Button clicked!')} 
      />
    </div>
  );
}
```

2. Verifică în consolă că nu sunt erori
3. Verifică că stilurile se încarcă

### 📞 Suport

Dacă întâmpini probleme:

1. **Verifică versiunea:**
   ```bash
   npm list mc-ui-comatv
   ```

2. **Actualizează la ultima versiune:**
   ```bash
   npm install mc-ui-comatv@latest
   ```

3. **Verifică că folosești React 16.8+:**
   ```bash
   npm list react
   ```

4. **Creează un issue pe GitHub:**
   https://github.com/ComaTV/Minecraft-UI-Components-/issues

### 📋 Checklist pentru debugging

- [ ] Pachetul este instalat (`npm list mc-ui-comatv`)
- [ ] Importezi stilurile (`import 'mc-ui-comatv/styles'`)
- [ ] Folosești import cu destructuring (`import { Button } from 'mc-ui-comatv'`)
- [ ] React este instalat și configurat
- [ ] Nu sunt conflicte cu alte pachete
- [ ] Versiunea pachetului este actualizată

### 🎯 Versiuni compatibile

- **React**: 16.8.0+
- **React DOM**: 16.8.0+
- **Node.js**: 14.0.0+
- **npm**: 6.0.0+

### 🔄 Actualizări

Pentru a actualiza la ultima versiune:

```bash
npm update mc-ui-comatv
```

Sau pentru a forța reinstalarea:

```bash
npm uninstall mc-ui-comatv
npm install mc-ui-comatv
``` 