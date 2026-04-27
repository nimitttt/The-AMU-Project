// HAMBURGER ICON

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const menuLinks = document.querySelectorAll(".menu a");

function toggleMenu() {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// HERO SEC SLIDER

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
let projectslides = document.querySelectorAll(".project-slide");

const firstClone = projectslides[0].cloneNode(true);

projectTrack.appendChild(firstClone);

projectslides = document.querySelectorAll(".project-slide");

let index = 0;

setInterval(() => {
  const slideWidth = window.innerWidth >= 890 ? 50 : 100;

  index++;

  projectTrack.style.transition = "transform 1s ease";

  projectTrack.style.transform = `translateX(-${index * slideWidth}%)`;

  if (index === projectslides.length - 1) {
    setTimeout(() => {
      projectTrack.style.transition = "none";

      index = 0;

      projectTrack.style.transform = "translateX(0)";
    }, 1000);
  }
}, 10000);
// EB HEIGHT ISSUE

const div1List = document.querySelectorAll(".eb1");
const div2List = document.querySelectorAll(".eb2");

div1List.forEach((div1, index) => {

  function syncHeight() {
    div2List[index].style.height =
      div1.offsetHeight + "px";
  }

  new ResizeObserver(syncHeight).observe(div1);
});
