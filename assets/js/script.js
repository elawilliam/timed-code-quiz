var startBtn = document.getElementById("start");
var clock = document.getElementById("clock");
var intro = document.getElementById("intro");
var timeOnClock = 60;


//Question 1//
var question1 = document.getElementById("question1");
var correct1 = document.getElementById("correct1");
var incorrect1 = document.getElementById("incorrect1");

//Question 2//
var question2 = document.getElementById("question2");
var correct2 = document.getElementById("correct2");
var incorrect2 = document.getElementById("incorrect2");

//Question 3//
var question3 = document.getElementById("question3");
var correct3 = document.getElementById("correct3");
var incorrect3 = document.getElementById("incorrect3");

//Question 4//
var question4 = document.getElementById("question4");
var correct4 = document.getElementById("correct4");
var incorrect4 = document.getElementById("incorrect4");

//Question 5//
var question5 = document.getElementById("question5");
var correct5 = document.getElementById("correct5");
var incorrect5 = document.getElementById("incorrect5");

//Question 6//
var question6 = document.getElementById("question6");
var correct6 = document.getElementById("correct6");
var incorrect6 = document.getElementById("incorrect6");













//Not sure if I want to use this code below since I changed the HTML format//
var quizCard = document.getElementById("quiz-card");


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
