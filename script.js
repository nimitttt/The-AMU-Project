const track = document.querySelector(".track");
const slides = document.querySelectorAll(".slide-holder");
const dots = document.querySelectorAll(".dot");

let counter = 1;
let allowShift = true;

track.style.transform = `translateX(-${counter * 100}%)`;

const gon = () => {
  if (!allowShift) return;

  counter++;
  slide();
};

const gop = () => {
  if (!allowShift) return;

  counter--;
  slide();
};

const slide = () => {
  allowShift = false;

  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${counter * 100}%)`;

  updateDots();
};

track.addEventListener("transitionend", () => {
  if (counter === slides.length - 1) {
    track.style.transition = "none";
    counter = 1;
    track.style.transform = `translateX(-${counter * 100}%)`;
  }

  if (counter === 0) {
    track.style.transition = "none";
    counter = slides.length - 2;
    track.style.transform = `translateX(-${counter * 100}%)`;
  }

  updateDots();

  allowShift = true;
});

const updateDots = () => {
  dots.forEach((dot) => dot.classList.remove("active"));

  let realIndex = counter;

  if (counter === 0) realIndex = slides.length - 2;

  if (counter === slides.length - 1) realIndex = 1;

  dots[realIndex - 1].classList.add("active");
};

const goToSlide = (index) => {
  if (!allowShift) return;

  counter = index;
  slide();
};

// PROJECT SLIDESHOW LOGIC

const projectTrack = document.querySelector(".project-slideshow-track");
const projectslides = document.querySelectorAll(".project-slide");

let index = 0;

setInterval(() => {
  index++;

  if (index === projectslides.length) {
    index = 0;
  }

  projectTrack.style.transform = `translateX(-${index * 395.026}px)`;
}, 10000);
