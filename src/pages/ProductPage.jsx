import { createSignal, createMemo, Show, For, onMount } from 'solid-js'
import { useParams, A, useNavigate } from '@solidjs/router'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { products, fetchProducts, addToCart, isAdmin, isAuthenticated, wishlist, fetchWishlist, toggleWishlist, fetchReviews, addReview } from '../stores/index.js'

export default function ProductPage() {
  const params = useParams()
  const navigate = useNavigate()
  const [reviews, setReviews] = createSignal([])
  const [inWishlist, setInWishlist] = createSignal(false)
  const [reviewRating, setReviewRating] = createSignal(5)
  const [reviewComment, setReviewComment] = createSignal('')
  const [reviewSubmitting, setReviewSubmitting] = createSignal(false)
  const [reviewSuccess, setReviewSuccess] = createSignal(false)

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
  const related = createMemo(() => products().filter(p => p.id !== params.id && p.category === product()?.category).slice(0, 4))

  async function handleToggleWishlist() {
    if (!isAuthenticated()) { navigate('/login'); return }
    const added = await toggleWishlist(product().id)
    setInWishlist(added)
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

  const [selectedSize, setSelectedSize] = createSignal('')
  const [quantity, setQuantity] = createSignal(1)
  const [activeImage, setActiveImage] = createSignal(0)
  const [added, setAdded] = createSignal(false)

  function handleAddToCart() {
    if (!product()) return
    addToCart({ ...product(), selectedSize: selectedSize() }, quantity())
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Show when={product()} fallback={
      <div class="min-h-screen bg-aurum-black flex items-center justify-center">
        <div class="text-center">
          <p class="text-aurum-muted mb-4">Product not found</p>
          <A href="/catalog" class="btn-gold px-6 py-2 rounded">Back to Catalog</A>
        </div>
      </div>
    }>
      <div class="min-h-screen bg-aurum-black">
        <Navbar />

        {/* Breadcrumb */}
        <div class="border-b border-aurum-border">
          <div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-aurum-muted">
            <A href="/catalog" class="hover:text-aurum-gold transition-colors">AurumVault</A>
            <span>›</span>
            <A href="/catalog" class="hover:text-aurum-gold transition-colors">Catalog</A>
            <span>›</span>
            <span class="text-aurum-text">{product()?.category}</span>
          </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 py-10 page-enter">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Images */}
            <div class="space-y-3">
              <div class="relative rounded-xl overflow-hidden bg-aurum-dark aspect-square">
                <img
                  src={product()?.images[activeImage()]}
                  alt={product()?.name}
                  class="w-full h-full object-cover"
                />
                {product()?.badge && (
                  <div class="absolute top-3 left-3">
                    <span class="badge-exclusive">{product()?.badge}</span>
                  </div>
                )}
                <Show when={isAdmin()}>
                  <A href={`/admin/products/edit/${product()?.id}`}
                    class="absolute top-3 right-3 bg-aurum-gold text-aurum-black text-xs font-bold px-3 py-1 rounded">
                    Edit
                  </A>
                </Show>
                <div class="absolute bottom-3 right-3 bg-aurum-black/70 text-aurum-muted text-xs px-2 py-1 rounded">
                  Zoom
                </div>
              </div>

              {/* Thumbnails */}
              <div class="flex gap-2">
                <For each={product()?.images}>{(img, i) => (
                  <button
                    onclick={() => setActiveImage(i())}
                    class={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${activeImage() === i() ? 'border-aurum-gold' : 'border-aurum-border'}`}
                  >
                    <img src={img} alt="" class="w-full h-full object-cover" />
                  </button>
                )}</For>
              </div>

              {/* Info bar */}
              <div class="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: 'SKU', value: product()?.sku },
                  { label: 'Materials', value: '18k Gold Plating over Sterling' },
                  { label: 'Availability', value: 'Ships from New York' },
                ].map(item => (
                  <div class="card-dark p-3">
                    <p class="text-aurum-muted text-xs">{item.label}</p>
                    <p class="text-aurum-text text-xs font-medium mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div class="space-y-6">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <A href="/catalog" class="text-xs text-aurum-muted hover:text-aurum-gold">
                    Aurum.SignetClassic ↗
                  </A>
                </div>

                {product()?.badge && (
                  <span class="badge-exclusive mb-3 inline-block">{product()?.badge}</span>
                )}
                <h1 class="font-display text-3xl font-bold text-white leading-tight">
                  {product()?.name}
                </h1>
                <div class="flex items-center gap-3 mt-3">
                  <span class="text-2xl font-bold text-aurum-gold">
                    ${(product()?.salePrice || product()?.price)?.toLocaleString()}
                  </span>
                  {product()?.salePrice && (
                    <span class="text-aurum-muted line-through">${product()?.price?.toLocaleString()}</span>
                  )}
                  <span class="text-aurum-muted text-sm">incl. taxes</span>
                </div>
              </div>

              {/* Stock */}
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                <span class="text-sm text-aurum-text">In stock — {product()?.stock} units</span>
                <span class="text-aurum-muted text-xs ml-auto">
                  Est. delivery: Mar 23 – Mar 24
                </span>
              </div>

              <p class="text-aurum-muted text-sm leading-relaxed">{product()?.description}</p>

              {/* Size selector */}
              <Show when={product()?.sizes?.length > 0}>
                <div>
                  <h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Size</h3>
                  <div class="flex gap-2 flex-wrap">
                    <For each={product()?.sizes}>{size => (
                      <button
                        onclick={() => setSelectedSize(size)}
                        class={`w-10 h-10 rounded border text-sm font-bold transition-all ${
                          selectedSize() === size
                            ? 'border-aurum-gold bg-aurum-gold text-aurum-black'
                            : 'border-aurum-border text-aurum-text hover:border-aurum-gold'
                        }`}
                      >
                        {size}
                      </button>
                    )}</For>
                  </div>
                </div>
              </Show>

              {/* Quantity */}
              <div>
                <h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Quantity</h3>
                <div class="flex items-center gap-3">
                  <button onclick={() => setQuantity(q => Math.max(1, q - 1))}
                    class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">
                    −
                  </button>
                  <span class="w-12 text-center font-bold text-aurum-text">{quantity()}</span>
                  <button onclick={() => setQuantity(q => Math.min(product()?.stock || 10, q + 1))}
                    class="w-9 h-9 border border-aurum-border rounded text-aurum-text hover:border-aurum-gold transition-colors text-lg">
                    +
                  </button>
                  <span class="text-aurum-muted text-xs">Max 5 per customer</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div class="flex gap-3">
                <button onclick={handleAddToCart}
                  class={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${
                    added() ? 'bg-green-600 text-white' : 'btn-gold'
                  }`}>
                  {added() ? '✓ Dodano' : 'Add to Cart'}
                </button>
                <button onclick={() => { handleAddToCart(); navigate('/checkout') }}
                  class="flex-1 py-3 rounded-lg font-bold text-sm border border-aurum-gold text-aurum-gold hover:bg-aurum-gold hover:text-aurum-black transition-all">
                  Buy Now
                </button>
                <button onclick={handleToggleWishlist}
                  class={`p-3 rounded-lg border transition-all ${
                    inWishlist()
                      ? 'border-red-400 text-red-400 bg-red-900/20'
                      : 'border-aurum-border text-aurum-muted hover:border-red-400 hover:text-red-400'
                  }`}
                  title={inWishlist() ? 'Ukloni iz wishlist' : 'Dodaj u wishlist'}>
                  <svg class="w-5 h-5" fill={inWishlist() ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Trust signals */}
              <div class="grid grid-cols-2 gap-3">
                {[
                  { icon: '🚚', text: 'Free shipping over $100' },
                  { icon: '↩', text: '30-day returns. Hassle-free returns within 30 days' },
                  { icon: '🔒', text: 'Secure checkout' },
                  { icon: '✋', text: 'Hand-inspected quality' },
                ].map(item => (
                  <div class="flex items-start gap-2 text-xs text-aurum-muted">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* You might also like */}
          <Show when={related().length > 0}>
            <div class="mt-16">
              <div class="flex items-center justify-between mb-6">
                <h2 class="section-title">You might also like</h2>
                <span class="text-xs text-aurum-muted">Inspired picks for you</span>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <For each={related()}>{p => (
                  <A href={`/product/${p.id}`} class="card-dark overflow-hidden group hover:border-aurum-gold transition-all duration-300">
                    <div class="aspect-square overflow-hidden bg-aurum-dark">
                      <img src={p.images[0]} alt={p.name}
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div class="p-3">
                      <p class="text-xs font-display text-aurum-text">{p.name}</p>
                      <p class="text-aurum-gold text-sm font-bold mt-1">${p.price.toLocaleString()}</p>
                    </div>
                  </A>
                )}</For>
              </div>
            </div>
          </Show>

          {/* Product Details & Specs */}
          <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Product Details', content: product()?.description },
              { title: 'Specifications', content: 'Material: 18k Gold Plating over Sterling Silver\nWeight: 8.5g (size 8)\nWidth: 5mm face\nFinish: Brushed face, polished bezel' },
              { title: 'Care', content: 'Wipe with a soft cloth. Avoid harsh chemicals. Keep in provided AurumVault pouch.' },
            ].map(section => (
              <div>
                <h3 class="section-title text-base mb-3">{section.title}</h3>
                <p class="text-aurum-muted text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
          {/* Reviews sekcija */}
          <div class="mt-16">
            <div class="flex items-center gap-4 mb-6">
              <h2 class="section-title">Recenzije</h2>
              <Show when={reviews().length > 0}>
                <div class="flex items-center gap-1">
                  <span class="text-aurum-gold font-bold">{avgRating()}</span>
                  <span class="text-aurum-gold">{'★'.repeat(Math.round(avgRating()))}</span>
                  <span class="text-aurum-muted text-xs">({reviews().length})</span>
                </div>
              </Show>
            </div>

            {/* Prikaz recenzija */}
            <Show when={reviews().length === 0}>
              <p class="text-aurum-muted text-sm mb-6">Još nema recenzija. Budi prvi!</p>
            </Show>
            <div class="space-y-4 mb-10">
              <For each={reviews()}>{review => (
                <div class="card-dark p-5">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-aurum-gold rounded-full flex items-center justify-center">
                        <span class="text-aurum-black font-bold text-xs">{review.userName?.charAt(0)}</span>
                      </div>
                      <span class="text-aurum-text text-sm font-medium">{review.userName}</span>
                    </div>
                    <span class="text-aurum-gold">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                  </div>
                  <p class="text-aurum-muted text-sm leading-relaxed">{review.comment}</p>
                </div>
              )}</For>
            </div>

            {/* Forma za recenziju */}
            <Show when={isAuthenticated()} fallback={
              <div class="card-dark p-5 text-center">
                <p class="text-aurum-muted text-sm">
                  <A href="/login" class="text-aurum-gold hover:underline">Prijavi se</A> za pisanje recenzije.
                </p>
              </div>
            }>
              <div class="card-dark p-6">
                <h3 class="section-title text-base mb-4">Napiši recenziju</h3>
                <form onsubmit={handleSubmitReview} class="space-y-4">
                  <div>
                    <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Ocjena</label>
                    <div class="flex gap-2">
                      <For each={[1,2,3,4,5]}>{star => (
                        <button type="button" onclick={() => setReviewRating(star)}
                          class={`text-2xl transition-colors ${star <= reviewRating() ? 'text-aurum-gold' : 'text-aurum-muted'}`}>
                          ★
                        </button>
                      )}</For>
                      <span class="text-aurum-muted text-sm ml-2 self-center">{reviewRating()}/5</span>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Komentar</label>
                    <textarea
                      value={reviewComment()}
                      oninput={e => setReviewComment(e.target.value)}
                      rows={3}
                      class="input-dark w-full px-4 py-3 text-sm resize-none"
                      placeholder="Podijeli svoje iskustvo s ovim proizvodom..."
                    />
                  </div>
                  <Show when={reviewSuccess()}>
                    <p class="text-green-400 text-xs">✓ Recenzija je objavljena!</p>
                  </Show>
                  <button type="submit" disabled={reviewSubmitting()}
                    class="btn-gold px-6 py-2.5 rounded-lg text-sm disabled:opacity-50">
                    {reviewSubmitting() ? 'Šalje...' : 'Objavi recenziju'}
                  </button>
                </form>
              </div>
            </Show>
          </div>

        </div>

        <Footer />
      </div>
    </Show>
  )
}
