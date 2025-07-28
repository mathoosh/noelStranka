# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website for "Polish Patrol", a mobile car detailing business. The site is a single-page application with modern styling and interactive elements.

## Development Commands

Since this is a static HTML site, there are no build tools or package managers configured. Development can be done by:

- Opening `index.html` directly in a browser for testing
- Using a local HTTP server for development (e.g., `python -m http.server` or VS Code Live Server extension)
- No build, test, or lint commands are available

## Architecture & Structure

### File Organization
```
├── index.html              # Main HTML file - single page with all sections
├── css/
│   ├── style.css          # Main styles with CSS custom properties
│   └── responsive.css     # Media queries for tablet/mobile
├── js/
│   └── main.js           # Vanilla JavaScript for interactions
├── images/               # Asset folders organized by section
│   ├── hero/
│   ├── services/
│   ├── gallery/
│   ├── process/
│   ├── testimonials/
│   ├── about/
│   └── icons/
└── fonts/               # Font assets (currently empty)
```

### Technology Stack
- **HTML5**: Semantic markup with proper sectioning
- **CSS3**: Modern CSS with custom properties (CSS variables), flexbox, and grid
- **Vanilla JavaScript**: No frameworks - uses modern DOM APIs and Intersection Observer
- **Web Fonts**: Inter font family loaded from Google Fonts

### Key CSS Architecture
- Uses CSS custom properties for consistent theming (colors, typography, spacing)
- Component-based styling with BEM-like class naming
- Responsive design using CSS Grid and Flexbox
- Mobile-first approach with breakpoints in `responsive.css`

### JavaScript Features
- Smooth scrolling navigation
- Active navigation highlighting based on scroll position
- Navbar background changes on scroll
- Intersection Observer for scroll animations
- Placeholder functionality for booking and social links

### Content Sections
1. **Hero**: Main landing with call-to-action
2. **Services**: Three service tiers with pricing
3. **Gallery**: Before/after image comparisons
4. **Process**: 4-step service explanation
5. **Testimonials**: Customer reviews
6. **About**: Business owner information
7. **Contact**: Contact info and booking section

### Image Placeholders
Most images are placeholder references - actual images need to be added to respective folders. See `images/README.md` for specific requirements and recommended sizes.

## Development Notes

- All interactive elements currently use placeholder functionality (alerts)
- Booking system and social media links are not yet implemented
- The site is fully responsive and uses modern CSS features
- No external dependencies beyond Google Fonts