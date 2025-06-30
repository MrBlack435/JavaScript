// Array of image URLs
const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];

let current = 0;

// Function to show next slide
function nextSlide() {
  current++;
  if (current >= images.length) {
    current = 0;
  }
  document.getElementById("slide").src = images[current];
}

// Function to show previous slide
function prevSlide() {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  document.getElementById("slide").src = images[current];
}
