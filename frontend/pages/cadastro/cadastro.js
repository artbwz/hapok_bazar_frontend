const cadastroForm = document.getElementById("cadastroForm");
const feedbackCadastro = document.getElementById("feedbackCadastro");

function setFeedback(message, type) {
    feedbackCadastro.textContent = message;
    feedbackCadastro.classList.remove("error", "success");
    if (type) {
        feedbackCadastro.classList.add(type);
    }
}

if (cadastroForm && feedbackCadastro) {
    cadastroForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        const termosAceitos = document.getElementById("termos").checked;

        if (!nome || !email || !telefone || !senha || !confirmarSenha) {
            setFeedback("Preencha todos os campos obrigatorios.", "error");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            setFeedback("Digite um e-mail valido.", "error");
            return;
        }

        if (senha.length < 6) {
            setFeedback("A senha precisa ter pelo menos 6 caracteres.", "error");
            return;
        }

        if (senha !== confirmarSenha) {
            setFeedback("As senhas nao coincidem.", "error");
            return;
        }

        if (!termosAceitos) {
            setFeedback("Aceite os termos de uso para continuar.", "error");
            return;
        }

        setFeedback("Cadastro realizado com sucesso!", "success");
        cadastroForm.reset();
    });
}
