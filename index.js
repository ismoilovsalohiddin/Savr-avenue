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

// second slider

const slider = document.querySelector('.about-project__img-list');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

const arrow = document.querySelector('.footer__arrow');

arrow.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

// form

const headerBtn = document.querySelector('.header__btn');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');
headerBtn.addEventListener('click', () => {
  modal.classList.toggle('active');
  form.classList.toggle('modal__form--active');
})

modal.addEventListener('click', (e) => {
  if (!e.target.classList.contains('.modal') && !e.target.closest('.modal__form')) {
    modal.classList.remove('active');
    form.classList.remove('modal__form--active');
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  modal.classList.remove('active');
  form.classList.remove('modal__form--active');
})