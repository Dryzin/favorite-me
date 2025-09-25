import { database, auth } from "./connection.js";
import { ref, set, get } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

function salvarDadosUsuario(userId, nome, idade, camiseta, calca, sapato) {
    const userRef = ref(database, 'usuarios/' + userId);
    
    set(userRef, {
        nome: nome,
        idade: idade,
        camiseta: camiseta,
        calca: calca,
        sapato: sapato
    }).then(() => {
        alert("🎉 Dados salvos com sucesso!");
    }).catch((error) => {
        console.error("❌ Erro ao salvar os dados:", error);
    });
}

function buscarDadosUsuario(userId) {
    const userRef = ref(database, 'usuarios/' + userId);
    
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            const dados = snapshot.val();
            console.log("📌 Dados do usuário:", dados);
            preencherFormulario(dados);
        } else {
            console.log("⚠️ Nenhum dado encontrado para este usuário.");
        }
    }).catch((error) => {
        console.error("❌ Erro ao buscar os dados:", error);
    });
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error("Erro ao fazer logout:", error.message);
    });
}

function compartilhar_perfil(){
    const uid = auth.currentUser.uid;
    window.location.href = 'compartilhar.html?uid=' + uid;
}


// Exportando funções para usar nas páginas HTML
export {
  salvarDadosUsuario,
  buscarDadosUsuario,
  logout,
  compartilhar_perfil
};


