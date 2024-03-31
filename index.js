const footerForm = document.querySelector('.footer__form');
const headerBurger = document.querySelector('.header__mobile-btn');
const headerModal = document.querySelector('.header__modal');
const slidesContainer = document.getElementById("cards__list");
const slide = document.querySelector(".planing__cards-item");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const headerBtn = document.querySelector('.header__btn');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');
const formConfirm = document.querySelector('.modal__confirm');
const instructureList = document.querySelector('.instructure__list')
const advantagesList = document.querySelector('.advantages__list')
const heroImg = document.querySelector('.hero__img-savr-avenue')
const slider = document.querySelector('.about-project__img-list');
const aboutProjectImg = document.querySelector('.about-project__img-list')
const footerArrow = document.querySelector('.footer__arrow');

// first slider

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

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
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

// footer arrow

footerArrow.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

// header burger

headerBurger.addEventListener('click', () => {
  headerModal.classList.toggle('header__modal--active');
})

// footer form

footerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  modal.classList.toggle('modal--active');
  form.classList.toggle('form--not-active');
  formConfirm.classList.toggle('modal--active');
})

// modal form

headerBtn.addEventListener('click', () => {
  modal.classList.toggle('modal--active');
  form.classList.toggle('modal__form--active');
})

modal.addEventListener('click', (e) => {
  if (!e.target.classList.contains('.modal') && !e.target.closest('.modal__form')) {
    modal.classList.remove('modal--active');
    form.classList.remove('modal__form--active');
    formConfirm.classList.remove('modal--active');
    form.classList.remove('form--not-active');
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formConfirm.classList.toggle('modal--active');
  form.classList.toggle('form--not-active');
  e.target.reset();
})

// animation on view

const onView = (el, className) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  }, {
  });
  observer.observe(el);
};

onView(heroImg, 'hero__on-view')
onView(instructureList, 'instructure__on-view')
onView(advantagesList, 'advantages__on-view')
onView(aboutProjectImg, 'about-project__on-view')