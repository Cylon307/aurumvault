import { createSignal, Show, For, onMount } from 'solid-js'
import { useNavigate, useSearchParams } from '@solidjs/router'
import { A } from '@solidjs/router'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { currentUser, isAuthenticated, logout, updateProfile, fetchOrders, orders, fetchWishlist, wishlist, toggleWishlist, products, fetchProducts } from '../stores/index.js'

export default function ProfilePage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = createSignal('profile')
  const [editing, setEditing] = createSignal(false)
  const [saved, setSaved] = createSignal(false)

  if (!isAuthenticated()) {
    navigate('/login')
    return null
  }

  onMount(() => {
    fetchOrders()
    fetchWishlist()
    if (products().length === 0) fetchProducts()
  })

  const [form, setForm] = createSignal({
    name:    currentUser()?.name || '',
    email:   currentUser()?.email || '',
    phone:   '',
    address: '',
  })

  async function handleSave(e) {
    e.preventDefault()
    try {
      await updateProfile({ name: form().name, address: form().address })
      setSaved(true)
      setEditing(false)
      setTimeout(() => setSaved(false), 2000)
    } catch (err) {
      console.error('Greška pri ažuriranju:', err)
    }
  }

  const tabs = ['profile', 'orders', 'wishlist', 'addresses', 'security']
  const tabLabels = { profile: 'Profil', orders: 'Narudžbe', wishlist: '♥ Wishlist', addresses: 'Adrese', security: 'Sigurnost' }

  return (
    <div class="min-h-screen bg-aurum-black">
      <Navbar />
      <div class="max-w-5xl mx-auto px-4 py-10 page-enter">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-16 h-16 bg-aurum-gold rounded-full flex items-center justify-center">
            <span class="text-aurum-black font-display font-black text-2xl">
              {currentUser()?.name?.charAt(0)}
            </span>
          </div>
          <div>
            <h1 class="font-display text-2xl font-bold text-white">{currentUser()?.name}</h1>
            <p class="text-aurum-muted text-sm">{currentUser()?.email}</p>
            <span class={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
              currentUser()?.role === 'admin' ? 'bg-aurum-gold text-aurum-black font-bold' : 'bg-aurum-dark border border-aurum-border text-aurum-muted'
            }`}>
              {currentUser()?.role === 'admin' ? 'Administrator' : 'Korisnik'}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div class="flex border-b border-aurum-border mb-8 overflow-x-auto">
          {tabs.map(tab => (
            <button onclick={() => setActiveTab(tab)}
              class={`px-5 py-3 text-sm font-display tracking-wider whitespace-nowrap transition-colors ${
                activeTab() === tab ? 'text-aurum-gold border-b-2 border-aurum-gold' : 'text-aurum-muted hover:text-aurum-text'
              }`}>
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        <Show when={activeTab() === 'profile'}>
          <div class="card-dark p-6 max-w-lg">
            <div class="flex items-center justify-between mb-6">
              <h2 class="section-title text-base">Osobni podaci</h2>
              <button onclick={() => setEditing(!editing())}
                class="text-xs text-aurum-gold border border-aurum-gold px-3 py-1.5 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all">
                {editing() ? 'Odustani' : 'Uredi'}
              </button>
            </div>
            <form onsubmit={handleSave} class="space-y-4">
              {[
                { key: 'name',    label: 'Ime i prezime' },
                { key: 'email',   label: 'Email' },
                { key: 'phone',   label: 'Telefon' },
                { key: 'address', label: 'Adresa' },
              ].map(field => (
                <div>
                  <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">{field.label}</label>
                  <input
                    type="text"
                    value={form()[field.key]}
                    oninput={e => setForm({...form(), [field.key]: e.target.value})}
                    disabled={!editing()}
                    class={`input-dark w-full px-4 py-2.5 text-sm ${!editing() ? 'opacity-60 cursor-not-allowed' : ''}`}
                  />
                </div>
              ))}
              <Show when={editing()}>
                <button type="submit" class="btn-gold w-full py-2.5 rounded-lg text-sm">
                  Spremi promjene
                </button>
              </Show>
              <Show when={saved()}>
                <p class="text-green-400 text-xs text-center">✓ Promjene su spremljene</p>
              </Show>
            </form>
          </div>
        </Show>

        {/* Orders Tab */}
        <Show when={activeTab() === 'orders'}>
          <div class="space-y-4">
            <h2 class="section-title text-base mb-4">Povijest narudžbi</h2>
            <Show when={orders().length === 0}>
              <p class="text-aurum-muted text-sm">Nemaš još narudžbi.</p>
            </Show>
            <For each={orders()}>{order => (
              <div class="card-dark p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p class="font-bold text-aurum-gold">#{order.id?.slice(0,8).toUpperCase()}</p>
                  <p class="text-aurum-muted text-sm">
                    {order.items?.map(i => i.name).join(', ') || 'Artikli'}
                  </p>
                  <p class="text-aurum-muted text-xs">
                    {order.shippingAddress?.city || ''}
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-aurum-gold font-bold">${Number(order.total || 0).toFixed(2)}</p>
                  <span class={`text-xs px-2 py-0.5 rounded-full ${
                    order.status === 'Delivered'   ? 'bg-green-900 text-green-400' :
                    order.status === 'Processing'  ? 'bg-yellow-900 text-yellow-400' :
                    order.status === 'Shipped'     ? 'bg-blue-900 text-blue-400' :
                    'bg-aurum-dark text-aurum-muted'
                  }`}>{order.status || 'Processing'}</span>
                </div>
              </div>
            )}</For>
          </div>
        </Show>

        {/* Wishlist Tab */}
        <Show when={activeTab() === 'wishlist'}>
          <div>
            <h2 class="section-title text-base mb-4">♥ Wishlist</h2>
            <Show when={wishlist().length === 0}>
              <div class="card-dark p-10 text-center">
                <p class="text-aurum-muted mb-3">Wishlist je prazan.</p>
                <A href="/catalog" class="btn-gold px-6 py-2.5 rounded-lg text-sm inline-block">
                  Istraži katalog
                </A>
              </div>
            </Show>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <For each={products().filter(p => wishlist().includes(p.id))}>{product => (
                <A href={`/product/${product.id}`} class="card-dark overflow-hidden group hover:border-aurum-gold transition-all duration-300">
                  <div class="aspect-square overflow-hidden bg-aurum-dark relative">
                    <img src={product.images?.[0]} alt={product.name}
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <button
                      onclick={async e => { e.preventDefault(); await toggleWishlist(product.id) }}
                      class="absolute top-2 right-2 w-8 h-8 bg-aurum-black/70 rounded-full flex items-center justify-center text-red-400 hover:bg-red-900/50 transition-colors">
                      ♥
                    </button>
                  </div>
                  <div class="p-3">
                    <p class="text-xs font-display text-aurum-text">{product.name}</p>
                    <p class="text-aurum-gold text-sm font-bold mt-1">${product.price?.toLocaleString()}</p>
                  </div>
                </A>
              )}</For>
            </div>
          </div>
        </Show>
        <Show when={activeTab() === 'addresses'}>
          <div class="card-dark p-6 max-w-lg">
            <h2 class="section-title text-base mb-4">Adrese dostave</h2>
            <div class="border border-aurum-gold rounded-lg p-4 mb-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs badge-exclusive">Zadana</span>
              </div>
              <p class="text-aurum-text text-sm">{currentUser()?.name}</p>
              <p class="text-aurum-muted text-sm">Ilica 1, Zagreb, 10000, Croatia</p>
            </div>
            <button class="text-aurum-gold text-xs border border-aurum-border px-4 py-2 rounded hover:border-aurum-gold transition-colors">
              + Dodaj novu adresu
            </button>
          </div>
        </Show>

        {/* Security Tab */}
        <Show when={activeTab() === 'security'}>
          <div class="card-dark p-6 max-w-lg">
            <h2 class="section-title text-base mb-6">Sigurnost</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Trenutna lozinka</label>
                <input type="password" class="input-dark w-full px-4 py-2.5 text-sm" placeholder="••••••••" />
              </div>
              <div>
                <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Nova lozinka</label>
                <input type="password" class="input-dark w-full px-4 py-2.5 text-sm" placeholder="••••••••" />
              </div>
              <div>
                <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Potvrdi novu lozinku</label>
                <input type="password" class="input-dark w-full px-4 py-2.5 text-sm" placeholder="••••••••" />
              </div>
              <button class="btn-gold w-full py-2.5 rounded-lg text-sm">Promijeni lozinku</button>
            </div>
            <div class="mt-6 pt-6 border-t border-aurum-border">
              <button onclick={() => { logout(); navigate('/login') }}
                class="text-red-400 text-sm hover:text-red-300 transition-colors">
                Odjava s računa →
              </button>
            </div>
          </div>
        </Show>
      </div>
      <Footer />
    </div>
  )
}
