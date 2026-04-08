# 2. modul műhelymunka: Tartalmi szekciók + Rácselrendezések + Hover hatások

**Cél**: Adj hozzá négy tartalmi szekciót a VadonSzava oldalhoz — Előnyök rács, Túraútvonalak, Felszerelés és Fotógaléria — a Tailwind reszponzív rácselrendezéseivel és interaktív hover utility-jeivel.

**Kiindulópont**: Az 1. modul megoldása (navigáció + hero, Tailwind v4 konfigurálva, design tokenek definiálva).

---

## 1. feladat: Képek másolása

Az új szekciókhoz fotók szükségesek. Másold a következő fájlokat a kurzus erőforrásokból a projekted `public/img/` mappájába:

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

Ha még nem létezik, hozd létre a `public/img/gallery/` almappát.

### Ellenőrzés

Nyisd meg a fejlesztői szervert (`npm run dev`). A böngészőben navigálj a `http://localhost:5173/img/istallosko.jpg` URL-re. Látnod kell a túrafotót. Ha 404-es hibát kapsz, ellenőrizd a fájl elérési útját.

---

## 2. feladat: Előnyök rács

Az Előnyök szekció közvetlenül a hero alatt helyezkedik el. Árnyalt zöld háttere van és három kártya, mindegyiken egy SVG ikon, cím és rövid leírás.

### 2.1. lépés: A szekció hozzáadása a `</section>` (hero záró tag) után

```html
<section class="py-12 bg-bg-tinted">
  <div class="max-w-7xl mx-auto px-6 lg:px-5">

  </div>
</section>
```

Mentés. Egy zöldes árnyalatú sáv jelenik meg a hero alatt.

### 2.2. lépés: A szekció fejléc hozzáadása

A `<div>` belsejébe:

```html
<div class="text-center mb-16">
  <h2 class="text-4xl font-bold text-heading mb-4">Miért a túrázás a legjobb kikapcsolódás?</h2>
  <p class="text-lg text-text max-w-2xl mx-auto">Több mint testmozgás. A természetben töltött idő megváltoztatja a gondolkodásodat.</p>
</div>
```

A `text-heading` és a `text-text` az 1. modulban definiált szemantikus tokeneket használja — ez a szöveg automatikusan a helyes sötét módú színekre vált majd a 3. modulban.

### 2.3. lépés: A 3-oszlopos rács hozzáadása

A fejléc `<div>` után:

```html
<div class="grid md:grid-cols-3 gap-10">

</div>
```

Mentés. Még semmi látható — a rács üres.

### 2.4. lépés: Az első kártya hozzáadása

A rács `<div>` belsejébe:

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

Mentés. Az árnyalt szekcióban megjelenik egy kártya. Figyeld meg a `hover:-translate-y-2` osztályt — vigyd föléje az egeret, hogy lásd a kártya emelkedését.

### 2.5. lépés: A második és harmadik kártya hozzáadása

Az első kártya után add hozzá:

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

### 2.6. lépés: A rács ellenőrzése

- **Asztali**: Három kártya egymás mellett egy sorban
- **Mobil** (keskeny böngésző): A kártyák egymás alá kerülnek, soronként egy
- **Hover**: Minden kártya enyhén emelkedik (`-translate-y-2`)

> **Megjegyzés:** A `bg-bg-tinted` az 1. modulból származó szemantikus tokent használja. Világos módban a `tura-green-100`-ra (világoszöld) oldódik fel. Amikor a sötét mód hozzáadásra kerül a 3. modulban, automatikusan `tura-green-900`-ra (sötétzöld) vált.

---

## 3. feladat: Túraútvonalak szekció

Az Útvonalak szekció három kártyát mutat — mindegyiken egy fotó, ami hoverre zoomol, egy nehézségi jelvény és egy metaadat sor.

### 3.1. lépés: A szekció keret hozzáadása

Az Előnyök szekció záró `</section>` tagje után:

```html
<section id="utvonalak" class="py-20 bg-bg">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">

  </div>
</section>
```

### 3.2. lépés: A szekció fejléc hozzáadása egy "Összes megtekintése" linkkel

A belső `<div>` belsejébe:

```html
<div class="flex justify-between items-center mb-16">
  <h2 class="text-4xl font-bold text-heading">Kedvenc útvonalaim</h2>
  <a href="#" class="text-tura-green-600 hover:text-tura-green-700 font-semibold flex items-center gap-1">
    Összes megtekintése →
  </a>
</div>
```

