const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const qtyValue = document.getElementById("qtyValue");
const decreaseQty = document.getElementById("decreaseQty");
const increaseQty = document.getElementById("increaseQty");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        const expanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!expanded));
        mainNav.classList.toggle("is-open");
    });
}

if (qtyValue && decreaseQty && increaseQty) {
    decreaseQty.addEventListener("click", () => {
        const current = Number(qtyValue.textContent);
        if (current > 1) {
            qtyValue.textContent = String(current - 1);
        }
    });

    increaseQty.addEventListener("click", () => {
        const current = Number(qtyValue.textContent);
        qtyValue.textContent = String(current + 1);
    });
}
