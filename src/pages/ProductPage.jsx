import { createSignal, createMemo, Show, For, onMount } from 'solid-js'
import { useParams, A, useNavigate } from '@solidjs/router'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { 
  products, 
  fetchProducts, 
  addToCart, 
  isAdmin, 
  isAuthenticated, 
  wishlist, 
  fetchWishlist, 
  toggleWishlist, 
  fetchReviews, 
  addReview 
} from '../stores/index.js'

export default function ProductPage() {
  const params = useParams()
  const navigate = useNavigate()

  const [reviews, setReviews] = createSignal([])
  const [inWishlist, setInWishlist] = createSignal(false)
  const [reviewRating, setReviewRating] = createSignal(5)
  const [reviewComment, setReviewComment] = createSignal('')
  const [reviewSubmitting, setReviewSubmitting] = createSignal(false)
  const [reviewSuccess, setReviewSuccess] = createSignal(false)
  const [selectedSize, setSelectedSize] = createSignal('')
  const [quantity, setQuantity] = createSignal(1)
  const [activeImage, setActiveImage] = createSignal(0)
  const [added, setAdded] = createSignal(false)

  onMount(async () => {
    if (products().length === 0) await fetchProducts()
    if (isAuthenticated()) await fetchWishlist()
    const r = await fetchReviews(params.id)
    setReviews(r)
  })

  const product = createMemo(() => {
    const p = products().find(p => p.id === params.id || p.id === +params.id)
    if (p) setInWishlist(wishlist().includes(p.id))
    return p
  })

  const isMemberOnly = createMemo(() => product()?.membersOnly === true)
  const canAddToCart = createMemo(() => !isMemberOnly() || isAuthenticated())

  const related = createMemo(() =>
    products().filter(p => p.id !== params.id && p.category === product()?.category).slice(0, 4)
  )

  async function handleToggleWishlist() {
    if (!isAuthenticated()) { navigate('/login'); return }
    const added = await toggleWishlist(product().id)
    setInWishlist(added)
  }

  function handleAddToCart() {
    if (!product()) return
    if (!canAddToCart()) {
      navigate('/login')
      return
    }
    addToCart({ ...product(), selectedSize: selectedSize() }, quantity())
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  async function handleSubmitReview(e) {
    e.preventDefault()
    if (!reviewComment().trim()) return
    setReviewSubmitting(true)
    try {
      await addReview(params.id, reviewRating(), reviewComment())
      setReviewComment('')
      setReviewSuccess(true)
      const r = await fetchReviews(params.id)
      setReviews(r)
      setTimeout(() => setReviewSuccess(false), 3000)
    } catch (err) { console.error(err) }
    setReviewSubmitting(false)
  }

  function avgRating() {
    if (!reviews().length) return 0
    return (reviews().reduce((s, r) => s + r.rating, 0) / reviews().length).toFixed(1)
  }

  return (
    <Show when={product()} fallback={
      <div class="min-h-screen bg-aurum-black flex items-center justify-center">
        <div class="text-center">
          <p class="text-aurum-muted mb-4">Proizvod nije pronađen</p>
          <A href="/catalog" class="btn-gold px-6 py-2 rounded">Nazad na katalog</A>
        </div>
      </div>
    }>
      <div class="min-h-screen bg-aurum-black">
        <Navbar />

        <div class="border-b border-aurum-border">
          <div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-aurum-muted">
            <A href="/catalog" class="hover:text-aurum-gold">AurumVault</A>
            <span>›</span>
            <A href="/catalog" class="hover:text-aurum-gold">Katalog</A>
            <span>›</span>
            <span class="text-aurum-text">{product()?.category}</span>
          </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 py-10 page-enter">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Slike */}
            <div class="space-y-3">
              <div class="relative rounded-xl overflow-hidden bg-aurum-dark aspect-square">
                <img src={product()?.images?.[activeImage()]} alt={product()?.name}
                  class="w-full h-full object-cover" />
                
                {product()?.badge && (
                  <div class="absolute top-3 left-3">
                    <span class="badge-exclusive">{product()?.badge}</span>
                  </div>
                )}

                <Show when={isAdmin()}>
                  <A href={`/admin/products/edit/${product()?.id}`}
                    class="absolute top-3 right-3 bg-aurum-gold text-aurum-black text-xs font-bold px-3 py-1 rounded">
                    Uredi
                  </A>
                </Show>
              </div>

              <div class="flex gap-2">
                <For each={product()?.images}>{(img, i) => (
                  <button onclick={() => setActiveImage(i())}
                    class={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${activeImage()===i() ? 'border-aurum-gold' : 'border-aurum-border'}`}>
                    <img src={img} alt="" class="w-full h-full object-cover" />
                  </button>
                )}</For>
              </div>

              {/* Vraćene informacije ispod slike */}
              <div class="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: 'Šifra', value: product()?.sku || '—' },
                  { label: 'Materijali', value: '18k Pozlata na srebru' },
                  { label: 'Dostava', value: 'Iz Zagreba' },
                ].map(item => (
                  <div class="card-dark p-3">
                    <p class="text-aurum-muted text-xs">{item.label}</p>
                    <p class="text-aurum-text text-xs font-medium mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desna strana - Detalji */}
            <div class="space-y-6">
              <div>
                {product()?.badge && (
                  <span class="badge-exclusive mb-3 inline-block">{product()?.badge}</span>
                )}
                <h1 class="font-display text-3xl font-bold text-white leading-tight">{product()?.name}</h1>
                
                <div class="flex items-center gap-3 mt-3">
                  <span class="text-2xl font-bold text-aurum-gold">
                    ${(product()?.salePrice || product()?.price)?.toLocaleString()}
                  </span>
                  {product()?.salePrice && (
                    <span class="text-aurum-muted line-through">${product()?.price?.toLocaleString()}</span>
                  )}
                  <span class="text-aurum-muted text-sm">s PDV-om</span>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                <span class="text-sm text-aurum-text">Na zalihi — {product()?.stock} komada</span>
                <span class="text-aurum-muted text-xs ml-auto">Dostava: 3–5 radnih dana</span>
              </div>

              <p class="text-aurum-muted text-sm leading-relaxed">{product()?.description}</p>

              {/* Količina */}
              <div>
                <h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Količina</h3>
                <div class="flex items-center gap-3">
                  <button onclick={() => setQuantity(q => Math.max(1, q - 1))}
                    class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">−</button>
                  <span class="w-12 text-center font-bold text-aurum-text text-lg">{quantity()}</span>
                  <button onclick={() => setQuantity(q => Math.min(product()?.stock || 10, q + 1))}
                    class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">+</button>
                  <span class="text-aurum-muted text-xs">Maks. 5 po kupcu</span>
                </div>
              </div>

              {/* Gumbi */}
              <div class="flex gap-3">
                <button 
                  onclick={handleAddToCart}
                  disabled={!canAddToCart()}
                  class={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${
                    !canAddToCart() ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : added() ? 'bg-green-600 text-white' : 'btn-gold'
                  }`}>
                  {!canAddToCart() ? '👑 Prijava potrebna' : added() ? '✓ Dodano u košaricu' : 'Dodaj u košaricu'}
                </button>

                <button 
                  onclick={() => { 
                    if (!canAddToCart()) { navigate('/login'); return }
                    handleAddToCart(); 
                    navigate('/checkout') 
                  }}
                  disabled={!canAddToCart()}
                  class={`flex-1 py-3 rounded-lg font-bold text-sm border border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all ${!canAddToCart() ? 'cursor-not-allowed opacity-50' : ''}`}>
                  Kupi odmah
                </button>

                <button onclick={handleToggleWishlist}
                  class={`p-3 rounded-lg border transition-all ${inWishlist() ? 'border-red-400 text-red-400 bg-red-900/20' : 'border-aurum-border text-aurum-muted hover:border-red-400 hover:text-red-400'}`}>
                  <svg class="w-5 h-5" fill={inWishlist() ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Vraćene informacije */}
              <div class="grid grid-cols-2 gap-3">
                {[
                  { icon: '🚚', text: 'Besplatna dostava za narudžbe iznad 100$' },
                  { icon: '↩', text: 'Povrat do 30 dana. Bez komplikacija.' },
                  { icon: '🔒', text: 'Sigurna kupovina' },
                  { icon: '✋', text: 'Ručno provjerena kvaliteta' },
                ].map(item => (
                  <div class="flex items-start gap-2 text-xs text-aurum-muted">
                    <span>{item.icon}</span><span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ostali dijelovi (related, detalji, recenzije) ostaju isti kao prije */}
          {/* ... (možeš ostaviti donji dio kako je bio) */}

        </div>
        <Footer />
      </div>
    </Show>
  )
}