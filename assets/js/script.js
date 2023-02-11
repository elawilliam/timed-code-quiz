//Where the intro & questions appear//
var introCard = document.getElementById("intro-card");
var questionsCard = document.getElementById("questions-card");

//Questions & Answers array//
var questionsAndAnswers = [
    { question: "Special characters are their own JavaScript data type", answer: "False" },
    { question: "Local Variables are accessible everywhere in JavaScript code", answer: "False" },
    { question: "Boolean data types in JavaScrip are True/False", answer: "True" },
    { question: "pop() removes the last item in an array", answer: "True" },
    { question: "JavaScript is not a case-sensitive language", answer: "False" },
    { question: "When a function is declared as const, it can be called on any type of object", answer: "True" },
]


//Creating True & False buttons//
var trueBtn = document.createElement("button");
var falseBtn = document.createElement("button");
trueBtn.textContent = "True"
falseBtn.textContent = "False"
trueBtn.setAttribute("style", "width:100px; margin:50px; border-radius: 20px; background-color: gray; cursor:pointer")
falseBtn.setAttribute("style", "width:100px; margin:50px; border-radius: 20px; background-color: gray; cursor:pointer")

//Start button//
var startBtn = document.querySelector("#start");

//Creating the 'time' variable//
var time = document.getElementById("clock");
time.textContent = "00";

//User given 60 seconds to complete quiz//
var secondsLeft = 61;

//Function to start clock//
function startClock() {
    var timer = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;

        if (secondsLeft === 61) {
            clearInterval(timer);
            time.textContent = " 00";
        }

        if (secondsLeft === 0) {
            clearInterval(timer);
            time.textContent = "Quiz Over!"
            quizEnd();
        }
    }, 1000);
}

//Function to end quiz//
function quizEnd() {
    var timeLeft = secondsLeft;
    timeLeft;
    introCard.textContent = "Your Score";
    questionsCard.textContent = secondsLeft;
    secondsLeft = 62;
    var playerInitials = prompt("Please enter your initials");
    var storage = {
        playerInitials: playerInitials,
        timeLeft: timeLeft,
    }
    var storageArray = [];

    var storedPlayers = JSON.parse(localStorage.getItem("storageArray"));

    if (storedPlayers === null) {
        storageArray = storageArray.concat(storage);
        localStorage.setItem("storageArray", JSON.stringify(storageArray));
    } else {
        storageArray = storedPlayers;
        storageArray = storageArray.concat(storage);
        localStorage.setItem("storageArray", JSON.stringify(storageArray));
    }

}

//Function to set up Q format//
function renderQ() {
    introCard.textContent = ""
    introCard.appendChild(trueBtn);
    introCard.appendChild(falseBtn);
}

//For loop to run through questions//
function askQ() {
    var beginQ = renderQ();
    for (let i = 0; i < questionsAndAnswers.length; i++) {
       questionsCard.textContent += questionsAndAnswers[i];
    }
}
// trueBtn.addEventListener("click", questionsAndAnswers.answer[0]);
// falseBtn.addEventListener("click", questionsAndAnswers.answer[0]);
console.log(questionsAndAnswers);

//Function to start quiz//
function startQuiz() {
    startClock();
    askQ();
}

//Event listener for starting quiz// 
startBtn.addEventListener("click", startQuiz);

