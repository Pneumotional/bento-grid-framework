# Bento Grid Framework

A modern, customizable CSS framework for creating beautiful bento-style grid layouts. Build responsive, visually appealing content grids with minimal effort.

![Bento Grid](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)

## 🌟 Features

- **5+ Pre-built Layouts**: Pinterest, Header Banner, Balanced, Asymmetrical, and more
- **Responsive Design**: Works on all devices from mobile to desktop
- **Interactive Components**: Carousels, cards, and hover effects
- **Customizable**: Easy theming with CSS variables
- **Lightweight**: Minimal footprint with pure CSS/JS
- **Accessible**: Built with accessibility in mind

## 🚀 Quick Start

### CDN Installation

```html
<!-- CSS -->
<link rel="stylesheet" href="https://bento-grid-framework.intellectualbright.workers.dev/assets/css/bento-grid.css">
<script src="https://bento-grid-framework.intellectualbright.workers.dev/assets/js/bento-grid.js"></script>

<!-- Or (Minified) -->
<link rel="stylesheet" href="https://bento-grid-framework.intellectualbright.workers.dev/minified/bento-grid-minified.css">
<script src="https://bento-grid-framework.intellectualbright.workers.dev/minified/bento-grid-minified.js"></script>
```


### Manual Download

[Download bento-grid.css](https://bento-grid-framework.intellectualbright.workers.dev/assets/css/bento-grid.css) | 
[Download bento-grid.js](https://bento-grid-framework.intellectualbright.workers.dev/assets/js/bento-grid.js)

## 📦 Basic Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Bento Grid</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="bento-grid.css">
</head>
<body class="bento-body">
    <div class="bento-container">
        <h1 class="bento-title">My Bento Grid</h1>
        <div class="bento-grid">
            <!-- Your content here -->
            <div class="bento-item">
                <span class="article-tag">Technology</span>
                <h3>Mastering CSS Grid</h3>
                <p>Learn advanced layout techniques for beautiful web designs.</p>
                <span class="read-time">5 min read</span>
            </div>
            
            <div class="bento-item featured">
                <!-- Featured content with carousel -->
                <div class="carousel-container">
                    <!-- Carousel slides -->
                </div>
            </div>
        </div>
    </div>
    
    <script src="bento-grid.js"></script>
</body>
</html>
```

## 🎨 Layout Styles

### 1. Pinterest Style Layout
Creates a masonry-style layout with varying card heights.

```html
<div class="bento-grid layout-pinterest">
    <div class="bento-item">Regular Item</div>
    <div class="bento-item tall">Tall Item (2 rows)</div>
    <div class="bento-item wide">Wide Item (2 columns)</div>
    <div class="bento-item featured">Featured (1 column × 2 rows)</div>
</div>
```

**Classes:**
- `.layout-pinterest` - Applies Pinterest-style masonry grid
- `.tall` - Item spans 2 rows
- `.wide` - Item spans 2 columns

### 2. Header Banner Layout
Features a large top banner with smaller cards below.

```html
<div class="bento-grid layout-header-banner">
    <div class="bento-item banner-item">Banner (Full Width)</div>
    <div class="bento-item content-1">Content 1</div>
    <div class="bento-item content-2">Content 2</div>
    <div class="bento-item content-3">Content 3</div>
    <div class="bento-item content-4">Content 4</div>
    <div class="bento-item content-5">Content 5</div>
    <div class="bento-item content-6">Content 6</div>
</div>
```

**Grid Areas:** `banner-item`, `content-1` through `content-6`

### 3. Balanced Grid Layout
Symmetrical layout with balanced spacing.

```html
<div class="bento-grid layout-balanced">
    <div class="bento-item large-item">Large (2×2)</div>
    <div class="bento-item medium-1">Medium 1</div>
    <div class="bento-item medium-2">Medium 2</div>
    <div class="bento-item small-1">Small 1</div>
    <div class="bento-item small-2">Small 2</div>
    <div class="bento-item medium-3">Medium 3</div>
    <div class="bento-item medium-4">Medium 4</div>
    <div class="bento-item small-3">Small 3</div>
    <div class="bento-item small-4">Small 4</div>
</div>
```

**Grid Areas:** `large-item`, `medium-1` to `medium-4`, `small-1` to `small-4`

### 4. Asymmetrical Layout
Dynamic layout with varied card sizes.

```html
<div class="bento-grid layout-asymmetrical">
    <div class="bento-item main-item">Main (3×2)</div>
    <div class="bento-item side-1">Side 1</div>
    <div class="bento-item side-2">Side 2</div>
    <div class="bento-item content-1">Content 1</div>
    <div class="bento-item content-2">Content 2</div>
    <div class="bento-item small-1">Small 1</div>
    <div class="bento-item small-2">Small 2</div>
    <div class="bento-item small-3">Small 3</div>
    <div class="bento-item small-4">Small 4</div>
    <div class="bento-item small-5">Small 5</div>
</div>
```

**Grid Areas:** `main-item`, `side-1`, `side-2`, `content-1`, `content-2`, `small-1` to `small-5`

## ⚙️ Custom Grid System

### Size Modifiers
Control item size without predefined layouts:

```html
<div class="bento-grid">
    <div class="bento-item span-2 row-2">2 columns × 2 rows</div>
    <div class="bento-item span-3">3 columns wide</div>
    <div class="bento-item row-3">3 rows tall</div>
    <div class="bento-item">Regular (1×1)</div>
</div>
```

**Classes:**
- `.span-2` - Spans 2 columns
- `.span-3` - Spans 3 columns
- `.row-2` - Spans 2 rows
- `.row-3` - Spans 3 rows

### Featured Items
Highlight important content:

```html
<div class="bento-item featured">
    <!-- Featured content goes here -->
</div>
```

## 🎯 Components

### Cards
Basic content containers:

```html
<div class="bento-item">
    <span class="article-tag">Category</span>
    <h3>Card Title</h3>
    <p>Card description text goes here...</p>
    <span class="read-time">X min read</span>
</div>
```

### Carousels
Interactive slideshows for featured content:

```html
<div class="bento-item featured">
    <div class="carousel-container">
        <div class="carousel-slide active">
            <img src="image1.jpg" alt="Slide 1" class="carousel-image">
            <div class="carousel-content">
                <h2>Slide Title 1</h2>
                <p>Slide description 1</p>
            </div>
        </div>
        
        <div class="carousel-slide">
            <img src="image2.jpg" alt="Slide 2" class="carousel-image">
            <div class="carousel-content">
                <h2>Slide Title 2</h2>
                <p>Slide description 2</p>
            </div>
        </div>
        
        <div class="carousel-dots">
            <div class="dot active"></div>
            <div class="dot"></div>
        </div>
    </div>
</div>
```

**Features:**
- Auto-advances every 5 seconds
- Pauses on hover
- Dot navigation
- Manual control via dot clicks

## 🎨 Customization

### CSS Variables
Override default theme colors:

```css
:root {
    --bento-bg-primary: #0a0a0a;
    --bento-bg-secondary: #1a1a1a;
    --bento-bg-tertiary: #2a2a2a;
    --bento-text-primary: #ffffff;
    --bento-text-secondary: #e0e0e0;
    --bento-text-tertiary: #888;
    --bento-accent: #3a3a3a;
    --bento-border: #2a2a2a;
    --bento-radius: 10px;
    --bento-transition: all 0.3s ease;
}
```

### Utility Classes

```css
/* Container utilities */
.bento-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

.bento-title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 40px;
    color: var(--bento-text-primary);
}

/* Skeleton loading */
.bento-item.skeleton {
    background: linear-gradient(90deg, 
        var(--bento-bg-secondary) 0%, 
        var(--bento-bg-tertiary) 50%, 
        var(--bento-bg-secondary) 100%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

/* Accessibility */
.bento-item:focus {
    outline: 2px solid var(--bento-accent);
    outline-offset: 2px;
}
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: ≤ 768px (single column)
- **Tablet**: 769px - 1200px (2-3 columns)
- **Desktop**: ≥ 1201px (full layout)

### Mobile Optimization
All layouts automatically convert to single column on mobile devices.

## 🔧 JavaScript API

### Initialization

```javascript
// Automatically initialized on DOMContentLoaded
// Access via window.bentoGrid
```

### Manual Control

```javascript
// Create new grid instance
const bento = new BentoGrid();

// Create grid dynamically
bento.createGrid('my-container', {
    columns: 'auto-fit',
    minWidth: '300px',
    gap: '20px',
    autoRows: '280px',
    layout: 'layout-pinterest'
});

// Add items to grid
bento.addGridItem('my-container', `
    <div class="bento-item">
        <span class="article-tag">Dynamic</span>
        <h3>Dynamic Content</h3>
        <p>Added via JavaScript API</p>
    </div>
`);

// Set item size
const item = document.querySelector('.bento-item');
bento.setItemSize(item, 2, 2); // 2 columns × 2 rows

// Cleanup
bento.destroy();
```

### Events

```javascript
// Listen for item clicks
document.addEventListener('bento-item-click', (e) => {
    console.log('Item clicked:', e.detail.item);
});
```

## 🎯 Best Practices

### 1. Content Structure
```html
<!-- Good -->
<div class="bento-item">
    <span class="article-tag">Tag</span>
    <h3>Concise Title</h3>
    <p>Short description with clear value proposition.</p>
    <span class="read-time">3 min read</span>
</div>

<!-- Avoid -->
<div class="bento-item">
    <h3>Very Long Title That Might Overflow The Container And Look Bad On Mobile Devices</h3>
    <p>Extremely long description that will be truncated anyway...</p>
</div>
```

### 2. Image Optimization
- Use `object-fit: cover` for consistent aspect ratios
- Compress images for faster loading
- Provide descriptive alt text

### 3. Performance
- Lazy load images
- Use skeleton loading states
- Minimize JavaScript usage when possible

## 🚨 Browser Support

- Chrome 58+
- Firefox 52+
- Safari 10.1+
- Edge 16+
- iOS Safari 10.3+
- Android Chrome 91+

## 📄 License

MIT License © 2025 Bright Obeng Abankwa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

## 📞 Support

- **Documentation**: [View Full Docs](https://bento-grid-framework.intellectualbright.workers.dev/custom-layout-doc)
- **Examples**:
-[Pinterest Style](https://bento-grid-framework.intellectualbright.workers.dev/pinterest-layout-bento)
-[Header banner Style](https://bento-grid-framework.intellectualbright.workers.dev/header-banner)
-[Assymetrical Style](https://bento-grid-framework.intellectualbright.workers.dev/assymetrical-bento)
-[Balanced Style](https://bento-grid-framework.intellectualbright.workers.dev/balanced-grid-bento)
- **GitHub**: [Report Issues](https://github.com/yourusername/bento-grid/issues)
- **Email**: support@intellectualbright.com

## 🌟 Contributing

We welcome contributions!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📊 Changelog

### v1.0.0
- Initial release
- 5 pre-built layouts
- Responsive design
- Carousel component
- JavaScript API
- CSS variables for theming

---

**Built with ❤️ by Bright Obeng Abankwa**
