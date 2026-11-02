var slides = document.querySelectorAll(".carousel__slide");
var dotsContainer = document.querySelector(".carousel__dots");
var prevBtn = document.querySelector(".carousel__btn--prev");
var nextBtn = document.querySelector(".carousel__btn--next");
var currentIndex = 0;

// Create dot indicators
slides.forEach(function (_, i) {
  var dot = document.createElement("button");
  dot.classList.add("carousel__dot");
  dot.setAttribute("aria-label", "Go to slide " + (i + 1));
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", function () {
    goToSlide(i);
  });
  dotsContainer.appendChild(dot);
});

function goToSlide(index) {
  slides[currentIndex].classList.remove("active");
  dotsContainer.children[currentIndex].classList.remove("active");

  currentIndex = index;

  slides[currentIndex].classList.add("active");
  dotsContainer.children[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", function () {
  var newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  goToSlide(newIndex);
});

nextBtn.addEventListener("click", function () {
  var newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  goToSlide(newIndex);
});

// Auto-advance every 4 seconds
var autoPlay = setInterval(function () {
  var newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  goToSlide(newIndex);
}, 4000);

// Pause auto-play on hover
var carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", function () {
  clearInterval(autoPlay);
});
carousel.addEventListener("mouseleave", function () {
  autoPlay = setInterval(function () {
    var newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, 4000);
});
