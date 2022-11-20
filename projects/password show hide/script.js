const pass_field = document.querySelector("input");
const show_btn = document.querySelector("i");
show_btn.addEventListener("click", function(){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        show_btn.classList.add("hide");
    } else {
        pass_field.type = "password";
        show_btn.classList.remove("hide");
    }
})