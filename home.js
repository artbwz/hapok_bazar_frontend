const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const buttonLogin = document.querySelector(".buttonLogin");
const openCarrinho = document.querySelector(".openCarrinho");
const productCards = document.querySelectorAll(".product-card");

openCarrinho.addEventListener("click", () => {
  window.location.href = "frontend/pages/confirmar_compra/confirmar_compra.html";
});

buttonLogin.addEventListener("click", () => {
  window.location.href = "frontend/pages/login/login.html";
});

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("is-open");
  });
}

if (productCards.length > 0) {
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = "frontend/pages/detalhe_produto/detalhe_produto.html";
    });
  });
}
