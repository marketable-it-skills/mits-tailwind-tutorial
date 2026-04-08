# Module 2 Workshop: Content Sections + Grid Layouts + Hover Effects

**Goal**: Add four content sections to the VadonSzava page — Benefits grid, Hiking Routes, Equipment, and Gallery — using Tailwind's responsive grid system and interactive hover utilities.

**Starting point**: Your Module 1 solution (nav + hero, Tailwind v4 configured, design tokens defined).

---

## Task 1: Copy Images

The new sections need photos. Copy the following files from the course resources into your project's `public/img/` folder:

```
final-solution/public/img/istallosko.jpg   → public/img/istallosko.jpg
final-solution/public/img/kekesteto.jpg    → public/img/kekesteto.jpg
final-solution/public/img/nagymilic.jpg    → public/img/nagymilic.jpg
final-solution/public/img/gallery/gallery01.jpg → public/img/gallery/gallery01.jpg
final-solution/public/img/gallery/gallery02.jpg → public/img/gallery/gallery02.jpg
final-solution/public/img/gallery/gallery03.jpg → public/img/gallery/gallery03.jpg
final-solution/public/img/gallery/gallery04.jpg → public/img/gallery/gallery04.jpg
final-solution/public/img/gallery/gallery06.jpg → public/img/gallery/gallery06.jpg
```

Create the `public/img/gallery/` subfolder if it doesn't exist.

### Verify

Open your dev server (`npm run dev`). Navigate to `http://localhost:5173/img/istallosko.jpg` in the browser. You should see the hiking photo. If you see a 404, check the file path.

---

## Task 2: Benefits Grid

The Benefits section sits immediately below the hero. It has a tinted green background and three cards, each with an SVG icon, heading, and short description.

### Step 2.1: Add the section after `</section>` (hero closing tag)

```html
<section class="py-12 bg-bg-tinted">
  <div class="max-w-7xl mx-auto px-6 lg:px-5">

  </div>
</section>
```

Save. You should see a green-tinted strip appear below the hero.

### Step 2.2: Add the section header

Inside the `<div>`:

```html
<div class="text-center mb-16">
  <h2 class="text-4xl font-bold text-heading mb-4">Miért a túrázás a legjobb kikapcsolódás?</h2>
  <p class="text-lg text-text max-w-2xl mx-auto">Több mint testmozgás. A természetben töltött idő megváltoztatja a gondolkodásodat.</p>
</div>
```

`text-heading` and `text-text` use the semantic tokens you defined in Module 1 — this text will automatically switch to the correct dark-mode colors in Module 3.

### Step 2.3: Add the 3-column grid

After the header `<div>`:

```html
<div class="grid md:grid-cols-3 gap-10">

</div>
```

Save. Nothing visible yet — the grid is empty.

### Step 2.4: Add the first card

Inside the grid `<div>`:

```html
<div class="bg-white p-8 rounded-2xl shadow-xl border border-border text-center transform hover:-translate-y-2 transition duration-300">
  <div class="w-16 h-16 bg-tura-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
      </path>
    </svg>
  </div>
  <h3 class="text-2xl font-semibold text-tura-brown-900 mb-3">Mentális feltöltődés</h3>
  <p class="text-text">A fák között a stressz szintje bizonyítottan csökken. Csend, nyugalom és tiszta gondolatok.</p>
</div>
```

Save. You should see one card appear in the tinted section. Notice `hover:-translate-y-2` — hover over it to see the card lift.

### Step 2.5: Add the second and third cards

After the first card, add:

```html
<div class="bg-white p-8 rounded-2xl shadow-xl border border-border text-center transform hover:-translate-y-2 transition duration-300">
  <div class="w-16 h-16 bg-tura-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  </div>
  <h3 class="text-2xl font-semibold text-tura-brown-900 mb-3">Fizikai erőnlét</h3>
  <p class="text-text">Erősíti a szívet, a lábakat, és növeli az állóképességet, miközben észre sem veszed a megerőltetést.</p>
</div>

<div class="bg-white p-8 rounded-2xl shadow-xl border border-border text-center transform hover:-translate-y-2 transition duration-300">
  <div class="w-16 h-16 bg-tura-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1a2.5 2.5 0 002.5-2.5V4a2 2 0 00-2-2h-1.036">
      </path>
    </svg>
  </div>
  <h3 class="text-2xl font-semibold text-tura-brown-900 mb-3">Új felfedezések</h3>
  <p class="text-text">Rejtett vízesések, lélegzetelállító panorámák és olyan helyek, ahová autóval sosem jutnál el.</p>
</div>
```

