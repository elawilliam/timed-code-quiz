var quizCard = document.getElementById("quiz-card");
var startBtn = document.getElementById("start")


//Creating the 'time' variable//
var time = document.getElementById("clock");
time.textContent = "00";
var secondsLeft = 60;

//Fuction to start clock//
function startClock() {
    var timer = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;

        if (secondsLeft === 60) {
            clearInterval(timer);
            time.textContent = "00";
        }

        if (secondsLeft === 0) {
            clearInterval(timer);
            quizEnd();
        }
    }, 1000);
}

//Function to end quiz//
function quizEnd() {

}

//Function for each question//
function questionOne()
function questionTwo()
function questionThree()
function questionFour()
function questionFive()
function questionSix()

//Function to start quiz//
function startQuiz() {
    startClock();
    questionOne();
};
