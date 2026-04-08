# 2. modul: Tartalmi szekciók + Rácselrendezések + Hover hatások

## Áttekintés

Ebben a modulban megépíted a VadonSzava túrablog négy fő tartalmi szekcióját: az Előnyök rácsot, a Túraútvonalak kártyáit, a Felszerelés szekciót és a Fotógalériát. A fókusz teljes egészében az **elrendezési mintákon** és az **interaktív állapotokon** van — a két dolog, ami a Tailwind-et nélkülözhetetlenné teszi valódi projektekben.

A modul végére az oldal teljesen görgethető lesz négy vizuálisan különböző szakcióval, hover animációkkal minden kártyán és egy szépiahatásból valódi színbe átmenő galériával.

---

## Kulcsfogalmak

### Reszponzív rácselrendezések

A Tailwind grid utility-jei lehetővé teszik, hogy egyetlen osztálylánccal módosítsd az oszlopok számát minden töréspontnál:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

Mobil → 1 oszlop. Tablet → 2 oszlop. Asztali → 3 oszlop. Nem kell media query blokkokat írni.

### A `group` / `group-hover:` minta

Néha azt szeretnénk, hogy egy *gyermek* elem reagáljon, amikor a *szülőre* rámutatunk. Sima CSS-ben ehhez egy `.card:hover .card-image` típusú szelektor kellene. A Tailwind ezt két osztállyal oldja meg:

1. Add hozzá a `group` osztályt a szülő elemhez
2. Add hozzá a `group-hover:` előtagot a gyermek elem osztályához

```html
<div class="group overflow-hidden rounded-xl">
  <img class="group-hover:scale-105 transition-transform duration-300" src="...">
</div>
```

Amikor a felhasználó a `<div>` bármelyik pontjára rámutat, a kép nagyobb lesz. A szülőn lévő `overflow-hidden` körülvágja a képet, így az nem lóg ki a kártya keretéből.

### CSS filter átmenetek

A Tailwind tartalmaz filter utility-ket, mint például `sepia`, `grayscale` és `blur`. Átmenetet hozhatsz létre köztük a `hover:` és `transition-all` segítségével:

```html
<img class="sepia hover:sepia-0 transition-all duration-500">
```

Ez szépiahatásból teljes színes megjelenítésbe való átmenetet hoz létre hover esetén — pontosan ezt használja a galéria.

### Rácscellek átnyújtása

CSS Gridben egy cella több sort vagy oszlopot is átfoghat:

```html
<img class="row-span-2">          <!-- 2 sort fog át -->
<img class="col-span-2">          <!-- 2 oszlopot fog át -->
<img class="row-start-1 row-end-3"> <!-- ugyanaz, mint a row-span-2, explicit pozicionálással -->
```

Így hozza létre a galéria a nagy kiemelt fotót, amely két normál cella magasságát foglalja el.

---

## Mit fogsz megtanulni

- Reszponzív többoszlopos rács: `grid grid-cols-1 md:grid-cols-3`
- Kártyakomponensek: `rounded-2xl`, `shadow-lg`, `border`, `overflow-hidden`
- Szülő által kiváltott hover átmenetek a `group` és `group-hover:` segítségével
- Képnagyítás: `scale-105` körülvágva `overflow-hidden`-nel
- Nehézségi jelvény chipek: `rounded-full`, `px-3 py-1`, színvariánsok nehézség szerint
- Útvonal metaadatsorok emoji ikonokkal és szöveggel
- Szekció háttérszínek: `bg-bg-tinted` vs. hardkódolt `bg-tura-brown-900`
- Glassmorphism kártyák: `bg-white/10 backdrop-blur-sm border border-white/20`
- CSS Grid sorkiterjedés: `row-start-1 row-end-3`
- Szépiából valódi színbe való átmenet: `sepia hover:sepia-0 transition-all`

---

## Miért fontos ez?

A rácselrendezés és a hover hatások teszik ki a valódi projektekben az interaktív UI-munka nagy részét. Ezen minták tanulása egy konkrét projekten — nem mesterséges példákon — izomemlékezetet épít, amely bárhol alkalmazható. A modul végére három különböző módon (3-oszlopos, 5-oszlopos, átnyújtott) fogod használni a rács rendszert, ami több tapasztalatot jelent, mint amennyit a legtöbb tutorial nyújt.

A `group`/`group-hover:` minta különösen olyasvalami, amit a hallgatók szinte minden kártyaalapú felületen alkalmaznak majd ezután.

---

## Kapcsolat a PRD-vel

Ez a modul megvalósítja:
- **§5.3 Előnyök rács** — 3-oszlopos kártyarács, inline SVG ikonok
- **§5.4 Túraútvonalak** — kártyarács hover zoommal, nehézségi jelvényekkel, metaadatokkal
- **§5.5 Felszerelés** — 5-oszlopos rács, backdrop-blur kártyák sötét háttéren
- **§5.7 Galéria** — 3-oszlopos rács átnyújtott cellával, szépia hover

---

## Előfeltételek

- Az 1. modul teljesítve (futó Vite projekt, navigáció + hero megépítve)
- A kurzus erőforrásokból másolt képek a `public/img/` mappába (lásd: 1. feladat)

---

## Időbecslés

⏱️ **4–5 óra**

---

## A modul felépítése

1. **1. feladat** — Képek másolása és a szekció váz felállítása
2. **2. feladat** — Előnyök rács (3-oszlopos kártyák SVG ikonokkal)
3. **3. feladat** — Túraútvonalak szekció (kártyák hover zoommal)
4. **4. feladat** — Felszerelés szekció (5-oszlopos glassmorphism kártyák sötét háttéren)
5. **5. feladat** — Galéria (átnyújtott rács + szépia hover)
6. **6. feladat** — Git munkafolyamat

---

## Várt eredmény

Egy teljesen görgethető oldal az 1. modulból származó navigációval és heroval, amelyet a következők követnek:

- Egy színezett hátterű **Előnyök rács** három ikonos kártyával
- Egy **Útvonalak szekció** három kártyával — minden kártya fotója zoomol hover esetén, és egy nehézségi jelvény (piros a Nehézhez, kék a Könnyűhöz) látható a cím felett
- Egy sötét **Felszerelés szekció** öt félig átlátszó kártyával és finom backdrop blur hatással
- Egy **Galéria** öt fotóval CSS Gridben — egy fotó két sort fog át — az összes szépia módban kezdődik és hover esetén teljes színben jelenik meg
