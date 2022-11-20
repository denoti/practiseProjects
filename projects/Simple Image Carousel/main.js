const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Slide images on btn click
prevBtn.onclick = () => nextSlide(-1);
nextBtn.onclick = () => nextSlide(1);

let slideIndex = 1;

showSlides(slideIndex);
function nextSlide(n) {
    showSlides((slideIndex += n));
}

function currentSlide() {
    showSlides((slideIndex = n));
}

function showSlides(n){
    let i;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    console.log(slides,dots);
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides.forEach((slide) => slide.classList.add("fade"));
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

