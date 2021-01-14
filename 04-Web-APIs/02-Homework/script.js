var timerEl = document.getElementById("fulltime");
var startbtn = document.getElementById("startbtn");

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
