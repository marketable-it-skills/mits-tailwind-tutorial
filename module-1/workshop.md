# Module 1 Workshop: Project Setup + First Tailwind Classes + Nav + Hero

**Goal**: By the end of this workshop you will have a running Vite project with Tailwind CSS v4, a custom design system defined in CSS, a styled navigation bar, and a full-viewport hero section.

---

## Task 1: Scaffold the Project

### Step 1.1: Create a Vite project

Open your terminal and run:

```bash
npm create vite@latest vadonszava -- --template vanilla
```

When prompted, confirm with Enter. This creates a `vadonszava/` folder with a minimal Vite setup using plain HTML + JS (no framework).

```bash
cd vadonszava
```

### Step 1.2: Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

Two packages:
- `tailwindcss` — the core framework
- `@tailwindcss/vite` — the Vite plugin that integrates Tailwind into the build pipeline (replaces the old PostCSS setup)

### Step 1.3: Configure the Vite plugin

Open `vite.config.js` and replace its contents with:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

This tells Vite to run Tailwind as part of every build and dev-server reload.

### Step 1.4: Create `src/style.css`

The Vite template may have generated a `style.css` already. Replace its entire contents with just this one line:

```css
@import "tailwindcss";
```

This is how Tailwind v4 is activated — a single CSS import, no config file needed.

### Step 1.5: Clean up `index.html`

Open `index.html`. Remove everything inside `<body>` except the script tag. Add the stylesheet link. Your file should look like this:

```html
<!doctype html>
<html lang="hu">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VadonSzava túrablog</title>
    <link rel="stylesheet" href="/src/style.css" />
  </head>
  <body>
    <h1>VadonSzava</h1>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

Also open `src/main.js` and remove everything except the style import:

```js
import './style.css'
```

### Step 1.6: Verify — start the dev server

```bash
npm run dev
```

Open `http://localhost:5173`. You should see a plain unstyled "VadonSzava" heading. Tailwind is connected — it's just not doing anything visible yet because the `<h1>` has no utility classes.

> **Note:** The browser tab title shows "VadonSzava túrablog". This is already working. Tailwind resets default browser styles, which is why the heading looks smaller than you might expect.

---

## Task 2: First Tailwind Classes + Build Process

### Step 2.1: Style the heading with utility classes

In `index.html`, add classes to the `<h1>`:

```html
<h1 class="text-4xl font-bold text-green-700 p-8">VadonSzava Túrablog</h1>
```

Save the file. The browser updates instantly (HMR — Hot Module Replacement). You should now see a large, bold, green heading with padding.

Let's break down what each class does:

| Class | Effect |
|---|---|
| `text-4xl` | Font size: 2.25rem (36px) |
| `font-bold` | Font weight: 700 |
| `text-green-700` | Text color: dark green `#15803d` |
| `p-8` | Padding: 2rem on all sides |

### Step 2.2: Add a paragraph

Below the `<h1>`, add:

```html
<p class="text-gray-600 px-8 text-lg">Fedezd fel Magyarország legjobb túraútvonalait.</p>
```

Save. You should see a styled subtitle appear below the heading.

> **First win!** You just styled two HTML elements without writing a single line of CSS. This is the Tailwind way.

### Step 2.3: Run the production build

Stop the dev server (Ctrl+C) and run:

```bash
npm run build
```

Vite compiles the project and outputs everything to `dist/`. Open the `dist/` folder and look at the generated CSS file. Notice how small it is — Tailwind only includes the classes you actually used (`text-4xl`, `font-bold`, etc.), nothing more.

### Step 2.4: Preview the production build

```bash
npm run preview
```

Open the URL shown (usually `http://localhost:4173`). This is exactly what users would see if you deployed the `dist/` folder to a hosting service.

Restart the dev server when you're done:

```bash
npm run dev
```

