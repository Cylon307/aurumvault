# AurumVault — Ekskluzivni Webshop

![AurumVault](https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&h=400&fit=crop)

## O aplikaciji

Aplikacija predstavlja moderan, vizualno upečatljiv i funkcionalan webshop dizajniran u prepoznatljivoj kombinaciji **crne i žute boje**. Crna boja dominira pozadinom, stvarajući elegantan, minimalistički i pomalo misteriozan vizualni okvir, dok je tekst istaknut svijetlećim žutim highlight efektom koji daje snažan kontrast i futuristički identitet.

Ova kombinacija boja nije odabrana slučajno — psihološki gledano, crna simbolizira luksuz, moć i profesionalnost, dok žuta privlači pažnju, potiče energiju i stvara osjećaj dinamike. Zajedno, one čine vizualni stil koji se izdvaja od klasičnih bijelih i minimalističkih e-commerce rješenja te webshopu daju prepoznatljiv i moderan karakter.

---

## Ulazna lozinka

Jedna od ključnih posebnosti aplikacije je **ulazna lozinka**. Prije nego što korisnik uopće vidi webshop, mora unijeti lozinku koju vlasnik određuje. Ova funkcionalnost služi kao dodatna razina privatnosti i ekskluzivnosti — webshop može biti namijenjen:

- Zatvorenoj grupi kupaca
- Testnoj fazi
- VIP korisnicima
- Ograničenoj distribuciji proizvoda

Time se stvara osjećaj posebnosti i kontroliranog pristupa, što može biti iznimno korisno za brendove koji žele zadržati određenu dozu tajnovitosti.

---

## Korisnici bez prijave vs. prijavljeni korisnici

**Korisnici bez prijave** mogu slobodno pregledavati sve proizvode, dodavati ih u košaricu i izvršiti narudžbu. Međutim:
- ❌ Nemaju mogućnost korištenja kupona za popust
- ❌ Svaki put moraju ponovno unositi adresu i podatke o plaćanju

**Prijavljeni korisnici** dobivaju niz pogodnosti:
- ✅ Mogu spremiti svoju adresu i podatke
- ✅ Pristup kuponima za popust
- ✅ Personalizirane ponude i obavijesti
- ✅ Wishlist funkcionalnost
- ✅ Povijest narudžbi

---

## Scenarij korištenja

```
1. Korisnik otvara webshop
   └── Prikazuje se Password Gate
       └── Unosi lozinku → ulazi u webshop

2. Početna stranica (Katalog)
   └── Pregled kategorija i istaknutih proizvoda
       └── Navigacija s crnom pozadinom i zlatnim efektima

3. Pregled proizvoda
   └── Odabir kategorije
       └── Stranica proizvoda → košarica

4. Checkout
   ├── Bez prijave: unosi adresu + plaćanje, bez kupona
   └── S prijavom: podaci su spremljeni, može koristiti kupon

5. Potvrda narudžbe
   └── Popup s brojem narudžbe i detaljima
```

---

## Ciljni korisnici

- 🛍️ Kupci koji žele **brzu kupovinu bez registracije**
- 👑 Korisnici koji žele **pogodnosti i popuste** kroz prijavu
- 🔐 **VIP kupci** ili zatvorene grupe kojima je pristup ograničen lozinkom
- 🎮 Mlađa publika koja preferira **tamne, modernije i gaming-inspirirane** dizajne

---

## Problemi koje aplikacija rješava

| Problem | Rješenje |
|---------|----------|
| Nekontroliran pristup webshopu | Ulazna lozinka |
| Spora kupovina | Kupovina bez registracije |
| Nema motivacije za registraciju | Kuponi i pogodnosti za prijavljene |
| Ponavljanje unosa podataka | Spremanje adrese i kartice |
| Generičan dizajn | Crno-zlatna ekskluzivna estetika |

---

## Funkcionalnosti

### Osnovne
| Funkcionalnost | Opis |
|----------------|------|
| Ulazna lozinka | Pristup webshopu samo s lozinkom |
| Pregled proizvoda | Prikaz svih dostupnih proizvoda s detaljima |
| Kategorije | Grupiranje po kategorijama |
| Košarica | Dodavanje, uklanjanje i pregled |
| Kupovina bez prijave | Narudžba bez kreiranja računa |

