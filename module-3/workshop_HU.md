# 3. modul műhelymunka: Sötét mód + JS + Rólam + Hírlevél + Lábléc

**Cél**: A VadonSzava oldal befejezése, perzisztens sötét mód kapcsoló megvalósítása, az éles build futtatása.

**Kiindulópont**: A 2. modul megoldása (navigáció, hero, előnyök, útvonalak, felszerelés, galéria).

---

## 1. feladat: Maradék képek másolása

Még két típusú kép hiányzik: a szerző profilfotója és a sötét mód kapcsoló ikonjai.

Másold a kurzus erőforrásokból a projektedbe:

```
final-solution/public/img/profilkep.png          → public/img/profilkep.png
final-solution/public/img/icons/light-svgrepo-com.svg → public/img/icons/light-svgrepo-com.svg
final-solution/public/img/icons/dark-svgrepo-com.svg  → public/img/icons/dark-svgrepo-com.svg
```

Ha még nem létezik, hozd létre a `public/img/icons/` mappát.

### Ellenőrzés

A böngészőben navigálj a `http://localhost:5173/img/profilkep.png` URL-re. Látnod kell a szerző fotóját. Ha 404-es hibát kapsz, ellenőrizd az elérési utat.

---

## 2. feladat: Rólam szekció

A Rólam szekció egy 2-oszlopos rács: a profilfotó balra, a bemutatkozó szöveg és egy kapcsolati link jobbra.

### 2.1. lépés: A szekció hozzáadása a Galéria `</section>` után

```html
<section id="rolam" class="py-24 bg-card-bg">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid md:grid-cols-2 gap-16 items-center">

    </div>
  </div>
</section>
```

Mentés. Egy fehér sáv jelenik meg a galéria alatt.

### 2.2. lépés: A profilfotó hozzáadása (bal oszlop)

A rács `<div>` belsejébe:

```html
<div>
  <img src="/img/profilkep.png" alt="A blogger"
    class="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square">
</div>
```

Mentés. A profilfotó megjelenik a szekció bal felén.

### 2.3. lépés: A bemutatkozó szöveg hozzáadása (jobb oszlop)

A fotó `<div>` után:

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

### 2.4. lépés: A Rólam szekció ellenőrzése

- Asztali gépen: fotó balra, bemutatkozó szöveg jobbra, egymás mellett
- Mobilon: a fotó a szöveg fölé kerül
- A "Lépj kapcsolatba" gomb megnyomásra email klienst nyit meg (ez egy `mailto:` link)

---

## 3. feladat: Hírlevél szekció

A hírlevél szekció megjelenítési célú — az űrlap begyűjt adatot, de nem küld semmit.

### 3.1. lépés: A szekció hozzáadása a Rólam `</section>` után

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

### 3.2. lépés: Ellenőrzés

- A szekció ugyanolyan világoszöld árnyalatú háttérrel rendelkezik, mint az Előnyök szekció (`bg-bg-tinted`)
- Mobilon az input és a gomb egymás alá kerül (`flex-col`)
- `sm` és szélesebb képernyőn egymás mellé kerülnek (`sm:flex-row`)
- Az inputba kattintva zöld fókuszgyűrű jelenik meg

---

## 4. feladat: Lábléc a témaváltó gombbal

A lábléc egyszerű: márkanév, közösségi linkek, a `#themeBtn` sötét mód kapcsoló és egy szerzői jogi sor.

### 4.1. lépés: A lábléc hozzáadása a Hírlevél `</section>` után

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

### 4.2. lépés: Ellenőrzés

- A lábléc megjelenik az oldal alján
- A márkanév zöld
- Három közösségi link látható és hoverre színt vált
- A kapcsoló gomb a nap SVG ikont mutatja (`light-svgrepo-com.svg`)
- A gombra kattintás még nem csinál semmit — a JS a 6. feladatban jön

> **Megjegyzés:** A `#themeBtn` elemnek `id="themeBtn"` azonosítója van — a 6. feladatban lévő JavaScript pontosan erre az azonosítóra hivatkozik.

---

## 5. feladat: Sötét mód CSS

A három maradék szekció elkészültével most hozzáadhatod a sötét módot. A megközelítés két lépésből áll:

1. Mondd meg a Tailwindnek, hogyan érzékelje a sötét módot (egy sor a `style.css` fájlban)
2. Írd felül a szemantikus token értékeket, amikor a sötét mód aktív

