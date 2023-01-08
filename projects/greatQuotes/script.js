let p = document.querySelector("p"),
small = document.querySelector("small");
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
    let utterance = new SpeechSynthesisUtterance(`${p.innerText} by ${small.innerText}`)
    speechSynthesis.speak(utterance);
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
    if(seconds === 30){
        getQuote();
    }
    if(minute === 30 && seconds === 0){
        speakQuote();
    }
    quote = [];
}

setInterval(speechToText, 1000)