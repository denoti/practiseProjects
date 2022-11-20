var notify = document.querySelector(".notify");
var btn = document.querySelector(".btn");
btn.onclick= () => {
    var add = Number(notify.getAttribute("data-count") || 0);
    notify.setAttribute("data-count", add + 1);
    if(add === 0){
        notify.classList.add("add-numb")
    }
    false;
}