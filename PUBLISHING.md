# Publishing Instructions

## 🚀 How to Publish to npm

### 1. Prepare for Publishing

Before publishing, make sure you have:

1. **Updated version number** in `package.json`
2. **Built the library** with `npm run build:lib`
3. **Tested the components** locally
4. **Updated README.md** with latest documentation

### 2. Build the Library

```bash
npm run build:lib
```

This will create the `dist/` folder with:
- `index.js` (CommonJS format)
- `index.esm.js` (ESM format)
- `styles.css` (All component styles)

### 3. Test Locally (Optional)

You can test the package locally before publishing:

```bash
npm pack
```

This creates a `.tgz` file that you can install in another project to test.

### 4. Login to npm

```bash
npm login
```

Enter your npm username, password, and email.

### 5. Publish

```bash
npm publish
```

### 6. Verify Publication

Check that your package is published at:
https://www.npmjs.com/package/minecraft-ui-components

## 📦 Package Structure

The published package will include:

```
minecraft-ui-components/
├── dist/
│   ├── index.js          # CommonJS bundle
│   ├── index.esm.js      # ESM bundle
│   ├── styles.css        # All component styles
│   └── *.map            # Source maps
├── README.md             # Documentation
└── package.json          # Package metadata
```

## 🎯 Usage in Other Projects

After publishing, users can install and use your components:

```bash
npm install minecraft-ui-components
```

```jsx
import React from 'react';
import { Button, Container } from 'minecraft-ui-components';
import 'minecraft-ui-components/styles';

function App() {
  return (
    <Container className="large">
      <Button label="Click me!" onClick={() => alert('Hello!')} />
    </Container>
  );
}
```

## 🔄 Updating the Package

To update the package:

1. Make your changes to components
2. Update version in `package.json`
3. Run `npm run build:lib`
4. Run `npm publish`

## 📝 Version Management

Use semantic versioning:
- `patch` (1.0.1): Bug fixes
- `minor` (1.1.0): New features, backward compatible
- `major` (2.0.0): Breaking changes

You can use `npm version` to update:
```bash
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0
```

## 🛠️ Troubleshooting

### Common Issues:

1. **"Package name already exists"**
   - Choose a different package name in `package.json`

2. **"Not logged in"**
   - Run `npm login` first

3. **"Build errors"**
   - Check that all dependencies are installed
   - Verify that all components export correctly

4. **"CSS not loading"**
   - Make sure users import `'minecraft-ui-components/styles'`

## 📞 Support

If you encounter issues:
1. Check the npm documentation
2. Verify your npm account permissions
3. Test locally before publishing
4. Check the build output in `dist/` folder 