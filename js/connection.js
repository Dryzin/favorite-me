// connection.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBbQ-F-L__OWLp2PQJw-GNzAuBdsRWfsFs",
    authDomain: "meupresente-3f758.firebaseapp.com",
    databaseURL: "https://meupresente-3f758-default-rtdb.firebaseio.com",
    projectId: "meupresente-3f758",
    storageBucket: "meupresente-3f758.firebasestorage.app",
    messagingSenderId: "814268610764",
    appId: "1:814268610764:web:f5f0d0ff16558ec96aaa69"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Exporta variáveis e funções
export { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
