import { createSignal, For, Show, createMemo, onMount, createEffect } from 'solid-js'
import { A, useNavigate, useSearchParams } from '@solidjs/router'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { products, fetchProducts, CATEGORIES, addToCart, productsLoading } from '../stores/index.js'

const CATEGORIES_HR = {
  'Sve': 'Sve kategorije', 'Rings': 'Prstenje', 'Necklaces': 'Ogrlice',
  'Watches': 'Satovi', 'Accessories': 'Dodaci', 'Art Objects': 'Umjetnički predmeti'
}
const BADGES_HR = {
  'Exclusive': 'Ekskluzivno', 'Members Only': 'Samo za članove',
  'Limited': 'Ograničeno', 'Sale': 'Rasprodaja'
}

function ProductCard({ product }) {
  const navigate = useNavigate()
  const [added, setDodano] = createSignal(false)

  function handleAddToCart(e) {
    e.stopPropagation()
    addToCart(product)
    setDodano(true)
    setTimeout(() => setDodano(false), 1500)
  }

  const badge = product.badge ? (BADGES_HR[product.badge] || product.badge) : null

  return (
    <div class="product-card group" onclick={() => navigate(`/product/${product.id}`)}>
      <div class="relative overflow-hidden aspect-square bg-aurum-dark">
        <img src={product.images?.[0]} alt={product.name}
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-aurum-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        <div class="absolute top-2 left-2 flex flex-col gap-1">
          {badge && <span class={`text-xs font-bold px-2 py-0.5 rounded-full ${
            product.badge === 'Sale' ? 'bg-green-600 text-white' :
            product.badge?.startsWith('Limited') ? 'bg-red-600 text-white' :
            'badge-exclusive'
          }`}>{badge}</span>}
        </div>

        {product.stock <= 3 && (
          <div class="absolute top-2 right-2">
            <span class="bg-red-600/80 text-white text-xs px-2 py-0.5 rounded-full">
              Ostalo: {product.stock}
            </span>
          </div>
        )}

        <div class="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <button onclick={e => { e.stopPropagation(); navigate(`/product/${product.id}`) }}
            class="flex-1 bg-aurum-dark/90 text-aurum-gold text-xs py-2 rounded border border-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all">
            Brzi pregled
          </button>
        </div>
      </div>

      <div class="p-4">
        <h3 class="font-display text-sm font-semibold text-aurum-text group-hover:text-aurum-gold transition-colors leading-snug mb-1">
          {product.name}
        </h3>
        <p class="text-aurum-muted text-xs mb-3">{product.description?.substring(0, 60)}...</p>
        <div class="flex artikala-center justify-between">
          <div>
            {product.salePrice ? (
              <div class="flex artikala-center gap-2">
                <span class="text-aurum-gold font-bold">${product.salePrice.toLocaleString()}</span>
                <span class="text-aurum-muted text-xs line-through">${product.price?.toLocaleString()}</span>
              </div>
            ) : (
              <span class="text-aurum-gold font-bold">${product.price?.toLocaleString()}</span>
            )}
            <p class="text-aurum-muted text-xs">Šifra: {product.sku}</p>
          </div>
          <button onclick={handleAddToCart}
            class={`text-xs px-3 py-2 rounded border transition-all ${
              added() ? 'bg-green-600 border-green-600 text-white' :
              'border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black'
            }`}>
            {added() ? '✓ Dodano' : 'U košaricu'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Catalog() {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = createSignal('Sve')
  const [priceMin, setPriceMin] = createSignal(0)
  const [priceMax, setPriceMax] = createSignal(15000)
  const [membersOnly, setMembersOnly] = createSignal(false)
  const [sortBy, setSortBy] = createSignal('Istaknuto')
  const [view, setView] = createSignal('grid')
  const [search, setSearch] = createSignal('')

  onMount(() => fetchProducts())

  createEffect(() => {
    setCategory('Sve'); setMembersOnly(false); setSearch(''); setSortBy('Istaknuto')
    if (searchParams.search) setSearch(searchParams.search)
    if (searchParams.filter === 'exclusive') setMembersOnly(true)
    if (searchParams.filter === 'new') setSortBy('Najnovije')
  })

  const pageTitle = createMemo(() => {
    if (searchParams.search) return `Rezultati za "${searchParams.search}"`
    if (searchParams.filter === 'exclusive') return 'Ekskluzivno'
    if (searchParams.filter === 'new') return 'Novi dolasci'
    return 'Sve kolekcije'
  })

  const filtered = createMemo(() => {
    let artikala = products()
    if (search()) {
      const q = search().toLowerCase()
      artikala = artikala.filter(p =>
        p.name?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.sku?.toLowerCase().includes(q)
      )
    }
    if (category() !== 'Sve') artikala = artikala.filter(p => p.category === category())
    if (membersOnly()) artikala = artikala.filter(p => p.membersOnly)
    artikala = artikala.filter(p => { const price = p.salePrice || p.price; return price >= priceMin() && price <= priceMax() })
    if (sortBy() === 'Cijena: Niža') artikala = [...artikala].sort((a,b) => (a.salePrice||a.price) - (b.salePrice||b.price))
    if (sortBy() === 'Cijena: Viša') artikala = [...artikala].sort((a,b) => (b.salePrice||b.price) - (a.salePrice||a.price))
    if (sortBy() === 'Najnovije') artikala = [...artikala].sort((a,b) => (b.createdAt?.seconds||0) - (a.createdAt?.seconds||0))
    return artikala
  })

  return (
    <div class="min-h-screen bg-aurum-black">
      <Navbar />

      <div class="relative bg-aurum-dark border-b border-aurum-border overflow-hidden">
        <div class="absolute inset-0 opacity-10 pointer-events-none"
          style="background: radial-gradient(ellipse at 70% 50%, rgba(240,192,64,0.4) 0%, transparent 70%)"></div>
        <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 artikala-center">
          <div class="md:col-span-2">
            <span class="badge-exclusive mb-2 inline-block">Odabrana kolekcija</span>
            <h1 class="font-display text-3xl font-bold text-white leading-tight mt-2">
              Aurum Noir —<br />
              <span class="text-aurum-gold gold-glow">Serija Ponoćnih Skulptura</span>
            </h1>
            <p class="text-aurum-muted mt-3 text-sm leading-relaxed max-w-lg">
              Ekskluzivna limitirana serija ručno izrađenih skulptura. Članovi imaju rani pristup i besplatne certifikate autentičnosti.
            </p>
            <button onclick={() => setMembersOnly(true)} class="btn-gold mt-5 px-6 py-3 rounded-lg text-xs">
              Istraži kolekciju
            </button>
          </div>
          <div class="hidden md:flex flex-col gap-3">
            <div class="card-dark p-4">
              <span class="text-aurum-gold text-xs font-bold">Brza ponuda</span>
              <p class="text-aurum-text text-sm mt-1">24-satni pregled za članove</p>
            </div>
            <div class="card-dark p-4">
              <span class="text-aurum-gold text-xs font-bold">Certifikat autentičnosti</span>
              <p class="text-aurum-muted text-xs mt-1">Besplatno uz odabrane kupovine</p>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        <aside class="hidden lg:block w-56 flex-shrink-0">
          <div class="sticky top-24 space-y-6">
            <div>
              <h3 class="text-xs font-bold text-aurum-gold uppercase tracking-widest mb-3">Filtri</h3>
            </div>
            <div>
              <h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Kategorija</h4>
              <select value={category()} onchange={e => setCategory(e.target.value)}
                class="input-dark w-full px-3 py-2 text-sm">
                <option value="Sve">Sve kategorije</option>
                <option value="Rings">Prstenje</option>
                <option value="Necklaces">Ogrlice</option>
                <option value="Watches">Satovi</option>
                <option value="Accessories">Dodaci</option>
                <option value="Art Objects">Umjetnički predmeti</option>
              </select>
            </div>
            <div>
              <h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Raspon cijena</h4>
              <div class="flex artikala-center gap-2">
                <input type="number" value={priceMin()} oninput={e => setPriceMin(+e.target.value)}
                  class="input-dark w-full px-2 py-1.5 text-xs" placeholder="Min" />
                <span class="text-aurum-muted">–</span>
                <input type="number" value={priceMax()} oninput={e => setPriceMax(+e.target.value)}
                  class="input-dark w-full px-2 py-1.5 text-xs" placeholder="Maks" />
              </div>
            </div>
            <div>
              <label class="flex artikala-center gap-2 cursor-pointer">
                <input type="checkbox" checked={membersOnly()} onchange={e => setMembersOnly(e.target.checked)}
                  class="checkbox checkbox-warning checkbox-sm" />
                <span class="text-xs text-aurum-text">Samo za članove</span>
              </label>
            </div>
            <button onclick={() => { setCategory('Sve'); setPriceMin(0); setPriceMax(15000); setMembersOnly(false) }}
              class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors underline">
              Poništi filtere
            </button>
            <div class="border-t border-aurum-border pt-4">
              <h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Odabrani proizvodi</h4>
              <For each={products().slice(0, 2)}>{p => (
                <A href={`/product/${p.id}`} class="flex artikala-center gap-3 mb-3 hover:opacity-80 transition-opacity">
                  <img src={p.images?.[0]} alt={p.name} class="w-10 h-10 rounded object-cover" />
                  <div>
                    <p class="text-xs text-aurum-text leading-tight">{p.name}</p>
                    <p class="text-xs text-aurum-muted">Ekskluzivno</p>
                  </div>
                </A>
              )}</For>
            </div>
          </div>
        </aside>

        <main class="flex-1">
          <Show when={productsLoading()}>
            <div class="flex artikala-center justify-center py-20">
              <div class="text-aurum-gold text-sm animate-pulse">Učitavanje proizvoda...</div>
            </div>
          </Show>
          <Show when={!productsLoading()}>
            <div class="flex artikala-center justify-between mb-6">
              <div>
                <h2 class="section-title text-lg">{pageTitle()}</h2>
                <p class="text-aurum-muted text-sm mt-1">Prikazuje se {filtered().length} artikala</p>
              </div>
              <div class="flex artikala-center gap-3">
                <select value={sortBy()} onchange={e => setSortBy(e.target.value)}
                  class="input-dark px-3 py-1.5 text-xs">
                  <option>Istaknuto</option>
                  <option>Najnovije</option>
                  <option>Cijena: Niža</option>
                  <option>Cijena: Viša</option>
                </select>
                <div class="flex border border-aurum-border rounded overflow-hidden">
                  <button onclick={() => setView('grid')}
                    class={`px-3 py-1.5 text-xs transition-colors ${view()==='grid' ? 'bg-aurum-gold text-aurum-black' : 'text-aurum-muted hover:text-aurum-gold'}`}>
                    Mreža
                  </button>
                  <button onclick={() => setView('list')}
                    class={`px-3 py-1.5 text-xs transition-colors ${view()==='list' ? 'bg-aurum-gold text-aurum-black' : 'text-aurum-muted hover:text-aurum-gold'}`}>
                    Listaa
                  </button>
                </div>
              </div>
            </div>

            <div class={`grid gap-5 ${view()==='grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              <For each={filtered()}>{product => <ProductCard product={product} />}</For>
            </div>

            {filtered().length === 0 && (
              <div class="text-center py-20 text-aurum-muted">
                <p class="text-lg mb-2">Nema pronađenih proizvoda</p>
                <p class="text-sm">Pokušajte prilagoditi filtere</p>
              </div>
            )}
          </Show>
        </main>
      </div>
      <Footer />
    </div>
  )
}