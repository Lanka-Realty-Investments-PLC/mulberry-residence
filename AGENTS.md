# AGENTS.md - Mulberry Residence Website

## Project Overview

This is a traditional website for Mulberry Residence, a housing/apartment project in Colombo, Sri Lanka. The site is built with vanilla HTML, CSS, JavaScript (with jQuery), and PHP.

**Technology Stack:**
- HTML5 / XHTML
- CSS3 (with Bootstrap 4 framework)
- JavaScript (ES5/ES6 with jQuery 3.5.1)
- PHP 7+ (for form handling and dynamic content)

**Directory Structure:**
```
/home/madushan/Developer/mulberry-residence/
├── index.html              # Main homepage
├── *.html                  # Static pages
├── *.php                   # Dynamic pages (contact.php, etc.)
├── css/                    # Stylesheets
│   ├── style.css           # Main styles (5,000+ lines)
│   ├── custom.css          # Custom overrides
│   ├── fonts.css           # Font definitions
│   └── *.min.css           # Minified versions
├── js/                     # JavaScript files
│   ├── main.js             # Core functionality
│   ├── home.js             # Homepage-specific
│   └── *.min.js            # Minified libraries
├── lib/                    # Third-party libraries
│   ├── bootstrap/          # Bootstrap CSS/JS
│   ├── fontawesome/        # Font Awesome icons
│   ├── fancybox/           # Lightbox gallery
│   ├── aos/                # Animate on scroll
│   └── slick/              # Carousel/slider
└── img/                    # Images and assets
```

---

## Commands

### No Build System
This project has **no npm, no bundler, and no testing framework**. All changes are made directly to source files.

### Development Workflow
1. Edit source files directly in `css/`, `js/`, and HTML/PHP files
2. No compilation step required
3. For local development, use any web server:
   ```bash
   # Python
   python -m http.server 8000
   
   # PHP
   php -S localhost:8000
   
   # Node.js (if installed)
   npx serve .
   ```

### Code Quality
- **No automated linting** - manual code review required
- **No automated testing** - test manually in browser
- **No type checking** - JavaScript is vanilla/untyped

---

## Code Style Guidelines

### HTML

**File Structure:**
- Use `<!doctype html>` and `<html lang="en">`
- Include meta tags: charset, viewport, X-UA-Compatible
- Favicon: `img/Mulberry_favicon.png`
- Scripts at bottom of `<body>`, stylesheets in `<head>`

**Do:**
```html
<!-- Comment style -->
<div class="class-name">
    <element attribute="value"></element>
</div>
```

**Don't:**
- Leave unclosed tags
- Use inline styles (except for quick prototyping)
- Mix deprecated HTML with modern HTML5

**Existing Patterns:**
- BEM-like class naming: `class-name modifier` (e.g., `line line--1`)
- Utility classes: `mobhide`, `dekstophide`, `fullwidth-row`
- Section classes: `section-content`, `section-info`
- Accessibility: `aria-hidden`, `target="_blank"` with rel="noopener"

---

### CSS

**File Organization:**
- Use CSS custom properties (variables) in `:root`
- Mobile-first media queries: `@media only screen and (max-width: 768px)`
- Desktop overrides: `@media screen and (min-width: 1367px)`

**Existing Color Variables:**
```css
:root {
    --main-color: #e4af39;      /* Gold accent */
    --white-color: #fff;
    --black-color: #000;
    --blue-color: #000e32;
    --gray-color: #4d4f50;
    --bg-dark-color: #000a25;
}
```

**Do:**
```css
/* Spacing: 4px increments */
padding: 15px;
margin-bottom: 35px;

/* BEM-style selectors */
.element__child--modifier { }

/* Flexbox for alignment */
display: flex;
justify-content: center;
align-items: center;

/* CSS transitions for animations */
transition: all 0.5s;
```

**Don't:**
- Use `!important` except for overrides
- Use `float` for layout (existing codebase uses flexbox)
- Use vendor prefixes unnecessarily (Bootstrap handles most)