### Step 2.6: Verify the grid

- **Desktop**: Three cards side by side in a row
- **Mobile** (narrow browser): Cards stack vertically, one per row
- **Hover**: Each card lifts slightly (`-translate-y-2`)

> **Note:** `bg-bg-tinted` uses the semantic token from Module 1. In light mode it resolves to `tura-green-100` (light green). When dark mode is added in Module 3, it will automatically switch to `tura-green-900` (dark green).

---

## Task 3: Hiking Routes Section

The Routes section shows three card cards — each with a photo that zooms on hover, a difficulty badge, and a metadata row.

### Step 3.1: Add the section shell

After the Benefits section closing `</section>`:

```html
<section id="utvonalak" class="py-20 bg-bg">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">

  </div>
</section>
```

### Step 3.2: Add the section header with a "View all" link

Inside the inner `<div>`:

```html
<div class="flex justify-between items-center mb-16">
  <h2 class="text-4xl font-bold text-heading">Kedvenc útvonalaim</h2>
  <a href="#" class="text-tura-green-600 hover:text-tura-green-700 font-semibold flex items-center gap-1">
    Összes megtekintése →
  </a>
</div>
```

Save. You should see the section heading + link row appear.

### Step 3.3: Add the card grid container

After the header `<div>`:

```html
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

</div>
```

### Step 3.4: Add the first route card

This card introduces the `group` + `group-hover:scale-105` pattern. Read the explanation before pasting:

```html
<div class="bg-card-bg rounded-2xl overflow-hidden shadow-lg border border-card-border group">
  <img src="/img/istallosko.jpg" alt="Istállós-kő"
    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
  <div class="p-6">
    <div class="flex gap-2 mb-3">
      <span class="px-3 py-1 bg-tag-bg text-tag-text rounded-full text-xs font-medium">Istállós-kő</span>
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Nehéz</span>
    </div>
    <h3 class="text-xl font-semibold text-heading mb-2">Pillantás a múltba a Szalajka-völgy körül</h3>
    <p class="text-text mb-4 line-clamp-2">A Bükk-hegység jellegzetes szeletét járjuk be a legnépszerűbb szurdokvölgyből a fellegvárként tornyosuló fennsíkra és annak sasbércszerű őrtornyára.</p>
    <div class="flex justify-between items-center text-sm text-text border-t border-card-border pt-4">
      <span>🕒 5:00 óra</span>
      <span>📏 15.9 km</span>
      <span>⬆️ 682 m</span>
    </div>
  </div>
</div>
```

**How the hover zoom works:**
- `group` on the outer `<div>` — marks this element as the hover trigger
- `group-hover:scale-105` on the `<img>` — scales the image when the parent is hovered
- `overflow-hidden` on the outer `<div>` — clips the scaled image so it doesn't escape the card boundaries
- Without `overflow-hidden`, the image would scale *outside* the card and look broken

Save. Hover over the card to see the photo zoom.

### Step 3.5: Add the second route card

```html
<div class="bg-card-bg rounded-2xl overflow-hidden shadow-lg border border-card-border group">
  <img src="/img/kekesteto.jpg" alt="Kékes-tető"
    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
  <div class="p-6">
    <div class="flex gap-2 mb-3">
      <span class="px-3 py-1 bg-tag-bg text-tag-text rounded-full text-xs font-medium">Kékes-tető</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Könnyű</span>
    </div>
    <h3 class="text-xl font-semibold text-heading mb-2">A Kékes északi oldalának vadonjában</h3>
    <p class="text-text mb-4 line-clamp-2">A könnyed kiránduláson belevetjük magunkat a hegy északi oldalának változatos vadonjába, felfűzzük a környék látnivalóit, majd kényelmes úton érkezünk Mátraházára.</p>
    <div class="flex justify-between items-center text-sm text-text border-t border-card-border pt-4">
      <span>🕒 3:30 óra</span>
      <span>📏 7 km</span>
      <span>⬆️ 133 m</span>
    </div>
  </div>
</div>
```

Notice the difficulty badge: `bg-blue-100 text-blue-700` instead of red — "Könnyű" (Easy) is blue, "Nehéz" (Hard) is red.

