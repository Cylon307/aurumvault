import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyDkR00qL4A-yMP5Ehta3RYowC2d-vR8I78",

  authDomain: "aurumvault-def8b.firebaseapp.com",

  projectId: "aurumvault-def8b",

  storageBucket: "aurumvault-def8b.firebasestorage.app",

  messagingSenderId: "646887449279",

  appId: "1:646887449279:web:12705de1dc6aa9df5a9c0a"

};

export const app  = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db   = getFirestore(app)