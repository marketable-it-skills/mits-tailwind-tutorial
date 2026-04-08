# 1. modul műhelymunka: Projektkészítés + Első Tailwind osztályok + Navigáció + Hero

**Cél**: A műhelymunka végére lesz egy futó Vite projekted Tailwind CSS v4-gyel, egy CSS-ben definiált egyéni design rendszerrel, egy stílusozott navigációs sávval és egy teljes képernyőnyi hero szakcióval.

---

## 1. feladat: A projekt felállítása

### 1.1. lépés: Vite projekt létrehozása

Nyisd meg a terminált és futtasd:

```bash
npm create vite@latest vadonszava -- --template vanilla
```

Ha kérdést tesz fel, nyomj Entert. Ez létrehoz egy `vadonszava/` mappát egy minimális Vite alapkonfigurációval, sima HTML + JS (keretrendszer nélkül).

```bash
cd vadonszava
```

### 1.2. lépés: A Tailwind CSS telepítése

```bash
npm install tailwindcss @tailwindcss/vite
```

Két csomag:
- `tailwindcss` — a keretrendszer magja
- `@tailwindcss/vite` — a Vite plugin, amely integrálja a Tailwindet a build folyamatba (felváltja a régi PostCSS beállítást)

### 1.3. lépés: A Vite plugin konfigurálása

Nyisd meg a `vite.config.js` fájlt és cseréld ki a tartalmát erre:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

Ez utasítja a Vite-ot, hogy futtassa a Tailwindet minden build és fejlesztői szerver újratöltés részeként.

### 1.4. lépés: A `src/style.css` létrehozása

Előfordulhat, hogy a Vite sablon már generált egy `style.css` fájlt. Cseréld ki a teljes tartalmát erre az egy sorra:

```css
@import "tailwindcss";
```

Így aktiválódik a Tailwind v4 — egyetlen CSS importtal, konfigurációs fájl nélkül.

### 1.5. lépés: Az `index.html` megtisztítása

Nyisd meg az `index.html` fájlt. Távolíts el mindent a `<body>` belsejéből a script tag kivételével. Add hozzá a stíluslap hivatkozást. A fájlod így nézzen ki:

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

Nyisd meg a `src/main.js` fájlt is, és távolíts el mindent a stílus import kivételével:

```js
import './style.css'
```

### 1.6. lépés: Ellenőrzés — a fejlesztői szerver indítása

```bash
npm run dev
```

Nyisd meg a `http://localhost:5173` oldalt. Egy egyszerű, stílus nélküli "VadonSzava" feliratot kell látnod. A Tailwind csatlakoztatva van — csak még semmi látható dolgot nem csinál, mert a `<h1>` elemnek nincsenek utility osztályai.

> **Megjegyzés:** A böngészőfül címe "VadonSzava túrablog". Ez már működik. A Tailwind visszaállítja a böngésző alapértelmezett stílusait, ezért a cím kisebben nézhet ki, mint várnád.

---

## 2. feladat: Első Tailwind osztályok + Build folyamat

### 2.1. lépés: A cím stílusozása utility osztályokkal

Az `index.html` fájlban adj osztályokat a `<h1>` elemhez:

```html
<h1 class="text-4xl font-bold text-green-700 p-8">VadonSzava Túrablog</h1>
```

Mentés. A böngésző azonnal frissül (HMR — Hot Module Replacement). Egy nagy, félkövér, zöld feliratot kell látnodd kitöltéssel.

Nézzük meg, mit csinál minden egyes osztály:

| Osztály | Hatás |
|---|---|
| `text-4xl` | Betűméret: 2.25rem (36px) |
| `font-bold` | Betűvastagság: 700 |
| `text-green-700` | Szövegszín: sötétzöld `#15803d` |
| `p-8` | Kitöltés: 2rem minden oldalon |

### 2.2. lépés: Egy bekezdés hozzáadása

A `<h1>` alá add hozzá:

```html
<p class="text-gray-600 px-8 text-lg">Fedezd fel Magyarország legjobb túraútvonalait.</p>
```

Mentés. Egy stílusozott alcím jelenik meg a cím alatt.

> **Első siker!** Két HTML elemet stílusoztál meg anélkül, hogy egyetlen sor CSS-t írtál volna. Ez a Tailwind módja.

