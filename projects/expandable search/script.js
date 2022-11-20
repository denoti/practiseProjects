const searchBtn = document.getElementById("search-btn");
const searchInput = document.querySelector("input");

searchBtn.addEventListener("click", ()=>{
    searchInput.classList.toggle("active-search");
})

document.querySelector("main").addEventListener("click", ()=> {
    searchInput.classList.remove("active-search");
})