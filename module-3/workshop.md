# Module 3 Workshop: Dark Mode + JS + About + Newsletter + Footer

**Goal**: Complete the VadonSzava page, implement a persisted dark mode toggle, run the production build.

**Starting point**: Your Module 2 solution (nav, hero, benefits, routes, equipment, gallery).

---

## Task 1: Copy Remaining Assets

Two types of assets are still missing: the author profile photo and the dark-mode toggle icons.

Copy from the course resources into your project:

```
final-solution/public/img/profilkep.png          → public/img/profilkep.png
final-solution/public/img/icons/light-svgrepo-com.svg → public/img/icons/light-svgrepo-com.svg
final-solution/public/img/icons/dark-svgrepo-com.svg  → public/img/icons/dark-svgrepo-com.svg
```

Create `public/img/icons/` if it doesn't exist.

### Verify

Navigate to `http://localhost:5173/img/profilkep.png` in your browser. You should see the author photo. If you get a 404, check the path.

---

## Task 2: About Section

The About section is a 2-column grid: profile photo on the left, bio text and a contact link on the right.

### Step 2.1: Add the section after the Gallery `</section>`

```html
<section id="rolam" class="py-24 bg-card-bg">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid md:grid-cols-2 gap-16 items-center">

    </div>
  </div>
</section>
```

Save. A white band appears below the gallery.

### Step 2.2: Add the profile photo (left column)

Inside the grid `<div>`:

```html
<div>
  <img src="/img/profilkep.png" alt="A blogger"
    class="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square">
</div>
```

Save. The profile photo appears on the left half of the section.

### Step 2.3: Add the bio text (right column)

After the photo `<div>`:

```html
<div>
  <span class="text-tura-green-600 font-semibold mb-2 block">A történetem</span>
  <h2 class="text-4xl font-bold text-heading mb-6">Szia, a hegyek szerelmese vagyok.</h2>
  <p class="text-lg text-text mb-6 leading-relaxed">
    Tíz éve kezdődött minden, amikor egy nehéz munkahét után véletlenül kötöttem ki a Pilisben.
    Azóta a hétvégéim a természetben telnek. Ez a blog azért jött létre, hogy megosszam veled azokat
    a rejtett helyeket, hasznos tippeket és élményeket, amiket az utam során gyűjtöttem.
  </p>
  <p class="text-lg text-text mb-10 leading-relaxed">
    Célom, hogy inspiráljalak, és megmutassam: a túrázás nem csak a profiké, hanem bárkié, aki
    tiszteli a természetet és szereti a szabadságot.
  </p>
  <a href="mailto:info@vadonszava.hu"
    class="px-8 py-3 bg-tura-green-600 hover:bg-tura-green-700 text-white font-semibold rounded-lg transition duration-300">
    Lépj kapcsolatba
  </a>
</div>
```

### Step 2.4: Verify the About section