### 2.3. lépés: Az éles build futtatása

Állítsd le a fejlesztői szervert (Ctrl+C) és futtasd:

```bash
npm run build
```

A Vite lefordítja a projektet és mindent a `dist/` mappába ment. Nyisd meg a `dist/` mappát és nézd meg a generált CSS fájlt. Figyeld meg, milyen kicsi — a Tailwind csak a ténylegesen használt osztályokat tartalmazza (`text-4xl`, `font-bold` stb.), semmi mást.

### 2.4. lépés: Az éles build előnézete

```bash
npm run preview
```

Nyisd meg a megjelenített URL-t (általában `http://localhost:4173`). Pontosan ezt látnák a felhasználók, ha a `dist/` mappát egy tárhelyszolgáltatóra telepítenéd.

Ha kész vagy, indítsd újra a fejlesztői szervert:

```bash
npm run dev
```

> **Kulcsszempont:** Az `npm run dev` a munkakörnyezeted (gyors, HMR-rel). Az `npm run build` hozza létre a telepíthető kimenetet. Vizuálisan ugyanazt az eredményt adják — csak a kézbesítési mechanizmus különbözik.

---

## 3. feladat: Design tokenek az `@theme {}` segítségével

Jelenleg a Tailwind beépített színeit használod, mint a `text-green-700`. De a túrablogunknak szüksége van egy konkrét márkazöldre (`#2e7d32`) és egyéni barna árnyalatokra, amelyek nem léteznek a Tailwind alapértelmezett palettájában.

Először nézzük meg a problémát.

### 3.1. lépés: Próbálj ki egy egyéni színt token nélkül

Változtasd meg a `text-green-700` osztályt egy hardkódolt style attribútumra:

```html
<h1 class="text-4xl font-bold p-8" style="color: #2e7d32">VadonSzava Túrablog</h1>
```

Ez vizuálisan működik — de elveszítetted az összes Tailwind előnyt:
- Nem használhatsz `hover:`, `dark:` vagy reszponzív módosítókat inline stílusokon
- Az érték mindenhol duplikálódik, ahol szükséges ez a szín
- A Tailwind nem tudja eltávolítani/optimalizálni azt, amiről nem tud

Távolítsd el a `style` attribútumot. Van egy jobb megoldás.

### 3.2. lépés: Egyéni paletta tokenek hozzáadása

Nyisd meg a `src/style.css` fájlt és bővítsd ki az `@theme {}` blokkkal:

```css
@import "tailwindcss";

@theme {
  /* Paletta — nyers színértékek */
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

Mentés. Térj vissza az `index.html` fájlhoz és változtasd meg a cím osztályát:

```html
<h1 class="text-4xl font-bold text-tura-green-700 p-8">VadonSzava Túrablog</h1>
```

A cím most a márkánk zöldjével van stílusozva. A lényeg: az `@theme {}` belsejébe kerülő minden elem automatikusan Tailwind utility osztállyá válik. A `--color-tura-green-700` `text-tura-green-700`-dá, `bg-tura-green-700`-dá, `border-tura-green-700`-dá válik, stb.

### 3.3. lépés: Betűtípus tokenek és Google Fonts hozzáadása

A blog az Inter (sans-serif) és a Merriweather (serif) betűtípusokat használja a Google Fonts-ból. Add hozzá a betűtípus importot az `index.html` fájlban a `<head>` belsejébe, és adj betűtípus tokeneket az `@theme {}` blokkhoz a `style.css` fájlban.

Az `index.html` `<head>` részébe:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Merriweather:wght@700&display=swap"
  rel="stylesheet">
```

A `src/style.css` fájlban, az `@theme {}` belsejébe add hozzá a betűtípus tokeneket a szín tokenek után:

```css
  /* Betűtípusok */
  --font-sans: Inter, sans-serif;
  --font-serif: Merriweather, serif;
```

Most a `font-sans` az Intert, a `font-serif` a Merriweathert használja bárhol a projektben.

### 3.4. lépés: Szemantikus szín tokenek hozzáadása

A paletta tokenek a nyers színeket definiálják. A **szemantikus tokenek** *jelentést* adnak ezeknek a színeknek — leírják, mire *való* a szín, nem azt, hogyan néz ki. Ez teszi könnyűvé a sötét módot a 3. modulban.

