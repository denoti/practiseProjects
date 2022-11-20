const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = () =>{
    // setting cookie for 1 month, after 1 month cookie will be expired automatically
    document.cookie = "CookieBy=codingNepal; max-age="+60*60*24*30;
    if(document.cookie){// if the above the cookie set
        cookieBox.classList.add("hide"); // hide cookie once cookie is set
    }else{
        alert("cookie can't be set!"); // if cookie can't be set, alert an error
    }
}
// let's hide the cookie box if cookie is set and not expired
let checkCookie = document.cookie.indexOf("CookieBy=codingNepal"); // checking our set cookie
// if cookie is set, then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");