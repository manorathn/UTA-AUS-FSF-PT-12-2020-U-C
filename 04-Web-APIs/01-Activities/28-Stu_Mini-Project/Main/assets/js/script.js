//javascript code goes here
var startEl = document.querySelector("#start-button");

function click(event){
}
startEl.addEventListener("click", function(event) {
  });

var guessesLeft = 0; 
var wordGuessed = []; 
var wins = 0;               
var lose = 0;             

function checkWin() {
    if(wordGuessed.indexOf("_") === -1) {
        wins++;
        finishedGame = true;
        alert("You win!")
    }
};
function checkLoss()
{
    if(guessesLeft <= 0) {
        losses++;
        finishedGame = true;
        alert('You lose!')
    }
}


function makeGuess(letter) {
    if (guessesLeft > 0) {
        // Make sure we didn't use this letter
        if (userGuesses.indexOf(letter) === -1) {
            userGuesses.push(letter);
            evaluateGuess(letter);
        }
    }
};
