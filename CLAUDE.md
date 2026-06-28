# Project Instructions

Static marketing website for the Mulberry Residence housing project. Plain HTML/CSS/JS with PHP form handlers. No build step, no package manager, no test suite — files are served as-is.

## Layout

- `*.html`. Page templates (`index.html`, `availability.html`, room pages, etc.).
- `*.php`. Form handlers: `contact.php`, `inquiry.php`, `newsletter_ajax.php` (process user input + email).
- `css/`, `js/`. Site styles and scripts (`js/main.js`, `home.js`); jQuery-based.
- `lib/`. Vendored third-party libs: Bootstrap, Slick, Fancybox, AOS, FontAwesome.
- `img/`. Image assets (galleries, floor plans, masterplan).

## Workflow

- No build/compile — edit HTML/CSS/JS/PHP directly; preview in a browser or PHP server.
- Markup repeats across pages (shared header/footer inlined per file) — apply layout/contact-info changes to every affected `.html`, not just one.

## Don'ts

- Don't edit files under `lib/` — vendored libraries, replace via upstream not by hand.
- PHP form handlers take user input: always validate/sanitize and never echo raw request data.