Ezután böngésző DevTools segítségével ellenőrzöd, hogy működik-e — mielőtt bármilyen JavaScript kódot írnál.

### 5.1. lépés: Az `@custom-variant dark` hozzáadása a `style.css` fájlhoz

Nyisd meg a `src/style.css` fájlt. Add hozzá ezt a sort közvetlenül az `@import "tailwindcss"` után:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Ez a Tailwind v4 deklaráció, amely működővé teszi a `dark:` előtagot. Azt mondja: "alkalmazd ezt a variánst, ha az elem maga, vagy bármelyik őse rendelkezik a `dark` osztállyal."

### 5.2. lépés: A `.dark {}` token felülírások hozzáadása

A `:root {}` blokk (világos mód alapértékei) után add hozzá a sötét mód felülírásokat:

```css
/* Szemantikus tokenek — sötét mód felülírások */
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

Mentés.

### 5.3. lépés: Tesztelés DevTools segítségével — még nincs szükség JavaScriptre

Nyisd meg a böngésző DevTools-t (F12), menj az **Elements** fülre, és keresd meg a `<html>` elemet. Kattints duplán a `class` attribútumára (jelenleg `scroll-smooth` van rajta) és add hozzá a `dark` értéket:

```
class="scroll-smooth dark"
```

Nyomj Entert. Az oldal azonnal sötét módra kell váltson — sötét háttér, világosabb szöveg, zöldes-sötét navigáció. Távolítsd el a `dark` értéket, hogy visszatérj a világos módhoz.

> **Ez a szemantikus tokenek megtérülése.** A `bg-bg`, `text-heading`, `bg-card-bg` stb. osztályokat használó összes szekció automatikusan frissül. Még egyetlen `dark:` osztályt sem írtál.

### 5.4. lépés: `dark:` variánsok hozzáadása hardkódolt színekhez

A szemantikus tokenek az oldal nagy részét kezelik, de néhány elem hardkódolt színeket használ, amelyek nem váltanak automatikusan. Menj végig az oldalon szekciónként.

**Navigáció — logó és linkek:**

Keresd meg a navigáció logó linkjét és add hozzá a sötét mód variánsokat:

```html
<a href="#" class="flex items-center gap-2 text-2xl font-bold text-tura-green-700 dark:text-tura-green-100">
```

Keresd meg a "Szava" span elemet:

```html
<span>Vadon<span class="text-tura-brown-800 dark:text-tura-brown-200">Szava</span></span>
```

Keresd meg az asztali navigációs linkeket és add hozzá a `dark:text-gray-100` és `dark:hover:text-tura-green-100` osztályokat:

```html
<a href="#kezdolap" class="text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 font-medium transition">Kezdőlap</a>
```

Tedd ugyanezt az Útvonalak, Felszerelés és Galéria linkeknél is.

Keresd meg a "Rólam" pill gombot:

```html
<a href="#rolam"
  class="px-4 py-2 bg-tura-brown-800 dark:bg-green-600 text-white rounded-full hover:bg-tura-brown-900 dark:hover:bg-tura-green-700 transition">Rólam</a>
```

Mentés. Kapcsold be/ki a `dark` osztályt a DevTools-ban — a navigációnak mindkét módban helyesen kell kinéznie.

**Előnyök kártyák:**

Minden fehér kártyához sötét mód variánsok szükségesek. Frissítsd a kártya külső `<div>` elemét:

```html
<div class="bg-white dark:bg-tura-green-700/50 p-8 rounded-2xl shadow-xl border border-border text-center transform hover:-translate-y-2 transition duration-300">
```

Frissítsd az ikon kör `<div>` elemét:

```html
<div class="w-16 h-16 bg-tura-green-600 dark:bg-tura-brown-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
```

Frissítsd a kártya `<h3>` elemét:

```html
<h3 class="text-2xl font-semibold text-tura-brown-900 dark:text-tura-brown-100 mb-3">
```

Alkalmazd ugyanezt a három módosítást mindhárom előnyös kártyán.

**Útvonalkártyák — nehézségi jelvények:**

A jelvények hardkódolt piros/kék színeket használnak. Frissítsd a "Nehéz" jelvényt minden útvonalkártyán:

```html
<span class="px-3 py-1 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded-full text-xs font-medium">Nehéz</span>
```

Frissítsd a "Könnyű" jelvényt:

```html
<span class="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-xs font-medium">Könnyű</span>
```

**Felszerelés szekció:**

A sötétbarna háttér váltson sötétzöldre:

```html
<section id="felszereles" class="py-24 bg-tura-brown-900 dark:bg-tura-green-900 text-white relative overflow-hidden">
```

**Galéria képek:**

A fehér keret váltson zöldre:

```html
<img src="/img/gallery/gallery01.jpg"
  class="sepia hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000 border border-white dark:border-tura-green-700 object-cover h-full"
  alt="Túrafotó 1">
