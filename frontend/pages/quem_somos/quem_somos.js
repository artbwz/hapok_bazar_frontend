const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const buttonLogin = document.querySelector(".buttonLogin");
const openCarrinho = document.querySelector(".openCarrinho");

openCarrinho.addEventListener("click", () => {
  window.location.href = "../confirmar_compra/confirmar_compra.html";
});

buttonLogin.addEventListener("click", () => {
  window.location.href = "../login/login.html";
});

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("is-open");
  });
}
