(function () {
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card");

  if (!searchInput || productCards.length === 0) return;

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    productCards.forEach((card) => {
      const dataName = card.dataset.name || "";
      const textName = card.querySelector("p")?.textContent || "";

      const productName = (dataName + " " + textName).toLowerCase();

      if (productName.includes(searchTerm)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
})();
