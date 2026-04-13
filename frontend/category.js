const categoryLinks = document.querySelectorAll(".categorias-dropdown a");

categoryLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const category = link.dataset.category;
    localStorage.setItem("selectedCategory", category);

    window.location.href = "/frontend/pages/home/index.html";
  });
});
