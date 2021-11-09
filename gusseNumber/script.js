let correctNumber = getRandomNumber();
console.log(correctNumber);
let guesses = [];

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);

}

function playGame() {
    let numberGuess = document.getElementById("number-guess").value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

function displayResult(numberGuess) {
    if (numberGuess > correctNumber) {
        console.log("too high");
        showNumberAbove();
    } else if (numberGuess < correctNumber) {
        showNumberBelow();     
    } else  {
        showYouWon();
    }
}

function initGame() {
    correctNumber = getRandomNumber();
    guesses = [];
    document.getElementById("result").innerHTML = "";
    displayHistory();
}

function restartResultContent() {
    document.getElementById("result").innerHTML="";
}

function getRandomNumber() {
    let RandomNumber = Math.floor(Math.random()*100) + 1
    return RandomNumber;
}

function displayHistory() {
    let list = "<ul class='list-group'>";
    for(let i = guesses.length - 1; i >= 0; i--) {
        list += "<li class='list-group-item'>" + "You guessed " + guesses[i] + "</li>";
    }
            

    list +='</ul>';
    document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
    let dialog;
    switch(dialogType){
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showYouWon () {
    const text = "Awesome job, you got it!";
    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function saveGuessHistory(guess) {
    guesses.push(guess);
    console.log(guesses);
}