# Looma

Create professional product demos and mockups in seconds, directly in your browser. Record your screen or upload a video, add smooth zooms, device mockups, 3D effects, and custom backgrounds - export a cinematic demo in 4K quality.

Built by [Samin Yeasar](https://solez.vercel.app) ([Solez-ai](https://github.com/Solez-ai))

## Features

### Video Input
- Screen recording - Capture your screen directly in the browser with no installation required
- Upload your video - MP4, WebM, QuickTime, and MKV support
- Drag and drop - Fast file upload

### Mockup Creation
- Mockups applied to images
- 3D transformations
- Image masking for advanced cutouts
- Scale, rotation, perspective, and position adjustments

### Visual Customization

**Backgrounds**
- 100+ pre-designed backgrounds
- Custom images or Unsplash/Pexels/Pixabay integration
- Solid colors and gradients
- Blur effect (0-100%)

**Effects**
- Dynamic padding
- Rounded corners
- Shadows
- Video rotation and positioning

### Canvas and Elements
- Shapes - Rectangles, circles, triangles
- Text - Custom fonts, colors, and sizes
- SVG - Import vector graphics
- Images - PNG, JPG, WebP overlays
- Layers - Depth control above or below the video

### Device Mockups
Wrap your demo with professional device frames:
- Safari (macOS)
- Chrome
- Arc
- Samsung
- iPhone 13 Pro, 15 Pro, 17 Pro
- macOS Laptop
- iPad Mini

### Zoom Effects
- Zoom in/out at specific timeline moments
- Speed and easing control
- 3D Camera Movement - Tilt and dynamic rotation based on points of interest
- Adjustable Perspective - Full control over X and Y axes for depth simulation

### Audio
- Multi-track support
- Per-track and master volume control
- Auto-trim based on video duration
- Toggle original video audio

### Export

**Quality**
- 4K (3840x2160) at 30fps
- 2K (2560x1440) at 30fps
- 1080p (1920x1080) at 30fps
- 720p (1280x720) at 30fps
- 480p (720x480) at 24fps

**Format**
- MP4 (H.264)
- WebM (VP9 with transparent background support)
- GIF
- PNG, WEBP, JPG, AVIF

---

## Technology

**Video Processing**
- FFmpeg.wasm - fully in-browser rendering
- Canvas API - preview
- MediaBunny - optimized video pipeline
- Three.js - 3D effects
- HTML to Image - mockup export

**Storage**
- IndexedDB - locally recorded videos
- LocalStorage - user settings

**UI/UX**
- Radix UI - accessible components
- Framer Motion - animations
- Tailwind CSS 4 - styling

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Solez-ai/looma.git
cd looma

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

The app is fully client-side. Everything runs locally in-browser — no server, no database, no external services required.

---

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE.md) file for details.

---

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Author

**Samin Yeasar**
- Portfolio: [solez.vercel.app](https://solez.vercel.app)
- GitHub: [Solez-ai](https://github.com/Solez-ai)