Add hozzá ezt az `@theme {}` záró `}` kapcsa után a `src/style.css` fájlban:

```css
/* Szemantikus tokenek — világos mód alapértékei */
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

Ezek standard CSS custom property-k a `:root` elemre. A paletta tokeneket használják értékként.

### 3.5. lépés: Szemantikus tokenek leképezése Tailwind utility-kre

A CSS custom property-k nem válnak automatikusan Tailwind utility-kké. Szükség van még egy lépésre — az `@theme inline {}` blokkra:

```css
/* Szemantikus tokenek leképezése Tailwind utility-kre */
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

Az `@theme inline` azt mondja a Tailwindnek: "generálj utility osztályokat ezekhez a tokenekhez, de old fel őket futásidőben, hogy a CSS változó értéke megváltoztatható legyen (pl. amikor `.dark` kerül a `<html>` elemre)."

Most a `bg-bg`, `text-heading`, `border-border` stb. érvényes Tailwind osztályok — és a 3. modulban, amikor hozzáadjuk a sötét módot, automatikusan átváltanak a sötét palettára, csupán egy `.dark` osztály `<html>` elemre adásával.

### 3.6. lépés: Ellenőrzés

A `src/style.css` fájlod most így nézzen ki:

```css
@import "tailwindcss";

@theme {
  /* Paletta */
  --color-tura-green-100: #dceecd;
  --color-tura-green-600: #2e7d32;
  --color-tura-green-700: #1b5e20;
  --color-tura-green-900: #022705;
  --color-tura-brown-100: #efebe9;
  --color-tura-brown-200: #c2ada6;
  --color-tura-brown-600: #8d6e63;
  --color-tura-brown-800: #5d4037;
  --color-tura-brown-900: #3e2723;

  /* Betűtípusok */
  --font-sans: Inter, sans-serif;
  --font-serif: Merriweather, serif;
}

/* Szemantikus tokenek — világos mód alapértékei */
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

/* Szemantikus tokenek leképezése Tailwind utility-kre */
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

> **Megjegyzés:** Még nem lesz látható változás — a szemantikus tokenek definiálva vannak, de nincsenek használva. A `bg-bg`, `text-heading` stb. osztályokat a navigáció és a hero megépítésekor fogod használni a következő feladatokban.

---

## 4. feladat: A navigációs sáv megépítése

Itt az ideje, hogy az ideiglenes `<h1>` elemet felváltsa a valódi oldalszerkezet.

### 4.1. lépés: A `<html>` és `<body>` beállítása

Frissítsd a nyitó tageket az `index.html` fájlban:

```html
<html lang="hu" class="scroll-smooth">
```

```html
<body class="text-text bg-bg">
```

A `scroll-smooth` engedélyezi a sima görgetést horgony linkekre kattintáskor. A `bg-bg` és a `text-text` a szemantikus tokeneket használja az oldal háttérszínéhez és az alapértelmezett szövegszínhez.

Távolítsd el a korábban hozzáadott ideiglenes `<h1>` és `<p>` elemeket is.

### 4.2. lépés: A `<nav>` elem hozzáadása

A `<body>` belsejébe, a script tag elé add hozzá a navigációt:

```html
<nav class="bg-nav-bg shadow-md fixed w-full z-50 border-b border-border">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">

    </div>
  </div>
</nav>
```

Mentés. Egy vékony fehér sávot kell látnod az oldal tetején. Kulcsfontosságú osztályok:
- `fixed w-full z-50` — az oldal tetejéhez rögzítve, teljes szélesség, minden oldaltartalom felett
- `max-w-7xl mx-auto` — a tartalom középre igazítása maximális szélességgel
- `flex justify-between h-16` — vízszintes elrendezés, a logó balra, a linkek jobbra

### 4.3. lépés: A logó hozzáadása

A belső `<div class="flex justify-between h-16">` elembe add hozzá:

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

Mentés. Egy hegy SVG ikont és a "VadonSzava" márkanevet kell látnod a navigációban.

### 4.4. lépés: Navigációs linkek hozzáadása (asztali)

A logó `<div>` után add hozzá az asztali navigációs linkeket:

```html
<div class="hidden md:flex items-center space-x-6">
  <a href="#kezdolap" class="text-gray-600 hover:text-tura-green-600 font-medium transition">Kezdőlap</a>
  <a href="#utvonalak" class="text-gray-600 hover:text-tura-green-600 font-medium transition">Útvonalak</a>
  <a href="#felszereles" class="text-gray-600 hover:text-tura-green-600 font-medium transition">Felszerelés</a>
  <a href="#galeria" class="text-gray-600 hover:text-tura-green-600 font-medium transition">Galéria</a>
  <a href="#rolam" class="px-4 py-2 bg-tura-brown-800 text-white rounded-full hover:bg-tura-brown-900 transition">Rólam</a>
