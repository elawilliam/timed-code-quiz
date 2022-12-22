//Questions//

var questions = {
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
    "Question 6"
}

//Creating the 'time' variable//
var time = document.getElementById("time");
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
    //might need to change this number//
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

//Function for start quiz//
function startQuiz() {
    startClock();
    questionOne();
};