> **Key insight:** `npm run dev` is your working environment (fast, with HMR). `npm run build` creates the deployable output. They produce the same visual result — only the delivery mechanism differs.

---

## Task 3: Design Tokens with `@theme {}`

Right now you're using Tailwind's built-in colors like `text-green-700`. But our hiking blog needs a specific brand green (`#2e7d32`) and custom brown tones that don't exist in Tailwind's default palette.

Let's see the problem first.

### Step 3.1: Try a custom color without a token

Change `text-green-700` to a hardcoded style attribute:

```html
<h1 class="text-4xl font-bold p-8" style="color: #2e7d32">VadonSzava Túrablog</h1>
```

This works visually — but you've lost all Tailwind benefits:
- You can't use `hover:`, `dark:`, or responsive modifiers on inline styles
- The value is duplicated everywhere you need this color
- Tailwind can't purge/optimize what it doesn't know about

Remove the `style` attribute. There is a better way.

### Step 3.2: Add custom palette tokens

Open `src/style.css` and expand it with `@theme {}`:

```css
@import "tailwindcss";

@theme {
  /* Palette — raw color values */
  --color-tura-green-100: #dceecd;
  --color-tura-green-600: #2e7d32;
  --color-tura-green-700: #1b5e20;
  --color-tura-green-900: #022705;
  --color-tura-brown-100: #efebe9;
  --color-tura-brown-200: #c2ada6;
  --color-tura-brown-600: #8d6e63;
  --color-tura-brown-800: #5d4037;
  --color-tura-brown-900: #3e2723;
}
```

Save. Now go back to `index.html` and change the heading class:

```html
<h1 class="text-4xl font-bold text-tura-green-700 p-8">VadonSzava Túrablog</h1>
```

The heading is now styled with our brand green. The key: everything inside `@theme {}` automatically becomes a Tailwind utility class. `--color-tura-green-700` becomes `text-tura-green-700`, `bg-tura-green-700`, `border-tura-green-700`, etc.

### Step 3.3: Add font tokens and Google Fonts

The blog uses Inter (sans-serif) and Merriweather (serif) from Google Fonts. Add the font import to `index.html` inside `<head>`, and add font tokens to `@theme {}` in `style.css`.

In `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Merriweather:wght@700&display=swap"
  rel="stylesheet">
```

In `src/style.css`, inside `@theme {}` add the font tokens after the color tokens:

```css
  /* Fonts */
  --font-sans: Inter, sans-serif;
  --font-serif: Merriweather, serif;
```

Now `font-sans` uses Inter and `font-serif` uses Merriweather anywhere in the project.

### Step 3.4: Add semantic color tokens

Palette tokens define the raw colors. **Semantic tokens** give those colors *meaning* — they describe what the color is *for*, not what it looks like. This is what makes dark mode easy in Module 3.

Add this after the closing `}` of `@theme {}` in `src/style.css`:

```css
/* Semantic tokens — light mode defaults */
:root {
  --color-bg:          white;
  --color-bg-tinted:   var(--color-tura-green-100);
  --color-nav-bg:      white;
  --color-card-bg:     white;
  --color-heading:     var(--color-tura-brown-900);
  --color-text:        var(--color-gray-700);
  --color-border:      var(--color-tura-brown-100);
  --color-card-border: var(--color-gray-100);
  --color-tag-bg:      var(--color-tura-green-100);
  --color-tag-text:    var(--color-tura-green-700);
}
```

These are standard CSS custom properties on `:root`. They use our palette tokens as values.

### Step 3.5: Map semantic tokens to Tailwind utilities

CSS custom properties are not automatically Tailwind utilities. We need one more step — `@theme inline {}`:

