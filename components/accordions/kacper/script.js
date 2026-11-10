
const accordions = document.querySelectorAll(".accordion");

function setItemOpen(item, isOpen) {
  const button = item.querySelector(".accordion__button");

  button.setAttribute("aria-expanded", isOpen ? "true" : "false");

  if (isOpen) {
    item.classList.add("accordion__item--open");
  } else {
    item.classList.remove("accordion__item--open");
  }
}

accordions.forEach(function (accordion) {
  const items = accordion.querySelectorAll(".accordion__item");
  const buttons = accordion.querySelectorAll(".accordion__button");
  const onlyOneOpen = accordion.hasAttribute("data-single");

  items.forEach(function (item) {
    const button = item.querySelector(".accordion__button");

    button.addEventListener("click", function () {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      if (onlyOneOpen) {
        items.forEach(function (otherItem) {
          setItemOpen(otherItem, false);
        });
      }

      setItemOpen(item, !isOpen);
    });
  });

  buttons.forEach(function (button, index) {
    button.addEventListener("keydown", function (event) {
      let nextIndex = null;

      if (event.key === "ArrowDown") {
        nextIndex = (index + 1) % buttons.length;
      } else if (event.key === "ArrowUp") {
        nextIndex = (index - 1 + buttons.length) % buttons.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = buttons.length - 1;
      }

      if (nextIndex !== null) {
        event.preventDefault();
        buttons[nextIndex].focus();
      }
    });
  });
});
