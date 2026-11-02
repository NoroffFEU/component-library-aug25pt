var dropdown = document.querySelector(".dropdown");
var trigger = document.querySelector(".dropdown__trigger");

trigger.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdown.classList.toggle("open");
});

// Close when clicking outside
document.addEventListener("click", function () {
  dropdown.classList.remove("open");
});

// Prevent closing when clicking inside the menu
dropdown.addEventListener("click", function (e) {
  e.stopPropagation();
});
