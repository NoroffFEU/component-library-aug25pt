document.querySelectorAll(".tabs__button").forEach(function (button) {
  button.addEventListener("click", function () {
    var tabId = this.getAttribute("data-tab");

    // Remove active from all buttons and panels
    document.querySelectorAll(".tabs__button").forEach(function (btn) {
      btn.classList.remove("active");
    });
    document.querySelectorAll(".tabs__panel").forEach(function (panel) {
      panel.classList.remove("active");
    });

    // Activate the clicked button and matching panel
    this.classList.add("active");
    document.getElementById("tab-" + tabId).classList.add("active");
  });
});
