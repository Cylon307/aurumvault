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
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'
import { auth, db } from '../firebase.js'

// ── Auth Store ──────────────────────────────────────────────
export const [isAuthenticated, setIsAuthenticated] = createSignal(false)
export const [currentUser, setCurrentUser] = createSignal(null)
export const [isAdmin, setIsAdmin] = createSignal(false)
export const [authLoading, setAuthLoading] = createSignal(true)

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

// ── Auth Functions ──────────────────────────────────────────
export async function register(name, email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  const user = userCredential.user
  await setDoc(doc(db, 'users', user.uid), {
    name,
    email,
    role: 'user',
    address: '',
    wishlist: [],
    createdAt: serverTimestamp(),
  })
  return user
}

export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

export async function logout() {
  await signOut(auth)
}

export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email)
}

export async function updateProfile(data) {
  const user = currentUser()
  if (!user) return
  await updateDoc(doc(db, 'users', user.uid), data)
  setCurrentUser({ ...user, ...data })
}

// ── Password Gate ───────────────────────────────────────────
export const [siteUnlocked, setSiteUnlocked] = createSignal(false)
export const SITE_PASSCODE = 'aurum2025'

// ── Products ────────────────────────────────────────────────
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

// ── Cart ────────────────────────────────────────────────────
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
  return cartItems().reduce((sum, i) => sum + (i.price || 0) * i.quantity, 0)
}

export function cartCount() {
  return cartItems().reduce((sum, i) => sum + i.quantity, 0)
}

// ── Orders ──────────────────────────────────────────────────
export const [orders, setOrders] = createSignal([])

export async function fetchOrders() {
  const user = currentUser()
  if (!user) return
  try {
    const snap = await getDocs(
      query(collection(db, 'orders'), where('userId', '==', user.uid))
    )
    setOrders(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  } catch (err) {
    console.error(err)
  }
}

export async function fetchAllOrders() {
  try {
    const snap = await getDocs(collection(db, 'orders'))
    setOrders(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  } catch (err) {
    console.error(err)
  }
}

export async function createOrder(orderData) {
  const user = currentUser()
  const ref = await addDoc(collection(db, 'orders'), {
    ...orderData,
    userId: user?.uid || null,
    createdAt: serverTimestamp(),
  })
  return ref.id
}

// ── Coupons ─────────────────────────────────────────────────
export async function validateCoupon(code) {
  const snap = await getDoc(doc(db, 'coupons', code.toUpperCase()))
  if (!snap.exists()) throw new Error('Kupon ne postoji.')
  const data = snap.data()
  if (!data.active) throw new Error('Kupon nije aktivan.')
  return data
}

// ── Wishlist ─────────────────────────────────────────────────
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
  } catch (err) {
    console.error(err)
    return false
  }
}

// ── Reviews ──────────────────────────────────────────────────
export async function fetchReviews(productId) {
  try {
    const snap = await getDocs(
      query(collection(db, 'reviews'), where('productId', '==', productId))
    )
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (err) {
    console.error(err)
    return []
  }
}

export async function addReview(productId, rating, comment) {
  const user = currentUser()
  if (!user) throw new Error('Morate biti prijavljeni za recenziju.')
  try {
    await addDoc(collection(db, 'reviews'), {
      productId,
      userId: user.uid,
      userName: user.name || 'Korisnik',
      rating: Number(rating),
      comment: comment?.trim() || '',
      createdAt: serverTimestamp(),
    })
    return true
  } catch (err) {
    console.error(err)
    throw new Error('Neuspjelo spremanje recenzije.')
  }
}