const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const qtyValue = document.getElementById("qtyValue");
const decreaseQty = document.getElementById("decreaseQty");
const increaseQty = document.getElementById("increaseQty");
const valueText = document.querySelector(".value");

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
    const total = unitPrice * quantity;
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
