let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let percent = document.querySelector("span");
let count = 90;

inner.addEventListener("click", function(){
    let loading =- setInterval(animate, 200);
    function animate(){
        if(count == 100){
            outer.classList.remove("active-loader");
            outer.classList.add("active-loader-2");
            clearInterval();
        } else {
            count = count + 1;
            percent.textContent = count + "%";
            outer.classList.add("active-loader");
        }
    }
})