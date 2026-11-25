/*
 * Modal dialog
 * The native <dialog> + showModal() already gives us: the ::backdrop, Esc to close,
 * focus moved into the modal and the page behind it made inert (no Tab, no clicks).
 * This script adds what is missing: opening from a button, closing on a backdrop click,
 * focus back on the button that opened it, and reading which button closed it.
 */

const openButtons = document.querySelectorAll("[data-modal-open]");
const statusMessage = document.querySelector(".demo__status");

openButtons.forEach(function (openButton) {
  const modal = document.getElementById(openButton.dataset.modalOpen);

  openButton.addEventListener("click", function () {
    modal.returnValue = "";
    statusMessage.textContent = "";
    modal.showModal();
  });

  // A click on the dialog element itself (not on its content) is a click on the backdrop,
  // because .modal__inner covers the whole visible card.
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.close("backdrop");
    }
  });

  // Runs after every close: the buttons (form method="dialog"), Esc and the backdrop.
  modal.addEventListener("close", function () {
    if (modal.returnValue === "send") {
      statusMessage.textContent = "Request sent – we will be in touch.";
    }

    openButton.focus();
  });
});
