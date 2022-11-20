const button = document.querySelector(".button");
const fas = document.querySelector(".fas");
const ul = document.querySelector("ul");
button.onclick = () => {
    // button.classList.toggle("expand");
    // fas.classList.toggle("expand");
    if(button.classList.contains("expand")) {
        button.classList.remove("expand");
        ul.style.display = "none";
        fas.classList.remove("expand");
    } else {
        button.classList.add("expand");
        setTimeout(function(){
            fas.classList.add("expand");
            ul.style.display = "block";
        }, 200)
    }
}
console.log(ul);
