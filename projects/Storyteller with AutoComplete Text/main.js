const storyOutput = document.getElementById("story");
const speedInput = document.querySelector("#speed");


let storyText = "This is my story! There are many like it, but this one is mine";

let speedValue = 1;
let speed = 200/speedInput.value;

writeStory()
function writeStory() {
    storyOutput.innerText = storyText.slice(0, speedValue);

    speedValue++;
    if(speedValue > storyText.length) {
        speedValue = 1;
    }
    setTimeout(writeStory, speed);
}


speedInput.addEventListener("input", (e) => {
    speed = 200 / e.target.value;
})
