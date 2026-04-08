# Module 3: Dark Mode + Vanilla JS + About + Newsletter + Footer

## Overview

In this final module you will complete the VadonSzava page by adding the About section, Newsletter form, and Footer — and then make the entire site switch between light and dark mode with a single button click. The dark mode toggle is powered by a handful of lines of vanilla JavaScript and persists across page reloads using `localStorage`.

By the end of the module the site is feature-complete, fully responsive, and production-ready. You will run `npm run build` and have a static `dist/` folder ready to deploy.

---

## Key Concepts

### Tailwind v4 Dark Mode: `@custom-variant`

In Tailwind v4 there is no `darkMode: 'class'` config option — configuration is done in CSS. You declare a custom variant in `src/style.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

This tells Tailwind: "the `dark:` prefix applies when the element — or any of its ancestors — has the `.dark` class." After this line, every Tailwind utility can be prefixed with `dark:`:

```html
<p class="text-gray-700 dark:text-gray-200">...</p>
```

### Why semantic tokens make dark mode easy

Remember the semantic tokens from Module 1? This is where they pay off. Because `--color-bg`, `--color-heading`, etc. are CSS custom properties, you can swap their values just by adding a `.dark` class to `<html>`:

```css
.dark {
  --color-bg:      black;
  --color-heading: var(--color-tura-brown-200);
  /* ... */
}
```

Every element using `bg-bg` or `text-heading` automatically updates — no per-element changes needed. You only need explicit `dark:` variants for elements using **hardcoded** color classes (like `text-gray-600` or `bg-red-100`).

### The IIFE pattern for flash prevention

If you read `localStorage` in a regular script, there's a brief flash of the wrong theme on page load because the browser renders the page before JavaScript runs. The fix is an **Immediately Invoked Function Expression (IIFE)** — a function that runs the moment the browser parses it:

```js
(function () {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();
```

Because `<script type="module">` is deferred by default, the correct approach is to set the initial theme class inside the IIFE synchronously when the JS module loads — before any paint occurs.

### `prefers-color-scheme` as fallback

If the user has never clicked the toggle (no saved preference), the site respects the OS-level dark mode setting via `window.matchMedia('(prefers-color-scheme: dark)')`. This is the industry standard: honour the system setting first, then remember the user's explicit choice.

---

## What You'll Learn

- `@custom-variant dark` — Tailwind v4's CSS-based dark mode declaration
- Adding `.dark {}` token overrides to `style.css`
- Adding `dark:` variants to elements with hardcoded colors
- Seeing the semantic token payoff: most of the site switches automatically
- Using the browser DevTools to manually toggle dark mode during development
- `document.documentElement.classList.toggle('dark')` for JS-driven switching
- `localStorage.setItem / getItem` for persisting user preference
- `window.matchMedia('(prefers-color-scheme: dark)')` as system preference fallback
- Building a 2-column responsive About layout
- Styling a presentational newsletter form
- Building a footer with social links and a theme toggle button
- `npm run build` + `npm run preview` for production verification
- Deploying a static Vite build to Netlify (drag-and-drop)

---

## Why This Matters

Dark mode is expected in modern web applications. This module teaches the full implementation chain: CSS declaration → token override → JS persistence → system preference fallback. Students leave knowing how to add dark mode to any Tailwind v4 project.

The semantic token approach demonstrated here is directly applicable to design system work — tokens are the foundation of every major component library.

---

## PRD Connection

This module implements:
- **§4.3 Dark Mode** — `@custom-variant`, class toggle, `localStorage`
- **§5.6 About** — 2-column grid, author photo, bio, mailto CTA
- **§5.8 Newsletter** — Presentational email form
- **§5.9 Footer** — Brand, social links, `#themeBtn` dark mode toggle
- **§7 JavaScript** — IIFE theme restore, click-toggle handler

---

## Prerequisites

- Module 2 completed (all four content sections built)
- `public/img/profilkep.png` copied from course resources
- `public/img/icons/light-svgrepo-com.svg` and `dark-svgrepo-com.svg` copied from course resources

---

## Time Estimate

⏱️ **4–5 hours**

---

## Module Structure

1. **Task 1** — Copy remaining images (profile photo + icon SVGs)
2. **Task 2** — About section
3. **Task 3** — Newsletter section
4. **Task 4** — Footer with `#themeBtn`
5. **Task 5** — Dark mode CSS (style.css + dark: variants in HTML)
6. **Task 6** — Dark mode JavaScript (main.js)
7. **Task 7** — Responsive audit + production build
8. **Task 8** — Git workflow

---

## Expected Result

A complete, production-ready single-page site with:
- All sections from Modules 1–2 plus About, Newsletter, and Footer
- Clicking the footer button switches the entire page between light and dark mode
- The theme preference is remembered across page reloads
- The OS dark mode setting is respected on first visit
- All sections look correct at 375px, 768px, and 1280px viewport widths
- A clean `dist/` folder produced by `npm run build`
