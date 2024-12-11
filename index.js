let firstName = document.getElementById("name_1");
let firstNameClass = document.getElementsByClassName("name")[2];
let changeName = firstNameClass.textContent="Soburoh"
let tagName = document.getElementsByTagName("h3")
for (let index = 0; index < tagName.length; index++) {
      tagName[index].style.color="red"    
}
let listItems = document.querySelectorAll("li")
console.log(firstName);
console.log(firstNameClass);
console.log(tagName);



let age = document.getElementsByTagName("h3")[1]
let age2 = document.querySelectorAll("h3")[1]
let age3 = document.getElementsByClassName("ageHeader")
let age4 = document.querySelector("h3")[1]
console.log(age4);

let ageItems = document.getElementsByClassName("age")
     for (let i = 0; i < ageItems.length; i++) {
           ageItems[i].style.color="blue"
           ageItems[1].style.color="green"
     }


     let btn = document.getElementById("btn")
     let body = document.getElementsByTagName("body")
     btn.addEventListener("click",myFunc)
     function myFunc() {
         body.style.background="purple"
      
     }