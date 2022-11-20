// window.addEventListener("DOMContentLoaded") this is the same as the function below
window.onload = function() {
    const minutes = document.getElementById("minutes");
    const tens = document.getElementById("tens");
    const seconds = document.getElementById("seconds");
    const hours = document.getElementById("hours");
    
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const resetBtn = document.getElementById("reset-btn");
    const lapTime = document.querySelector(".lap-time");
        

    let minutesSet = 00;
    let secondsSet = 00;
    let tensSet = 00;
    let hoursSet = 00;
    
    let Interval;
    stopBtn.disabled = true;
    resetBtn.disabled = true;

    // Start Button
    startBtn.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        stopBtn.disabled = false;
        resetBtn.disabled = false;
        lapTime.classList.add("dimming-effect");
    }

    // Stop Button
    stopBtn.onclick = function() {
        clearInterval(Interval);
        const lap = document.getElementById("laps");
        const li = document.createElement("li");
        li.innerHTML = `lap: <span>${hours.innerHTML}:${minutes.innerHTML}:${seconds.innerHTML}, ${tens.innerHTML}</span>`;
        lap.appendChild(li);
        stopBtn.disabled = true;
        lapTime.classList.remove("dimming-effect");
    }

    // Reset Button
    resetBtn.onclick = function() {
        clearInterval(Interval);
        
        minutesSet = "00";
        secondsSet = "00";
        tensSet = "00";
        hoursSet = "00";
        tens.innerHTML = tensSet;
        seconds.innerHTML = secondsSet;
        minutes.innerHTML = minutesSet;
        hours.innerHTML = hoursSet;
        stopBtn.disabled = true;
        resetBtn.disabled = true;
        lapTime.classList.remove("dimming-effect");

        document.getElementById("laps").innerHTML = "";
    }


    //  Create Start Timer function
    function startTimer() {
        tensSet++;
        if(tensSet < 9) {
            tens.innerHTML = "0" + tensSet;
        }
        if(tensSet > 9) {
            tens.innerHTML = tensSet;
        }
        if(tensSet > 99) {
            secondsSet++;
            seconds.innerHTML = "0" + secondsSet;
            tensSet = 0;
            tens.innerHTML = "0" + 0;
        }
    
        if(secondsSet > 9) {
            seconds.innerHTML = secondsSet;
        }
        if(secondsSet === 60) {
            minutesSet++;
            minutes.innerHTML = "0" + minutesSet;
            secondsSet = 0;
        }
    
        if(minutesSet > 9) {
            minutes.innerHTML = minutesSet;
        }

        if(minutesSet === 60) {
            hoursSet++;
            hours.innerHTML = "0" + hoursSet;
            minutesSet = "00";
        }
        if(hoursSet > 9) {
            hours.innerHTML = hoursSet;
        }
    }

    // Dimming Effect Function
    // function dimEffect() {
    //     const lapTime = document.querySelector(".lap-time");
    //     lapTime.classList.toggle("dimming-effect");
    // }
};


