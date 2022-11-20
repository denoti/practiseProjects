// This is jQuery
// $(document).ready(function(){
//     $('input').click(function(){
//         $('body').toggleClass('active');
//         $('.button').toggleClass('check');
//     })
// })


const body = document.querySelector("body");
const input = document.querySelector("input");
const button = document.querySelector(".button");

input.addEventListener("click", ()=> {
    body.classList.toggle("active");
    button.classList.toggle("check")
})