//Where the intro & questions appear//
var introCard = document.getElementById("intro-card");
var questionsCard = document.getElementById("questions-card");

//Questions array//
var questions = [
    "Special characters are their own JavaScript data type",
    "Local Variables are visible everywhere in JavaScript code",
    "Boolean data types in JavaScrip are True/False",
    "pop() removes the last item in an array",
    "JavaScript is not a case-sensitive language",
    "When a function is declared as const, it can be called on any type of object"
];

//Correct answers array//
var correctAnswers = [
    "False",
    "False",
    "True",
    "True",
    "False",
    "True"
];

//Incorrect answers array//
var incorrectAnwers = [
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
trueBtn.setAttribute("style", "width:100px; margin:50px; border-radius: 20px; background-color: white; cursor:pointer")
falseBtn.setAttribute("style", "width:100px; margin:50px; border-radius: 20px; background-color: white; cursor:pointer")

//Start button//
var startBtn = document.querySelector("#start");

//Creating the 'time' variable//
var time = document.getElementById("clock");
time.textContent = "00";

//User given 60 seconds to complete quiz//
var secondsLeft = 60;
 
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
 
//Function to end quiz function quizEnd()//
 
function askQuestion(){
    introCard.textContent = "True or False?";
    questionsCard.textContent = questions[1];
    questionsCard.appendChild(trueBtn);
    questionsCard.appendChild(falseBtn);


}
//Function for each question//
function questionOne(){

}
 
//Function to start quiz//
function startQuiz(){
    startClock();
    askQuestion();}

//Event listener for starting quiz// 
startBtn.addEventListener("click", startQuiz);

