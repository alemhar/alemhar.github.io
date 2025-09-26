# Personal Website (Bootstrap + Alpine.js)

A single-page portfolio for a Senior Software Developer. Built with plain HTML, Bootstrap 5 (CDN), and Alpine.js (CDN). Includes a dark mode toggle and ScrollSpy navigation.

## Tech Stack
- Bootstrap 5 (CSS + JS via CDN)
- Alpine.js (via CDN)
- Plain HTML/CSS/JS (no build step)

## Structure
```
src/
  index.html
  css/
    main.css
  js/
    main.js
  assets/
    images/
      headshot.jpg
    pdf/
      resume.pdf
  public/
    favicon.ico (optional)
```

## Run Locally
- Option 1: Open `index.html` directly in your browser.
- Option 2: Serve statically with any lightweight server (recommended):
  - VS Code: use the Live Server extension and open `index.html`.
  - Node: `npx serve .` from the `src/` directory.

## Customize
- Update your name, email, and profile links in `index.html`:
  - Navbar brand text
  - Contact section email and social links
  - Footer copyright name
- Theme color: adjust CSS variables in `css/main.css`.
- Content sections to edit: About, Skills, Projects, Experience, Contact.

## Deploy (GitHub Pages)
1. Create a new GitHub repository and push this `src/` folder contents as the repo root, or place them in a `/docs` folder inside the repo.
2. In GitHub, go to Settings → Pages:
   - Source: `main` branch.
   - If using repo root: `/ (root)`.
   - If using `/docs`: set folder to `/docs`.
3. Save. Your site will be available at `https://<username>.github.io/<repo>/`.

Tip: If your repo uses `/docs`, move the files from `src/` into `docs/` (keeping the same structure) before pushing.

## Credits
- Bootstrap: https://getbootstrap.com/
- Alpine.js: https://alpinejs.dev/
