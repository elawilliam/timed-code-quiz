//Where the intro & questions appear//
var introCard = document.getElementById("intro-card");
var questionsCard = document.getElementById("questions-card");
var qIndex = 0

//Questions & Answers array//
var questionsAndAnswers = [
    { question: "Special characters are their own JavaScript data type", answer: "false" },
    { question: "Local Variables are accessible everywhere in JavaScript code", answer: "false" },
    { question: "Boolean data types in JavaScrip are True/false", answer: "true" },
    { question: "pop() removes the last item in an array", answer: "true" },
    { question: "JavaScript is not a case-sensitive language", answer: "false" },
    { question: "When a function is declared as const, it can be called on any type of object", answer: "true" },
]


//Creating True & False buttons//
var trueBtn = document.createElement("button");
var falseBtn = document.createElement("button");
trueBtn.textContent = "True"
falseBtn.textContent = "False"
trueBtn.setAttribute("style", "width:100px; margin:50px; border-radius: 20px; background-color: gray; cursor:pointer")
falseBtn.setAttribute("style", "width:100px; margin:50px; border-radius: 20px; background-color: gray; cursor:pointer")
trueBtn.setAttribute("value", "true")
falseBtn.setAttribute("value", "false")
trueBtn.addEventListener("click", valueCheck);
falseBtn.addEventListener("click", valueCheck);

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

        if (secondsLeft <= 0 || qIndex >= questionsAndAnswers.length) {
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
        score: timeLeft,
    }
    var storageArray = [];

    var storedPlayers = JSON.parse(localStorage.getItem("storageArray"));

    if (storedPlayers === null) {
        storageArray = storageArray.push(storage);
        localStorage.setItem("storageArray", JSON.stringify(storageArray));
    } else {
        storageArray = storedPlayers;
        storageArray = storageArray.push(storage);
        localStorage.setItem("storageArray", JSON.stringify(storageArray));
    }

}

//Function to render Q & set up format//
function renderQ() {
    introCard.textContent = ""
    introCard.appendChild(trueBtn);
    introCard.appendChild(falseBtn);
}

//For loop to run through & ask questions//
function askQ() {
    renderQ();
    questionsCard.textContent = questionsAndAnswers[qIndex].question;
    // for (var i = 0; i < questionsAndAnswers.length; i++){
    //     questionsCard.textContent = questionsAndAnswers[i].question;
    // };

}


//check for the correct answer//
function valueCheck(event) {
    var userChoice = event.target.getAttribute("value");
    if (userChoice == questionsAndAnswers[qIndex].answer) {
        console.log("yo facts!");
    }
    else {
        console.log("I'm taking your time!");
        secondsLeft -= 10;
    }
    qIndex++;
    if (qIndex < questionsAndAnswers.length){
        askQ(); 
    }

}

console.log(questionsAndAnswers);

//Function to start quiz//
function startQuiz() {
    qIndex = 0;
    startClock();
    askQ();
}

//Event listener for starting quiz// 
startBtn.addEventListener("click", startQuiz);

