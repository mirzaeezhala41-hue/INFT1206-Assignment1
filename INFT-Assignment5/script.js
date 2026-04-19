
document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("toggleBtn");
  const comments = document.getElementById("comments");

  // Hide comments at start
  comments.style.display = "none";
  toggleBtn.setAttribute("aria-expanded", "false");

  function toggleComments() {
    const isHidden = comments.style.display === "none";

    if (isHidden) {
      comments.style.display = "block";
      toggleBtn.textContent = "Hide Comments";
      toggleBtn.setAttribute("aria-expanded", "true");
    } else {
      comments.style.display = "none";
      toggleBtn.textContent = "Show Comments";
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  }

  // Mouse click
  toggleBtn.addEventListener("click", toggleComments);

  // Keyboard support (Enter + Space)
  toggleBtn.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleComments();
    }
  });

});


