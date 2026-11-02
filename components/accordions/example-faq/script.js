document.querySelectorAll(".accordion__header").forEach(function (header) {
  header.addEventListener("click", function () {
    var item = this.closest(".accordion__item");
    var body = item.querySelector(".accordion__body");
    var isOpen = item.classList.contains("active");

    // Close all items first
    document.querySelectorAll(".accordion__item").forEach(function (other) {
      other.classList.remove("active");
      other.querySelector(".accordion__body").style.maxHeight = null;
    });

    // Open the clicked one (if it wasn't already open)
    if (!isOpen) {
      item.classList.add("active");
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});