```css
/* Map semantic tokens to Tailwind utilities */
@theme inline {
  --color-bg:          var(--color-bg);
  --color-bg-tinted:   var(--color-bg-tinted);
  --color-nav-bg:      var(--color-nav-bg);
  --color-card-bg:     var(--color-card-bg);
  --color-heading:     var(--color-heading);
  --color-text:        var(--color-text);
  --color-border:      var(--color-border);
  --color-card-border: var(--color-card-border);
  --color-tag-bg:      var(--color-tag-bg);
  --color-tag-text:    var(--color-tag-text);
}
```

`@theme inline` tells Tailwind: "generate utility classes for these tokens, but resolve them at runtime so the CSS variable value can change (e.g., when `.dark` is added to `<html>`)."

Now `bg-bg`, `text-heading`, `border-border`, etc. are valid Tailwind classes — and in Module 3 when we add dark mode, they will automatically switch to the dark palette just by adding a `.dark` class to `<html>`.

### Step 3.6: Verify

Your `src/style.css` should now look like this:

```css
@import "tailwindcss";

@theme {
  /* Palette */
  --color-tura-green-100: #dceecd;
  --color-tura-green-600: #2e7d32;
  --color-tura-green-700: #1b5e20;
  --color-tura-green-900: #022705;
  --color-tura-brown-100: #efebe9;
  --color-tura-brown-200: #c2ada6;
  --color-tura-brown-600: #8d6e63;
  --color-tura-brown-800: #5d4037;
  --color-tura-brown-900: #3e2723;

  /* Fonts */
  --font-sans: Inter, sans-serif;
  --font-serif: Merriweather, serif;
}

/* Semantic tokens — light mode defaults */
:root {
  --color-bg:          white;
  --color-bg-tinted:   var(--color-tura-green-100);
  --color-nav-bg:      white;
  --color-card-bg:     white;
  --color-heading:     var(--color-tura-brown-900);
  --color-text:        var(--color-gray-700);
  --color-border:      var(--color-tura-brown-100);
  --color-card-border: var(--color-gray-100);
  --color-tag-bg:      var(--color-tura-green-100);
  --color-tag-text:    var(--color-tura-green-700);
}

/* Map semantic tokens to Tailwind utilities */
@theme inline {
  --color-bg:          var(--color-bg);
  --color-bg-tinted:   var(--color-bg-tinted);
  --color-nav-bg:      var(--color-nav-bg);
  --color-card-bg:     var(--color-card-bg);
  --color-heading:     var(--color-heading);
  --color-text:        var(--color-text);
  --color-border:      var(--color-border);
  --color-card-border: var(--color-card-border);
  --color-tag-bg:      var(--color-tag-bg);
  --color-tag-text:    var(--color-tag-text);
}
```

> **Note:** You won't see any visual change yet — the semantic tokens are defined but not used. You'll use `bg-bg`, `text-heading`, etc. when building the nav and hero in the next tasks.

---

## Task 4: Build the Navigation Bar

Time to replace the temporary `<h1>` with the real page structure.

### Step 4.1: Set up `<html>` and `<body>`

Update the opening tags in `index.html`:

```html
<html lang="hu" class="scroll-smooth">
```

```html
<body class="text-text bg-bg">
```

`scroll-smooth` enables smooth scrolling when clicking anchor links. `bg-bg` and `text-text` use our semantic tokens for the page background and default text color.

Also remove the temporary `<h1>` and `<p>` you added earlier.

### Step 4.2: Add the `<nav>` element

Inside `<body>`, before the script tag, add the navigation:

```html
<nav class="bg-nav-bg shadow-md fixed w-full z-50 border-b border-border">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">

    </div>
  </div>
</nav>
```

Save. You should see a thin white bar at the top of the page. Key classes:
- `fixed w-full z-50` — pinned to top, full width, above all page content
- `max-w-7xl mx-auto` — centers content with a max width
- `flex justify-between h-16` — horizontal layout with logo on the left, links on the right

### Step 4.3: Add the logo

Inside the inner `<div class="flex justify-between h-16">`, add:

