const checkbox  = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");
const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");
let colors = [];



// disable checkbox and submit button
checkbox.disabled = true;
submitBtn.disabled = true;

// Assign color to Elements
elements.forEach(function(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.innerHTML = color;
    // selectColor.innerHTML = color;
    colors.push(color);
});
// setting the selectColor variable to be randomly positioned on the container
let randomColor = colors[Math.floor(Math.random() * colors.length)];
selectColor.innerHTML = randomColor;


// Generate random colors Func
function getRandomColor() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Check if right color;

elements.forEach(function(element) {
    element.addEventListener('click', function() {
        if (element.innerHTML === selectColor.innerHTML) {
            alert("You are Human!")
            checkbox.checked = true;
            submitBtn.disabled = false;
            submitBtn.classList.remove("btn-light");
            submitBtn.classList.add("btn-success");
        } else {
            alert("Please verify that you are human!")
            location.reload(true);
        }
    })
})
