const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const qtyValue = document.getElementById("qtyValue");
const decreaseQty = document.getElementById("decreaseQty");
const increaseQty = document.getElementById("increaseQty");
const valueText = document.querySelector(".value");
const addCartBtn = document.querySelector(".add-cart");
const cartModal = document.getElementById("cartModal");
const closeModal = document.getElementById("closeModal");
const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
  document.querySelector("h2").textContent = product.name;

  document.querySelector(".name-price").innerHTML = `
    ${product.name}<br>
    R$ ${Number(product.price).toFixed(2)}
  `;

  document.querySelector(".main-photo img").src = product.image;
}

const unitPrice = 9.99;

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function updateTotalValue() {
  if (!qtyValue || !valueText) return;

  const quantity = Number(qtyValue.textContent) || 1;
  const total = product.price * quantity;
  valueText.textContent = `Valor: ${formatCurrency(total)}`;
}

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("is-open");
  });
}

if (qtyValue && decreaseQty && increaseQty) {
  updateTotalValue();

  decreaseQty.addEventListener("click", () => {
    const current = Number(qtyValue.textContent);
    if (current > 1) {
      qtyValue.textContent = String(current - 1);
      updateTotalValue();
    }
  });

  increaseQty.addEventListener("click", () => {
    const current = Number(qtyValue.textContent);
    qtyValue.textContent = String(current + 1);
    updateTotalValue();
  });
}

if (addCartBtn && cartModal && closeModal) {
  addCartBtn.addEventListener("click", () => {
    cartModal.classList.add("show");
    setTimeout(() => {
      cartModal.classList.remove("show");
    }, 3000);
  });

  closeModal.addEventListener("click", () => {
    cartModal.classList.remove("show");
  });

  cartModal.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.classList.remove("show");
    }
  });
}
