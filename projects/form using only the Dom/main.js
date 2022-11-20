const form = document.createElement("form");
form.id = "myForm";
form.style.width = "360px";

function createLabel(text) {
    const label =  `<label>${text}</label>`;
    return label;
}

function createInput(type, placeholder, id ) {
    const input = `<input type="${type}" placeholder="${placeholder}" id="${id}">`;
    return input;
}


form.innerHTML = `
    <h2>Add User</h2>
    <div>
        <label>First Name:</label>
        <input type="text" placeholder="First Name" id="FirstName"/>
    </div>
    <div>
        ${createLabel("Last Name:")}
        ${createInput("text", "Last Name", "LastName")}
    </div>
    
    <div>
        ${createLabel("Birth Day:")}${createInput("date", null, "Dob")}
    </div>
    <div>
        ${createLabel("Email:")}${createInput("email", "eMail", "Email")}
    </div>

    <div>
        ${createLabel("Password:")} ${createInput("password", "Enter your password", "Password")}
    </div>

    <button class="btn red" type="submit">Submit</button>
`;

document.body.appendChild(form);

const divContainer = document.querySelector("form").querySelectorAll("div");
divContainer.forEach(function(div) {
    div.className = "input-container";
})

form.addEventListener("submit", function(e) {
    e.preventDefault();
    document.body.style.display = "grid";
    document.body.style.gridTemplateColumns = "1fr 1fr";
    document.body.style.gap = "50px";

    // Get input values
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("LastName").value;
    const dob = document.getElementById("Dob").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    function getFullName() {
        const fullName = `${firstName} ${lastName}`;
        return fullName;
    }

    function calculateAge(dob) {
        let birthday = new Date(dob);
        let ageDif = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDif);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    validation();
    function validation() {
        if(
            firstName == "" || 
            lastName == "" || 
            dob == "" || 
            email == "" || 
            password == ""
        ) {
            alert("All fields must be completed");
            return;
        } else {
            createUser();
            const inputs = document.querySelectorAll("input");
            inputs.forEach(function(inputField) {
            inputField.value = "";
    })
        }
    }
    
    function createUser() {
        const ul = document.createElement("ul");
        ul.id = "UserDetails";
        ul.className = "animate-in";

        ul.innerHTML = `
            <h4>${getFullName()}</h4>
            <img src="https://source.unsplash.com/PpyOVWQtEjE" style="height: 150px; border-radius: 25px;" />
            <li>First Name: <span>${firstName}</span></li>
            <li>Last Name: <span>${lastName}</span></li>
            <li>Birth Day: <span>${dob}</span></li>
            <li>Age: <span>${calculateAge(dob)}</span></li>
            <li>Email: <span>${email}</span></li>
        `;
        document.body.appendChild(ul);
        console.log(ul);
    }
})