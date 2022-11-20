const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        number = btn.value;
        changeBackground(number);
    });
});

function changeBackground(number) {
    body.className = "";
    switch (number) {
        case "1":
            body.classList.add("background-1");
            break;
        case "2":
            body.classList.add("background-2");
            break;
        case "3":
            body.classList.add("background-3");
            break;
        default:
            break;
    }
}