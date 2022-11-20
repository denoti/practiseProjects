const startBtn = document.getElementById("Start-btn");
const elem = document.getElementById("myBar");
const bgImg = document.getElementById("Bg-img");

bgImg.classList.add("blur");
let root_speed = getComputedStyle(document.documentElement);
document.documentElement.style.setProperty("--speed", "15s");
let speed = 10;
document.documentElement.style.setProperty("--speed", `${speed/10}s`);

let i = 0;

startBtn.addEventListener("click", () => {
    if(i == 0) {
        i = 1;

        let width = 0;
        setInterval(frame, speed);
        function frame() {
            if(width >= 100) {
                i = 0
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
                bgImg.classList.remove("blur");
                bgImg.classList.add("clear");
                startBtn.disabled = true;
            }
        }
    }
})