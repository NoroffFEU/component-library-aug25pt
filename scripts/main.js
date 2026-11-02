/**
 * Gallery — reads COMPONENTS from components/components.js
 * and builds the sidebar menu + component card grid.
 */

(function () {
  var sidebarNav = document.getElementById("sidebarNav");
  var gallery = document.getElementById("gallery");
  var mainTitle = document.getElementById("mainTitle");
  var hamburger = document.getElementById("hamburger");
  var sidebar = document.getElementById("sidebar");
  var sidebarClose = document.getElementById("sidebarClose");

  var categories = Object.keys(COMPONENTS);

  // Inject Font Awesome stylesheet if not already present
  if (!document.querySelector('link[href*="font-awesome"]')) {
    var faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
    faLink.integrity = "sha512-kWU5F+9M41X+FsC0qFxgrD+nK7Y6g5G6xZs5dEBQkQ3c4f4qu3TnWb+JxH+E2ZOxY6mR15AY7ZiEW7HdvjRyrg==";
    faLink.crossOrigin = "anonymous";
    faLink.referrerPolicy = "no-referrer";
    document.head.appendChild(faLink);
  }

  // Build sidebar menu
  categories.forEach(function (category) {
    var count = COMPONENTS[category].length;
    var button = document.createElement("button");
    button.classList.add("sidebar__item");
    button.setAttribute("data-category", category);
    button.innerHTML =
      category +
      ' <span class="sidebar__count">' +
      count +
      "</span>";
    button.addEventListener("click", function () {
      showCategory(category);
    });
    sidebarNav.appendChild(button);
  });

  function showCategory(category) {
    // Update active sidebar item
    document.querySelectorAll(".sidebar__item").forEach(function (item) {
      item.classList.remove("active");
    });
    var activeItem = sidebarNav.querySelector(
      '[data-category="' + category + '"]'
    );
    if (activeItem) activeItem.classList.add("active");

    // Update title
    mainTitle.textContent = category;

    // Build gallery cards
    gallery.innerHTML = "";

    COMPONENTS[category].forEach(function (component) {
      var card = document.createElement("div");
      card.classList.add("component-card");

      var iframeSrc =
        "components/" + category + "/" + component.folder + "/index.html";

      card.innerHTML =
        '<iframe class="component-card__preview" src="' +
        iframeSrc +
        '" title="' +
        component.name +
        '" loading="lazy"></iframe>' +
        '<a class="component-card__info" href="' +
        iframeSrc +
        '" target="_blank" rel="noopener noreferrer">' +
        '<span class="component-card__name">' +
        component.name +
        ' <i class="fa-solid fa-eye component-card__chevron" aria-hidden="true"></i>' +
        "</span>" +
        '<span class="component-card__author">by ' +
        component.author +
        "</span>" +
        "</a>";

      gallery.appendChild(card);
    });

    // Close sidebar on mobile after selecting
    sidebar.classList.remove("open");
  }

  // Mobile menu toggle
  hamburger.addEventListener("click", function () {
    sidebar.classList.add("open");
  });

  sidebarClose.addEventListener("click", function () {
    sidebar.classList.remove("open");
  });

  // Show first category on load
  if (categories.length > 0) {
    showCategory(categories[0]);
  }
})();
