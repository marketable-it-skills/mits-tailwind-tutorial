# Module 1: Project Setup + First Tailwind Classes + Nav + Hero

## Overview

In this module you will set up a real Vite project, write your first Tailwind CSS utility classes, run the production build, and finish with a fully styled navigation bar and hero section. By the end you will have a live page that already looks like a professional hiking blog.

The emphasis is on **speed to first result**: you will see styled output in the browser within the first 15 minutes, before any advanced concepts are introduced.

---

## What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework**. Instead of writing custom CSS rules, you compose styles by adding small, single-purpose classes directly to your HTML elements.

**Traditional CSS:**

```css
.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #15803d;
  padding: 2rem;
}
```

```html
<h1 class="hero-title">VadonSzava</h1>
```

**Tailwind CSS:**

```html
<h1 class="text-4xl font-bold text-green-700 p-8">VadonSzava</h1>
```

No CSS file needed — the classes are the styles. Tailwind generates only the CSS you actually use, so the final output is tiny.

### Tailwind v4: CSS-first configuration

Tailwind v4 removes the JavaScript config file. Everything — including custom colors, fonts, and design tokens — is configured inside your CSS file using `@theme {}`. You will learn this new approach in Task 3.

---

## What You'll Learn

- Creating a Vite project and integrating `@tailwindcss/vite`
- Writing utility classes on HTML elements (`text-4xl`, `font-bold`, `bg-green-700`, `p-8`, …)
- Starting the dev server with Hot Module Replacement (HMR)
- Running a production build and understanding the `dist/` output
- Defining custom design tokens with `@theme {}` in CSS
- Using semantic color tokens that prepare the project for dark mode (Module 3)
- Building a fixed, responsive navigation bar
- Building a full-viewport hero section with a background image and overlay

---

## Why This Matters

Tailwind is one of the most widely used CSS frameworks in professional frontend development. Its utility-first approach eliminates the common problem of growing, unmaintainable CSS files. Learning Tailwind v4 — the latest version with its CSS-first config — puts you ahead of most tutorials still teaching older patterns.

Starting with immediate visual feedback (Task 2 below) builds the mental model: *class name → visual result*. Only after you have experienced that directly does the design token system (Task 3) become a natural answer to a real problem you encounter.

---

## PRD Connection

This module implements:
- **§3 Tech Stack** — Vite 8 + Tailwind CSS v4.2 + `@tailwindcss/vite` plugin
- **§4 Design System** — Custom color palette (`tura-green-*`, `tura-brown-*`) and font tokens
- **§5.1 Navigation** — Fixed nav with logo, anchor links, and hamburger button
- **§5.2 Hero** — Full-viewport section with background image, overlay, headline, and two CTA buttons

---

## Prerequisites

- Node.js 18 or newer installed (`node -v` to check)
- A code editor (VS Code recommended)
- Basic HTML knowledge (tags, attributes, links)
- No prior Tailwind or Vite experience needed

---

## Time Estimate

⏱️ **3–4 hours**

---

## Module Structure

1. **Task 1** — Scaffold the Vite project and connect Tailwind
2. **Task 2** — Write first utility classes and explore the build process
3. **Task 3** — Introduce the design token system with `@theme {}`
4. **Task 4** — Build the navigation bar
5. **Task 5** — Build the hero section
6. **Task 6** — Git workflow

---

## Expected Result

By the end of this module you will have:

- A running Vite dev server at `http://localhost:5173`
- A fixed navigation bar with the VadonSzava mountain logo, anchor links, and a mobile hamburger button
- A full-viewport hero section with a mountain background photo, dark overlay, a large headline, and two CTA buttons
- A custom design system defined in CSS (`@theme {}`) that will power the entire site for the rest of the course
- A clean `dist/` production build
- The project pushed to GitHub on the `main` branch
