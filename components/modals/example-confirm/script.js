var overlay = document.getElementById("modalOverlay");
var openBtn = document.getElementById("openModal");
var cancelBtn = document.getElementById("cancelBtn");
var confirmBtn = document.getElementById("confirmBtn");

function openModal() {
  overlay.classList.add("active");
}

function closeModal() {
  overlay.classList.remove("active");
}

openBtn.addEventListener("click", openModal);
cancelBtn.addEventListener("click", closeModal);
confirmBtn.addEventListener("click", function () {
  alert("Account deleted (just a demo!)");
  closeModal();
});

// Close on overlay click (but not if clicking inside the modal)
overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    closeModal();
  }
});

// Close on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
