# MITS Tailwind CSS v4 oktatóanyag

> Építs nulláról egy teljes, reszponzív túrablogot **Tailwind CSS v4** és **Vite** segítségével — konfigurációs fájl nélkül, csupán CSS-sel.

[![Modulok](https://img.shields.io/badge/Modulok-3-blue)](.)
[![Nehézség](https://img.shields.io/badge/Nehézség-Kezd%C5%91bar%C3%A1t-green)](.)
[![Időtartam](https://img.shields.io/badge/Id%C5%91tartam-12--14%20%C3%B3ra-orange)](.)
[![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8)](.)

---

## Áttekintés

Ebben a kurzusban elkészíted a **VadonSzava Túrablog**ot — egy letisztult, egyoldalas magyar túrablogot hero szekcióval, reszponzív kártyaráccsal, képgalériával és teljesen működő sötét mód kapcsolóval. Minden elemet Tailwind CSS segédosztályokkal formázunk; a dizájntokenek beállításán kívül nincs egyedi CSS-fájl.

A kurzus **vizuális alapú, az első perctől alkotó** megközelítést követ. Már az első 15 percben megírod az első Tailwind osztályt, és stílusozott eredményt látsz a böngészőben — mielőtt bármilyen elméletet bevezetnénk. Minden modul pontosan egy újabb rétegnyit épít a tudásra: segédosztályok → rácsos elrendezések → JavaScript + sötét mód.

### Mit fogsz elkészíteni

Egy teljes, statikus egyoldalas weboldalt:

- Rögzített, reszponzív navigáció mobil hamburger menüvel
- Teljes képernyős hero háttérképpel és üveges (glassmorphism) CTA gombokkal
- Előnyök-kártyarács, túraútvonal-kártyák hover-nagyítással, felszerelés szekció
- Fotógaléria szépiáról színesre váltó hover-átmenettel
- Sötét mód kapcsoló, amelynek állapotát `localStorage` tárolja
- Élesre kész build, telepíthető Netlify-ra, Vercelre vagy GitHub Pagesre

### Kinek szól a kurzus

- Frontend-kezdőknek, akik ismerik az alap HTML-t, de még sosem használtak CSS-keretrendszert
- Fejlesztőknek, akik ismerik a CSS-t, és utility-first megközelítésre váltanának
- IT-oktatóknak, akik valós és érdekes Tailwind v4-es oktatási projektet keresnek

---

## Mit tanulsz meg

A kurzus elvégzése után képes leszel:

- ✅ Tailwind CSS v4 beállítására CSS-sel — `tailwind.config.js` nélkül
- ✅ Egyedi dizájntokenek definiálására `@theme {}` segítségével és szemantikus színtokenekkel
- ✅ Reszponzív elrendezések építésére Tailwind rács- és flexbox-segédosztályaival
- ✅ Interaktív állapotok alkalmazására: `hover:`, `group-hover:` és CSS-átmenetek
- ✅ Sötét mód megvalósítására `@custom-variant` és natív JavaScript segítségével
- ✅ Felhasználói beállítások megőrzésére `localStorage` és `prefers-color-scheme` alapján
- ✅ A Vite fejlesztői szerver és az éles build futtatására és értelmezésére
- ✅ Git feature branch-ek kezelésére és projekt feltöltésére GitHubra

---

## Előfeltételek

**Szükséges:**

- Node.js 18 vagy újabb (`node -v` a verzió ellenőrzéséhez)
- Alap HTML-ismeret (elemek, attribútumok, hivatkozások)
- Kódszerkesztő (VS Code ajánlott)

**Ajánlott:**

- CSS-tulajdonságok ismerete (color, padding, font-size)
- GitHub-fiók (a Git-feladatokhoz)

**Előzetes Tailwind vagy Vite tapasztalat nem szükséges.**

---

## A kurzus felépítése

### 1. modul: Projektalap + első Tailwind osztályok + navigáció + hero

**Becsült idő:** 3–4 óra

Létrehozunk egy Vite-projektet, megírjuk az első segédosztályokat, lefuttatjuk az éles buildet, majd elkészítjük a stílusozott navigációs sávot és a teljes képernyős hero szekciót.

**Amit megtanulsz:**

- Vite-projekt létrehozása és a `@tailwindcss/vite` integráció
- Segédosztályok alkalmazása HTML-elemeken
- `npm run dev` (HMR) vs `npm run build` (éles build) különbsége
- Egyedi szín- és betűtípus-tokenek `@theme {}` segítségével
- Rögzített navigáció, reszponzív elrendezés, hero képátfedéssel

**Modul végeredménye:** Futó Vite dev szerver stílusozott navigációval és heroval. Tiszta `dist/` build. Projekt feltöltve GitHubra.

---

### 2. modul: Tartalmi szekciók + rácsos elrendezések + hover-effektek

**Becsült idő:** 4–5 óra

Négy tartalmi szekció: Előnyök rácsa, Túraútvonalak, Felszerelés, Galéria. A hangsúly a Tailwind reszponzív rácsos rendszerén és az interaktív segédosztály-állapotokon van.

**Amit megtanulsz:**

- Reszponzív oszloprácsok (`grid-cols-1 md:grid-cols-3 lg:grid-cols-5`)
- `group` + `group-hover:` szülőelem által vezérelt gyerekelem-átmenetekhez
- `scale-105` hover-nagyítás `overflow-hidden` mellett
- Több sort átfogó CSS Grid cellák (`row-span-2`)
- Szépiáról színesre váltó hover-szűrő a galéria képein

**Modul végeredménye:** Görgethető oldal négy teljesen stílusozott szekcióval és működő hover-effektekkel.

---

### 3. modul: Sötét mód + JS + Rólunk + hírlevél + lábléc

**Becsült idő:** 4–5 óra

Elkészítjük a maradék szekciókat, megvalósítjuk a JavaScript-alapú sötét mód kapcsolót, és élesítésre kész buildet szállítunk.

**Amit megtanulsz:**

- Tailwind v4 sötét mód `@custom-variant dark (...)` segítségével
- A szemantikus tokenek előnye: a sötét mód egyetlen CSS-osztály cseréjével aktiválható a `<html>`-elemen
- Natív JS: `classList.toggle`, `localStorage`, `prefers-color-scheme`
- Kétoszlopos, reszponzív Rólunk szekció
- Statikus hírlevél-feliratkozó űrlap
- Reszponzivitás-ellenőrzés 375 / 768 / 1280 px-en
- Vite build + statikus tárhelyre telepítés

**Modul végeredménye:** Teljes, működő oldal sötét móddal. Statikus tárhelyen elérhető.

---

## Hogyan kezdj neki

### 1. lehetőség: Modulok sorrendben haladva

1. Nyisd meg az [1. modul áttekintőjét](module-1/overview.md), és olvasd el a bevezetőt
2. Dolgozd végig az [1. modul workshopját](module-1/workshop.md) lépésről lépésre
3. Hasonlítsd össze az eredményedet az [1. modul megoldásával](module-1/solution/)
4. Ismételd a 2. és 3. modulnál

### 2. lehetőség: Ugrás egy megoldáshoz

Minden modul `solution/` mappájában megtalálható a kurzus adott pontján elkészült, működő kód. Bármely megoldást így futtathatod:

```bash
cd module-1/solution
npm install
npm run dev
```

---

## Modulok

| Modul | Cím | Idő | Főbb témák |
|--------|-----|-----|-----------|
| [1](module-1/) | Projektalap + első osztályok + nav + hero | 3–4h | Vite, `@theme {}`, segédosztályok, build |
| [2](module-2/) | Tartalmi szekciók + rács + hover-effektek | 4–5h | Reszponzív rács, `group-hover:`, galéria |
| [3](module-3/) | Sötét mód + JS + maradék szekciók | 4–5h | `@custom-variant`, `localStorage`, telepítés |

---

## Technológiák és fogalmak

### Alap technológiák

- **Vite 8** — villámgyors fejlesztői szerver és éles bundler
- **Tailwind CSS v4** — utility-first CSS-keretrendszer, tisztán CSS-alapú konfigurációval
- **`@tailwindcss/vite`** — Vite-bővítmény, amely kiváltja a régi PostCSS-beállítást
- **Natív JavaScript (ES modulok)** — minimális JS a sötét mód kapcsolóhoz

### Főbb fogalmak

- `@theme {}` — CSS-alapú Tailwind v4 konfiguráció
- Szemantikus dizájntokenek — jelentéssel bíró változók (`--color-heading`, `--color-bg-tinted`)
- `@theme inline {}` — futásidejű CSS-változók leképezése Tailwind segédosztályokra
- `@custom-variant dark` — Tailwind v4 osztályalapú sötét módja
- `group` / `group-hover:` — szülőelem által vezérelt gyerekelem-átmenetek
- Reszponzív módosítók — `sm:`, `md:`, `lg:` előtagok

### Szakmai gyakorlat

- Git feature branch munkafolyamat (`feat/module-N-workshop`)
- Szándékot leíró commit üzenetek
- Éles build ellenőrzése telepítés előtt
- `localStorage` + `prefers-color-scheme` az akadálymentes sötét módhoz

---

## Projektstruktúra

```
courses/mits-tailwind-tutorial/
├── module-1/
│   ├── overview.md       # Fogalmak és tanulási célok
│   ├── workshop.md       # Lépésről lépésre gyakorlat
│   └── solution/         # Teljes, működő kód
│       ├── index.html
│       ├── vite.config.js
│       ├── package.json
│       └── src/
│           ├── style.css
│           └── main.js
├── module-2/             # Hamarosan
├── module-3/             # Hamarosan
└── README.md             # Angol README
```

---

## Közreműködés

Hibát találtál, vagy van javaslatod? Nyiss egy hibajegyet (issue), vagy küldj pull requestet a [MITS tárolóban](https://github.com/marketable-it-skills).

## Licenc

Ez a kurzus a [Marketable IT Skills (MITS)](https://github.com/marketable-it-skills) kezdeményezés része.
