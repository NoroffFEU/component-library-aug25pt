document.querySelectorAll(".alert__close").forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.closest(".alert").classList.add("hidden");
  });
});
