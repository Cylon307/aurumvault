import { createSignal } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import { setSiteUnlocked, SITE_PASSCODE } from '../stores/index.js'

export default function PasswordGate() {
  const navigate = useNavigate()
  const [passcode, setPasscode] = createSignal('')
  const [error, setError] = createSignal(false)
  const [loading, setLoading] = createSignal(false)

  async function handleUnlock(e) {
    e.preventDefault()
    setLoading(true); setError(false)
    await new Promise(r => setTimeout(r, 800))
    if (passcode() === SITE_PASSCODE) {
      setSiteUnlocked(true)
      navigate('/catalog')
    } else {
      setError(true)
    }
    setLoading(false)
  }

  return (
    <div class="min-h-screen bg-aurum-black flex flex-col">
      <div class="flex items-center justify-between px-6 py-4 border-b border-aurum-border">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center">
            <span class="text-aurum-black font-display font-black text-sm">A</span>
          </div>
          <span class="font-display font-bold text-aurum-gold tracking-widest text-lg gold-glow">AurumVault</span>
        </div>
        <div class="flex items-center gap-6 text-xs text-aurum-muted">
          <span class="flex items-center gap-2">
            Pristupačnost
            <span class="w-8 h-4 bg-aurum-gold rounded-full inline-block"></span>
          </span>
          <span class="hidden sm:block">Visoki kontrast</span>
          <span class="hidden sm:block">Veći tekst</span>
        </div>
      </div>

      <div class="flex-1 flex items-center justify-center px-4 py-12">
        <div class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center page-enter">

          <div class="hidden lg:block">
            <div class="relative rounded-xl overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500" alt="Trezor"
                class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-aurum-black via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div class="gold-border-anim bg-aurum-card rounded-2xl p-8">
            <div class="text-center mb-8">
              <span class="badge-exclusive mb-3 inline-block">Ekskluzivno</span>
              <h1 class="font-display text-2xl font-bold text-white leading-tight mt-2">
                Ekskluzivni pristup —<br />unesite lozinku
              </h1>
              <p class="text-aurum-muted text-sm mt-3 leading-relaxed">
                Ova stranica dostupna je samo odobrenim članovima. Unesite lozinku za pristup privatnom katalogu AurumVaulta.
              </p>
            </div>

            <form onsubmit={handleUnlock}>
              <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">
                Lozinka za pristup
              </label>
              <input type="password" placeholder="Unesite lozinku"
                value={passcode()}
                oninput={e => { setPasscode(e.target.value); setError(false) }}
                class={`input-dark w-full px-4 py-3 text-sm mb-3 ${error() ? 'border-red-500' : ''}`} />

              {error() && (
                <div class="flex items-center justify-between mb-4">
                  <p class="text-red-400 text-xs flex items-center gap-1">
                    <span>⚠</span> Pogrešna lozinka. Pokušajte ponovo.
                  </p>
                  <a href="#" class="text-aurum-gold text-xs hover:underline">Trebate pomoć?</a>
                </div>
              )}

              <button type="submit" disabled={loading()} class="btn-gold w-full py-3 rounded-lg text-sm mt-2">
                {loading() ? 'Provjera...' : 'Otključaj trezor'}
              </button>
            </form>

            <p class="text-center text-aurum-muted text-xs mt-4">
              🔒 Ova lozinka štiti sve stranice AurumVaulta.
            </p>
            <p class="text-center mt-3 text-xs text-aurum-muted">
              Demo lozinka: <span class="text-aurum-gold font-mono">aurum2025</span>
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div class="card-dark p-4">
              <h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Uvjeti pristupa</h3>
              <p class="text-aurum-muted text-xs leading-relaxed">
                Samo za članove. Unosom lozinke potvrđujete da ste ovlašteni za pregledavanje sadržaja AurumVaulta i prihvaćate naše uvjete povjerljivosti.
              </p>
            </div>
            <div class="card-dark p-4">
              <h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Zadnja izmjena</h3>
              <p class="text-aurum-muted text-xs leading-relaxed">
                3. ožujka 2025. — Rotaciju lozinke proveo sigurnosni tim.
              </p>
            </div>
            <div class="card-dark p-4">
              <h3 class="text-aurum-gold text-sm font-bold font-display tracking-wider mb-2">Radno vrijeme podrške</h3>
              <p class="text-aurum-muted text-xs leading-relaxed">
                Pon–Pet 09:00–18:00 po GMT-u. Za hitne slučajeve pišite na{' '}
                <a href="mailto:support@aurumvault.com" class="text-aurum-gold hover:underline">support@aurumvault.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-aurum-border px-6 py-4 flex justify-between items-center text-xs text-aurum-muted">
        <span>© 2025 AurumVault. Sva prava pridržana.</span>
        <span>Kontakt: <a href="mailto:contact@aurumvault.com" class="text-aurum-gold hover:underline">contact@aurumvault.com</a></span>
      </div>
    </div>
  )
}