Mentés. Meg kell jelennie a szekció fejlécének + a link sornak.

### 3.3. lépés: A kártyarács konténer hozzáadása

A fejléc `<div>` után:

```html
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

</div>
```

### 3.4. lépés: Az első útvonalkártya hozzáadása

Ez a kártya vezeti be a `group` + `group-hover:scale-105` mintát. Olvasd el a magyarázatot, mielőtt beilleszted:

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

**Hogyan működik a hover zoom:**
- `group` a külső `<div>`-en — ezt az elemet jelöli meg hover kiváltóként
- `group-hover:scale-105` a `<img>` elemen — méretezi a képet, amikor a szülőre rámutatnak
- `overflow-hidden` a külső `<div>`-en — körülvágja a méretezett képet, hogy ne lógjon ki a kártya keretéből
- `overflow-hidden` nélkül a kép a kártyán *kívülre* méretezne és töröttnek látszana

Mentés. Vigyd az egeret a kártya fölé, hogy lásd a fotó zoomolását.

### 3.5. lépés: A második útvonalkártya hozzáadása

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

Figyeld meg a nehézségi jelvényt: `bg-blue-100 text-blue-700` a piros helyett — a "Könnyű" kék, a "Nehéz" piros.

### 3.6. lépés: A harmadik útvonalkártya hozzáadása

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

### 3.7. lépés: Az útvonalak szekció ellenőrzése

- Három kártya egymás mellett asztali gépen, egymás alatt mobilon
- Minden kártya fotójára hoverre az nagyobb lesz
- A "Nehéz" jelvények pirosak, a "Könnyű" kék
- A metaadat sor (óra, távolság, szintemelkedés) felső kerettel van elválasztva

---

## 4. feladat: Felszerelés szekció

A Felszerelés szekciónak állandóan sötét háttere van (`bg-tura-brown-900`), öt félig átlátszó kártyával `backdrop-blur` effekttel.

### 4.1. lépés: A szekció keret hozzáadása

Az Útvonalak `</section>` után:

```html
<section id="felszereles" class="py-24 bg-tura-brown-900 text-white relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

  </div>
</section>
```

Mentés. Megjelenik egy sötétbarna, teljes szélességű sáv.

### 4.2. lépés: Dekoratív háttérelemek hozzáadása

A szekción belül, de a `<div class="max-w-7xl ...">` elé add ezeket a tisztán dekoratív háromszögeket:

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

Az `absolute inset-0 opacity-10` az SVG-ket 10%-os átlátszósággal tölti ki a szekciót — finom textúra, nem tartalom.

### 4.3. lépés: A szekció fejléc hozzáadása

A `<div class="max-w-7xl ...">` belsejébe:

```html
<div class="text-center mb-16">
  <h2 class="text-4xl font-bold mb-4">A biztonságos túrázás alapjai</h2>
  <p class="text-lg text-tura-brown-100 max-w-2xl mx-auto">Sose indulj el felkészületlenül. Íme az 5 legfontosabb dolog, ami mindig legyen nálad.</p>
</div>
```

### 4.4. lépés: Az 5-oszlopos rács hozzáadása

A fejléc után:

```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">

</div>
```

A `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` — három különböző oszlopszám három töréspontnál. Méretezd át a böngészőt, hogy lásd mindhárom állapotot.

### 4.5. lépés: Az öt felszerelés kártya hozzáadása

A rácson belül:

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

### 4.6. lépés: A felszerelés szekció ellenőrzése

- Sötétbarna háttér a teljes látóablak szélességén
- 5 kártya egy sorban asztali gépen, 3 tableten, 2 mobilon
- A kártyákon látható a frosted/blur hatás (`backdrop-blur-sm`)
- Fehér kör alakú ikon konténerek minden kártyán
- Halvány dekoratív háromszögek a háttér sarkaiban

> **Miért `bg-tura-brown-900` a `bg-bg-tinted` helyett?** Ez a szekció szándékosan mindig sötét — ez a design része, nem egy világos/sötét mód kapcsoló. A háttérszín hardkódolása itt helyes. A szemantikus `bg-bg-tinted` token azokhoz a szekciókhoz való, amelyeknek sötét módban másképp kell kinézniük.

