// Get elements from the Dom
const fullName = document.getElementById("FullName");
const phone = document.getElementById("Phone");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("Password");
const eMail = document.getElementById("email");

// Add event Listeners
fullName.addEventListener("blur", validateFullName);
phone.addEventListener("blur", validatePhone);
zipCode.addEventListener("blur", validateZipCode);
password.addEventListener("blur", validatePassword);
eMail.addEventListener("blur", validateEmail);


// Create Validation functions

function validateFullName() {
    const regEx_FullName = /^[a-zA-Z]{2,20}( )[a-zA-Z]{2,20}(( )[a-zA-Z]{2,20})?$/;
    if (!regEx_FullName.test(fullName.value)) {
        notValid(fullName);
    } else {
        valid(fullName);
    }
}

function validatePhone() {
    const regEx_Phone = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if (!regEx_Phone.test(phone.value)) {
        notValid(phone);
    } else {
        valid(phone);
    }
}

function validateZipCode() {
    const regEx_ZipCode = /^[0-9]{5}(-[0-9]{4})?$/;
    if (!regEx_ZipCode.test(zipCode.value)) {
        notValid(zipCode);
    } else {
        valid(zipCode);
    }
}

function validatePassword() {
    const regEx_Password = /^([a-zA-Z0-9]){10}$/;
    if (!regEx_Password.test(password.value)) {
        notValid(password);
    } else {
        valid(password);
    }
}

function validateEmail() {
    const regEx_Email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regEx_Email.test(eMail.value)) {
        notValid(eMail);
    } else {
        valid(eMail);
    }
}





// Validation Functions

function notValid(input) {
    input.classList.add("notValid");
    input.classList.remove("valid");
}

function valid(input) {
    input.classList.remove("notValid");
    input.classList.add("valid");
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    validateForm();
})

function validateForm() {
    const inputs = document.querySelectorAll("form input");
    console.log(inputs);

    if(
        fullName.classList.contains("valid") &&
        phone.classList.contains("valid") &&
        zipCode.classList.contains("valid") &&
        password.classList.contains("valid") &&
        eMail.classList.contains("valid")
    ) {
        document.querySelector("form").submit();
    } else {
        alert("Validate all fields!")
    }
}