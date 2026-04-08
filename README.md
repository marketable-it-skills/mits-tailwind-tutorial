# MITS Tailwind CSS v4 Tutorial

> Build a complete, responsive hiking blog from scratch using **Tailwind CSS v4** and **Vite** — no config files, just CSS.

[![Modules](https://img.shields.io/badge/Modules-3-blue)](.)
[![Difficulty](https://img.shields.io/badge/Difficulty-Beginner%20Friendly-green)](.)
[![Duration](https://img.shields.io/badge/Duration-12--14%20hours-orange)](.)
[![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8)](.)

---

## 📚 Overview

In this course you will build **VadonSzava Túrablog** — a polished, single-page Hungarian hiking blog featuring a hero section, responsive card grids, an image gallery, and a fully working dark mode toggle. Every pixel is styled with Tailwind CSS utility classes; there is no custom CSS file beyond the design token setup.

The course follows a **visual-first, build-from-day-one** approach. You write your first Tailwind class in the first 15 minutes and see a styled result in the browser before any theory is introduced. Each module adds exactly one new layer of complexity — utility classes → grid layouts → JavaScript + dark mode.

### What You'll Build

A complete static single-page website with:
- Fixed responsive navigation with mobile hamburger
- Full-viewport hero with background image and glassmorphism CTA buttons
- Benefits grid, hiking route cards with hover zoom, equipment section
- Photo gallery with sepia-to-color hover transitions
- Dark mode toggle persisted via `localStorage`
- Production build deployable to Netlify, Vercel, or GitHub Pages

### Who This Course Is For

- Frontend beginners who know basic HTML but have never used a CSS framework
- Developers who know CSS and want to move to utility-first styling
- IT educators looking for a realistic, engaging Tailwind v4 teaching project

---

## 🎯 What You'll Learn

By completing this course, you'll be able to:

- ✅ Configure Tailwind CSS v4 using CSS — no `tailwind.config.js`
- ✅ Define custom design tokens with `@theme {}` and semantic color tokens
- ✅ Build responsive layouts with Tailwind's grid and flexbox utilities
- ✅ Apply interactive states: `hover:`, `group-hover:`, and CSS transitions
- ✅ Implement dark mode using `@custom-variant` and vanilla JavaScript
- ✅ Persist user preferences with `localStorage` and `prefers-color-scheme`
- ✅ Run and understand Vite's development server and production build
- ✅ Use Git feature branches and push a project to GitHub

---

## 📋 Prerequisites

**Required:**
- Node.js 18 or newer (`node -v` to check)
- Basic HTML knowledge (tags, attributes, anchor links)
- A code editor (VS Code recommended)

**Recommended:**
- Familiarity with CSS properties (color, padding, font-size)
- A GitHub account (for the Git workflow tasks)

**No prior Tailwind or Vite experience needed.**

---

## 📖 Course Structure

### Module 1: Project Setup + First Tailwind Classes + Nav + Hero

⏱️ **Time:** 3–4 hours

Set up a Vite project, write your first utility classes, run the production build, and finish with a styled navigation bar and full-viewport hero section.

**What you'll learn:**
- Vite project setup + `@tailwindcss/vite` integration
- Utility classes on HTML elements
- `npm run dev` (HMR) vs `npm run build` (production)
- Custom color and font tokens with `@theme {}`
- Fixed nav, responsive layout, hero with image overlay

**Deliverable:** Live Vite dev server showing a styled nav and hero. A clean `dist/` build. Project on GitHub.

---

### Module 2: Content Sections + Grid Layouts + Hover Effects

⏱️ **Time:** 4–5 hours

Build four content sections: Benefits grid, Hiking Routes, Equipment, and Gallery. Focus is on Tailwind's responsive grid system and interactive utility states.

**What you'll learn:**
- Responsive column grids (`grid-cols-1 md:grid-cols-3 lg:grid-cols-5`)
- `group` + `group-hover:` for parent-triggered child transitions
- `scale-105` hover zoom with `overflow-hidden`
- CSS Grid spanning cells (`row-span-2`)
- Sepia-to-color hover filter transition on gallery images

**Deliverable:** A scrollable page with four fully styled sections and working hover effects.

---

### Module 3: Dark Mode + JS + About + Newsletter + Footer

⏱️ **Time:** 4–5 hours

Complete the remaining sections, implement the JavaScript dark mode toggle, and ship a production-ready build.

**What you'll learn:**
- Tailwind v4 dark mode via `@custom-variant dark (...)`
- Semantic token payoff: dark mode by changing one CSS class on `<html>`
- Vanilla JS: `classList.toggle`, `localStorage`, `prefers-color-scheme`
- 2-column responsive About layout
- Presentational newsletter form
- Responsive audit at 375 / 768 / 1280px
- Vite build + static deployment

**Deliverable:** Complete, fully functional site with working dark mode. Deployed to a static host.

---

## 🚀 Getting Started

### Option 1: Follow the modules sequentially

1. Open [Module 1 overview](module-1/overview.md) and read the introduction
2. Work through [Module 1 workshop](module-1/workshop.md) step by step
3. Compare your result against [Module 1 solution](module-1/solution/)
4. Repeat for Modules 2 and 3

### Option 2: Jump to a solution

Each module's `solution/` folder is the complete working code at that point in the course. Run any solution with:

```bash
cd module-1/solution
npm install
npm run dev
```

---

## 📂 Modules

| Module | Title | Time | Key Topics |
|--------|-------|------|-----------|
| [1](module-1/) | Project Setup + First Classes + Nav + Hero | 3–4h | Vite, `@theme {}`, utility classes, build process |
| [2](module-2/) | Content Sections + Grid + Hover Effects | 4–5h | Responsive grid, `group-hover:`, gallery |
| [3](module-3/) | Dark Mode + JS + Remaining Sections | 4–5h | `@custom-variant`, `localStorage`, deployment |

---

## 🛠️ Technologies & Concepts

### Core Technologies

- **Vite 8** — lightning-fast dev server and production bundler
- **Tailwind CSS v4** — utility-first CSS framework with CSS-only configuration
- **`@tailwindcss/vite`** — Vite plugin replacing the old PostCSS setup
- **Vanilla JavaScript (ES Modules)** — minimal JS for the dark mode toggle

### Key Concepts

- `@theme {}` — CSS-first Tailwind v4 configuration
- Semantic design tokens — colors with meaning (`--color-heading`, `--color-bg-tinted`)
- `@theme inline {}` — mapping runtime CSS variables to Tailwind utilities
- `@custom-variant dark` — Tailwind v4's class-based dark mode
- `group` / `group-hover:` — parent-triggered child transitions
- Responsive modifiers — `sm:`, `md:`, `lg:` prefixes

### Professional Practices

- Git feature branch workflow (`feat/module-N-workshop`)
- Commit messages that describe intent
- Production build verification before deployment
- `localStorage` + `prefers-color-scheme` for accessible dark mode

---

## 📁 Project Structure

```
courses/mits-tailwind-tutorial/
├── module-1/
│   ├── overview.md       # Concepts and learning objectives
│   ├── workshop.md       # Step-by-step hands-on tasks
│   └── solution/         # Complete working code
│       ├── index.html
│       ├── vite.config.js
│       ├── package.json
│       └── src/
│           ├── style.css
│           └── main.js
├── module-2/             # Coming soon
├── module-3/             # Coming soon
└── README.md             # This file
```

---

## 🤝 Contributing

Found an issue or have a suggestion? Open an issue or submit a pull request on the [MITS repository](https://github.com/marketable-it-skills).

## 📄 License

This course is part of the [Marketable IT Skills (MITS)](https://github.com/marketable-it-skills) initiative.
