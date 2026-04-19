
document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("toggleBtn");
  const comments = document.getElementById("comments");

  

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


