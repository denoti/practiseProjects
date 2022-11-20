const items = document.querySelectorAll(".timeline li");

document.addEventListener("DOMContentLoaded", ()=> {
    isElementInViewport;

    callBackFunc;
    window.addEventListener("load", callBackFunc);
    window.addEventListener("resize", callBackFunc);
    window.addEventListener("scroll", callBackFunc);
});



function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.
                clientHeight) &&
        rect.right <= (window.innerWidth || document.
        documentElement.clientWidth)
    );
}

function callBackFunc() {
    for(let i = 0; i < items.length; i++) {
        if(isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        } else {
            items[i].classList.remove("in-view");
        }
    }
}