```

Alkalmazd a `dark:border-tura-green-700` osztályt mind az öt galéria képre.

**Rólam szekció:**

A "A történetem" felirat és a CTA gomb:

```html
<span class="text-tura-green-600 dark:text-tura-green-100 font-semibold mb-2 block">A történetem</span>
```

```html
<a href="mailto:info@vadonszava.hu"
  class="px-8 py-3 bg-tura-green-600 dark:bg-tura-brown-600 hover:bg-tura-green-700 dark:hover:bg-tura-brown-600/60 text-white font-semibold rounded-lg transition duration-300">
  Lépj kapcsolatba
</a>
```

**Hírlevél input:**

```html
<input type="email" placeholder="Az e-mail címed"
  class="bg-white grow px-6 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-tura-green-600 dark:focus:ring-tura-brown-200 outline-none">
```

**Lábléc márkanév:**

```html
<p class="text-xl font-bold text-tura-green-700 dark:text-tura-green-100 mb-4">VadonSzava túrablog</p>
```

Lábléc közösségi linkek:

```html
<a href="#" class="hover:text-tura-green-600 dark:hover:text-tura-green-100">Facebook</a>
```

(Alkalmazd ugyanezt a `dark:hover:text-tura-green-100` osztályt az Instagramra és a Stravára is.)

Lábléc témagomb háttere:

```html
<button id="themeBtn" class="px-2 py-2 mt-2 rounded-2xl bg-gray-200 dark:bg-black">
```

### 5.5. lépés: A sötét mód CSS teljességének ellenőrzése

A DevTools-ban add hozzá és távolítsd el a `dark` osztályt a `<html>` elemen. Minden szekciót le kell görgetni és mindkét módban helyesen kell kinéznie.

---

## 6. feladat: Sötét mód JavaScript

Most, hogy a CSS kész, add hozzá a JavaScriptet:
1. Az elmentett téma visszaállítása az oldal betöltésekor (IIFE)
2. Sötét mód kapcsolása gombkattintásra és a beállítás mentése

### 6.1. lépés: A `src/main.js` teljes cseréje

```js
import './style.css'

const themeBtn = document.querySelector('#themeBtn');
const themeImg = document.querySelector('#themeBtn img');

// Elmentett témabeállítás visszaállítása az oldal betöltésekor
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

