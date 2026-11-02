document.querySelectorAll(".button-group").forEach(function (group) {
  group.querySelectorAll(".button-group__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      group.querySelectorAll(".button-group__btn").forEach(function (b) {
        b.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
