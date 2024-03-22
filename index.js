const slidesContainer = document.getElementById("cards__list");
const slide = document.querySelector(".planing__cards-item");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollBy({
    left: slideWidth,
    behavior: "smooth",
  })
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollBy({
    left: -slideWidth,
    behavior: "smooth",
  })
});