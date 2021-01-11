console.log("Document Body: ")
console.log(document.body);

console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("Second child of body: ")
console.log(document.body.children[1]);

console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul");
var color = document.getElementById("color");

// Setting style of element
color.addEventListener("click", function(){
    color.classList.toggle("red")
})
firstChildUl.style.color = "#e97451";
