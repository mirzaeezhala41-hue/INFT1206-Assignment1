const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* -----------------------------
   1. Create the images array
------------------------------ */

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

/* Base URL for all images */
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

/* -----------------------------
   2. Add thumbnails dynamically
------------------------------ */

for (const img of images) {
  const newImage = document.createElement("img");
  newImage.src = baseURL + img.filename;
  newImage.alt = img.alt;

  // Make image focusable for keyboard navigation
  newImage.setAttribute("tabindex", "0");

  // Click event → update displayed image
  newImage.addEventListener("click", updateDisplayedImage);

  // Keyboard event → Enter key updates image
  newImage.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      updateDisplayedImage.call(newImage);
    }
  });

  thumbBar.appendChild(newImage);
}

/* -----------------------------
   3. Function to update big image
------------------------------ */

function updateDisplayedImage() {
  displayedImage.src = this.src;
  displayedImage.alt = this.alt;
}

/* -----------------------------
   4. Darken / Lighten button
------------------------------ */

btn.addEventListener("click", function () {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }

  // Stretch goal: toggle class in one line
  btn.classList.toggle("dark");
});