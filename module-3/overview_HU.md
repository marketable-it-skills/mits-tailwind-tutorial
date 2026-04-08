# 3. modul: Sötét mód + Vanilla JS + Rólam + Hírlevél + Lábléc

## Áttekintés

Ebben az utolsó modulban befejezed a VadonSzava oldalt a Rólam szekció, a Hírlevél űrlap és a Lábléc hozzáadásával — majd egyetlen gombnyomással sötét és világos mód közötti váltást valósítasz meg az egész oldalon. A sötét mód kapcsolót néhány sornyi vanilla JavaScript hajtja, és `localStorage` segítségével az oldal újratöltései között is megőrzi a beállítást.

A modul végére az oldal funkcionálisan teljes, teljesen reszponzív és élesbe kész lesz. Futtatod az `npm run build` parancsot, és kész lesz egy statikus `dist/` mappa, amely telepítésre alkalmas.

---

## Kulcsfogalmak

### Tailwind v4 sötét mód: `@custom-variant`

A Tailwind v4-ben nincs `darkMode: 'class'` konfigurációs lehetőség — a beállítás CSS-ben történik. Deklarálsz egy egyéni variánst a `src/style.css` fájlban:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Ez azt mondja a Tailwind-nek: "a `dark:` előtag akkor alkalmazandó, amikor az elem — vagy bármelyik őse — rendelkezik a `.dark` osztállyal." Ez a sor után minden Tailwind utility-t meg lehet előzni a `dark:` előtaggal:

```html
<p class="text-gray-700 dark:text-gray-200">...</p>
```

### Miért teszik könnyűvé a szemantikus tokenek a sötét módot?

Emlékszel az 1. modulból származó szemantikus tokenekre? Most jön a megtérülésük. Mivel a `--color-bg`, `--color-heading` stb. CSS custom property-k, az értékeiket egyszerűen felülírhatod azzal, hogy hozzáadod a `.dark` osztályt a `<html>` elemhez:

```css
.dark {
  --color-bg:      black;
  --color-heading: var(--color-tura-brown-200);
  /* ... */
}
```

Minden elem, amely `bg-bg`-t vagy `text-heading`-et használ, automatikusan frissül — nem szükséges elemenként változtatni. Csak az olyan elemekhez kell explicit `dark:` variánsokat felvenni, amelyek **hardkódolt** színosztályokat használnak (pl. `text-gray-600` vagy `bg-red-100`).

### Az IIFE minta a villanás megelőzésére

Ha `localStorage`-ot olvasol egy sima scriptben, a betöltéskor rövid ideig a rossz téma villan fel, mert a böngésző rendereli az oldalt, mielőtt a JavaScript lefutna. A megoldás egy **Immediately Invoked Function Expression (IIFE)** — egy függvény, amely azonnal lefut, amint a böngésző értelmezi:

```js
(function () {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();
```

Mivel a `<script type="module">` alapértelmezés szerint halasztott, a helyes megközelítés az, hogy a kezdeti téma osztályt az IIFE-n belül szinkron módon állítsd be, amikor a JS modul betöltődik — az első renderelés előtt.

### A `prefers-color-scheme` tartalék megoldásként

Ha a felhasználó soha nem kattintott a kapcsolóra (nincs mentett beállítás), az oldal az operációs rendszer szintű sötét mód beállítást veszi figyelembe a `window.matchMedia('(prefers-color-scheme: dark)')` segítségével. Ez az iparági szabvány: először a rendszer beállítását kell figyelembe venni, majd megjegyezni a felhasználó explicit választását.

---

## Mit fogsz megtanulni

- `@custom-variant dark` — A Tailwind v4 CSS-alapú sötét mód deklarációja
- `.dark {}` token felülírások hozzáadása a `style.css`-hez
- `dark:` variánsok hozzáadása hardkódolt színekkel rendelkező elemekhez
- A szemantikus tokenek megtérülésének megtapasztalása: az oldal nagy része automatikusan vált
- A böngésző DevTools használata a sötét mód manuális teszteléséhez fejlesztés közben
- `document.documentElement.classList.toggle('dark')` JS-alapú váltáshoz
- `localStorage.setItem / getItem` a felhasználói beállítás megőrzéséhez
- `window.matchMedia('(prefers-color-scheme: dark)')` rendszerbeállítás tartalékként
- Kétoszlopos reszponzív Rólam elrendezés készítése
- Megjelenítési célú hírlevél űrlap stílusozása
- Lábléc készítése közösségi linkekkel és témaváltó gombbal
- `npm run build` + `npm run preview` éles ellenőrzéshez
- Statikus Vite build telepítése Netlify-ra (drag-and-drop)

---

## Miért fontos ez?

A sötét módot a modern webalkalmazásokban alapvetőnek tekintik. Ez a modul megtanítja a teljes megvalósítási láncot: CSS deklaráció → token felülírás → JS perzisztencia → rendszerbeállítás tartalék. A hallgatók azzal a tudással fejezik be a modult, hogy bármely Tailwind v4 projekthez hozzá tudják adni a sötét módot.

Az itt bemutatott szemantikus token megközelítés közvetlenül alkalmazható design rendszer munkában — a tokenek minden nagyobb komponenskönyvtár alapját képezik.

---

## Kapcsolat a PRD-vel

Ez a modul megvalósítja:
- **§4.3 Sötét mód** — `@custom-variant`, osztályváltás, `localStorage`
- **§5.6 Rólam** — 2-oszlopos rács, profilfotó, bemutatkozás, mailto CTA
- **§5.8 Hírlevél** — Megjelenítési célú email űrlap
- **§5.9 Lábléc** — Márkanév, közösségi linkek, `#themeBtn` sötét mód kapcsoló
- **§7 JavaScript** — IIFE téma visszaállítás, kattintás-kezelő

---

## Előfeltételek

- A 2. modul teljesítve (mind a négy tartalmi szekció megépítve)
- `public/img/profilkep.png` másolva a kurzus erőforrásokból
- `public/img/icons/light-svgrepo-com.svg` és `dark-svgrepo-com.svg` másolva a kurzus erőforrásokból

---

## Időbecslés

⏱️ **4–5 óra**

---

## A modul felépítése

1. **1. feladat** — Maradék képek másolása (profilfotó + ikon SVG-k)
2. **2. feladat** — Rólam szekció
3. **3. feladat** — Hírlevél szekció
4. **4. feladat** — Lábléc a `#themeBtn`-nel
5. **5. feladat** — Sötét mód CSS (`style.css` + `dark:` variánsok a HTML-ben)
6. **6. feladat** — Sötét mód JavaScript (`main.js`)
7. **7. feladat** — Reszponzív ellenőrzés + éles build
8. **8. feladat** — Git munkafolyamat

---

## Várt eredmény

Egy teljes, élesbe kész egyoldalas oldal:
- Az 1–2. modulból származó összes szekció plusz Rólam, Hírlevél és Lábléc
- A lábléc gomb megnyomása a teljes oldalt sötét és világos mód között váltja
- A témabeállítás megmarad az oldal újratöltései között
- Az operációs rendszer sötét mód beállítása figyelembe van véve az első látogatáskor
- Minden szekció helyesen néz ki 375px, 768px és 1280px viewport szélességeken
- Egy tiszta `dist/` mappa az `npm run build` által előállítva
