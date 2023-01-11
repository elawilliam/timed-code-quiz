//Questions//
var questions = [
    "Special characters are their own JavaScript data type",
    "Local Variables are visible everywhere in your JavaScript code",
    "Boolean data types in JavaScrip are True/False",
    "pop() removes the last item in an array",
    "JavaScript is not a case-sensitive language",
    "When a function is declared as const, it can be called on any type of object"
];

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

startBtn.addEventListener("click", startClock);
 
//Function to end quiz function quizEnd()//
 
//Function for each question function questionOne() function questionTwo() function questionThree() function questionFour() function questionFive() function questionSix()//
 
//Function to start quiz function startQuiz() startClock();questionOne();//

