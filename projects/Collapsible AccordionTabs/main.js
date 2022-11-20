// const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// accordionItemHeaders.forEach(function (accordionItemHeader) {
//     accordionItemHeader.addEventListener("click", function() {
//     accordionItemHeader.classList.toggle("active");

//     const accordionItemBody = accordionItemHeader.nextElementSibling;
//     if(accordionItemHeader.classList.contains('active')) {
//         accordionItemBody.style.maxHeight=accordionItemBody.scrollHeight + "px";
//     } else {
//         accordionItemBody.style.maxHeight="0";
//     }
//     })  
// })

// Refactored
document.querySelectorAll(".accordion-item-header").forEach((accordionItemHeader)=> {accordionItemHeader.onclick = () => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    accordionItemHeader.classList.contains('active') ?
    accordionItemBody.style.maxHeight=accordionItemBody.scrollHeight + "px" :
    accordionItemBody.style.maxHeight="0";
}
})

 /* const leftBtn = document.querySelector(".left-arrow");
 const rightBtn = document.querySelector(".right-arrow");

 leftBtn.addEventListener("click", () => {
     activeImg--;
     if(activeImg > imgs.length - 1) {
         activeImg = 0;
     }
     setImgAsBackground();
     activateImgs();
 });

 rightBtn.addEventListener("click", () => {
     activeImg++;
     if(activeImg < 0) {
         activeImg = imgs.length-1;
     }
     setImgAsBackground();
     activateImgs();
 }); */