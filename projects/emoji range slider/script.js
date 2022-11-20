const slider = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const slideIcon = document.querySelector(".slide-icon");
const thumb = document.querySelector(".thumb");
slider.oninput = () =>{
    let value = slider.value;
    thumb.style.left = value + "%";
    bar.style.width = value + "%";
    if(value < 20){
        slideIcon.style.marginTop = "0px";
    }
    if(value >= 20){
        slideIcon.style.marginTop = "-150px";
    }
    if(value >= 40){
        slideIcon.style.marginTop = "-300px";
    }
    if(value >= 60){
        slideIcon.style.marginTop = "-450px";
    }
    if(value >= 80){
        slideIcon.style.marginTop = "-600px";
    }
}