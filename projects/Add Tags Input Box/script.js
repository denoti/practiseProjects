 const ul = document.querySelector("ul"),
 input = ul.querySelector("input");
 countNumber = document.querySelector(".details span");


let maxTags = 10,
tags = [];

countTag();

function countTag(){
    input.focus();
    countNumber.innerText = maxTags - tags.length; // subtracting max value with tags length
}

 function createTag(){
    //  removing all li tags before adding so there will be no duplicates
     ul.querySelectorAll("li").forEach(li => li.remove());
     tags.slice().reverse().forEach(tag => {
         let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
         ul.insertAdjacentHTML("afterbegin", liTag); // inserting or adding li inside ul tag
     })
     countTag();
 }

 function remove(element, tag){
     let index = tags.indexOf(tag);
     // removing or excluding selected tag from an array
     tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
     element.parentElement.remove(); // removing li of removed tag
     countTag();
 }

 function addTag(e){
     if(e.key == "Enter"){
         let tag = e.target.value.replace(/\s+/g, " "); // removing unwanted spaces from user tag
         if(tag.length > 1 && !tags.includes(tag)){ // if tag length is greater than 1 and the tag isn't existing in the tags list
            if(tags.length < 10){
                tag.split(",").forEach(tag => { // splitting each tag using comma
                    tags.push(tag); // adding each tag inside array
                    createTag();
                    
                });
            }
         }
        e.target.value = "";
     }
 }

 input.addEventListener("keyup", addTag);

 const removeBtn = document.querySelector("button");
 removeBtn.addEventListener("click", ()=>{
     tags.length = 0; // making the array to be empty
     ul.querySelectorAll("li").forEach(li => li.remove()); // removing all li items
     countTag();

 })