// SEED SKRIPTA — pokreni jednom da napuniš Firestore s proizvodima
// Kako pokrenuti:
// 1. Dodaj u src/main privremeno: import './seed.js'
// 2. Pokreni npm run dev
// 3. Otvori browser — podaci će se upisati
// 4. Makni import './seed.js' iz main-a

import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from './firebase.js'

const PRODUCTS_DATA = [
  {
    name: 'Aurum Signet Classic',
    price: 249,
    salePrice: null,
    category: 'Rings',
    badge: 'Exclusive',
    membersOnly: true,
    stock: 5,
    sku: 'AV-RLIC-09',
    description: 'Refined signet ring crafted for understated luxury. Brushed finish with polished bezel. Hand-finished and numbered.',
    images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600'],
    sizes: ['5','7','8','9'],
  },
  {
    name: '18k Locket — Heirloom',
    price: 7800,
    salePrice: null,
    category: 'Necklaces',
    badge: 'Members Only',
    membersOnly: true,
    stock: 1,
    sku: 'AV-542',
    description: 'Hand-engraved, comes with box. A timeless piece for generations.',
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600'],
    sizes: [],
  },
  {
    name: 'Enamel Timepiece — Aurora',
    price: 12900,
    salePrice: null,
    category: 'Watches',
    badge: 'Limited',
    membersOnly: false,
    stock: 3,
    sku: 'TF-337',
    description: '39mm manual wind. A statement piece in deep enamel and gold.',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600'],
    sizes: [],
  },
  {
    name: 'Ceremonial Mask — Obsidian',
    price: 9250,
    salePrice: null,
    category: 'Art Objects',
    badge: 'Limited 2',
    membersOnly: false,
    stock: 2,
    sku: 'CM-016',
    description: 'Museum-quality finish. Hand-crafted obsidian ceremonial mask.',
    images: ['https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600'],
    sizes: [],
  },
  {
    name: 'Vault Pendant — Hammered',
    price: 1150,
    salePrice: null,
    category: 'Necklaces',
    badge: 'Members Only',
    membersOnly: true,
    stock: 8,
    sku: 'IT-325',
    description: 'Chain sold separately. Hammered gold finish pendant.',
    images: ['https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600'],
    sizes: [],
  },
  {
    name: 'Eclipse Graph Leather Wallet',
    price: 89,
    salePrice: 69,
    category: 'Accessories',
    badge: 'Sale',
    membersOnly: false,
    stock: 240,
    sku: 'AV-WLT-021',
    description: 'Compact RFID-protected leather wallet with premium finishing. Available in Onyx and Ash.',
    images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?w=600'],
    sizes: [],
  },
  {
    name: 'Aurum Slim Band',
    price: 129,
    salePrice: null,
    category: 'Rings',
    badge: null,
    membersOnly: false,
    stock: 15,
    sku: 'AV-SLM-03',
    description: 'Sleek and minimal. 18k gold plated over sterling.',
    images: ['https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600'],
    sizes: ['5','6','7','8','9'],
  },
  {
    name: 'Vintage Crest Necklace',
    price: 189,
    salePrice: null,
    category: 'Necklaces',
    badge: null,
    membersOnly: false,
    stock: 6,
    sku: 'AV-VCN-11',
    description: 'Victorian-inspired crest pendant on 18" gold chain.',
    images: ['https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600'],
    sizes: [],
  },
]

async function seedProducts() {
  try {
    console.log('🌱 Brišem stare proizvode...')
    const existing = await getDocs(collection(db, 'products'))
    for (const d of existing.docs) {
      await deleteDoc(doc(db, 'products', d.id))
    }

    console.log('🌱 Dodajem nove proizvode...')
    for (const product of PRODUCTS_DATA) {
      await addDoc(collection(db, 'products'), product)
      console.log(`✅ Dodan: ${product.name}`)
    }

    console.log('🎉 Seed završen! Svi proizvodi su u Firestoreu.')
  } catch (err) {
    console.error('❌ Greška pri seedanju:', err)
  }
}

seedProducts()