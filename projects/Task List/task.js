const enterBtn = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

const items = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}


function createListElement() {
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    // Create Delete BUtton
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
        setTimeout(function() {
            li.style.display = "none";
        }, 500)
    }
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

// Add Item on clicking Button
// enterBtn.addEventListener("click", addListAfterClick);
enterBtn.onclick = () => addListAfterClick();

//Add Item on clicking the Enter Button
input.addEventListener("keypress", ()=> {
    if(inputLength() > 0 && event.which === 13) {
        createListElement();
    }
})