**Class Naming Convention:**
- Components: `btn`, `custom-btn`, `custom-btn-2`, `custom-btn-3`
- Layout: `container`, `container-fluid`, `fullwidth-row`
- Visibility: `mobhide`, `dekstophide`
- Colors: `theme-bg`, `dark-bg`, `white-color`, `black-color`

---

### JavaScript

**Library:** jQuery 3.5.1 is available globally as `$` and `jQuery`

**Document Ready Pattern:**
```javascript
$(document).ready(function() {
    // Code here
});

$(window).on('load', function() {
    // Code here
});
```

**Do:**
```javascript
// Cache selectors for performance
var $element = $('.selector');

// Use event delegation for dynamic elements
$(document).on('click', '.dynamic-element', function() { });

// Chain methods
$element.addClass('active').fadeIn();

// Toggle classes for state changes
element.classList.toggle('class-name');
```

**Don't:**
- Use `var` for new code (use `const` or `let`)
- Pollute global namespace with many variables
- Use inline `onclick` handlers (use event binding)

**Existing Patterns:**
- Scroll-based navigation: `$(window).scroll(function() { })`
- Toggle classes for mobile/desktop: `toggleClass()`, `addClass()`, `removeClass()`
- Animation: `.fadeIn()`, `.fadeOut()`, `.animate()`

---

### PHP

**Usage:** Form processing and server-side logic only

**Existing Patterns:**
```php
// Sanitize input
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check request method
if ($_SERVER["REQUEST_METHOD"] == "POST") { }

// Error variables
$nameErr = $emailErr = "";

// Form validation
if (empty($_POST["name"])) {
    $nameErr = "* Name is required";
}
```

**Do:**
- Always sanitize user input with `htmlspecialchars()`
- Use prepared statements if adding database code
- Keep API keys in environment variables, not hardcoded

**Don't:**
- Commit sensitive data (API keys, credentials)
- Trust user input without validation
- Display raw error messages to users

---

## Accessibility Guidelines

- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- Add `alt` text to all images
- Use `aria-label` for icon-only buttons
- Ensure color contrast meets WCAG AA standards
- Support keyboard navigation

---

## Browser Support

Based on existing CSS:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Breakpoints: 768px (mobile), 991px, 1100px, 1266px, 1366px, 1466px, 1675px

---

## Common Tasks

### Adding a New Page
1. Copy an existing HTML file as template
2. Update page title in `<title>` tag
3. Update navigation links
4. Add page-specific CSS/JS if needed

### Modifying Styles
1. Edit `css/style.css` for global changes
2. Use `css/custom.css` for project-specific overrides
3. Avoid modifying third-party libraries in `lib/`

### Adding JavaScript
1. Add inline `<script>` at bottom of page, OR
2. Create new file in `js/` directory
3. Include script before `</body>`

### Form Changes
1. Modify HTML form in PHP/HTML file
2. Update server-side validation in `test_input()` function
3. Update API endpoint/Courier integration if needed

---

## External Dependencies

**CDN Resources (from HTML):**
- Google Fonts: Nunito, IBM Plex Sans, Montserrat
- Google Maps API
- Google Tag Manager
- Google reCAPTCHA
- Facebook Pixel

**Local Libraries (in `lib/`):**
- Bootstrap 4.x
- Font Awesome 5.x
- AOS (Animate on Scroll)
- Slick Carousel
- Fancybox

---

## Important Notes

1. **No Build Process**: Files are served directly without compilation
2. **Minified Files**: Some CSS/JS files have `.min.` versions for production
3. **Mapbox Integration**: Homepage uses Mapbox for interactive map
4. **Courier API**: Contact form sends emails via Courier API (key in contact.php)
5. **Google Analytics**: UA-198196996-1 and GTM-MRLCVXK tracking installed

---

## File Naming Conventions

- HTML pages: `kebab-case.html` (e.g., `contact-us.php` or `availability.html`)
- CSS files: `kebab-case.css`
- JavaScript files: `kebab-case.js`
- Images: `kebab-case.jpg` or `kebab-case.png`
