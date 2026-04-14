# 2. modul: Tartalmi szekciók + rácsos elrendezések + hover-hatások

## Áttekintés

Ebben a modulban megépíted a VadonSzava túrablog négy fő tartalmi szekcióját: az Előnyök rácsát, a Túraútvonalak kártyáit, a Felszerelés szekciót és a Fotógalériát. A fókusz teljes egészében az **elrendezési mintákon** és az **interaktív állapotokon** van — a két dolog, ami a Tailwindet nélkülözhetetlenné teszi valódi projektekben.

A modul végére az oldal teljesen görgethető lesz négy vizuálisan különböző szekcióval, hover-animációkkal minden kártyán és egy szépiahatásból valódi színbe átmenő galériával.

---

## Kulcsfogalmak

### Reszponzív rácsos elrendezések

A Tailwind rács-segédosztályai lehetővé teszik, hogy egyetlen osztálylánccal módosítsd az oszlopok számát minden töréspontnál:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

Mobil → 1 oszlop. Tablet → 2 oszlop. Asztali → 3 oszlop. Nem kell media query blokkokat írni.

### A `group` / `group-hover:` minta

Néha azt szeretnénk, hogy egy *gyerekelemben* bekövetkező változás akkor aktiválódjon, amikor a *szülőelemre* mutatunk. Sima CSS-ben ehhez egy `.card:hover .card-image` típusú szelektor kellene. A Tailwind ezt két osztállyal oldja meg:

1. Add hozzá a `group` osztályt a szülőelemhez
2. Add hozzá a `group-hover:` előtagot a gyerekelem osztályához

```html
<div class="group overflow-hidden rounded-xl">
  <img class="group-hover:scale-105 transition-transform duration-300" src="...">
</div>
```

Amikor a felhasználó a `<div>` bármelyik pontjára mutat, a kép nagyobb lesz. A szülőn lévő `overflow-hidden` körülvágja a képet, így az nem lóg ki a kártya keretéből.

### CSS szűrő-átmenetek

A Tailwind tartalmaz szűrő-segédosztályokat, mint például `sepia`, `grayscale` és `blur`. Átmenetet hozhatsz létre köztük a `hover:` és `transition-all` segítségével:

```html
<img class="sepia hover:sepia-0 transition-all duration-500">
```

Ez szépiahatásból teljes színes megjelenítésbe való átmenetet hoz létre hover esetén — pontosan ezt használja a galéria.

### Rácscellek átfogása

CSS Gridben egy cella több sort vagy oszlopot is átfoghat:

```html
<img class="row-span-2">            <!-- 2 sort fog át -->
<img class="col-span-2">            <!-- 2 oszlopot fog át -->
<img class="row-start-1 row-end-3"> <!-- ugyanaz, mint a row-span-2, explicit pozicionálással -->
```

Így hozza létre a galéria a nagy kiemelt fotót, amely két normál cella magasságát foglalja el.

---

## Mit fogsz megtanulni

- Reszponzív többoszlopos rács: `grid grid-cols-1 md:grid-cols-3`
- Kártyakomponensek: `rounded-2xl`, `shadow-lg`, `border`, `overflow-hidden`
- Szülőelem által vezérelt hover-átmenetek a `group` és `group-hover:` segítségével
- Képnagyítás: `scale-105` körülvágva `overflow-hidden`-nel
- Nehézségi jelvény chipek: `rounded-full`, `px-3 py-1`, színvariánsok nehézség szerint
- Útvonal-metaadatsorok emoji ikonokkal és szöveggel
- Szekció-háttérszínek: `bg-bg-tinted` vs. beégetett `bg-tura-brown-900`
- Üveges kártyák (glassmorphism): `bg-white/10 backdrop-blur-sm border border-white/20`
- CSS Grid sorkiterjedés: `row-start-1 row-end-3`
- Szépiából valódi színbe való átmenet: `sepia hover:sepia-0 transition-all`

---

## Miért fontos ez?

A rácsos elrendezés és a hover-hatások teszik ki a valódi projektekben az interaktív UI-munka nagy részét. Ezen minták elsajátítása egy konkrét projekten — nem mesterséges példákon — izomemlékezetet épít, amely bárhol alkalmazható. A modul végére háromféleképpen (3 oszlopos, 5 oszlopos, átfogó cellákkal) fogod használni a rácsos rendszert, ami több tapasztalatot jelent, mint amennyit a legtöbb oktatóanyag nyújt.

A `group`/`group-hover:` minta különösen olyasvalami, amit a tanulók szinte minden kártyaalapú felületen alkalmaznak majd ezután.

---

## Kapcsolat a tervezési dokumentummal (PRD)

Ez a modul valósítja meg:

- **§5.3 Előnyök rács** — 3 oszlopos kártyarács, inline SVG ikonok
- **§5.4 Túraútvonalak** — kártyarács hover-zoommal, nehézségi jelvényekkel, metaadatokkal
- **§5.5 Felszerelés** — 5 oszlopos rács, backdrop-blur kártyák sötét háttéren
- **§5.7 Galéria** — 3 oszlopos rács átfogó cellával, szépia hover-átmenettel

---

## Előfeltételek

- Az 1. modul teljesítve (futó Vite-projekt, navigáció + hero megépítve)
- A kurzus erőforrásokból másolt képek a `public/img/` mappában (lásd: 1. feladat)

---

## Időbecslés

⏱️ **4–5 óra**

---

## A modul felépítése

1. **1. feladat** — Képek másolása és a szekcióváz felállítása
2. **2. feladat** — Előnyök rácsa (3 oszlopos kártyák SVG ikonokkal)
3. **3. feladat** — Túraútvonalak szekció (kártyák hover-zoommal)
4. **4. feladat** — Felszerelés szekció (5 oszlopos üveges kártyák sötét háttéren)
5. **5. feladat** — Galéria (átfogó rács + szépia hover-átmenet)
6. **6. feladat** — Git munkafolyamat

---

## Várt eredmény

Egy teljesen görgethető oldal az 1. modulból származó navigációval és heroval, amelyet a következők követnek:

- Egy tónusozott hátterű **Előnyök rács** három ikonos kártyával
- Egy **Útvonalak szekció** három kártyával — minden kártya fotója zoomol hover esetén, és egy nehézségi jelvény (piros a Nehézhez, kék a Könnyűhöz) látható a cím felett
- Egy sötét **Felszerelés szekció** öt félig átlátszó kártyával és finom backdrop-blur hatással
- Egy **Galéria** öt fotóval CSS Gridben — egy fotó két sort fog át — az összes képen szépia szűrővel indul, és hover esetén teljes színben jelenik meg
