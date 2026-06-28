# Mulberry Residence

Marketing website for the Mulberry Residence housing project (Lanka Realty Investments PLC).

A static, multi-page site built with plain HTML, CSS, and JavaScript, with a few PHP scripts that handle form submissions. There is no build step, package manager, or test suite — files are served directly.

## Stack

- **Markup/styles/scripts** — static HTML pages, CSS, and vanilla/jQuery JavaScript.
- **Form handling** — PHP (`contact.php`, `inquiry.php`, `newsletter_ajax.php`).
- **Vendored libraries** (`lib/`) — Bootstrap, Slick, Fancybox, AOS, FontAwesome.

## Layout

| Path | Contents |
|------|----------|
| `*.html` | Page templates — `index.html`, `availability.html`, `about.html`, room pages (`deluxe`, `superior`, `platinum`, `master`, etc.), `gallery.html`, `faq.html`, `location.html`, `masterplan.html`, `progress.html` |
| `*.php` | Form handlers that process user input and send email |
| `css/` | Site styles (plus `css/fonts/`) |
| `js/` | Scripts — `main.js`, `home.js`, `home-image.js`, jQuery, Popper |
| `lib/` | Third-party libraries (Bootstrap, Slick, Fancybox, AOS, FontAwesome) |
| `img/` | Image assets — galleries, floor plans, masterplan, progress photos |

## Running locally

The static pages can be opened directly in a browser. To exercise the PHP form
handlers, serve the directory with PHP:

```bash
php -S localhost:8000
```

Then visit `http://localhost:8000/index.html`.

## Notes

- Header, footer, and contact details are inlined per page rather than shared via includes — a layout or contact-info change must be applied to every affected `.html` file.
- Files under `lib/` are vendored third-party libraries; update them from upstream rather than editing by hand.
- The PHP handlers accept user input — validate and sanitize all request data, and never echo it back raw.
