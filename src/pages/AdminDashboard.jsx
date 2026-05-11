import { createSignal, Show, For, onMount, onCleanup } from 'solid-js'
import { A, useNavigate } from '@solidjs/router'
import { isAdmin, currentUser, logout, orders, products, fetchOrders, fetchProducts } from '../stores/index.js'
import { doc, updateDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = createSignal('dashboard')

  if (!isAdmin()) { navigate('/login'); return null }

  // ── Session Timer ─────────────────────────────────────────
  const SESSION_DURATION = 1 * 60 // 1 minuta za testiranje (promijeni na 15*60 za produkciju)
  const [secondsLeft, setSecondsLeft] = createSignal(SESSION_DURATION)
  const [sessionWarning, setSessionWarning] = createSignal(false)

  function formatTime(secs) {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}m ${String(s).padStart(2, '0')}s`
  }

  const timer = setInterval(() => {
    setSecondsLeft(prev => {
      if (prev <= 1) {
        clearInterval(timer)
        logout().then(() => navigate('/login'))
        return 0
      }
      if (prev <= 60) setSessionWarning(true)
      return prev - 1
    })
  }, 1000)

  onCleanup(() => clearInterval(timer))

  function extendSession() {
    setSecondsLeft(prev => prev + 15 * 60)
    setSessionWarning(false)
  }

  // ── Data ──────────────────────────────────────────────────
  onMount(() => {
    fetchOrders()
    fetchProducts()
  })

  const [customers, setCustomers] = createSignal([])
  const [customersLoading, setCustomersLoading] = createSignal(false)

  async function loadCustomers() {
    setCustomersLoading(true)
    try {
      const snap = await getDocs(collection(db, 'users'))
      setCustomers(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (err) { console.error(err) }
    setCustomersLoading(false)
  }

  async function updateOrderStatus(orderId, status) {
    await updateDoc(doc(db, 'orders', orderId), { status })
    await fetchOrders()
  }

  async function updateUserRole(userId, role) {
    await updateDoc(doc(db, 'users', userId), { role })
    await loadCustomers()
  }

  const statusColors = {
    'Processing':           'text-yellow-400 bg-yellow-900/30',
    'Awaiting Fulfillment': 'text-blue-400 bg-blue-900/30',
    'Shipped':              'text-green-400 bg-green-900/30',
    'Delivered':            'text-green-400 bg-green-900/30',
    'Cancelled':            'text-red-400 bg-red-900/30',
    'Pending':              'text-aurum-muted bg-aurum-dark',
  }

  const navItems = [
    { key: 'dashboard',  icon: '📊', label: 'Dashboard' },
    { key: 'orders',     icon: '📦', label: 'Orders' },
    { key: 'customers',  icon: '👥', label: 'Customers' },
    { key: 'promotions', icon: '🏷',  label: 'Promotions' },
    { key: 'settings',   icon: '⚙',  label: 'Settings' },
  ]

  const auditLog = [
    { text: `${currentUser()?.name} logged in`, time: 'Just now', type: 'info' },
    { text: 'Role change: Leila Morgan promoted to Manager', time: '28 Feb 2026 · 0:01', type: 'warning' },
    { text: 'System: Failed login attempt blocked (3 attempts)', time: '28 Feb 2026 · 03:05', type: 'error' },
  ]

  return (
    <div class="min-h-screen bg-aurum-black flex flex-col">

      {/* Top Bar */}
      <div class="bg-aurum-dark border-b border-aurum-border px-4 py-2 flex items-center justify-between text-xs flex-wrap gap-2">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 bg-aurum-gold rounded-full flex items-center justify-center">
              <span class="text-aurum-black font-black text-xs">A</span>
            </div>
            <span class="font-display font-bold text-aurum-gold tracking-widest hidden sm:block">AurumVault</span>
          </div>
          <span class="text-red-400 border border-red-400/30 px-2 py-0.5 rounded">🔒 Secure Admin Area</span>
          <span class="text-aurum-muted hidden md:block">2-Step Verification: Enabled</span>
          <span class={`font-medium ${sessionWarning() ? 'text-red-400 animate-pulse' : 'text-green-400'}`}>
            Session active • Expires in <span class="font-bold">{formatTime(secondsLeft())}</span>
          </span>
          <A href="/catalog" class="text-aurum-muted border border-aurum-border px-2 py-0.5 rounded hover:border-aurum-gold hover:text-aurum-gold transition-colors">
            ← Na stranicu
          </A>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-right">
            <p class="text-aurum-text font-bold">{currentUser()?.name}</p>
            <p class="text-aurum-gold text-xs">Role: Super Admin</p>
          </div>
          <button onclick={() => logout().then(() => navigate('/login'))}
            class="border border-aurum-border text-aurum-muted px-3 py-1 rounded hover:border-red-400 hover:text-red-400 transition-colors">
            Logout
          </button>
        </div>
      </div>

      <div class="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <aside class="w-48 bg-aurum-dark border-r border-aurum-border flex flex-col p-4 flex-shrink-0">
          <div class="text-xs text-aurum-muted uppercase tracking-widest mb-3">
            Navigation <span class="text-aurum-gold">v1.3</span>
          </div>
          <For each={navItems}>{item => (
            <button
              onclick={() => {
                setActiveNav(item.key)
                if (item.key === 'customers') loadCustomers()
              }}
              class={`flex items-center gap-2 px-3 py-2.5 rounded text-sm mb-1 transition-colors w-full text-left ${
                activeNav() === item.key
                  ? 'bg-aurum-gold text-aurum-black font-bold'
                  : 'text-aurum-muted hover:text-aurum-text hover:bg-aurum-card'
              }`}>
              <span>{item.icon}</span> {item.label}
            </button>
          )}</For>

          <div class="mt-6 pt-4 border-t border-aurum-border">
            <div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Security</div>
            <div class="flex items-center gap-2 text-xs text-green-400 mb-3">
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Audit Trail Live
            </div>
            <div class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Quick Role Controls</div>
            {[{ role: 'Manager', active: true }, { role: 'Auditor', active: false }].map(r => (
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-aurum-text">{r.role}</span>
                <div class={`w-8 h-4 rounded-full cursor-pointer ${r.active ? 'bg-aurum-gold' : 'bg-aurum-muted'}`}></div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main class="flex-1 overflow-y-auto p-6">

          {/* ── DASHBOARD ── */}
          <Show when={activeNav() === 'dashboard'}>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Sales Today',       value: '$18,742', change: '+8.6% vs yesterday', icon: '💰', color: 'text-aurum-gold' },
                { label: 'Orders Pending',    value: orders().filter(o => o.status === 'Processing').length || '0', change: 'U obradi', icon: '📦', color: 'text-yellow-400' },
                { label: 'Inventory Alerts',  value: products().filter(p => p.stock <= 3).length || '0', change: 'Niska zaliha', icon: '⚠', color: 'text-red-400' },
              ].map(stat => (
                <div class="card-dark p-5 flex items-start justify-between">
                  <div>
                    <p class="text-aurum-muted text-xs uppercase tracking-widest">{stat.label}</p>
                    <p class={`font-display text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                    <p class="text-aurum-muted text-xs mt-1">{stat.change}</p>
                  </div>
                  <span class="text-2xl">{stat.icon}</span>
                </div>
              ))}
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div class="xl:col-span-2 card-dark p-5">
                <h2 class="section-title text-base mb-4">Latest transactions</h2>
                <div class="space-y-3">
                  <For each={orders().slice(0, 5)} fallback={
                    <p class="text-aurum-muted text-sm text-center py-6">Nema narudžbi</p>
                  }>{order => (
                    <div class="flex items-center gap-3 py-3 border-b border-aurum-border last:border-0">
                      <div class="w-10 h-10 bg-aurum-muted rounded flex items-center justify-center text-xs flex-shrink-0">📦</div>
                      <div class="flex-1 min-w-0">
                        <p class="text-aurum-text text-sm font-bold truncate">Order #{order.id?.slice(0,8).toUpperCase()}</p>
                        <p class="text-aurum-muted text-xs">{order.shippingAddress?.fullName || 'Gost'}</p>
                      </div>
                      <span class="text-aurum-gold font-bold text-sm">${Number(order.total||0).toFixed(2)}</span>
                      <select value={order.status || 'Processing'}
                        onchange={e => updateOrderStatus(order.id, e.target.value)}
                        class="input-dark text-xs px-2 py-1 rounded flex-shrink-0">
                        {['Processing','Awaiting Fulfillment','Shipped','Delivered','Cancelled'].map(s => (
                          <option value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  )}</For>
                </div>
              </div>

              <div class="space-y-4">
                <div class="card-dark p-5">
                  <h3 class="section-title text-sm mb-4">Quick Actions</h3>
                  <div class="space-y-2">
                    <A href="/admin/products/new"
                      class="flex items-center gap-2 bg-aurum-gold text-aurum-black text-sm font-bold px-4 py-2.5 rounded w-full hover:bg-yellow-300 transition-colors">
                      + Add New Product
                    </A>
                    <button onclick={() => setActiveNav('promotions')}
                      class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">
                      🏷 Create Promotion
                    </button>
                    <button onclick={() => { setActiveNav('customers'); loadCustomers() }}
                      class="flex items-center gap-2 border border-aurum-border text-aurum-text text-sm px-4 py-2.5 rounded w-full hover:border-aurum-gold transition-colors">
                      👥 Manage Roles
                    </button>
                  </div>
                </div>

                <div class="card-dark p-5">
                  <div class="flex items-center justify-between mb-3">
                    <h3 class="section-title text-sm">Audit Trail</h3>
                    <span class="text-xs text-aurum-muted">{auditLog.length} events</span>
                  </div>
                  <div class="space-y-3">
                    {auditLog.map(log => (
                      <div class={`text-xs border-l-2 pl-3 ${
                        log.type === 'error'   ? 'border-red-500 text-red-400' :
                        log.type === 'warning' ? 'border-yellow-500 text-yellow-400' :
                        'border-aurum-gold text-aurum-text'
                      }`}>
                        <p class="leading-relaxed">{log.text}</p>
                        <p class="text-aurum-muted mt-0.5">{log.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Low Stock */}
            <div class="card-dark p-5 mt-6">
              <h2 class="section-title text-base mb-4">Items needing restock</h2>
              <Show when={products().filter(p => p.stock <= 5).length === 0}>
                <p class="text-aurum-muted text-sm">Sve zalihe su uredne.</p>
              </Show>
              <For each={products().filter(p => p.stock <= 5)}>{item => (
                <div class="flex items-center gap-4 py-3 border-b border-aurum-border last:border-0">
                  <div class="w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-aurum-muted">
                    <Show when={item.images?.[0]}>
                      <img src={item.images[0]} alt="" class="w-full h-full object-cover" />
                    </Show>
                  </div>
                  <div class="flex-1">
                    <p class="text-aurum-text text-sm font-medium">{item.name}</p>
                    <p class="text-aurum-muted text-xs">SKU: {item.sku} · {item.stock} jedinica</p>
                  </div>
                  <span class={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    item.stock <= 2 ? 'text-red-400 bg-red-900/30' : 'text-yellow-400 bg-yellow-900/30'
                  }`}>{item.stock <= 2 ? 'CRITICAL' : 'LOW'}</span>
                  <A href={`/admin/products/edit/${item.id}`}
                    class="text-xs text-aurum-gold border border-aurum-gold px-2 py-1 rounded hover:bg-aurum-gold hover:text-aurum-black transition-all">
                    Uredi
                  </A>
                </div>
              )}</For>
            </div>
          </Show>

          {/* ── ORDERS ── */}
          <Show when={activeNav() === 'orders'}>
            <h2 class="section-title mb-6">Sve narudžbe</h2>
            <div class="card-dark p-5">
              <Show when={orders().length === 0}>
                <p class="text-aurum-muted text-sm text-center py-10">Nema narudžbi.</p>
              </Show>
              <For each={orders()}>{order => (
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 border-b border-aurum-border last:border-0">
                  <div class="flex-1 min-w-0">
                    <p class="text-aurum-gold font-bold font-mono text-sm">#{order.id?.slice(0,8).toUpperCase()}</p>
                    <p class="text-aurum-text text-sm">{order.shippingAddress?.fullName || 'Gost'}</p>
                    <p class="text-aurum-muted text-xs">{order.shippingAddress?.address}, {order.shippingAddress?.city}</p>
                    <p class="text-aurum-muted text-xs mt-1">
                      Artikli: {order.items?.map(i => `${i.name} x${i.quantity}`).join(', ') || '—'}
                    </p>
                  </div>
                  <div class="flex items-center gap-3 flex-shrink-0">
                    <span class="text-aurum-gold font-bold">${Number(order.total||0).toFixed(2)}</span>
                    <select value={order.status || 'Processing'}
                      onchange={e => updateOrderStatus(order.id, e.target.value)}
                      class="input-dark text-xs px-2 py-1.5 rounded">
                      {['Processing','Awaiting Fulfillment','Shipped','Delivered','Cancelled'].map(s => (
                        <option value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}</For>
            </div>
          </Show>

          {/* ── CUSTOMERS ── */}
          <Show when={activeNav() === 'customers'}>
            <h2 class="section-title mb-6">Korisnici</h2>
            <div class="card-dark p-5">
              <Show when={customersLoading()}>
                <p class="text-aurum-muted text-sm text-center py-10 animate-pulse">Učitavanje korisnika...</p>
              </Show>
              <Show when={!customersLoading() && customers().length === 0}>
                <p class="text-aurum-muted text-sm text-center py-10">Nema korisnika.</p>
              </Show>
              <For each={customers()}>{user => (
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 border-b border-aurum-border last:border-0">
                  <div class="w-10 h-10 bg-aurum-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-aurum-black font-bold">{user.name?.charAt(0) || '?'}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-aurum-text text-sm font-bold">{user.name || 'Bez imena'}</p>
                    <p class="text-aurum-muted text-xs">{user.email}</p>
                    <p class="text-aurum-muted text-xs">UID: {user.id?.slice(0,12)}...</p>
                  </div>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    <span class={`text-xs px-2 py-0.5 rounded-full ${
                      user.role === 'admin' ? 'bg-aurum-gold text-aurum-black font-bold' : 'bg-aurum-dark text-aurum-muted border border-aurum-border'
                    }`}>{user.role || 'user'}</span>
                    <select value={user.role || 'user'}
                      onchange={e => updateUserRole(user.id, e.target.value)}
                      class="input-dark text-xs px-2 py-1.5 rounded">
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </div>
                </div>
              )}</For>
            </div>
          </Show>

          {/* ── PROMOTIONS ── */}
          <Show when={activeNav() === 'promotions'}>
            <h2 class="section-title mb-6">Promocije i kuponi</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="card-dark p-6">
                <h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Aktivni kuponi</h3>
                <div class="space-y-3">
                  <div class="flex items-center justify-between p-3 bg-aurum-dark rounded-lg border border-aurum-border">
                    <div>
                      <p class="text-aurum-gold font-bold font-mono">AURUM10</p>
                      <p class="text-aurum-muted text-xs">10% popust · Samo prijavljeni</p>
                    </div>
                    <span class="text-green-400 text-xs bg-green-900/30 px-2 py-0.5 rounded-full">Aktivan</span>
                  </div>
                </div>
              </div>

              <div class="card-dark p-6">
                <h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Dodaj novi kupon</h3>
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Kod kupona</label>
                    <input type="text" placeholder="npr. SUMMER20" class="input-dark w-full px-4 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Popust (%)</label>
                    <input type="number" placeholder="10" class="input-dark w-full px-4 py-2.5 text-sm" />
                  </div>
                  <button class="btn-gold w-full py-2.5 rounded text-sm">Kreiraj kupon</button>
                </div>
              </div>
            </div>
          </Show>

          {/* ── SETTINGS ── */}
          <Show when={activeNav() === 'settings'}>
            <h2 class="section-title mb-6">Postavke</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div class="card-dark p-6">
                <h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Lozinka za ulaz</h3>
                <p class="text-aurum-muted text-xs mb-4">Promijeni lozinku koja se traži na Password Gate stranici.</p>
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Nova lozinka</label>
                    <input type="text" placeholder="nova-lozinka" class="input-dark w-full px-4 py-2.5 text-sm" />
                  </div>
                  <button class="btn-gold w-full py-2.5 rounded text-sm">Spremi lozinku</button>
                </div>
              </div>

              <div class="card-dark p-6">
                <h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Session postavke</h3>
                <p class="text-aurum-muted text-xs mb-4">
                  Trenutno preostalo: <span class={`font-bold ${sessionWarning() ? 'text-red-400' : 'text-aurum-gold'}`}>{formatTime(secondsLeft())}</span>
                </p>
                <button onclick={extendSession} class="btn-gold w-full py-2.5 rounded text-sm mb-3">
                  + Produži session za 15 min
                </button>
                <button onclick={() => logout().then(() => navigate('/login'))}
                  class="w-full border border-red-500/30 text-red-400 py-2.5 rounded text-sm hover:bg-red-900/20 transition-colors">
                  Odjavi se odmah
                </button>
              </div>

              <div class="card-dark p-6">
                <h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Informacije o shopu</h3>
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Naziv shopa</label>
                    <input type="text" value="AurumVault" class="input-dark w-full px-4 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs text-aurum-muted uppercase tracking-widest mb-1.5">Email za kontakt</label>
                    <input type="email" value="contact@aurumvault.com" class="input-dark w-full px-4 py-2.5 text-sm" />
                  </div>
                  <button class="btn-gold w-full py-2.5 rounded text-sm">Spremi postavke</button>
                </div>
              </div>

              <div class="card-dark p-6">
                <h3 class="text-aurum-gold font-display text-sm font-bold uppercase tracking-widest mb-4">Administracija</h3>
                <div class="space-y-3">
                  <div class="flex items-center justify-between py-2 border-b border-aurum-border">
                    <span class="text-sm text-aurum-text">Maintenance mode</span>
                    <div class="w-8 h-4 bg-aurum-muted rounded-full cursor-pointer hover:bg-aurum-gold transition-colors"></div>
                  </div>
                  <div class="flex items-center justify-between py-2 border-b border-aurum-border">
                    <span class="text-sm text-aurum-text">Password Gate</span>
                    <div class="w-8 h-4 bg-aurum-gold rounded-full cursor-pointer"></div>
                  </div>
                  <div class="flex items-center justify-between py-2">
                    <span class="text-sm text-aurum-text">Members only mode</span>
                    <div class="w-8 h-4 bg-aurum-muted rounded-full cursor-pointer hover:bg-aurum-gold transition-colors"></div>
                  </div>
                </div>
              </div>
            </div>
          </Show>

        </main>

        {/* Desna kolona — Session */}
        <div class="w-48 bg-aurum-dark border-l border-aurum-border p-4 hidden xl:block flex-shrink-0">
          <h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-3">Role-Based Controls</h4>
          {[
            { label: 'Grant product edit', active: true },
            { label: 'Allow promotions create', active: false },
          ].map(ctrl => (
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-aurum-text leading-tight pr-2">{ctrl.label}</span>
              <div class={`w-8 h-4 rounded-full flex-shrink-0 cursor-pointer ${ctrl.active ? 'bg-aurum-gold' : 'bg-aurum-muted'}`}></div>
            </div>
          ))}

          <div class="mt-6 pt-4 border-t border-aurum-border card-dark p-3">
            <h4 class="text-xs text-aurum-muted uppercase tracking-widest mb-2">Session Timeout</h4>
            <p class="text-xs text-aurum-muted leading-relaxed mb-3">
              Ističe za:{' '}
              <span class={`font-bold ${sessionWarning() ? 'text-red-400 animate-pulse' : 'text-aurum-gold'}`}>
                {formatTime(secondsLeft())}
              </span>
            </p>
            <Show when={sessionWarning()}>
              <p class="text-xs text-red-400 mb-2 animate-pulse">⚠ Session uskoro ističe!</p>
            </Show>
            <div class="flex flex-col gap-2">
              <button onclick={extendSession} class="btn-gold py-1.5 rounded text-xs">
                Extend Session
              </button>
              <button onclick={() => logout().then(() => navigate('/login'))}
                class="border border-aurum-border text-aurum-muted py-1.5 rounded text-xs hover:border-red-400 hover:text-red-400 transition-colors">
                Logout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
