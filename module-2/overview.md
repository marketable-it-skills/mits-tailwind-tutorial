# Module 2: Content Sections + Grid Layouts + Hover Effects

## Overview

In this module you will build the four main content sections of the VadonSzava hiking blog: a Benefits grid, Hiking Route cards, an Equipment section, and a photo Gallery. The focus is entirely on **layout patterns** and **interactive states** — the two things that make Tailwind indispensable for real projects.

By the end of the module the page is fully scrollable with four visually distinct sections, hover animations on every card, and an image gallery with a sepia-to-color filter transition.

---

## Key Concepts

### Responsive Grid Layouts

Tailwind's grid utilities let you change column count at each breakpoint with a single class chain:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

Mobile → 1 column. Tablet → 2 columns. Desktop → 3 columns. No media query blocks to write.

### The `group` / `group-hover:` Pattern

Sometimes you want a *child* element to react when the *parent* is hovered. CSS alone requires a selector like `.card:hover .card-image`. Tailwind solves this with two classes:

1. Add `group` to the parent element
2. Add `group-hover:` prefix to any child's class

```html
<div class="group overflow-hidden rounded-xl">
  <img class="group-hover:scale-105 transition-transform duration-300" src="...">
</div>
```

When the user hovers anywhere on the `<div>`, the image scales up. `overflow-hidden` on the parent clips the image so it doesn't escape the card boundary.

### CSS Filter Transitions

Tailwind includes filter utilities like `sepia`, `grayscale`, and `blur`. You can transition between them with `hover:` and `transition-all`:

```html
<img class="sepia hover:sepia-0 transition-all duration-500">
```

This creates a sepia → full-color effect on hover — exactly what the gallery uses.

### Spanning Grid Cells

In a CSS Grid, a cell can span multiple rows or columns:

```html
<img class="row-span-2">          <!-- spans 2 rows -->
<img class="col-span-2">          <!-- spans 2 columns -->
<img class="row-start-1 row-end-3"> <!-- same as row-span-2, explicit positioning -->
```

This is how the gallery creates the large featured photo that occupies the height of two standard cells.

---

## What You'll Learn

- Responsive multi-column grids: `grid grid-cols-1 md:grid-cols-3`
- Card components: `rounded-2xl`, `shadow-lg`, `border`, `overflow-hidden`
- Parent-triggered hover transitions with `group` and `group-hover:`
- Image zoom: `scale-105` clipped by `overflow-hidden`
- Difficulty badge chips: `rounded-full`, `px-3 py-1`, color variants per difficulty
- Route metadata rows with emoji icons + text
- Section backgrounds: `bg-bg-tinted` vs hard-coded `bg-tura-brown-900`
- Glassmorphism cards: `bg-white/10 backdrop-blur-sm border border-white/20`
- CSS Grid row spanning: `row-start-1 row-end-3`
- Sepia-to-color image transitions: `sepia hover:sepia-0 transition-all`

---

## Why This Matters

Grid layout and hover effects account for the majority of interactive UI work in real projects. Learning these patterns on a concrete project — rather than contrived examples — builds the muscle memory to apply them anywhere. By the end of this module you will have used the grid system in three different ways (3-col, 5-col, spanning), which is more exposure than most tutorials provide.

The `group`/`group-hover:` pattern in particular is something students reach for in almost every card-based UI they build afterwards.

---

## PRD Connection

This module implements:
- **§5.3 Benefits Grid** — 3-column card grid, inline SVG icons
- **§5.4 Hiking Routes** — card grid with hover zoom, difficulty badges, metadata
- **§5.5 Equipment** — 5-column grid, backdrop-blur cards on dark background
- **§5.7 Gallery** — 3-column grid with spanning cell, sepia hover

---

## Prerequisites

- Module 1 completed (Vite project running, nav + hero built)
- Images from the course resources copied into `public/img/` (see Task 1)

---

## Time Estimate

⏱️ **4–5 hours**

---

## Module Structure

1. **Task 1** — Copy images and set up the section scaffolding
2. **Task 2** — Benefits grid (3-column cards with SVG icons)
3. **Task 3** — Hiking Routes section (cards with image hover zoom)
4. **Task 4** — Equipment section (5-column glassmorphism cards on dark bg)
5. **Task 5** — Gallery (spanning grid + sepia hover)
6. **Task 6** — Git workflow

---

## Expected Result

A fully scrollable page with the nav and hero from Module 1, followed by:

- A tinted-background **Benefits grid** with three icon cards
- A **Routes section** with three cards — each card's photo zooms on hover, and a difficulty badge (red for Nehéz, blue for Könnyű) sits above the title
- A dark **Equipment section** with five semi-transparent cards and a subtle backdrop blur
- A **Gallery** with five photos in a CSS Grid — one photo spanning two rows — all starting in sepia and revealing full color on hover
