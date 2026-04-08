const cadastroForm = document.getElementById("cadastroForm");
const feedbackCadastro = document.getElementById("feedbackCadastro");

const nomeRegex = /^[A-Za-z\u00C0-\u017F]+(?:\s+[A-Za-z\u00C0-\u017F]+)+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const telefoneRegex = /^\d{10,11}$/;
const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

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
        const telefoneInput = document.getElementById("telefone").value.trim();
        const telefone = telefoneInput.replace(/\D/g, "");
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        const termosAceitos = document.getElementById("termos").checked;

        if (!nome || !email || !telefone || !senha || !confirmarSenha) {
            setFeedback("Preencha todos os campos obrigatorios.", "error");
            return;
        }

        if (!nomeRegex.test(nome)) {
            setFeedback("Digite nome e sobrenome validos.", "error");
            return;
        }

        if (!emailRegex.test(email)) {
            setFeedback("Digite um e-mail valido.", "error");
            return;
        }

        if (!telefoneRegex.test(telefone)) {
            setFeedback("Digite um telefone valido com DDD.", "error");
            return;
        }

        if (!senhaRegex.test(senha)) {
            setFeedback("A senha deve ter 6+ caracteres, com maiuscula, minuscula e numero.", "error");
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
