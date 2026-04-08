const loginForm = document.getElementById("loginForm");
const feedbackLogin = document.getElementById("feedbackLogin");

function showLoginFeedback(message, type) {
    feedbackLogin.textContent = message;
    feedbackLogin.classList.remove("error", "success");
    if (type) {
        feedbackLogin.classList.add(type);
    }
}

if (loginForm && feedbackLogin) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const senha = document.getElementById("loginSenha").value;

        if (!email || !senha) {
            showLoginFeedback("Preencha e-mail e senha.", "error");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            showLoginFeedback("Digite um e-mail valido.", "error");
            return;
        }

        if (senha.length < 6) {
            showLoginFeedback("A senha precisa ter no minimo 6 caracteres.", "error");
            return;
        }

        showLoginFeedback(mensagem, "success");
        loginForm.reset();
    });
}
