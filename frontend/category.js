const categoryLinks = document.querySelectorAll(".categorias-dropdown a");
const productCardsCategories = document.querySelectorAll(".product-card");

categoryLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const category = link.dataset.category;

    productCardsCategories.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (category === "all" || cardCategory === category) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