---

## 5. feladat: Galéria szekció

A Galéria CSS Gridet használ, amelyben egy kép két sort foglal el, valamint minden fotón szépiahatásból valódi színbe való hover átmenet látható.

### 5.1. lépés: A szekció keret hozzáadása

A Felszerelés `</section>` után:

```html
<section id="galeria" class="py-20 bg-tura-green-600">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-white mb-6">Túráim képekben...</h2>

  </div>
</section>
```

Mentés. Megjelenik egy tömör zöld sáv.

### 5.2. lépés: A rács hozzáadása az első két képpel

A `<div>` belsejébe, a `<h2>` után:

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

Mentés. Két szépiaszínű fotó jelenik meg. Vigyd az egeret az egyikre — 1 másodperc alatt átmegy teljes színes megjelenítésbe és enyhén nagyobb lesz.

> **Átmenet időtartama**: A `duration-1000` (1 másodperc) miatt a szépiahatásból valódi színbe való átmenet simának és tudatosnak érződik. Egy rövidebb időtartam, például a `duration-300`, hirtelen érzést keltene egy színszűrő váltásnál.

### 5.3. lépés: A maradék fotók hozzáadása, beleértve az átnyúló cellát

Cseréld ki a teljes `<div class="grid ...">` elemet a kész galériára:

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

**Hogyan működik az átnyúló cella**: A `row-start-1 row-end-3` a `gallery04.jpg` fájlon azt mondja a CSS Gridnek, hogy ezt a képet az 1. sor vonaltól a 3. sor vonalig helyezze el — két sort foglalva el. Ez csak a 3-oszlopos elrendezésben (`lg:grid-cols-3`) érvényesül. Mobilon és tableten a képek normálisan egymás alá rendeződnek.

### 5.4. lépés: A galéria ellenőrzése

- Mind az öt fotó szépia tónusban jelenik meg
- Bármelyik fotó fölé vive az egeret 1 másodperc alatt átmegy teljes színes megjelenítésbe
- Széles asztali ablakon (`lg` töréspont), a `gallery04` magasabbnak kell lennie a többinél — két sor magasságát foglalja el
- Szűkítsd a böngészőt, hogy lásd, hogyan rendeződnek egymás alá a képek 1 oszlopba

---

## 6. feladat: Verziókövetés Gittel

### 6.1. lépés: Feature branch létrehozása

```bash
git checkout -b feat/module-2-workshop
```

### 6.2. lépés: A munka commitolása

```bash
git add .
git commit -m "2. modul befejezve: előnyök, útvonalak, felszerelés és galéria szekciók"
```

### 6.3. lépés: Merge és push

```bash
git checkout main
git merge feat/module-2-workshop
git push origin main
```

> **Tipp:** Egy valódi projektben minden szekció elkészítése után commitolnál, nem csak a modul végén. A kisebb commitok megkönnyítik annak megtalálását, hogy hol vezettük be a hibát.

---

## A műhelymunka kész

Négy tartalmi szekciót adtál a VadonSzava oldalhoz:

- ✅ Előnyök rács — 3-oszlopos reszponzív elrendezés, hover emelkedés hatás
- ✅ Túraútvonalak — kártyarács `group`/`group-hover:scale-105` képzoommal
- ✅ Felszerelés — 5-oszlopos rács sötét háttéren backdrop-blur glassmorphism effekttel
- ✅ Galéria — átnyúló rácscella + szépiahatásból valódi színbe való hover átmenet
- ✅ Projekt feltöltve GitHubra

**Következő modul**: Rólam szekció, Hírlevél és Lábléc megépítése — majd JavaScript sötét mód kapcsoló hozzáadása és a teljes reszponzív elrendezés átvizsgálása.

---

## Kiegészítő feladat (Opcionális)

A PRD a `csovanyos.jpg` fájlt fel nem használt képként sorolja fel a projektben (§9 Ismert hiányosságok). Adj hozzá egy negyedik útvonalkártyát a "Csoványos" útvonalhoz ezzel a képpel. Nézd meg a meglévő három útvonalkártyát a struktúráért, és válassz nehézségi szintet, útvonalnevet és reális metaadatokat.

Ez szándékosan hallgatói feladatként van feltüntetve — a kép már megtalálható a kurzus erőforrásokban a `final-solution/public/img/csovanyos.jpg` elérési úton.
