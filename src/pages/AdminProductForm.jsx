import { createSignal, Show, For, onMount } from 'solid-js'
import { A, useNavigate, useParams } from '@solidjs/router'
import { isAdmin, products, fetchProducts } from '../stores/index.js'
import { doc, addDoc, updateDoc, deleteDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.js'

export default function AdminProductForm() {
  const params = useParams()
  const navigate = useNavigate()
  const isEdit = !!params.id

  if (!isAdmin()) { navigate('/login'); return null }

  const [saved, setSaved] = createSignal(false)
  const [published, setPublished] = createSignal(false)
  const [deleting, setDeleting] = createSignal(false)
  const [saving, setSaving] = createSignal(false)
  const [error, setError] = createSignal('')

  const [form, setForm] = createSignal({
    title: '', sku: '', price: '', salePrice: '', inventory: '',
    description: '', tags: [], primaryCat: 'Accessories',
    images: [], membersOnly: false,
  })

  // Učitaj postojeći proizvod ako je edit mod
  onMount(async () => {
    if (isEdit) {
      if (products().length === 0) await fetchProducts()
      const existing = products().find(p => p.id === params.id)
      if (existing) {
        setForm({
          title:       existing.name || '',
          sku:         existing.sku || '',
          price:       existing.price || '',
          salePrice:   existing.salePrice || '',
          inventory:   existing.stock || '',
          description: existing.description || '',
          tags:        existing.badge ? [existing.badge] : [],
          primaryCat:  existing.category || 'Accessories',
          images:      existing.images || [],
          membersOnly: existing.membersOnly || false,
        })
      }
    }
  })

  async function handleSaveDraft() {
    setSaving(true); setError('')
    try {
      const data = buildProductData()
      if (isEdit) {
        await updateDoc(doc(db, 'products', params.id), data)
      } else {
        await addDoc(collection(db, 'products'), { ...data, createdAt: serverTimestamp() })
      }
      setSaved(true)
      await fetchProducts()
      setTimeout(() => setSaved(false), 2000)
    } catch (err) {
      setError('Greška pri spremanju: ' + err.message)
    }
    setSaving(false)
  }

  async function handlePublish() {
    setSaving(true); setError('')
    try {
      const data = { ...buildProductData(), published: true }
      if (isEdit) {
        await updateDoc(doc(db, 'products', params.id), data)
      } else {
        await addDoc(collection(db, 'products'), { ...data, createdAt: serverTimestamp() })
      }
      setPublished(true)
      await fetchProducts()
      setTimeout(() => navigate('/admin'), 1500)
    } catch (err) {
      setError('Greška pri objavi: ' + err.message)
    }
    setSaving(false)
  }

  async function handleDelete() {
    if (!confirm('Jesi li siguran/na da želiš obrisati ovaj proizvod?')) return
    setDeleting(true)
    try {
      await deleteDoc(doc(db, 'products', params.id))
      await fetchProducts()
      navigate('/admin')
    } catch (err) {
      setError('Greška pri brisanju: ' + err.message)
    }
    setDeleting(false)
  }

  function buildProductData() {
    return {
      name:        form().title,
      sku:         form().sku,
      price:       Number(form().price) || 0,
      salePrice:   form().salePrice ? Number(form().salePrice) : null,
      stock:       Number(form().inventory) || 0,
      description: form().description,
      badge:       form().tags[0] || null,
      category:    form().primaryCat,
      images:      form().images,
      membersOnly: form().membersOnly,
      sizes:       [],
      updatedAt:   serverTimestamp(),
    }
  }

  const [newImageUrl, setNewImageUrl] = createSignal('')

  function addImageUrl() {
    if (!newImageUrl().trim()) return
    setForm({ ...form(), images: [...form().images, newImageUrl().trim()] })
    setNewImageUrl('')
  }

  return (
    <div class="min-h-screen bg-aurum-black">
      {/* Admin top bar */}
      <div class="bg-aurum-dark border-b border-aurum-border px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-4 text-sm">
          <A href="/admin" class="flex items-center gap-2">
            <div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center">
              <span class="text-aurum-black font-black text-xs">A</span>
            </div>
            <span class="font-display font-bold text-aurum-gold tracking-widest hidden sm:block">AurumVault</span>
          </A>
          <span class="text-aurum-muted">›</span>
          <A href="/admin" class="text-aurum-muted hover:text-aurum-gold text-xs">Admin</A>
          <span class="text-aurum-muted">›</span>
          <span class="text-aurum-text text-xs">{isEdit ? 'Uredi proizvod' : 'Novi proizvod'}</span>
        </div>
        <A href="/admin" class="text-xs text-aurum-muted hover:text-aurum-gold transition-colors">← Nazad</A>
      </div>

      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="flex items-center gap-4 mb-8">
          <h1 class="font-display text-2xl font-bold text-white">
            {isEdit ? 'Uredi proizvod' : 'Dodaj novi proizvod'}
          </h1>
          <span class="text-xs border border-yellow-500 text-yellow-500 px-2 py-0.5 rounded">
            ⚠ Inline validation enabled
          </span>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Lijevo: Forma */}
          <div class="xl:col-span-2 space-y-6">

            {/* Naziv */}
            <div class="card-dark p-6">
              <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">
                Naziv proizvoda <span class="text-red-400">*</span>
              </label>
              <input type="text" value={form().title}
                oninput={e => setForm({...form(), title: e.target.value})}
                class="input-dark w-full px-4 py-3 text-sm font-medium"
                placeholder="Unesi naziv proizvoda" />
            </div>

            {/* SKU + Cijena */}
            <div class="card-dark p-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">SKU</label>
                  <input type="text" value={form().sku}
                    oninput={e => setForm({...form(), sku: e.target.value})}
                    class="input-dark w-full px-4 py-2.5 text-sm" placeholder="AV-XXX-000" />
                </div>
                <div>
                  <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">
                    Cijena (USD) <span class="text-red-400">*</span>
                  </label>
                  <input type="number" value={form().price}
                    oninput={e => setForm({...form(), price: e.target.value})}
                    class="input-dark w-full px-4 py-2.5 text-sm" placeholder="0" />
                </div>
                <div>
                  <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Cijena na rasprodaji</label>
                  <input type="number" value={form().salePrice}
                    oninput={e => setForm({...form(), salePrice: e.target.value})}
                    class="input-dark w-full px-4 py-2.5 text-sm" placeholder="Ostavi prazno ako nema" />
                </div>
                <div>
                  <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Zaliha</label>
                  <input type="number" value={form().inventory}
                    oninput={e => setForm({...form(), inventory: e.target.value})}
                    class="input-dark w-full px-4 py-2.5 text-sm" placeholder="0" />
                </div>
              </div>
            </div>

            {/* Kategorija i tagovi */}
            <div class="card-dark p-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Tagovi / Badge</label>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <For each={form().tags}>{tag => (
                      <span class="badge-exclusive flex items-center gap-1">
                        {tag}
                        <button onclick={() => setForm({...form(), tags: form().tags.filter(t => t !== tag)})}
                          class="hover:text-red-300 ml-1">×</button>
                      </span>
                    )}</For>
                  </div>
                  <input type="text" placeholder="Dodaj tag i pritisni Enter"
                    class="input-dark w-full px-4 py-2.5 text-sm"
                    onkeydown={e => {
                      if (e.key === 'Enter' && e.target.value.trim()) {
                        setForm({...form(), tags: [...form().tags, e.target.value.trim()]})
                        e.target.value = ''
                        e.preventDefault()
                      }
                    }} />
                </div>
                <div>
                  <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Primarna kategorija</label>
                  <select value={form().primaryCat}
                    onchange={e => setForm({...form(), primaryCat: e.target.value})}
                    class="input-dark w-full px-3 py-2.5 text-sm">
                    {['Rings','Necklaces','Watches','Accessories','Art Objects'].map(c => (
                      <option value={c}>{c}</option>
                    ))}
                  </select>
                  <label class="flex items-center gap-2 mt-4 cursor-pointer">
                    <input type="checkbox" checked={form().membersOnly}
                      onchange={e => setForm({...form(), membersOnly: e.target.checked})}
                      class="checkbox checkbox-warning checkbox-sm" />
                    <span class="text-sm text-aurum-text">Samo za članove</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Opis */}
            <div class="card-dark p-6">
              <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-2">Opis proizvoda</label>
              <textarea value={form().description}
                oninput={e => setForm({...form(), description: e.target.value})}
                rows={5} class="input-dark w-full px-4 py-3 text-sm resize-none"
                placeholder="Opiši proizvod s detaljima, materijalima..." />
            </div>

            {/* Slike */}
            <div class="card-dark p-6">
              <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-3">Slike (URL)</label>
              <div class="flex gap-2 mb-4">
                <input type="url" value={newImageUrl()}
                  oninput={e => setNewImageUrl(e.target.value)}
                  placeholder="https://... URL slike"
                  class="input-dark flex-1 px-4 py-2.5 text-sm" />
                <button onclick={addImageUrl}
                  class="btn-gold px-4 py-2.5 text-sm rounded">Dodaj</button>
              </div>
              <div class="grid grid-cols-3 gap-3">
                <For each={form().images}>{(img, i) => (
                  <div class="relative group">
                    <img src={img} alt="" class="w-full aspect-square object-cover rounded border border-aurum-border" />
                    <button
                      onclick={() => setForm({...form(), images: form().images.filter((_, idx) => idx !== i())})}
                      class="absolute top-1 right-1 bg-red-600 text-white w-5 h-5 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      ×
                    </button>
                  </div>
                )}</For>
              </div>
              <Show when={form().images.length === 0}>
                <div class="border-2 border-dashed border-aurum-border rounded-lg p-8 text-center text-aurum-muted text-sm">
                  Dodaj URL slike gore ↑
                </div>
              </Show>
            </div>
          </div>

          {/* Desno: Preview + Akcije */}
          <div class="space-y-4">

            {/* Greška */}
            <Show when={error()}>
              <div class="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-400 text-xs">
                ⚠ {error()}
              </div>
            </Show>

            {/* Uspjeh */}
            <Show when={saved()}>
              <div class="bg-green-900/30 border border-green-500 rounded-lg p-3 text-green-400 text-xs">
                ✓ Proizvod je spremljen kao draft.
              </div>
            </Show>

            {/* Preview */}
            <div class="card-dark p-4">
              <h3 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Preview</h3>
              <div class="bg-aurum-dark rounded-lg overflow-hidden">
                <div class="aspect-square bg-aurum-muted flex items-center justify-center overflow-hidden">
                  <Show when={form().images[0]} fallback={
                    <p class="text-aurum-muted text-xs">Nema slike</p>
                  }>
                    <img src={form().images[0]} alt="" class="w-full h-full object-cover" />
                  </Show>
                </div>
                <div class="p-3">
                  <Show when={form().tags.length > 0}>
                    <span class="badge-exclusive mb-2 inline-block">{form().tags[0]}</span>
                  </Show>
                  <p class="text-aurum-text text-xs font-medium">{form().title || 'Naziv proizvoda'}</p>
                  <p class="text-aurum-muted text-xs">{form().sku}</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-aurum-gold font-bold text-sm">
                      ${form().salePrice || form().price || '0'}
                    </span>
                    {form().salePrice && (
                      <span class="text-aurum-muted text-xs line-through">${form().price}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Akcijski gumbi */}
            <div class="card-dark p-4 space-y-3">
              <button onclick={handleSaveDraft} disabled={saving()}
                class="w-full border border-aurum-border text-aurum-text py-2.5 rounded text-sm hover:border-aurum-gold transition-colors disabled:opacity-50">
                {saving() ? 'Sprema...' : '💾 Spremi draft'}
              </button>
              <button onclick={handlePublish} disabled={saving()}
                class="w-full btn-gold py-2.5 rounded text-sm disabled:opacity-50">
                {published() ? '✓ Objavljeno!' : saving() ? 'Objavljuje...' : '🚀 Objavi'}
              </button>
              <Show when={isEdit}>
                <button onclick={handleDelete} disabled={deleting()}
                  class="w-full border border-red-500/30 text-red-400 py-2.5 rounded text-sm hover:bg-red-900/20 transition-colors disabled:opacity-50">
                  {deleting() ? 'Briše...' : '🗑 Obriši proizvod'}
                </button>
              </Show>
            </div>

            {/* Info */}
            <div class="card-dark p-4 text-xs text-aurum-muted space-y-2">
              <p>📦 Kategorija: <span class="text-aurum-text">{form().primaryCat}</span></p>
              <p>👥 Samo članovi: <span class="text-aurum-text">{form().membersOnly ? 'Da' : 'Ne'}</span></p>
              <p>🖼 Slike: <span class="text-aurum-text">{form().images.length}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
