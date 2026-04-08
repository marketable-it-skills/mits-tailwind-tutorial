# 1. modul: Projektkészítés + Első Tailwind osztályok + Navigáció + Hero

## Áttekintés

Ebben a modulban felállítasz egy valódi Vite projektet, megírod az első Tailwind CSS utility osztályaidat, futtatod az éles buildet, és az egészet egy teljesen stílusozott navigációs sávval és hero szakcióval fejezed be. A modul végére lesz egy élő oldalad, amely már úgy néz ki, mint egy professzionális túrablog.

A hangsúly az **első eredményre való gyorsaságon** van: az első 15 percen belül stílusozott kimenetet fogsz látni a böngészőben, mielőtt bármilyen haladó fogalom szóba kerülne.

---

## Mi a Tailwind CSS?

A Tailwind CSS egy **utility-first CSS keretrendszer**. Ahelyett, hogy egyéni CSS szabályokat írnál, a stílusokat kis, egycélú osztályok közvetlenül a HTML elemekre való felvételével alakítod ki.

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

Nincs szükség CSS fájlra — az osztályok maguk a stílusok. A Tailwind csak a ténylegesen használt CSS-t generálja, így a végső kimenet rendkívül kis méretű lesz.

### Tailwind v4: CSS-alapú konfiguráció

A Tailwind v4 megszünteti a JavaScript konfigurációs fájlt. Minden — beleértve az egyéni színeket, betűtípusokat és design tokeneket — a CSS fájlban konfigurálható a `@theme {}` blokkkal. Ezt az új megközelítést a 3. feladatban fogod megtanulni.

---

## Mit fogsz megtanulni

- Vite projekt létrehozása és a `@tailwindcss/vite` integrálása
- Utility osztályok írása HTML elemekre (`text-4xl`, `font-bold`, `bg-green-700`, `p-8`, …)
- A fejlesztői szerver elindítása Hot Module Replacement (HMR) funkcióval
- Éles build futtatása és a `dist/` kimenet megértése
- Egyéni design tokenek definiálása a `@theme {}` segítségével CSS-ben
- Szemantikus színtokenek használata, amelyek előkészítik a projektet a sötét módhoz (3. modul)
- Rögzített, reszponzív navigációs sáv készítése
- Teljes képernyőnyi hero szekció készítése háttérképpel és overlay-el

---

## Miért fontos ez?

A Tailwind az egyik legelterjedtebb CSS keretrendszer a professzionális frontend fejlesztésben. A utility-first megközelítés kiküszöböli a növekvő, karbantarthatatlan CSS fájlok közös problémáját. A Tailwind v4 tanulása — a legújabb verzióé CSS-alapú konfigurációval — előnyt jelent a legtöbb olyan tutorial-lal szemben, amelyek még régebbi mintákat tanítanak.

A közvetlen vizuális visszajelzéssel való kezdés (alább a 2. feladat) felépíti a mentális modellt: *osztálynév → vizuális eredmény*. Csak miután ezt közvetlenül megtapasztaltad, válik a design token rendszer (3. feladat) természetes válasszá egy valódi problémára.

---

## Kapcsolat a PRD-vel

Ez a modul megvalósítja:
- **§3 Tech Stack** — Vite 8 + Tailwind CSS v4.2 + `@tailwindcss/vite` plugin
- **§4 Design System** — Egyéni színpaletta (`tura-green-*`, `tura-brown-*`) és betűtípus tokenek
- **§5.1 Navigáció** — Rögzített navigáció logóval, horgony linkekkel és hamburger gombbal
- **§5.2 Hero** — Teljes képernyőnyi szekció háttérképpel, overlay-el, főcímmel és két CTA gombbal

---

## Előfeltételek

- Node.js 18 vagy újabb telepítve (`node -v` a verzió ellenőrzéséhez)
- Kódszerkesztő (VS Code ajánlott)
- Alapvető HTML ismeretek (tagek, attribútumok, linkek)
- Nincs szükség korábbi Tailwind vagy Vite tapasztalatra

---

## Időbecslés

⏱️ **3–4 óra**

---

## A modul felépítése

1. **1. feladat** — Vite projekt létrehozása és Tailwind csatlakoztatása
2. **2. feladat** — Az első utility osztályok megírása és a build folyamat felfedezése
3. **3. feladat** — A design token rendszer bemutatása a `@theme {}` segítségével
4. **4. feladat** — A navigációs sáv megépítése
5. **5. feladat** — A hero szekció megépítése
6. **6. feladat** — Git munkafolyamat

---

## Várt eredmény

A modul végére lesz:

- Egy futó Vite fejlesztői szerver a `http://localhost:5173` címen
- Egy rögzített navigációs sáv a VadonSzava hegy logóval, horgony linkekkel és mobil hamburger gombbal
- Egy teljes képernyőnyi hero szekció hegyi háttérfotóval, sötét overlay-el, nagy főcímmel és két CTA gombbal
- Egy CSS-ben definiált egyéni design rendszer (`@theme {}`), amely a kurzus hátralévő részében az egész oldalt fogja működtetni
- Egy tiszta `dist/` éles build
- A projekt feltöltve a GitHubra a `main` ágon
