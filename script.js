/* =========================================
   MALEELE PRODUCT FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const catalogueCards = document.querySelectorAll(".catalogue-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const selectedCategory = button.dataset.filter;

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    catalogueCards.forEach(card => {

      const cardCategory = card.dataset.category;

      if (
        selectedCategory === "all" ||
        cardCategory === selectedCategory
      ) {
        card.classList.remove("hide-product");
      } else {
        card.classList.add("hide-product");
      }

    });

  });

});