</div>
```

A `hidden md:flex` azt jelenti: alapértelmezetten rejtve (mobil), flex sorként megjelenítve közepes és szélesebb képernyőkön. Méretezd át a böngészőt, hogy lásd, hogyan jelennek meg és tűnnek el a linkek.

### 4.5. lépés: A mobil hamburger gomb hozzáadása

Az asztali linkek `<div>` után add hozzá:

```html
<div class="flex md:hidden items-center">
  <button class="text-gray-600 hover:text-tura-green-600 focus:outline-none">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>
</div>
```

A `flex md:hidden` az ellenkezője — mobil eszközön látható, asztali gépen rejtve. A gomb megjelenik, de még nincs kattintáskezelője (ez egy önálló kiegészítő feladat).

### 4.6. lépés: A navigáció ellenőrzése

Méretezd át a böngészőablakot:
- **Széles (≥768px)**: Logó + szöveges linkek + a "Rólam" pill gomb látható
- **Keskeny (<768px)**: Csak a logó + hamburger ikon látható

> **Megjegyzés:** A navigáció rögzített, ezért átfedi a hero szekció tetejét. A hero szekció ezt kitöltéssel/magassággal kezeli a következő feladatban.

---

## 5. feladat: A hero szekció megépítése

### 5.1. lépés: A banner kép másolása

A heronak szüksége van egy háttérképre. Másold a `banner.jpg` fájlt a kurzus erőforrásokból a projektedbe:

```
.claude/course-resources/mits-tailwind-tutorial/final-solution/public/img/banner.jpg
→ a projekted: public/img/banner.jpg
```

Ha nem létezik, hozd létre a `public/img/` mappát.

### 5.2. lépés: A hero szekció hozzáadása

A `</nav>` záró tag után add hozzá:

```html
<section id="kezdolap" class="relative h-screen flex items-center justify-center bg-cover bg-center"
  style="background-image: url('/img/banner.jpg');">

