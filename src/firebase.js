import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB0bxH7qTjiLgaVlWa2oshoJ3qvyxAQ6aM",
    authDomain: "todo-app-78128.firebaseapp.com",
    projectId: "todo-app-78128",
    storageBucket: "todo-app-78128.firebasestorage.app",
    messagingSenderId: "600031039192",
    appId: "1:600031039192:web:a92e2a3c88712a9da4d1ad",
    measurementId: "G-J23Z55YLC6"
  }

  const app = initializeApp(firebaseConfig) 
  const db = getFirestore(app)

  export{db}