```html
<div class="flex items-center">
  <a href="#" class="flex items-center gap-2 text-2xl font-bold text-tura-green-700">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 21l-8-11.5a1 1 0 01.8-1.5H7l2-4 2 4h2l2-4 2 4h1.2a1 1 0 01.8 1.5L12 21z"></path>
    </svg>
    <span>Vadon<span class="text-tura-brown-800">Szava</span></span>
  </a>
</div>
```

Save. You should now see a mountain SVG icon and the brand name "VadonSzava" in the nav.

### Step 4.4: Add navigation links (desktop)

After the logo `<div>`, add the desktop nav links:

```html
<div class="hidden md:flex items-center space-x-6">
  <a href="#kezdolap" class="text-gray-600 hover:text-tura-green-600 font-medium transition">Kezdőlap</a>
  <a href="#utvonalak" class="text-gray-600 hover:text-tura-green-600 font-medium transition">Útvonalak</a>
  <a href="#felszereles" class="text-gray-600 hover:text-tura-green-600 font-medium transition">Felszerelés</a>
  <a href="#galeria" class="text-gray-600 hover:text-tura-green-600 font-medium transition">Galéria</a>
  <a href="#rolam" class="px-4 py-2 bg-tura-brown-800 text-white rounded-full hover:bg-tura-brown-900 transition">Rólam</a>
</div>
```

`hidden md:flex` means: hidden by default (mobile), displayed as flex row on medium screens and wider. Resize your browser to see the links appear and disappear.

### Step 4.5: Add the mobile hamburger button

After the desktop links `<div>`, add:

```html
<div class="flex md:hidden items-center">
  <button class="text-gray-600 hover:text-tura-green-600 focus:outline-none">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>
</div>
```

