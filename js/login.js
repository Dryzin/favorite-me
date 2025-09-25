import { auth, signInWithEmailAndPassword } from './connection.js';

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Realizando o login
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = 'cadastrar.html'; 
        })
        .catch((error) => {
            console.error("Erro de login:", error.message);
            alert("Erro ao fazer login: " + error.message);
        });
});