### Step 3.6: Add the third route card

```html
<div class="bg-card-bg rounded-2xl overflow-hidden shadow-lg border border-card-border group">
  <img src="/img/nagymilic.jpg" alt="Nagy-Milic"
    class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
  <div class="p-6">
    <div class="flex gap-2 mb-3">
      <span class="px-3 py-1 bg-tag-bg text-tag-text rounded-full text-xs font-medium">Nagy-Milic</span>
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Nehéz</span>
    </div>
    <h3 class="text-xl font-semibold text-heading mb-2">A Milic vadregényes, keleti peremén</h3>
    <p class="text-text mb-4 line-clamp-2">A Milic tömbjének legvadabb, sziklákkal tarkított keleti oldalát járjuk körbe kényelmes dózerutakon és a határsáv egy jellemző szeletén át.</p>
    <div class="flex justify-between items-center text-sm text-text border-t border-card-border pt-4">
      <span>🕒 4:00 óra</span>
      <span>📏 12.5 km</span>
      <span>⬆️ 540 m</span>
    </div>
  </div>
</div>
```

### Step 3.7: Verify the routes section

- Three cards side by side on desktop, stacked on mobile
- Hovering each card zooms its photo
- "Nehéz" badges are red, "Könnyű" is blue
- The metadata row (clock, distance, elevation) is separated by a top border

---

## Task 4: Equipment Section

The Equipment section has a permanently dark background (`bg-tura-brown-900`) with five semi-transparent cards using `backdrop-blur`.

### Step 4.1: Add the section shell

After the Routes `</section>`:

```html
<section id="felszereles" class="py-24 bg-tura-brown-900 text-white relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

  </div>
</section>
```

Save. A dark brown full-width band appears.

### Step 4.2: Add decorative background shapes

Inside the section but before the `<div class="max-w-7xl ...">`, add these purely decorative triangles:

```html
<div class="absolute inset-0 opacity-10">
  <svg viewBox="0 0 100 100" fill="currentColor" class="absolute -top-10 -left-10 w-64 h-64">
    <path d="M50 0 L100 80 H0 Z"></path>
  </svg>
  <svg viewBox="0 0 100 100" fill="currentColor" class="absolute -bottom-10 -right-10 w-96 h-96">
    <path d="M50 0 L100 80 H0 Z"></path>
  </svg>
</div>
```

`absolute inset-0 opacity-10` makes the SVGs fill the section at 10% opacity — subtle texture, not content.

### Step 4.3: Add the section header

Inside `<div class="max-w-7xl ...">`:

```html
<div class="text-center mb-16">
  <h2 class="text-4xl font-bold mb-4">A biztonságos túrázás alapjai</h2>
  <p class="text-lg text-tura-brown-100 max-w-2xl mx-auto">Sose indulj el felkészületlenül. Íme az 5 legfontosabb dolog, ami mindig legyen nálad.</p>
</div>
```

### Step 4.4: Add the 5-column grid

After the header:

```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">

</div>
```

`grid-cols-2 md:grid-cols-3 lg:grid-cols-5` — three different column counts at three breakpoints. Resize your browser to see all three states.

### Step 4.5: Add the five equipment cards

Inside the grid:

```html
<div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Túrabakancs</h4>
  <p class="text-xs text-tura-brown-100">Vízálló, bokatartó.</p>
</div>

<div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
      </path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Réteges ruha</h4>
  <p class="text-xs text-tura-brown-100">Műszálas, nem pamut.</p>
</div>

<div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7">
      </path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Navigáció</h4>
  <p class="text-xs text-tura-brown-100">Offline térkép, GPS.</p>
</div>

<div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Elsősegély</h4>
  <p class="text-xs text-tura-brown-100">Kötszer, fájdalomcsillapító.</p>
</div>

<div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.76 2.28a2 2 0 001.18 2.444l2.247.949a2 2 0 002.439-1.118l.261-.705a2 2 0 00-.036-1.583l-1.962-4.664z">
      </path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Víz &amp; Étel</h4>
  <p class="text-xs text-tura-brown-100">Több, mint amennyit tervezel.</p>
</div>
```

### Step 4.6: Verify the equipment section

- Dark brown background across the full viewport width
- 5 cards in a row on desktop, 3 on tablet, 2 on mobile
- Cards have a visible frosted/blur effect (`backdrop-blur-sm`)
- White circular icon containers on each card
- Faint decorative triangles in the background corners

