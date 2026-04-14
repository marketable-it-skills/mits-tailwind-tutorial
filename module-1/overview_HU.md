# 1. modul: Projektalap + első Tailwind osztályok + navigáció + hero

## Áttekintés

Ebben a modulban elkészítesz egy valódi Vite-projektet, megírod az első Tailwind CSS segédosztályaidat, lefuttatod az éles buildet, és az egészet egy teljesen stílusozott navigációs sávval és hero szekcióval fejezed be. A modul végére lesz egy élő oldalad, amely már professzionális túrablognak néz ki.

A hangsúly az **első eredményre való gyorsaságon** van: az első 15 percen belül stílusozott kimenetet látsz a böngészőben — mielőtt bármilyen haladó fogalom szóba kerülne.

---

## Mi a Tailwind CSS?

A Tailwind CSS egy **utility-first CSS-keretrendszer**. Ahelyett, hogy egyedi CSS-szabályokat írnál, a stílusokat kis, egycélú osztályok HTML-elemekre való közvetlen alkalmazásával alakítod ki.

**Hagyományos CSS:**

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

Nincs szükség CSS-fájlra — az osztályok maguk a stílusok. A Tailwind csak a ténylegesen használt CSS-t generálja, így a végső kimenet rendkívül kis méretű lesz.

### Tailwind v4: CSS-alapú konfiguráció

A Tailwind v4 megszünteti a JavaScript konfigurációs fájlt. Minden — az egyedi színek, betűtípusok és dizájntokenek is — a CSS-fájlban konfigurálható a `@theme {}` blokk segítségével. Ezt az új megközelítést a 3. feladatban fogod megismerni.

---

## Mit fogsz megtanulni

- Vite-projekt létrehozása és a `@tailwindcss/vite` integrálása
- Segédosztályok írása HTML-elemekre (`text-4xl`, `font-bold`, `bg-green-700`, `p-8`, …)
- A fejlesztői szerver elindítása Hot Module Replacement (HMR) funkcióval
- Éles build futtatása és a `dist/` kimenet megértése
- Egyedi dizájntokenek definiálása `@theme {}` segítségével CSS-ben
- Szemantikus színtokenek használata, amelyek előkészítik a projektet a sötét módhoz (3. modul)
- Rögzített, reszponzív navigációs sáv elkészítése
- Teljes képernyős hero szekció elkészítése háttérképpel és fedőréteggel

---

## Miért fontos ez?

A Tailwind az egyik legelterjedtebb CSS-keretrendszer a professzionális frontend-fejlesztésben. A utility-first megközelítés kiküszöböli az egyre növekvő, nehezen karbantartható CSS-fájlok jól ismert problémáját. A Tailwind v4 megtanulása — a legújabb verzióé, CSS-alapú konfigurációval — előnyt jelent a legtöbb olyan oktatóanyaggal szemben, amelyek még régebbi mintákat mutatnak be.

A közvetlen vizuális visszajelzéssel való kezdés (2. feladat) felépíti a mentális modellt: _osztálynév → vizuális eredmény_. Csak miután ezt közvetlenül megtapasztaltad, válik a dizájntoken-rendszer (3. feladat) természetes válasszá egy valódi problémára.

---

## Kapcsolat a tervezési dokumentummal (PRD)

Ez a modul valósítja meg:

- **§3 Tech Stack** — Vite 8 + Tailwind CSS v4.2 + `@tailwindcss/vite` plugin
- **§4 Design System** — Egyedi színpaletta (`tura-green-*`, `tura-brown-*`) és betűtípus-tokenek
- **§5.1 Navigáció** — Rögzített navigáció logóval, hivatkozásokkal és hamburger gombbal
- **§5.2 Hero** — Teljes képernyős szekció háttérképpel, fedőréteggel, főcímmel és két CTA gombbal

---

## Előfeltételek

- Node.js 18 vagy újabb (`node -v` a verzió ellenőrzéséhez)
- Kódszerkesztő (VS Code ajánlott)
- Alapvető HTML-ismeret (elemek, attribútumok, hivatkozások)
- Előzetes Tailwind vagy Vite tapasztalat nem szükséges

---

## Időbecslés

⏱️ **3–4 óra**

---

## A modul felépítése

1. **1. feladat** — Vite-projekt létrehozása és Tailwind csatlakoztatása
2. **2. feladat** — Az első segédosztályok megírása és a build folyamat megismerése
3. **3. feladat** — A dizájntoken-rendszer bemutatása `@theme {}` segítségével
4. **4. feladat** — A navigációs sáv megépítése
5. **5. feladat** — A hero szekció megépítése
6. **6. feladat** — Git munkafolyamat

---

## Várt eredmény

A modul végére elkészül:

- Egy futó Vite fejlesztői szerver a `http://localhost:5173` címen
- Egy rögzített navigációs sáv a VadonSzava hegy logóval, hivatkozásokkal és mobil hamburger gombbal
- Egy teljes képernyős hero szekció hegyi háttérfotóval, sötét fedőréteggel, nagy főcímmel és két CTA gombbal
- Egy CSS-ben definiált egyedi dizájnrendszer (`@theme {}`), amely a kurzus hátralévő részét is működteti
- Egy tiszta `dist/` éles build
- A projekt feltöltve GitHubra a `main` ágon
