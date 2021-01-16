var timerEl = document.getElementById("fulltime");
var startbtn = document.getElementById("startbtn");
var questions = [
    {
    question: "What is git?",
    choices: ["a. Version Control", "b. Git is the same as GitHub"],
    answer: "a. Version Control",
    },
    {
    question: "What is git?",
    choices: ["a. Version Control", "b. Git is the same as GitHub"],
    answer: "a. Version Control",
    },
    {
    question: "What is git?",
    choices: ["a. Version Control", "b. Git is the same as GitHub"],
    answer: "a. Version Control",
    },
    {
    question: "What is git?",
    choices: ["a. Version Control", "b. Git is the same as GitHub"],
    answer: "a. Version Control",
    },
    {
    question: "What is git?",
    choices: ["a. Version Control", "b. Git is the same as GitHub"],
    answer: "a. Version Control",
    },
];


for (let i = 0; i < questions.length; i++) {
    questions.question;

    questions[i].choices.forEach(function (choice){
        console.log(choice);
    })

} 

startbtn.addEventListener("click", function(){

    var time = 75;

    var countDownTimer = setInterval(function() {
    document.getElementById("time").innerHTML = time + " "
    +"seconds";
    time--;

    if(time <= 0){
        clearInterval(countDownTimer);
        document.getElementById("time").innerHTML = "Time is up!"
    }
    }, 1000);
});
