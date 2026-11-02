var container = document.getElementById("toastContainer");
var triggerBtn = document.getElementById("triggerToast");

function showToast(message, type) {
  type = type || "success";

  var toast = document.createElement("div");
  toast.classList.add("toast", type);

  var icon = type === "success" ? "✓" : "✕";

  toast.innerHTML =
    '<span class="toast__icon">' +
    icon +
    '</span><span class="toast__content">' +
    message +
    '</span><button class="toast__close">&times;</button>';

  container.appendChild(toast);

  var closeBtn = toast.querySelector(".toast__close");
  closeBtn.addEventListener("click", function () {
    removeToast(toast);
  });

  // Auto-remove after 4 seconds
  setTimeout(function () {
    removeToast(toast);
  }, 4000);
}

function removeToast(toast) {
  toast.classList.add("removing");
  setTimeout(function () {
    toast.remove();
  }, 300);
}

triggerBtn.addEventListener("click", function () {
  var messages = [
    "Changes saved successfully!",
    "Profile updated!",
    "Item deleted!",
  ];
  var msg = messages[Math.floor(Math.random() * messages.length)];
  showToast(msg, "success");
});
