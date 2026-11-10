const ratingContainer = document.querySelector(".rating-items");
const stars = document.querySelectorAll(".rating-input"); // Radio inputs for the stars
const ratingValue = document.getElementById("rating-value");

ratingValue.value = 0;

function showStars(rating) {
  stars.forEach(function (starFilled) {
    const starLabel = starFilled.nextElementSibling;

    if (Number(starFilled.value) <= Number(rating)) {
      starLabel.classList.add("filled");
    } else {
      starLabel.classList.remove("filled");
    }
  });
}

stars.forEach((star) => {
  const starLabel = star.nextElementSibling;

  star.addEventListener("change", function (event) {
    // Target radio input for the selected star
    if (event.target.checked) {
      ratingValue.value = Number(event.target.value).toFixed(1);
      showStars(event.target.value);
    }
  });

  starLabel.addEventListener("mouseenter", function () {
    // Target label for the hovered star
    showStars(star.value);
  });
});

ratingContainer.addEventListener("mouseleave", function (event) {
  //Shared .rating-items container
  showStars(ratingValue.value);
});
