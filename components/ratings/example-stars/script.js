var rating = document.getElementById("rating1");
var stars = rating.querySelectorAll(".rating__star");
var ratingValue = document.getElementById("ratingValue");

stars.forEach(function (star) {
  star.addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    ratingValue.textContent = value;

    stars.forEach(function (s, i) {
      if (i < value) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
  });

  star.addEventListener("mouseenter", function () {
    var value = this.getAttribute("data-value");
    stars.forEach(function (s, i) {
      if (i < value) {
        s.style.color = "#ffc107";
      } else {
        s.style.color = "#ddd";
      }
    });
  });
});

rating.addEventListener("mouseleave", function () {
  var currentValue = ratingValue.textContent;
  stars.forEach(function (s, i) {
    if (i < currentValue) {
      s.style.color = "#ffc107";
    } else {
      s.style.color = "#ddd";
    }
  });
});
