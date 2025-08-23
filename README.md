# FocusFinance - Next.js Static Site

A production-ready static website for FocusFinance built with Next.js, React, and Tailwind CSS.

## Project Structure

```
├── pages/
│   ├── _app.js          # App wrapper
│   ├── index.js         # Home page (/)
│   ├── about.js         # About page (/about)
│   └── branches.js      # Interactive Globe (/branches)
├── components/
│   ├── Layout.js        # Navigation wrapper
│   └── GlobeComponent.js # 3D Interactive Globe
├── styles/
│   └── globals.css      # Global styles and design system
├── public/
│   └── _redirects       # Netlify routing configuration
└── package.json
```

## Development

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Building for Production
```bash
# Build and export static files
npm run build-export

# Or run separately:
npm run build
npm run export
```

The static files will be generated in the `/out` directory.

## Deployment on Netlify

### Method 1: Git Integration (Recommended)
1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Netlify
3. Set build command: `npm run build-export`
4. Set publish directory: `out`
5. Deploy!

### Method 2: Drag & Drop
1. Run `npm run build-export` locally
2. Drag and drop the `/out` folder to Netlify's deploy area
3. Confirm that `_redirects` file exists in the deployed site root

### Testing Deployment
- Verify all routes work: `/`, `/about`, `/branches`
- Test page refresh (should not show 404 errors)
- Check that the interactive globe loads on `/branches`
- Ensure navigation between pages works correctly

## Globe Customization

The interactive globe is located in `components/GlobeComponent.js`. To customize:

- **Colors**: Modify the `meshStandardMaterial` color prop
- **Camera**: Adjust the `camera` prop in the Canvas component
- **Rotation**: Change `autoRotateSpeed` in OrbitControls
- **Zoom limits**: Modify `minDistance` and `maxDistance`
- **Sizing**: The globe automatically fills the viewport (100vw x 100vh)

## Design System

The design system uses CSS custom properties defined in `styles/globals.css`:
- Colors are defined as HSL values
- Gradients and shadows use semantic tokens
- All components use the centralized design system

## Features

- ✅ Static site generation with Next.js
- ✅ Responsive design with Tailwind CSS
- ✅ Interactive 3D globe with Three.js
- ✅ Team member photo drag-and-drop
- ✅ Contact forms linked to Google Forms
- ✅ Netlify-ready deployment configuration
- ✅ SEO-friendly routing and meta tags

## Browser Support

- Modern browsers with ES6+ support
- WebGL support required for 3D globe functionality

## Performance

- Static files for optimal loading speed
- Code splitting with dynamic imports
- Optimized CSS with Tailwind purge
- Three.js loaded only on globe page