### Napredne
| Funkcionalnost | Opis |
|----------------|------|
| Registracija i prijava | Firebase Auth |
| Wishlist | Sprema omiljene proizvode |
| Recenzije | Ocjene i komentari na produktima |
| Kuponi za popust | Samo prijavljeni korisnici |
| Korisnički profil | Pregled podataka i narudžbi |
| Pretraga | Po nazivu, opisu, kategoriji, SKU |
| Administratorski panel | Upravljanje svim |

---

## Pokretanje projekta

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy na Firebase Hosting

```bash
npm install firebase
npm install -g firebase-tools
firebase login
npm run build
firebase deploy
# → https://aurumvault-def8b.web.app/
```

---

## Demo podaci

| | Vrijednost |
|---|---|
| 🔑 Lozinka za ulaz | `aurum2025` |
| 👤 User login | `matejmatematika@gmail.com` / `matejmatematika` |
| 👑 Admin login | `admin67@gmail.com` / `admin67` |
| 🏷️ Kupon | `AURUM10` — 10% popusta (samo prijavljeni) |

---

## Stranice

| URL | Stranica |
|-----|----------|
| `/` | Password Gate |
| `/catalog` | Katalog proizvoda |
| `/catalog?filter=exclusive` | Samo ekskluzivni |
| `/catalog?filter=new` | Novi proizvodi |
| `/catalog?search=ring` | Pretraga |
| `/product/:id` | Detalji proizvoda |
| `/login` | Prijava / Registracija |
| `/checkout` | Košarica + Naručivanje |
| `/profile` | Korisnički profil |
| `/admin` | Admin Dashboard |
| `/admin/products/new` | Dodaj proizvod |
| `/admin/products/edit/:id` | Uredi proizvod |

---

## Što je napravljeno ✅

### Autentifikacija
- [x] Registracija korisnika (Firebase Auth + Firestore)
- [x] Prijava i odjava
- [x] Oporavak lozinke (email)
- [x] Razlikovanje uloga: user / admin
- [x] Korisnički profil (pregled i uređivanje)

### Firestore operacije
- [x] Čitanje proizvoda iz Firestora
- [x] Dodavanje novog proizvoda (admin)
- [x] Uređivanje proizvoda (admin)
- [x] Brisanje proizvoda (admin)
- [x] Spremanje narudžbi u Firestore
- [x] Čitanje narudžbi (korisnik vidi svoje, admin sve)
- [x] Ažuriranje statusa narudžbe (admin)
- [x] Validacija kupona iz Firestora
- [x] Wishlist (sprema se u Firestore)
- [x] Recenzije proizvoda (sprema se u Firestore)

### Korisničko sučelje
- [x] Password Gate — ulazna lozinka
- [x] Katalog s filterima (kategorija, cijena, members only)
- [x] Pretraga po nazivu, opisu, kategoriji, SKU
- [x] New Arrivals, Exclusives, Collections filteri
- [x] Stranica detalja proizvoda
- [x] Wishlist gumb na produktima
- [x] Recenzije i ocjene na produktima
- [x] Košarica (dodaj, ukloni, promijeni količinu)
- [x] 4-koračni checkout
- [x] Popup potvrda narudžbe
- [x] Kuponi za popust (samo prijavljeni)
- [x] Admin dashboard s narudžbama i statistikama
- [x] Admin forma za upravljanje proizvodima
- [x] Session timer s auto-logout

### Tehničko
- [x] SolidJS reaktivnost (signali, memo, effects)
- [x] Responzivni dizajn (mobile + desktop)
- [x] TailwindCSS + DaisyUI
- [x] Firebase Hosting konfiguracija

## Što nije napravljeno ❌

- [ ] Plaćanje karticom (Stripe integracija)
- [ ] Email potvrda narudžbe
- [ ] Push notifikacije

---

## Struktura projekta

```
aurumvault/
├── index.html
├── firebase.json
├── package.json
└── src/
    ├── index.jsx           ← Router + entry point
    ├── firebase.js         ← Firebase konfiguracija
    ├── components/
    │   ├── Navbar.jsx      ← Navigacija + search
    │   └── Footer.jsx
    ├── pages/
    │   ├── PasswordGate.jsx
    │   ├── Catalog.jsx
    │   ├── ProductPage.jsx
    │   ├── LoginPage.jsx
    │   ├── CheckoutPage.jsx
    │   ├── ProfilePage.jsx
    │   ├── AdminDashboard.jsx
    │   └── AdminProductForm.jsx
    ├── stores/
    │   └── index.js        ← Globalni state + Firebase funkcije
    └── styles/
        └── index.css
```

---

*© 2025 AurumVault. Luxury curated for the discerning few.*