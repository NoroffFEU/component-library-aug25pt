var overlay = document.getElementById("drawerOverlay");
var openBtn = document.getElementById("openDrawer");
var closeBtn = document.getElementById("closeDrawer");

openBtn.addEventListener("click", function () {
  overlay.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  overlay.classList.remove("open");
});

overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    overlay.classList.remove("open");
  }
});
