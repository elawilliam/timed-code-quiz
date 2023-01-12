//Where the intro & questions appear//
var introCard = document.getElementById("intro-card");
var questionsCard = document.getElementById("questions-card");

//Questions array//
var questions = [
    "Special characters are their own JavaScript data type",
    "Local Variables are accessible everywhere in JavaScript code",
    "Boolean data types in JavaScrip are True/False",
    "pop() removes the last item in an array",
    "JavaScript is not a case-sensitive language",
    "When a function is declared as const, it can be called on any type of object"
];

//Correct answers array//
var correctAnswersArray = [
    "False",
    "False",
    "True",
    "True",
    "False",
    "True"
];

//Incorrect answers array//
var incorrectAnswersArray = [
    "True",
    "True",
    "False",
    "False",
    "True",
    "False"
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
 
//Correct answers function//
function correctAnswers(){
    trueBtn.removeEventListener("click", correctAnswers);
    trueBtn.removeEventListener("click", incorrectAnswers);
    falseBtn.removeEventListener("click", correctAnswers);
    falseBtn.removeEventListener("click", incorrectAnswers);
}
 
//Incorrect answers function//
function incorrectAnswers(){
    secondsLeft -= 10;
    trueBtn.removeEventListener("click", correctAnswers);
    trueBtn.removeEventListener("click", incorrectAnswers);
    falseBtn.removeEventListener("click", correctAnswers);
    falseBtn.removeEventListener("click", incorrectAnswers);
}

//Function to set up Q format//
function askQuestion(){
    introCard.textContent = ""
    introCard.appendChild(trueBtn);
    introCard.appendChild(falseBtn);
}

//Function for each question//
function questionSix(){
    var beginQ = askQuestion();
    beginQ;
    questionsCard.textContent = questions[5];
    trueBtn.addEventListener("click", correctAnswers[5]);
    trueBtn.addEventListener("click", quizEnd);
    falseBtn.addEventListener("click", incorrectAnswers[5]);
    falseBtn.addEventListener("click", quizEnd);
}

function questionFive(){
    var beginQ = askQuestion();
    beginQ;
    questionsCard.textContent = questions[4];
    trueBtn.addEventListener("click", correctAnswers[4]);
    trueBtn.addEventListener("click", questionSix);
    falseBtn.addEventListener("click", incorrectAnswers[4]);
    falseBtn.addEventListener("click", questionSix);
}

function questionFour(){
    var beginQ = askQuestion();
    beginQ;
    questionsCard.textContent = questions[3];
    trueBtn.addEventListener("click", correctAnswers[3]);
    trueBtn.addEventListener("click", questionFive);
    falseBtn.addEventListener("click", incorrectAnswers[3]);
    falseBtn.addEventListener("click", questionFive);
}

function questionThree(){
    var beginQ = askQuestion();
    beginQ;
    questionsCard.textContent = questions[2];
    trueBtn.addEventListener("click", correctAnswers[2]);
    trueBtn.addEventListener("click", questionFour);
    falseBtn.addEventListener("click", incorrectAnswers[2]);
    falseBtn.addEventListener("click", questionFour);
}

function questionTwo(){
    var beginQ = askQuestion();
    beginQ;
    questionsCard.textContent = questions[1];
    trueBtn.addEventListener("click", correctAnswers[1]);
    trueBtn.addEventListener("click", questionThree);
    falseBtn.addEventListener("click", incorrectAnswers[1]);
    falseBtn.addEventListener("click", questionThree);
}

function questionOne(){
    var beginQ = askQuestion();
    beginQ;
    questionsCard.textContent = questions[0];
    trueBtn.addEventListener("click", correctAnswers[0]);
    trueBtn.addEventListener("click", questionTwo);
    falseBtn.addEventListener("click", incorrectAnswers[0]);
    falseBtn.addEventListener("click", questionTwo);
}

//Function to start quiz//
function startQuiz(){
    startClock();
    questionOne();}

//Event listener for starting quiz// 
startBtn.addEventListener("click", startQuiz);

