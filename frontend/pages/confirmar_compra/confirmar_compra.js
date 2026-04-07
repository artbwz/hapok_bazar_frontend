const cartItems = document.getElementById("cartItems");
const checkoutForm = document.getElementById("checkoutForm");
const feedbackCheckout = document.getElementById("feedbackCheckout");
const subtotalElement = document.getElementById("subtotal");
const freteElement = document.getElementById("frete");
const totalElement = document.getElementById("total");

const FRETE_FIXO = 12;

function formatBRL(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calcularTotais() {
    let subtotal = 0;

    document.querySelectorAll(".cart-item").forEach((item) => {
        const price = Number(item.getAttribute("data-price"));
        const qty = Number(item.querySelector(".qty-value").textContent);
        subtotal += price * qty;
    });

    const total = subtotal + FRETE_FIXO;
    subtotalElement.textContent = formatBRL(subtotal);
    freteElement.textContent = formatBRL(FRETE_FIXO);
    totalElement.textContent = formatBRL(total);
}

function updateFeedback(message, type) {
    feedbackCheckout.textContent = message;
    feedbackCheckout.classList.remove("error", "success");
    if (type) {
        feedbackCheckout.classList.add(type);
    }
}

if (cartItems) {
    cartItems.addEventListener("click", (event) => {
        const button = event.target.closest(".qty-btn");
        if (!button) {
            return;
        }

        const item = button.closest(".cart-item");
        const qtyElement = item.querySelector(".qty-value");
        let qty = Number(qtyElement.textContent);

        if (button.dataset.action === "increase") {
            qty += 1;
        }

        if (button.dataset.action === "decrease" && qty > 1) {
            qty -= 1;
        }

        qtyElement.textContent = String(qty);
        calcularTotais();
    });
}

if (checkoutForm && feedbackCheckout) {
    checkoutForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const endereco = document.getElementById("endereco").value.trim();
        const pagamento = document.getElementById("pagamento").value;

        if (!endereco || !pagamento) {
            updateFeedback("Informe endereco e forma de pagamento.", "error");
            return;
        }

        updateFeedback("Compra confirmada com sucesso!", "success");
        checkoutForm.reset();
        calcularTotais();
    });
}

calcularTotais();
