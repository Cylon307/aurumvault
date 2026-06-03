import { createSignal } from 'solid-js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore'
import { auth, db } from '../firebase.js'

// ── Auth Store ──────────────────────────────────────────────
export const [isAuthenticated, setIsAuthenticated] = createSignal(false)
export const [currentUser, setCurrentUser] = createSignal(null)
export const [isAdmin, setIsAdmin] = createSignal(false)
export const [authLoading, setAuthLoading] = createSignal(true)

// Slušaj promjene auth stanja — automatski se pokreće
onAuthStateChanged(auth, async (firebaseUser) => {
  if (firebaseUser) {
    const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
    const userData = userDoc.exists() ? userDoc.data() : {}
    setCurrentUser({
      uid:   firebaseUser.uid,
      email: firebaseUser.email,
      name:  userData.name || firebaseUser.email,
      role:  userData.role || 'user',
    })
    setIsAuthenticated(true)
    setIsAdmin(userData.role === 'admin')
  } else {
    setCurrentUser(null)
    setIsAuthenticated(false)
    setIsAdmin(false)
  }
  setAuthLoading(false)
})

// Registracija
export async function register(name, email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  const user = userCredential.user
  await setDoc(doc(db, 'users', user.uid), {
    name,
    email,
    role: 'user',
    address: '',
    createdAt: serverTimestamp(),
  })
  return user
}

// Prijava
export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

// Odjava
export async function logout() {
  await signOut(auth)
}

// Oporavak lozinke
export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email)
}

// Ažuriranje profila
export async function updateProfile(data) {
  const user = currentUser()
  if (!user) return
  await updateDoc(doc(db, 'users', user.uid), data)
  setCurrentUser({ ...user, ...data })
}

// ── Password Gate ───────────────────────────────────────────
export const [siteUnlocked, setSiteUnlocked] = createSignal(false)
export const SITE_PASSCODE = 'aurum2025'

// ── Products Store ──────────────────────────────────────────
export const [products, setProducts] = createSignal([])
export const [productsLoading, setProductsLoading] = createSignal(false)

export async function fetchProducts() {
  setProductsLoading(true)
  try {
    const snapshot = await getDocs(collection(db, 'products'))
    const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    setProducts(items)
  } catch (err) {
    console.error('Greška pri dohvaćanju proizvoda:', err)
  }
  setProductsLoading(false)
}

export const CATEGORIES = ['All', 'Rings', 'Necklaces', 'Watches', 'Accessories', 'Art Objects']

// ── Cart Store ──────────────────────────────────────────────
export const [cartItems, setCartItems] = createSignal([])

export function addToCart(product, quantity = 1) {
  setCartItems(prev => {
    const existing = prev.find(i => i.id === product.id)
    if (existing) {
      return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i)
    }
    return [...prev, { ...product, quantity }]
  })
}

export function removeFromCart(productId) {
  setCartItems(prev => prev.filter(i => i.id !== productId))
}

export function updateQuantity(productId, quantity) {
  if (quantity <= 0) { removeFromCart(productId); return }
  setCartItems(prev => prev.map(i => i.id === productId ? { ...i, quantity } : i))
}

export function clearCart() { setCartItems([]) }

export function cartTotal() {
  return cartItems().reduce((sum, i) => sum + i.price * i.quantity, 0)
}

export function cartCount() {
  return cartItems().reduce((sum, i) => sum + i.quantity, 0)
}

// ── Orders Store ─────────────────────────────────────────────
export const [orders, setOrders] = createSignal([])

export async function fetchOrders() {
  try {
    const user = currentUser()
    let q
    if (isAdmin()) {
      q = query(collection(db, 'orders'))
    } else if (user) {
      q = query(collection(db, 'orders'), where('userId', '==', user.uid))
    } else {
      return
    }
    const snapshot = await getDocs(q)
    const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    setOrders(items)
  } catch (err) {
    console.error('Greška pri dohvaćanju narudžbi:', err)
  }
}

export async function createOrder(orderData) {
  const user = currentUser()
  const order = {
    ...orderData,
    userId: user?.uid || null,
    status: 'U obradi',
    createdAt: serverTimestamp(),
  }
  const docRef = await addDoc(collection(db, 'orders'), order)
  return docRef.id
}

// ── Coupons ──────────────────────────────────────────────────
export async function validateCoupon(code) {
  if (!isAuthenticated()) {
    throw new Error('Kuponi su dostupni samo prijavljenim korisnicima.')
  }
  const couponDoc = await getDoc(doc(db, 'coupons', code))
  if (!couponDoc.exists()) {
    throw new Error('Nevažeći kupon kod.')
  }
  const data = couponDoc.data()
  if (!data.active) {
    throw new Error('Ovaj kupon više nije aktivan.')
  }
  return data
}

// ── Wishlist ─────────────────────────────────────────────────
import { arrayUnion, arrayRemove } from 'firebase/firestore'

export const [wishlist, setWishlist] = createSignal([])

export async function fetchWishlist() {
  const user = currentUser()
  if (!user) return
  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid))
    setWishlist(userDoc.data()?.wishlist || [])
  } catch (err) { console.error(err) }
}

export async function toggleWishlist(productId) {
  const user = currentUser()
  if (!user) return false
  const inList = wishlist().includes(productId)
  try {
    await updateDoc(doc(db, 'users', user.uid), {
      wishlist: inList ? arrayRemove(productId) : arrayUnion(productId)
    })
    setWishlist(prev =>
      inList ? prev.filter(id => id !== productId) : [...prev, productId]
    )
    return !inList
  } catch (err) { console.error(err); return false }
}

// ── Reviews ──────────────────────────────────────────────────
export async function fetchReviews(productId) {
  try {
    const snap = await getDocs(
      query(collection(db, 'reviews'), where('productId', '==', productId))
    )
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (err) { console.error(err); return [] }
}

export async function addReview(productId, rating, comment) {
  const user = currentUser()
  if (!user) throw new Error('Morate biti prijavljeni za recenziju.')
  await addDoc(collection(db, 'reviews'), {
    productId,
    userId:   user.uid,
    userName: user.name,
    rating:   Number(rating),
    comment,
    createdAt: serverTimestamp(),
  })
}
