let p = document.querySelector("p"),
small = document.querySelector("small"),
button = document.querySelector("button");
let h1 = document.querySelector("h1");

// let {log} = console;
let quote = [];

function getQuote(){
    fetch("https://api.quotable.io/random").then(res =>res.json()).then(result => {
        quote.push(result.content);
        quote.push(result.author);
        p.innerText = quote[0];
        small.innerText = quote[1];
    })
}

function speakQuote() {
    button.disabled = true;
    let utterance = new SpeechSynthesisUtterance(`${p.innerText} ${small.innerText}`);
    speechSynthesis.speak(utterance); 
    utterance.onend = (e) => {
        button.disabled = false;
        console.log(e.elapsedTime); // shows the elapsed time taken to say the text
    }
}

function createTime(){
    let day = "AM"
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // hr
    if(hr > 12){
        hr = hr - 12;
        day = "PM"
    }
    if(hr == 0){
        hr = 12;
    }
    if(hr < 10){
        hr = "0" + hr;
    }
    // min
    if(min < 10){
        min = "0" + min;
    }
    // sec
    if(sec < 10){
        sec = "0" + sec;
    }
    h1.textContent = `${hr}:${min}:${sec} ${day}`;
}
setInterval(createTime, 1000);

function speechToText(){
    let date = new Date();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    if((minute === 30 || minute === 00) && seconds === 0){
        speakQuote();
    }
}

function updateQuote() {
    let date = new Date();
    let seconds = date.getSeconds();
    if(seconds === 00 || seconds === 20 || seconds === 40){
        getQuote();
    }
    quote = [];
}
// const synth = window.speechSynthesis;
// button.addEventListener("click", ()=> {
//     speakQuote();
//     if(synth.speaking) {
//         button.disabled = true;
//     } 
//     setTimeout(()=> {
//         button.disabled = false;
//     }, readingTime());
// });

// function readingTime() {
//     const texts = document.querySelector(".text").innerText;
//     const wps = 3;
//     const lengthOfWords = texts.trim().split(/\s+/).length;
//     const delayTime = Math.ceil(lengthOfWords / wps);
//     return delayTime * 1000;
// }

// This BUTTON eventListener performs the same function as the code commented above and is more efficient
button.addEventListener("click", speakQuote);

setInterval(speechToText, 1000);
setInterval(updateQuote, 1000);