function inputToOutput() {
    const inputs = document.querySelectorAll(".contenders-container input");
    inputs.forEach((input) => {
        input.addEventListener("keyup", function(e) {
            if (e.keyCode === 13 && e.target.value !== "") {
                const targetInputValue = e.target.value;
                if (e.target.id == 'mass') {
                    e.target.parentElement.innerHTML = `<span class="output" id="mass">${targetInputValue}</span>`;
                } else {
                    e.target.parentElement.innerHTML = `<span class="output" id="dis">${targetInputValue}</span>`;
                }
            }
        })
    })
}

inputToOutput();


// Convert Units Function
function convertUnitsSystem() {
    const unitsSystem = document.querySelector(".units-system");
    unitsSystem.addEventListener("click", () => {
        const allOutPuts = document.querySelectorAll(".contenders-container span");
        // Convert imperial to metric units
        const lbsToKg = 0.45;
        const inchToCm = 2.54;

        // Convert Metric to imperials
        const kgsToLbs = 2.2;
        const cmToInch = 0.393;
        allOutPuts.forEach((output) => {
            if (unitsSystem.childNodes[3].checked == true && output.id == "mass") {
                output.innerHTML = (output.innerHTML * kgsToLbs).toFixed(0);
            }
            if (unitsSystem.childNodes[3].checked == true && output.id == "dis") {
                output.innerHTML = (output.innerHTML * cmToInch).toFixed(0); 
            }
            if (unitsSystem.childNodes[3].checked == true && output.id == "mass") {
                output.innerHTML = (output.innerHTML * lbsToKg).toFixed(0);   
            }
            if (unitsSystem.childNodes[3].checked == true && output.id == "dis") {
                output.innerHTML = (output.innerHTML * inchToCm).toFixed(0); 
            }
        })
    })
}

convertUnitsSystem();