> **Why `bg-tura-brown-900` instead of `bg-bg-tinted`?** This section is intentionally always dark — it's part of the design, not a light/dark mode toggle. Hardcoding the background color here is correct. The semantic `bg-bg-tinted` token is for sections that should look different in dark mode.

---

## Task 5: Gallery Section

The Gallery uses a CSS Grid with one image spanning two rows, plus a sepia-to-color hover effect on every photo.

### Step 5.1: Add the section shell

After the Equipment `</section>`:

```html
<section id="galeria" class="py-20 bg-tura-green-600">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-white mb-6">Túráim képekben...</h2>

  </div>
</section>
```

Save. A solid green band appears.

### Step 5.2: Add the grid with the first two images

Inside the `<div>`, after the `<h2>`:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <img src="/img/gallery/gallery01.jpg"
    class="sepia hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000 border border-white object-cover h-full"
    alt="Túrafotó 1">
  <img src="/img/gallery/gallery02.jpg"
    class="sepia hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000 border border-white object-cover h-full"
    alt="Túrafotó 2">
</div>
```

Save. Two sepia-toned photos appear. Hover over one — it transitions to full color and scales up slightly.

> **Transition duration**: `duration-1000` (1 second) makes the sepia-to-color transition feel smooth and deliberate. A shorter duration like `duration-300` would feel abrupt on a color filter change.

### Step 5.3: Add the remaining photos including the spanning cell

Replace the entire `<div class="grid ...">` with the complete gallery:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <img src="/img/gallery/gallery01.jpg"
    class="sepia hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000 border border-white object-cover h-full"
    alt="Túrafotó 1">
  <img src="/img/gallery/gallery02.jpg"
    class="sepia hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000 border border-white object-cover h-full"
    alt="Túrafotó 2">
  <img src="/img/gallery/gallery03.jpg"
    class="sepia hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000 border border-white object-cover h-full"
    alt="Túrafotó 3">
  <img src="/img/gallery/gallery04.jpg"
    class="sepia hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000 border border-white object-cover h-full row-start-1 row-end-3"
    alt="Túrafotó 4">
  <img src="/img/gallery/gallery06.jpg"
    class="sepia hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000 border border-white object-cover h-full"
    alt="Túrafotó 5">
</div>
```

**How the spanning cell works**: `row-start-1 row-end-3` on `gallery04.jpg` tells CSS Grid to place this image starting at row line 1 and ending at row line 3 — spanning two rows. This only takes effect in the 3-column layout (`lg:grid-cols-3`). On mobile and tablet the images stack normally.

### Step 5.4: Verify the gallery

- All five photos display in sepia tone
- Hovering any photo transitions it to full color over 1 second
- On a wide desktop window (`lg` breakpoint), `gallery04` should be taller than the others — occupying the height of two rows
- Narrow the browser to see the images restack to 1 column

---

## Task 6: Version Control with Git

### Step 6.1: Create a feature branch

```bash
git checkout -b feat/module-2-workshop
```

### Step 6.2: Commit your work

```bash
git add .
git commit -m "Complete Module 2: benefits, routes, equipment, and gallery sections"
```

### Step 6.3: Merge and push

```bash
git checkout main
git merge feat/module-2-workshop
git push origin main
```

> **Tip:** In a real project, you would commit after completing each section, not just at the end of the module. Smaller commits make it easier to find where a bug was introduced.

---

## Workshop Complete

You have added four content sections to the VadonSzava page:

- ✅ Benefits grid — 3-column responsive layout, hover lift effect
- ✅ Hiking Routes — card grid with `group`/`group-hover:scale-105` image zoom
- ✅ Equipment — 5-column grid on dark background with backdrop-blur glassmorphism
- ✅ Gallery — spanning grid cell + sepia-to-color hover transition
- ✅ Project pushed to GitHub

**Next module**: Build the About section, Newsletter, and Footer — then add the JavaScript dark mode toggle and review the complete responsive layout.

---

## Extension Exercise (Optional)

The PRD lists `csovanyos.jpg` as an unused image in the project (§9 Known Gaps). Add a fourth route card for "Csoványos" using that image. Look at the existing three route cards for the structure and pick a difficulty level, route name, and realistic metadata.

This is listed as an intentional student exercise — the image is already in the course resources at `final-solution/public/img/csovanyos.jpg`.
