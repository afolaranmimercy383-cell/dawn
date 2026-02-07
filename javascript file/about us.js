const filters = document.querySelectorAll(".filter-item");
const resetBtn = document.querySelector(".reset-btn");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filter.parentElement.classList.toggle("open");
  });
});

// Reset button
resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(filter => {
    filter.classList.remove("open");
    filter.querySelectorAll("input").forEach(input => {
      input.checked = false;
    });
  });
});
