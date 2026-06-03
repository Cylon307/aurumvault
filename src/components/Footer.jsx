import { A } from '@solidjs/router'

export default function Footer() {
  return (
    <footer class="bg-aurum-dark border-t border-aurum-border mt-20">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center">
                <span class="text-aurum-black font-display font-black text-sm">A</span>
              </div>
              <span class="font-display font-bold text-aurum-gold tracking-widest">AurumVault</span>
            </div>
            <p class="text-aurum-muted text-sm leading-relaxed">
              Pažljivo odabrano blago s sigurnom dostavom i vrhunskom uslugom.
            </p>
          </div>

          <div>
            <h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Istraži</h4>
            <ul class="space-y-2 text-sm text-aurum-muted">
              <li><A href="/catalog" class="hover:text-aurum-gold transition-colors">Kolekcije</A></li>
              <li><A href="/catalog?filter=exclusive" class="hover:text-aurum-gold transition-colors">Ekskluzivno</A></li>
              <li><A href="/login" class="hover:text-aurum-gold transition-colors">Prijava / Registracija</A></li>
              <li><a href="#" class="hover:text-aurum-gold transition-colors">Novosti</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Podrška</h4>
            <ul class="space-y-2 text-sm text-aurum-muted">
              <li><a href="#" class="hover:text-aurum-gold transition-colors">Kontaktirajte nas</a></li>
              <li><a href="#" class="hover:text-aurum-gold transition-colors">Dostava i povrat</a></li>
              <li><a href="#" class="hover:text-aurum-gold transition-colors">Jamstvo</a></li>
              <li><a href="#" class="hover:text-aurum-gold transition-colors">Česta pitanja</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-display text-sm font-bold text-aurum-gold tracking-widest uppercase mb-4">Povežite se</h4>
            <div class="flex gap-3 mb-4">
              {['IG','TW','YT'].map(s => (
                <a href="#" class="w-8 h-8 border border-aurum-border rounded flex items-center justify-center text-xs text-aurum-muted hover:border-aurum-gold hover:text-aurum-gold transition-all">
                  {s}
                </a>
              ))}
            </div>
            <p class="text-aurum-muted text-xs">Kontakt: concierge@aurumvault.com</p>
            <div class="mt-4">
              <p class="text-aurum-muted text-xs mb-2">Pretplatite se za ekskluzivne preglede</p>
              <div class="flex gap-2">
                <input type="email" placeholder="Email adresa" class="input-dark text-xs px-3 py-2 flex-1 min-w-0" />
                <button class="btn-gold px-3 py-2 text-xs rounded">→</button>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-aurum-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-aurum-muted text-xs">© 2025 AurumVault. Sva prava pridržana.</p>
          <div class="flex gap-6 text-xs text-aurum-muted">
            <a href="#" class="hover:text-aurum-gold transition-colors">Pravila privatnosti</a>
            <a href="#" class="hover:text-aurum-gold transition-colors">Uvjeti korištenja</a>
            <a href="#" class="hover:text-aurum-gold transition-colors">Sigurnost</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
