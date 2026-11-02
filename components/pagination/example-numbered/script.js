document.querySelectorAll(".pagination__number").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var page = this.getAttribute("data-page");

    document.querySelectorAll(".pagination__number").forEach(function (n) {
      n.classList.remove("active");
    });

    this.classList.add("active");
    document.getElementById("currentPage").textContent = page;
  });
});