// Sötét mód kapcsolása gombkattintásra
themeBtn.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeImg.src = isDark ? '/img/icons/dark-svgrepo-com.svg' : '/img/icons/light-svgrepo-com.svg';
  themeImg.alt = isDark ? 'Dark mode' : 'Light mode';
});
```

Mentés.

### 6.2. lépés: Hogyan működik a kód

**IIFE (6–14. sorok)**:
- Azonnal lefut, amikor a JS modul betölt
- Olvassa a `localStorage.getItem('theme')` értékét — `'dark'`, `'light'` értéket vagy `null`-t ad vissza (első látogatáskor)
- Ha nincs elmentett beállítás, a `window.matchMedia('(prefers-color-scheme: dark)').matches` értékre esik vissza
- Szükség esetén hozzáadja a `dark` osztályt a `<html>` elemhez és beállítja a helyes ikont

**Kattintáskezelő (17–21. sorok)**:
- A `classList.toggle('dark')` — hozzáadja a `dark` osztályt, ha nincs jelen, eltávolítja, ha igen; visszaadja az új állapotot
- A `localStorage.setItem` — elmenti a `'dark'` vagy `'light'` értéket a következő látogatáshoz
- Frissíti a gomb ikonját az új állapotnak megfelelően (nap = jelenleg világos mód, hold = jelenleg sötét mód)

### 6.3. lépés: A sötét mód kapcsoló ellenőrzése

1. Kattints a kapcsoló gombra — az egész oldal sötét módra vált
2. A gomb ikonja napról holdra változik (vagy fordítva)
3. Töltsd újra az oldalt — a sötét/világos beállítás megmarad
4. Nyisd meg a DevTools → Application → Local Storage → `localhost:5173` — látnod kell egy `theme` kulcsot `'dark'` vagy `'light'` értékkel
5. Töröld a `theme` kulcsot a Local Storage-ban, majd töltsd újra — az oldalnak az operációs rendszered beállítását kell figyelembe vennie

---

## 7. feladat: Reszponzív ellenőrzés + Éles build

### 7.1. lépés: Reszponzív ellenőrzés

Használd a böngésző DevTools eszközeinek eszközemulációját (Ctrl+Shift+M Chrome-ban) a következő három szélességen:

**375px (mobil):**
- A navigáció csak logót + hamburger gombot mutat (szöveges linkek nélkül)
- A hero CTA gombok egymás alá kerülnek
- Minden rács 1 oszlopos
- A felszerelés rács 2 oszlopos
- A Rólam szekció: fotó a szöveg felett

**768px (tablet):**
- A navigáció az asztali linkeket mutatja
- Az Előnyök és Útvonalak rácsok 2 oszloposak
- A Felszerelés 3 oszlopos
- A Rólam szekció: 2 oszlop egymás mellett

**1280px (asztali):**
- Az Előnyök és Útvonalak rácsok 3 oszloposak
- A Felszerelés 5 oszlopos
- A Galéria az átnyúló cella elrendezést mutatja

Javítsd a talált elrendezési problémákat, mielőtt továbblépnél.

### 7.2. lépés: Az éles build futtatása

Állítsd le a fejlesztői szervert (Ctrl+C), majd:

```bash
npm run build
```

A Vite mindent a `dist/` mappába fordít. Ellenőrizd a kimenetet figyelmeztetések után.

### 7.3. lépés: Az éles build előnézete

```bash
npm run preview
```

Nyisd meg az előnézeti URL-t és ellenőrizd, hogy az egész oldal működik-e — sötét mód kapcsoló, sima görgetés, összes kép. Az előnézet pontosan úgy szolgálja ki a statikus `dist/` fájlokat, ahogy egy tárhelyszolgáltató tenné.

### 7.4. lépés: (Opcionális) Telepítés Netlify-ra

1. Menj a [netlify.com](https://app.netlify.com) oldalra
2. Jelentkezz be a GitHub fiókoddal
3. Kattints az **Add new site → Deploy manually** gombra
4. Húzd a teljes `dist/` mappát a feltöltési területre
5. A Netlify egy nyilvános URL-t ad — oszd meg!

---

## 8. feladat: Verziókövetés Gittel

### 8.1. lépés: Feature branch létrehozása

```bash
git checkout -b feat/module-3-workshop
```

### 8.2. lépés: A munka commitolása

```bash
git add .
git commit -m "3. modul befejezve: rólam, hírlevél, lábléc, sötét mód"
```

### 8.3. lépés: Merge és push

```bash
git checkout main
git merge feat/module-3-workshop
git push origin main
```

---

## A műhelymunka kész

Elkészítetted a teljes VadonSzava Túrablogot:

- ✅ Rólam szekció — 2-oszlopos reszponzív elrendezés profilfotóval és bemutatkozó szöveggel
- ✅ Hírlevél — megjelenítési célú email űrlap
- ✅ Lábléc — márkanév, közösségi linkek, sötét mód kapcsoló
- ✅ Sötét mód CSS — `@custom-variant dark`, `.dark {}` felülírások, `dark:` variánsok
- ✅ Sötét mód JS — IIFE visszaállítás, kattintás kapcsoló, `localStorage`, `prefers-color-scheme`
- ✅ Éles build ellenőrizve
- ✅ Projekt feltöltve GitHubra

**Gratulálok** — egy teljes, reszponzív, sötét mód képességgel rendelkező statikus weboldalt építettél Tailwind CSS v4-gyel a semmiből.

---

## Kiegészítő feladat (Opcionális)

Valósítsd meg a mobil hamburger menü kapcsolóját (PRD §9, szándékos hiányosság):

1. Add az `id="hamburgerBtn"` azonosítót a hamburger `<button>` elemnek
2. Adj hozzá egy `<div id="mobileMenu" class="hidden md:hidden">` elemet a `</nav>` után, az összes horgony linkkel
3. A `main.js` fájlban add hozzá:

```js
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const mobileMenu = document.querySelector('#mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
```

Stílusozd a mobil menüt ízlésed szerint — lecsúszhat, elhalványulhat, vagy egyszerűen csak megjelenhet.
