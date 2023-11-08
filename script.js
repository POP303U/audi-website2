const images = ["image1.png", "image2.png", "image3.png"]; // Replace with your image file names
let currentIndex = 0;

const button = document.getElementById("changeButton");
button.addEventListener("click", function(event){
    const imageElement = document.getElementById("image");
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
});