`flex md:hidden` is the opposite — visible on mobile, hidden on desktop. The button is rendered but has no click handler yet (that's a workshop extension exercise).

### Step 4.6: Verify the navigation

Resize your browser window:
- **Wide (≥768px)**: You should see logo + text links + the "Rólam" pill button
- **Narrow (<768px)**: You should see only the logo + hamburger icon

> **Note:** The nav is fixed, so it will overlap the top of the hero section. The hero section handles this with padding/height in the next task.

---

## Task 5: Build the Hero Section

### Step 5.1: Copy the banner image

The hero needs a background image. Copy `banner.jpg` from the course resources into your project:

```
.claude/course-resources/mits-tailwind-tutorial/final-solution/public/img/banner.jpg
→ your project: public/img/banner.jpg
```

Create the `public/img/` folder if it doesn't exist.

### Step 5.2: Add the hero section

After the `</nav>` closing tag, add:

```html
<section id="kezdolap" class="relative h-screen flex items-center justify-center bg-cover bg-center"
  style="background-image: url('/img/banner.jpg');">

</section>
```

Save. You should see the mountain photo filling the entire viewport. Key classes:
- `h-screen` — 100% of the viewport height
- `bg-cover bg-center` — scales the image to cover the section, centered
- `relative` — establishes a positioning context for the overlay (next step)

### Step 5.3: Add the dark overlay

Inside the section, add:

```html
<div class="absolute inset-0 bg-black/50"></div>
```

`absolute inset-0` stretches the div to fill the parent section. `bg-black/50` applies a 50%-opacity black background, darkening the photo so text is readable on top.

Save. The image should now appear darker.

### Step 5.4: Add the headline and subheading

After the overlay `<div>`, add:

```html
<div class="relative z-10 text-center px-6 max-w-5xl">
  <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
    Az út nem csak célhoz vezet, hanem
    <span class="text-tura-green-100">önmagadhoz is.</span>
  </h1>
  <p class="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
    Fedezd fel a vadont, szívd be a friss hegyi levegőt, és hagyd magad mögött a mindennapok zaját.
    A túrázás nem sport, hanem visszatérés a gyökereinkhez.
  </p>
</div>
```

`relative z-10` places this div above the overlay (the overlay is at the default z-index). `text-5xl md:text-7xl` makes the heading large on desktop, slightly smaller on mobile.

### Step 5.5: Add the CTA buttons

Inside the `<div class="relative z-10 ...">`, after the `<p>`, add:

```html
<div class="flex flex-col sm:flex-row gap-6 justify-center">
  <a href="#utvonalak"
    class="px-10 py-4 bg-tura-green-600 hover:bg-tura-green-700 text-white font-semibold rounded-lg text-lg transition duration-300 shadow-lg">
    Fedezz fel útvonalakat
  </a>
  <a href="#felszereles"
    class="px-10 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 font-semibold rounded-lg text-lg transition duration-300">
    Mire van szükséged?
  </a>
</div>
```

Two button styles:
- **Primary**: solid green background, becomes darker on hover
- **Secondary**: semi-transparent white (glassmorphism effect) with `backdrop-blur-sm`

`flex-col sm:flex-row` stacks the buttons vertically on mobile and places them side by side on larger screens.

### Step 5.6: Verify the hero

Check the following in your browser:
- The banner photo fills the entire viewport height
- The dark overlay is visible (photo is darker than the source image)
- The headline text is large, white, and centered
- The green highlighted span is visible in the headline
- Both CTA buttons are visible and have hover effects
- Scrolling the page makes the hero disappear naturally (it is not fixed)
- The nav sits on top of the hero (it is fixed at `z-50`)

---

## Task 6: Version Control with Git

### Step 6.1: Initialize a Git repository

In the project root (`vadonszava/`):

```bash
git init
```

### Step 6.2: Create a `.gitignore`

Create a file named `.gitignore` in the project root:

```
node_modules/
dist/
```

This prevents committing the `node_modules/` folder (hundreds of MB) and the built output.

### Step 6.3: Create a feature branch

```bash
git checkout -b feat/module-1-workshop
```

This creates and switches to a new branch for your Module 1 work. Working on a feature branch keeps `main` clean.

### Step 6.4: Stage and commit your work

```bash
git add .
git commit -m "Complete Module 1: project setup, design tokens, nav and hero"
```

### Step 6.5: Switch to main and merge

```bash
git checkout main
git merge feat/module-1-workshop
```

### Step 6.6: Create a GitHub repository

1. Go to [github.com](https://github.com) and log in
2. Click **New repository**
3. Name it `vadonszava` (or any name you prefer)
4. Set it to **Public**
5. Do **not** initialize with a README — you already have files
6. Click **Create repository**

### Step 6.7: Push to GitHub

Copy the commands GitHub shows you (they include your username). They look like:

```bash
git remote add origin https://github.com/YOUR-USERNAME/vadonszava.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

### Step 6.8: Verify

Visit your repository on GitHub. You should see all your project files there.

> **Tip:** Make commits after completing each major task, not just at the end of a module. Clear commit messages help you understand your project history later.

---

## Workshop Complete

You have built the foundation of the VadonSzava hiking blog:

- ✅ Vite + Tailwind CSS v4 project configured
- ✅ First utility classes written and understood
- ✅ Production build (`dist/`) created and previewed
- ✅ Custom design token system defined in `@theme {}`
- ✅ Responsive fixed navigation bar
- ✅ Full-viewport hero with background image, overlay, and CTA buttons
- ✅ Project pushed to GitHub

**Next module**: Content sections — responsive card grids, hover effects, the route cards with zoom animation, and the gallery with sepia-to-color transitions.

---

## Extension Exercise (Optional)

Implement the mobile hamburger menu toggle. The button is already rendered — add a click listener in `src/main.js` that shows and hides a mobile nav menu when the button is clicked.

Hints:
- Add a `<div id="mobileMenu" class="hidden md:hidden ...">` below the nav bar with the same links
- Toggle the `hidden` class on `#mobileMenu` when the hamburger button is clicked
- Use `document.querySelector` to select both elements
