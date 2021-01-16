// Access element using id
var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");


// Change style by accessing style object's properties
mainDiv.children[0].style.color = "pink";
mainDiv.children[1].style.color = "white";
articlesDiv.children[0].style.fontSize = "45px";
articlesDiv.children[0].children[1].innerHTML= "WHOOOO DATTT!?!?";
articlesDiv.children[0].children[1].style.color = "pink";


