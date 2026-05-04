# AurumVault — Webshop

Luksuzni webshop s crno-zlatnom estetikom, izgrađen na SolidJS + Firebase.

## Pokretanje

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy na Firebase Hosting

```bash
# 1. Instaliraj Firebase CLI (jednom)
npm install -g firebase-tools

# 2. Prijava u Firebase
firebase login

# 3. Build aplikacije
npm run build

# 4. Deploy
firebase deploy

# → Dobit ćeš URL tipa: https://aurumvault.web.app
```

## Demo podaci

| | Vrijednost |
|---|---|
| Lozinka za ulaz | `aurum2025` |
| User login | `user@aurumvault.com` / `user123` |
| Admin login | `admin@aurumvault.com` / tvoja lozinka |
| Kupon | `AURUM10` (10% popusta, samo prijavljeni) |

## Stranice

| URL | Stranica |
|-----|----------|
| `/` | Password Gate |
| `/catalog` | Katalog proizvoda |
| `/product/:id` | Detalji proizvoda |
| `/login` | Prijava / Registracija |
| `/checkout` | Košarica + Naručivanje |
| `/profile` | Korisnički profil |
| `/admin` | Admin Dashboard |
| `/admin/products/new` | Dodaj proizvod |
| `/admin/products/edit/:id` | Uredi proizvod |

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

### Korisničko sučelje
- [x] Password Gate — ulazna lozinka
- [x] Katalog s filterima (kategorija, cijena, members only)
- [x] Stranica detalja proizvoda
- [x] Košarica (dodaj, ukloni, promijeni količinu)
- [x] 4-koračni checkout (košarica → dostava → plaćanje → potvrda)
- [x] Kuponi za popust (samo prijavljeni korisnici)
- [x] Admin dashboard s narudžbama i statistikama
- [x] Admin forma za upravljanje proizvodima

### Tehničko
- [x] SolidJS reaktivnost (signali, memo, effects)
- [x] Responzivni dizajn (mobile + desktop)
- [x] TailwindCSS + DaisyUI
- [x] Firebase Hosting konfiguracija

## Što nije napravljeno ❌

- [ ] Plaćanje karticom (Stripe integracija)
- [ ] Upload slika (Firebase Storage) — trenutno URL
- [ ] Email potvrda narudžbe
- [ ] Push notifikacije
- [ ] Wishlist funkcionalnost
- [ ] Recenzije proizvoda
- [ ] Napredna pretraga

## Struktura projekta

```
src/
├── components/      → Navbar, Footer
├── pages/           → sve stranice
├── stores/index.js  → globalni state + Firebase funkcije
├── styles/index.css → Tailwind + custom CSS
├── firebase.js      → Firebase konfiguracija
└── index.jsx        → Router + entry point
```