</section>
```

Mentés. A hegyi fotónak ki kell töltenie a teljes látóablakot. Kulcsfontosságú osztályok:
- `h-screen` — a látóablak magasságának 100%-a
- `bg-cover bg-center` — a kép méretezése a szekció lefedéséhez, középre igazítva
- `relative` — pozicionálási kontextust teremt az overlay számára (következő lépés)

### 5.3. lépés: A sötét overlay hozzáadása

A szekción belül add hozzá:

```html
<div class="absolute inset-0 bg-black/50"></div>
```

Az `absolute inset-0` kinyújtja a divet, hogy kitöltse a szülő szekciót. A `bg-black/50` 50%-os átlátszóságú fekete hátteret alkalmaz, elsötétítve a fotót, hogy a szöveg olvasható legyen rajta.

Mentés. A kép most sötétebbnek kell tűnnie.

### 5.4. lépés: A főcím és az alcím hozzáadása

Az overlay `<div>` után add hozzá:

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

A `relative z-10` ezt a divet az overlay fölé helyezi (az overlay az alapértelmezett z-indexen van). A `text-5xl md:text-7xl` nagy főcimet eredményez asztali gépen, kissé kisebbet mobilon.

### 5.5. lépés: A CTA gombok hozzáadása

A `<div class="relative z-10 ...">` belsejébe, a `<p>` után add hozzá:

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

Két gombstílus:
- **Elsődleges**: tömör zöld háttér, hoverre sötétebb lesz
- **Másodlagos**: félig átlátszó fehér (glassmorphism hatás) `backdrop-blur-sm`-mel

A `flex-col sm:flex-row` egymás alá rakja a gombokat mobilon, és egymás mellé helyezi nagyobb képernyőkön.

### 5.6. lépés: A hero ellenőrzése

Ellenőrizd a böngészőben:
- A banner fotó kitölti a teljes látóablak magasságát
- A sötét overlay látható (a fotó sötétebb, mint a forráskép)
- A főcím szövege nagy, fehér és középre igazított
- A zöld kiemelés látható a főcímben
- Mindkét CTA gomb látható és hover hatással rendelkezik
- Az oldal görgetésekor a hero természetesen tűnik el (nem rögzített)
- A navigáció a hero felett ül (rögzített, `z-50` értékkel)

---

## 6. feladat: Verziókövetés Gittel

### 6.1. lépés: Git repository inicializálása

A projekt gyökerében (`vadonszava/`):

```bash
git init
```

### 6.2. lépés: Egy `.gitignore` létrehozása

Hozz létre egy `.gitignore` nevű fájlt a projekt gyökerében:

```
node_modules/
dist/
```

Ez megakadályozza a `node_modules/` mappa (több száz MB) és a fordított kimenet commitolását.

### 6.3. lépés: Feature branch létrehozása

```bash
git checkout -b feat/module-1-workshop
```

Ez létrehozza és átvált az 1. modul munkájához egy új ágra. A feature branch-en való munka tisztán tartja a `main` ágat.

### 6.4. lépés: A munka stagelése és commitolása

```bash
git add .
git commit -m "1. modul befejezve: projektbeállítás, design tokenek, navigáció és hero"
```

### 6.5. lépés: Váltás a main ágra és merge

```bash
git checkout main
git merge feat/module-1-workshop
```

### 6.6. lépés: GitHub repository létrehozása

1. Menj a [github.com](https://github.com) oldalra és jelentkezz be
2. Kattints a **New repository** gombra
3. Nevezd el `vadonszava`-nak (vagy bármilyen más nevet választhatsz)
4. Állítsd **Public**-ra
5. **Ne** inicializáld README-vel — már vannak fájljaid
6. Kattints a **Create repository** gombra

### 6.7. lépés: Feltöltés GitHubra

Másold a GitHub által megjelenített parancsokat (tartalmazzák a felhasználónevedet). Ilyenek:

```bash
git remote add origin https://github.com/YOUR-USERNAME/vadonszava.git
git branch -M main
git push -u origin main
```

Cseréld ki a `YOUR-USERNAME` részt a saját GitHub felhasználóneveddel.

### 6.8. lépés: Ellenőrzés

Látogasd meg a GitHub-on lévő repositorydat. Ott kell látnod az összes projektfájlt.

> **Tipp:** Commitolj minden nagyobb feladat elvégzése után, ne csak a modul végén. Az egyértelmű commit üzenetek segítenek megérteni a projekted előzményeit.

---

## A műhelymunka kész

Megépítetted a VadonSzava túrablog alapját:

- ✅ Vite + Tailwind CSS v4 projekt konfigurálva
- ✅ Első utility osztályok megírva és megértve
- ✅ Éles build (`dist/`) létrehozva és előnézve
- ✅ Egyéni design token rendszer definiálva az `@theme {}` segítségével
- ✅ Reszponzív rögzített navigációs sáv
- ✅ Teljes képernyőnyi hero háttérképpel, overlay-el és CTA gombokkal
- ✅ Projekt feltöltve GitHubra

**Következő modul**: Tartalmi szekciók — reszponzív kártyarácsok, hover hatások, az útvonalkártyák zoom animációval és a galéria szépiából valódi színbe való átmenettel.

---

## Kiegészítő feladat (Opcionális)

Valósítsd meg a mobil hamburger menü kapcsolóját. A gomb már renderelve van — adj hozzá egy kattintáskezelőt a `src/main.js` fájlban, amely megmutatja és elrejti a mobil nav menüt, amikor a gombra kattintanak.

Tippek:
- Add hozzá a `<div id="mobileMenu" class="hidden md:hidden ...">` divet a nav sáv alá ugyanazokkal a linkekkel
- Kapcsolja a `hidden` osztályt a `#mobileMenu` elemen, amikor a hamburger gombra kattintanak
- Használd a `document.querySelector`-t mindkét elem kiválasztásához
