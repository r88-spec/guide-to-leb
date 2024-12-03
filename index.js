const preloader = document.getElementById("preloader")
window.addEventListener("load", hidePreloader())
function hidePreloader() {
  preloader.style.display = "none"
}

const slides = document.querySelectorAll(".slides");
let counter = 0;
const totalSlides = slides.length;

// Initialize positions
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

// Function to move backward
function goBack() {
  counter = (counter - 1 + totalSlides) % totalSlides; // Cycle backward
  updateSlides();
}

// Function to move forward
function goNext() {
  counter = (counter + 1) % totalSlides; // Cycle forward
  updateSlides();
}

// Update slide positions
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - counter) * 100}%)`;
  });
}