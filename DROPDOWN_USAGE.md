# Dropdown Component - Ghid de utilizare

## Introducere
Dropdown-ul este o componentă reutilizabilă cu stil pixelat retro care poate fi folosită în orice parte a proiectului tău.

## Import
```jsx
import Dropdown from './components/Dropdown';
```

## Utilizare de bază
```jsx
<Dropdown 
  label="Alege o opțiune"
  options={["Opțiunea 1", "Opțiunea 2", "Opțiunea 3"]}
  onSelect={(option) => console.log("Selectat:", option)}
/>
```

## Props disponibile

### Props obligatorii:
- **`label`** (string) - Textul afișat în dropdown
- **`options`** (array) - Lista de opțiuni disponibile
- **`onSelect`** (function) - Funcția apelată când se selectează o opțiune

### Props opționale:
- **`header`** (string) - Titlul deasupra dropdown-ului
- **`variant`** (string) - Stilul dropdown-ului: `"white"` (default) sau `"black"`
- **`disabled`** (boolean) - Dezactivează dropdown-ul

## Exemple de utilizare

### 1. Dropdown simplu
```jsx
<Dropdown 
  label="Alege o opțiune"
  options={["Opțiunea 1", "Opțiunea 2", "Opțiunea 3"]}
  onSelect={(option) => alert(`Ai selectat: ${option}`)}
/>
```

### 2. Dropdown cu header
```jsx
<Dropdown 
  header="Selectează categoria"
  label="Categorie"
  options={["Tehnologie", "Design", "Marketing", "Vânzări"]}
  onSelect={(option) => console.log("Categorie:", option)}
/>
```

### 3. Dropdown dark mode
```jsx
<Dropdown 
  header="Temă aplicație"
  label="Light"
  options={["Light", "Dark", "Auto"]}
  onSelect={(option) => setTheme(option)}
  variant="black"
/>
```

### 4. Dropdown dezactivat
```jsx
<Dropdown 
  header="Setare fixă"
  label="Nu poate fi modificat"
  options={["Opțiune 1", "Opțiune 2"]}
  onSelect={(option) => console.log(option)}
  disabled={true}
/>
```

### 5. Dropdown în formulare
```jsx
<div>
  <label>Limbă:</label>
  <Dropdown 
    label="Română"
    options={["Română", "English", "Français", "Deutsch"]}
    onSelect={(option) => setLanguage(option)}
    variant="white"
  />
</div>
```

### 6. Dropdown pentru filtrare
```jsx
<div className="flex gap-4 items-center">
  <span>Filtru:</span>
  <Dropdown 
    label="Toate"
    options={["Toate", "Active", "Inactive", "Arhivate"]}
    onSelect={(option) => filterItems(option)}
    variant="white"
  />
</div>
```

## Variante disponibile

### White Mode (default)
- **Background**: Gri deschis (#eeeeee)
- **Text**: Gri închis
- **Efect 3D**: Ridicat (embossed)
- **Utilizare**: Pentru interfețe clare

### Black Mode
- **Background**: Gri închis (#333333)
- **Text**: Gri deschis
- **Efect 3D**: Ridicat (embossed)
- **Utilizare**: Pentru teme întunecate

### Disabled State
- **Background**: Gri mediu (#aaaaaa)
- **Text**: Gri închis
- **Efect 3D**: Încastrat (sunken)
- **Funcționalitate**: Dezactivat

## Caracteristici

### Funcționalitate:
- ✅ **Click outside** - Se închide automat când faci click în afara lui
- ✅ **Keyboard navigation** - Suport pentru navigare cu tastatura
- ✅ **Accessibility** - Compatibil cu screen readers
- ✅ **Responsive** - Se adaptează la diferite dimensiuni

### Stilizare:
- ✅ **Stil pixelat retro** - Se potrivește cu tema aplicației
- ✅ **Efecte 3D** - Relief embossed și sunken
- ✅ **Animații smooth** - Tranziții pentru deschidere/închidere
- ✅ **Săgeată rotativă** - Indică starea dropdown-ului

### Integrare:
- ✅ **Reutilizabil** - Poate fi folosit în orice componentă
- ✅ **Flexibil** - Suportă diferite tipuri de date
- ✅ **Performant** - Event listener-uri optimizate
- ✅ **Izolat** - Nu interferează cu alte componente

## Exemple practice

### În componenta de setări:
```jsx
function Settings() {
  const [language, setLanguage] = useState("Română");
  const [theme, setTheme] = useState("Light");
  
  return (
    <div>
      <h2>Setări</h2>
      <div>
        <label>Limbă:</label>
        <Dropdown 
          label={language}
          options={["Română", "English", "Français"]}
          onSelect={setLanguage}
        />
      </div>
      <div>
        <label>Temă:</label>
        <Dropdown 
          label={theme}
          options={["Light", "Dark", "Auto"]}
          onSelect={setTheme}
          variant="black"
        />
      </div>
    </div>
  );
}
```

### În componenta de filtrare:
```jsx
function FilterBar() {
  const [status, setStatus] = useState("Toate");
  const [category, setCategory] = useState("Toate");
  
  return (
    <div className="flex gap-4">
      <Dropdown 
        label={status}
        options={["Toate", "Active", "Inactive"]}
        onSelect={setStatus}
      />
      <Dropdown 
        label={category}
        options={["Toate", "Tehnologie", "Design", "Marketing"]}
        onSelect={setCategory}
      />
    </div>
  );
}
```

## Best Practices

1. **Folosește label-uri descriptive** - Ajută utilizatorii să înțeleagă ce selectează
2. **Grupează opțiunile logice** - Organizează opțiunile într-un mod intuitiv
3. **Folosește variant-ul potrivit** - White pentru interfețe clare, black pentru teme întunecate
4. **Gestionează starea** - Folosește useState pentru a păstra selecția
5. **Validează selecția** - Verifică dacă opțiunea selectată este validă

## Troubleshooting

### Dropdown-ul nu se deschide:
- Verifică dacă `disabled={true}` nu este setat
- Asigură-te că `onSelect` este o funcție validă
- Verifică dacă nu există conflicte CSS

### Opțiunile nu apar:
- Verifică dacă `options` este un array valid
- Asigură-te că array-ul nu este gol
- Verifică z-index-ul dacă opțiunile sunt ascunse

### Stilizarea nu se aplică:
- Verifică dacă CSS-ul este importat corect
- Asigură-te că `variant` este setat corect
- Verifică dacă nu există conflicte cu alte stiluri 