let images = [
    "img/bmw jeeb.jpg",
    "img/merscedes jeeb.webp",
    "img/rangerover jeeb.webp",
    "img/BMW X6 2025.webp",
    "img/BMW M3 2025.jpg",
    "img/gle.jpg",
    "img/Mercedes S500 2025.avif",
    "img/m8.jpg",
    "img/davndar22.jpg",
    "img/rang.webp"
]

let index = 0;
let img = document.getElementById("sliderImage");

setInterval(() => {
    img.classList.add("hide");

    setTimeout(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
        img.classList.remove("hide");
    }, 500);

}, 2000); 
