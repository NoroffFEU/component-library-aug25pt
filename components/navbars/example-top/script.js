var toggle = document.getElementById("navToggle");
var menu = document.getElementById("navMenu");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  menu.classList.toggle("open");
});