- On desktop: photo left, bio text right, side by side
- On mobile: photo stacks above the text
- The "Lépj kapcsolatba" button opens an email client when clicked (it's a `mailto:` link)

---

## Task 3: Newsletter Section

The newsletter section is presentational — the form collects input but submits nothing.

### Step 3.1: Add the section after About `</section>`

```html
<section class="py-20 bg-bg-tinted">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-heading mb-4">Ne maradj le a következő kalandról!</h2>
    <p class="text-text mb-10">Iratkozz fel a hírlevelemre, és megosztom veled a legfrissebb útvonalaimat és exkluzív felszerelés-tesztjeimet.</p>
    <form class="flex flex-col sm:flex-row gap-4">
      <input type="email" placeholder="Az e-mail címed"
        class="bg-white grow px-6 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-tura-green-600 outline-none">
      <button type="submit"
        class="px-8 py-4 bg-tura-brown-800 hover:bg-tura-brown-900 text-white font-semibold rounded-full transition">
        Feliratkozom
      </button>
    </form>
  </div>
</section>
```

### Step 3.2: Verify

- The section has the same light-green tinted background as the Benefits section (`bg-bg-tinted`)
- On mobile, input and button stack vertically (`flex-col`)
- On `sm` and wider, they sit side by side (`sm:flex-row`)
- Clicking inside the input shows a green focus ring

---

## Task 4: Footer with Theme Toggle Button

The footer is simple: brand name, social links, the `#themeBtn` dark mode toggle, and a copyright line.

### Step 4.1: Add the footer after the Newsletter `</section>`

```html
<footer class="py-12 bg-nav-bg border-t border-border text-text">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    <p class="text-xl font-bold text-tura-green-700 mb-4">VadonSzava túrablog</p>
    <div class="flex justify-center space-x-6 mb-6">
      <a href="#" class="hover:text-tura-green-600">Facebook</a>
      <a href="#" class="hover:text-tura-green-600">Instagram</a>
      <a href="#" class="hover:text-tura-green-600">Strava</a>
    </div>
    <p class="text-sm">© 2026 VadonSzava. Minden jog fenntartva.</p>
    <button id="themeBtn" class="px-2 py-2 mt-2 rounded-2xl bg-gray-200">
      <img src="/img/icons/light-svgrepo-com.svg" alt="Light mode" class="w-5">
    </button>
  </div>
</footer>
```

### Step 4.2: Verify

- Footer appears at the bottom of the page
- Brand name is green
- Three social links are visible and change color on hover
- The toggle button shows the sun SVG icon (`light-svgrepo-com.svg`)
- Clicking the button does nothing yet — JS comes in Task 6

> **Note:** `#themeBtn` has `id="themeBtn"` — the JavaScript in Task 6 targets this exact ID.

---

## Task 5: Dark Mode CSS

With the three remaining sections in place, you can now add dark mode. The approach is two steps:

1. Tell Tailwind how to detect dark mode (one line in `style.css`)
2. Override the semantic token values when dark mode is active

Then you verify it works using browser DevTools — before writing any JavaScript.

### Step 5.1: Add `@custom-variant dark` to `style.css`

Open `src/style.css`. Add this line immediately after `@import "tailwindcss"`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

This is the Tailwind v4 declaration that makes `dark:` prefix work. It says: "apply this variant when the element itself, or any ancestor, has the class `dark`."

### Step 5.2: Add the `.dark {}` token overrides

After the `:root {}` block (light mode defaults), add the dark mode overrides:

```css
/* Semantic tokens — dark mode overrides */
.dark {
  --color-bg:          black;
  --color-bg-tinted:   var(--color-tura-green-900);
  --color-nav-bg:      var(--color-tura-green-900);
  --color-card-bg:     var(--color-tura-brown-900);
  --color-heading:     var(--color-tura-brown-200);
  --color-text:        var(--color-gray-200);
  --color-border:      var(--color-tura-green-600);
  --color-card-border: var(--color-tura-brown-600);
  --color-tag-bg:      var(--color-tura-green-700);
  --color-tag-text:    var(--color-tura-green-100);
}
```

Save.

### Step 5.3: Test with DevTools — no JavaScript needed yet

Open your browser DevTools (F12), go to the **Elements** tab, and find the `<html>` element. Double-click on its `class` attribute (it currently has `scroll-smooth`) and add `dark`:

```
class="scroll-smooth dark"
```

Press Enter. The page should instantly switch to dark mode — dark background, lighter text, greenish-dark nav. Remove `dark` to go back to light mode.

> **This is the semantic token payoff.** All sections using `bg-bg`, `text-heading`, `bg-card-bg`, etc. update automatically. You didn't write a single `dark:` class yet.

### Step 5.4: Add `dark:` variants for hardcoded colors

Semantic tokens handle most of the site, but some elements use hardcoded colors that don't switch automatically. Work through the page section by section.

**Navigation — logo and links:**

Find the nav logo link and add dark variants:

```html
<a href="#" class="flex items-center gap-2 text-2xl font-bold text-tura-green-700 dark:text-tura-green-100">
```

Find the "Szava" span:

```html
<span>Vadon<span class="text-tura-brown-800 dark:text-tura-brown-200">Szava</span></span>
```

Find the desktop nav links and add `dark:text-gray-100` and `dark:hover:text-tura-green-100`:

```html
<a href="#kezdolap" class="text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 font-medium transition">Kezdőlap</a>
```

Do the same for Útvonalak, Felszerelés, and Galéria links.

Find the "Rólam" pill button:

```html
<a href="#rolam"
  class="px-4 py-2 bg-tura-brown-800 dark:bg-green-600 text-white rounded-full hover:bg-tura-brown-900 dark:hover:bg-tura-green-700 transition">Rólam</a>
```

Save. Toggle `dark` in DevTools — the nav should now look correct in both modes.

**Benefits cards:**

Each white card needs dark variants. Update the outer card `<div>`:

```html
<div class="bg-white dark:bg-tura-green-700/50 p-8 rounded-2xl shadow-xl border border-border text-center transform hover:-translate-y-2 transition duration-300">
```

Update the icon circle `<div>`:

```html
<div class="w-16 h-16 bg-tura-green-600 dark:bg-tura-brown-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
```

Update the card heading `<h3>`:

```html
<h3 class="text-2xl font-semibold text-tura-brown-900 dark:text-tura-brown-100 mb-3">
```

Apply the same three changes to all three benefit cards.

**Route cards — difficulty badges:**

The badges use hardcoded red/blue colors. Update the "Nehéz" badge on all route cards:

```html
<span class="px-3 py-1 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded-full text-xs font-medium">Nehéz</span>
```

Update the "Könnyű" badge:

```html
<span class="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-xs font-medium">Könnyű</span>
```

**Equipment section:**

The dark brown background should switch to dark green:

```html
<section id="felszereles" class="py-24 bg-tura-brown-900 dark:bg-tura-green-900 text-white relative overflow-hidden">
```

**Gallery images:**

The white border should switch to green:

```html
<img src="/img/gallery/gallery01.jpg"
  class="sepia hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000 border border-white dark:border-tura-green-700 object-cover h-full"
  alt="Túrafotó 1">
```

Apply `dark:border-tura-green-700` to all five gallery images.

**About section:**

The "A történetem" label and the CTA button:

```html
<span class="text-tura-green-600 dark:text-tura-green-100 font-semibold mb-2 block">A történetem</span>
```

```html
<a href="mailto:info@vadonszava.hu"
  class="px-8 py-3 bg-tura-green-600 dark:bg-tura-brown-600 hover:bg-tura-green-700 dark:hover:bg-tura-brown-600/60 text-white font-semibold rounded-lg transition duration-300">
  Lépj kapcsolatba
</a>
```

**Newsletter input:**

```html
<input type="email" placeholder="Az e-mail címed"
  class="bg-white grow px-6 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-tura-green-600 dark:focus:ring-tura-brown-200 outline-none">
```

**Footer brand name:**

```html
<p class="text-xl font-bold text-tura-green-700 dark:text-tura-green-100 mb-4">VadonSzava túrablog</p>
```

Footer social links:

```html
<a href="#" class="hover:text-tura-green-600 dark:hover:text-tura-green-100">Facebook</a>
```

(Apply the same `dark:hover:text-tura-green-100` to Instagram and Strava.)

Footer theme button background:

```html
<button id="themeBtn" class="px-2 py-2 mt-2 rounded-2xl bg-gray-200 dark:bg-black">
```

### Step 5.5: Verify dark mode CSS is complete

In DevTools, add and remove the `dark` class on `<html>`. Every section should look correct in both modes. Walk through the full page scrolling down in each mode.

---

## Task 6: Dark Mode JavaScript

Now that the CSS is complete, add the JavaScript to:
1. Restore the saved theme on page load (IIFE)
2. Toggle dark mode on button click and save the preference

### Step 6.1: Replace `src/main.js` with the full implementation

```js
import './style.css'

const themeBtn = document.querySelector('#themeBtn');
const themeImg = document.querySelector('#themeBtn img');

// Restore saved theme preference on page load
(function () {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    themeImg.src = '/img/icons/dark-svgrepo-com.svg';
    themeImg.alt = 'Dark mode';
  } else {
    themeImg.src = '/img/icons/light-svgrepo-com.svg';
    themeImg.alt = 'Light mode';
  }
})();

// Toggle dark mode on button click
themeBtn.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeImg.src = isDark ? '/img/icons/dark-svgrepo-com.svg' : '/img/icons/light-svgrepo-com.svg';
  themeImg.alt = isDark ? 'Dark mode' : 'Light mode';
});
```

Save.

### Step 6.2: How the code works

**IIFE (lines 6–14)**:
- Runs immediately when the JS module loads
- Reads `localStorage.getItem('theme')` — returns `'dark'`, `'light'`, or `null` (first visit)
- If no saved preference, falls back to `window.matchMedia('(prefers-color-scheme: dark)').matches`
- Adds `dark` to `<html>` if needed and sets the correct icon

**Click handler (lines 17–21)**:
- `classList.toggle('dark')` — adds `dark` if absent, removes it if present; returns the new state
- `localStorage.setItem` — saves `'dark'` or `'light'` for next visit
- Updates the button icon to match the new state (sun = currently light mode, moon = currently dark mode)

### Step 6.3: Verify dark mode toggle

1. Click the toggle button — the entire page switches to dark mode
2. The button icon changes from sun to moon (or vice versa)
3. Reload the page — the dark/light preference is remembered
4. Open DevTools → Application → Local Storage → `localhost:5173` — you should see a `theme` key with value `'dark'` or `'light'`
5. Delete the `theme` key in Local Storage, then reload — the page should respect your OS setting

---

## Task 7: Responsive Audit + Production Build

### Step 7.1: Responsive audit

Use your browser's DevTools device emulation (Ctrl+Shift+M in Chrome) to check these three widths:

**375px (mobile):**
- Nav shows only logo + hamburger button (no text links)
- Hero CTA buttons stack vertically
- All grids are 1 column
- Equipment grid is 2 columns
- About section: photo above text

**768px (tablet):**
- Nav shows desktop links
- Benefits and Routes grids are 2 columns
- Equipment is 3 columns
- About section: 2 columns side by side

**1280px (desktop):**
- Benefits and Routes grids are 3 columns
- Equipment is 5 columns
- Gallery shows the spanning cell layout

Fix any layout issues you find before continuing.

### Step 7.2: Run the production build

Stop the dev server (Ctrl+C), then:

```bash
npm run build
```

Vite compiles everything to `dist/`. Check the output for any warnings.

### Step 7.3: Preview the production build

```bash
npm run preview
```

Open the preview URL and verify the full page works — dark mode toggle, smooth scrolling, all images. The preview serves the static `dist/` files exactly as they would be served from a hosting provider.

### Step 7.4: (Optional) Deploy to Netlify

1. Go to [netlify.com](https://app.netlify.com)
2. Sign in with your GitHub account
3. Click **Add new site → Deploy manually**
4. Drag and drop the entire `dist/` folder onto the upload area
5. Netlify gives you a public URL — share it!

---

## Task 8: Version Control with Git

### Step 8.1: Create a feature branch

```bash
git checkout -b feat/module-3-workshop
```

### Step 8.2: Commit your work

```bash
git add .
git commit -m "Complete Module 3: about, newsletter, footer, dark mode"
```

### Step 8.3: Merge and push

```bash
git checkout main
git merge feat/module-3-workshop
git push origin main
```

---

## Workshop Complete

You have completed the full VadonSzava Túrablog:

- ✅ About section — 2-column responsive layout with profile photo and bio
- ✅ Newsletter — presentational email form
- ✅ Footer — brand, social links, dark mode toggle
- ✅ Dark mode CSS — `@custom-variant dark`, `.dark {}` overrides, `dark:` variants
- ✅ Dark mode JS — IIFE restore, click toggle, `localStorage`, `prefers-color-scheme`
- ✅ Production build verified
- ✅ Project pushed to GitHub

**Congratulations** — you have built a complete, responsive, dark-mode-capable static website with Tailwind CSS v4 from scratch.

---

## Extension Exercise (Optional)

Implement the mobile hamburger menu toggle (PRD §9, intentional gap):

1. Give the hamburger `<button>` an `id="hamburgerBtn"`
2. Add a mobile menu `<div id="mobileMenu" class="hidden md:hidden">` below the `</nav>` with all the same anchor links
3. In `main.js`, add:

```js
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const mobileMenu = document.querySelector('#mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
```

Style the mobile menu to your liking — it could slide down, fade in, or simply appear.
