import { createSignal, Show } from 'solid-js'
import { A, useNavigate } from '@solidjs/router'
import { login, register, resetPassword } from '../stores/index.js'

export default function LoginPage() {
  const navigate = useNavigate()
  const [mode, setMode] = createSignal('login')
  const [email, setEmail] = createSignal('')
  const [password, setPassword] = createSignal('')
  const [name, setName] = createSignal('')
  const [error, setError] = createSignal('')
  const [success, setSuccess] = createSignal('')
  const [loading, setLoading] = createSignal(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(''); setSuccess('')
    setLoading(true)
    try {
      if (mode() === 'login') {
        await login(email(), password())
        navigate('/catalog')
      } else if (mode() === 'register') {
        if (!name()) { setError('Unesite ime i prezime.'); setLoading(false); return }
        await register(name(), email(), password())
        navigate('/catalog')
      } else if (mode() === 'forgot') {
        await resetPassword(email())
        setSuccess(`Upute za oporavak lozinke poslane su na ${email()}`)
      }
    } catch (err) {
      const msgs = {
        'auth/invalid-email': 'Nevažeća email adresa.',
        'auth/user-not-found': 'Korisnik s tim emailom ne postoji.',
        'auth/wrong-password': 'Pogrešna lozinka.',
        'auth/email-already-in-use': 'Email je već registriran.',
        'auth/weak-password': 'Lozinka mora imati najmanje 6 znakova.',
        'auth/too-many-requests': 'Previše pokušaja. Pokušajte kasnije.',
        'auth/invalid-credential': 'Pogrešan email ili lozinka.',
      }
      setError(msgs[err.code] || err.message)
    }
    setLoading(false)
  }

  return (
    <div class="min-h-screen bg-aurum-black flex flex-col">
      <div class="border-b border-aurum-border px-6 py-4 flex items-center justify-between">
        <A href="/catalog" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center">
            <span class="text-aurum-black font-display font-black text-sm">A</span>
          </div>
          <span class="font-display font-bold text-aurum-gold tracking-widest gold-glow">AurumVault</span>
        </A>
        <A href="/catalog" class="text-aurum-muted text-xs hover:text-aurum-gold transition-colors">← Nazad na katalog</A>
      </div>

      <div class="flex-1 flex items-center justify-center px-4 py-12">
        <div class="w-full max-w-md page-enter">
          <div class="gold-border-anim bg-aurum-card rounded-2xl p-8">
            <div class="flex mb-8 border-b border-aurum-border">
              <button onclick={() => { setMode('login'); setError(''); setSuccess('') }}
                class={`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${
                  mode()==='login' ? 'text-aurum-gold border-b-2 border-aurum-gold' : 'text-aurum-muted hover:text-aurum-text'
                }`}>PRIJAVA</button>
              <button onclick={() => { setMode('register'); setError(''); setSuccess('') }}
                class={`flex-1 pb-3 text-sm font-display tracking-wider transition-colors ${
                  mode()==='register' ? 'text-aurum-gold border-b-2 border-aurum-gold' : 'text-aurum-muted hover:text-aurum-text'
                }`}>REGISTRACIJA</button>
            </div>

            <Show when={mode()==='login'}>
              <div class="text-center mb-6">
                <h1 class="font-display text-xl font-bold text-white">Dobrodošli nazad</h1>
                <p class="text-aurum-muted text-sm mt-1">Prijavite se u vaš AurumVault račun</p>
              </div>
            </Show>
            <Show when={mode()==='register'}>
              <div class="text-center mb-6">
                <h1 class="font-display text-xl font-bold text-white">Kreirajte račun</h1>
                <p class="text-aurum-muted text-sm mt-1">Pridružite se AurumVault zajednici</p>
              </div>
            </Show>
            <Show when={mode()==='forgot'}>
              <div class="text-center mb-6">
                <h1 class="font-display text-xl font-bold text-white">Oporavak lozinke</h1>
                <p class="text-aurum-muted text-sm mt-1">Unesite email za slanje uputa</p>
              </div>
            </Show>

            <form onsubmit={handleSubmit} class="space-y-4">
              <Show when={mode()==='register'}>
                <div>
                  <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Ime i prezime</label>
                  <input type="text" value={name()} oninput={e => setName(e.target.value)}
                    placeholder="Vaše ime" class="input-dark w-full px-4 py-3 text-sm" />
                </div>
              </Show>
              <div>
                <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Email</label>
                <input type="email" value={email()} oninput={e => setEmail(e.target.value)}
                  placeholder="vas@email.com" class="input-dark w-full px-4 py-3 text-sm" />
              </div>
              <Show when={mode()!=='forgot'}>
                <div>
                  <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Lozinka</label>
                  <input type="password" value={password()} oninput={e => setPassword(e.target.value)}
                    placeholder="••••••••" class="input-dark w-full px-4 py-3 text-sm" />
                </div>
              </Show>
              <Show when={error()}>
                <p class="text-red-400 text-xs flex items-center gap-1">⚠ {error()}</p>
              </Show>
              <Show when={success()}>
                <p class="text-green-400 text-xs flex items-center gap-1">✓ {success()}</p>
              </Show>
              <button type="submit" disabled={loading()} class="btn-gold w-full py-3 rounded-lg text-sm mt-2">
                {loading() ? 'Učitavanje...' :
                  mode()==='login' ? 'Prijava' :
                  mode()==='register' ? 'Registracija' : 'Pošalji upute'}
              </button>
            </form>

            <Show when={mode()==='login'}>
              <div class="text-center mt-4">
                <button onclick={() => { setMode('forgot'); setError(''); setSuccess('') }}
                  class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">
                  Zaboravili ste lozinku?
                </button>
              </div>
            </Show>
            <Show when={mode()==='forgot'}>
              <div class="text-center mt-4">
                <button onclick={() => setMode('login')} class="text-xs text-aurum-muted hover:text-aurum-gold">
                  ← Nazad na prijavu
                </button>
              </div>
            </Show>
            <Show when={mode()==='register'}>
              <div class="mt-6 pt-4 border-t border-aurum-border">
                <p class="text-xs text-aurum-muted text-center mb-3">Prednosti registracije:</p>
                <div class="space-y-2">
                  {['Spremi adresu i podatke o plaćanju', 'Pristup kuponima za popust', 'Ekskluzivne ponude i rani pristup', 'Povijest narudžbi'].map(b => (
                    <div class="flex items-center gap-2 text-xs text-aurum-muted">
                      <span class="text-aurum-gold">✓</span> {b}
                    </div>
                  ))}
                </div>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </div>
  )
}
