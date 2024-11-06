import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBznMBylO96bmTr__jsYDMS-Ws-Yl4Vn2Q",
    authDomain: "ecommerce-coderhouse-d8c90.firebaseapp.com",
    projectId: "ecommerce-coderhouse-d8c90",
    storageBucket: "ecommerce-coderhouse-d8c90.firebasestorage.app",
    messagingSenderId: "437030062719",
    appId: "1:437030062719:web:3d65098526df59a035cd4a"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)