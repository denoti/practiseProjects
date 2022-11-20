const slider = document.querySelector(".slider input");
const dragLine = document.querySelector(".slider .drag-line");
const img = document.querySelector(".images .img-2");
slider.oninput = () => {
    let sliderVal = slider.value;
    // dragLine.style.left = `${sliderVal}%`;
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
}

