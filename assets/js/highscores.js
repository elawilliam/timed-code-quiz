var highScores = document.getElementById("high-scores");
var playerScores = JSON.parse(localStorage.getItem("playerScores")) || [];

function renderPlayers() {
    for (var i = 0; i < playerScores.length; i++) {
        // var player = JSON.parse(localStorage.getItem("storageArray"));
        console.log(playerScores[i]);
        var playerScoreElement = document.createElement("p");
        playerScoreElement.textContent = `${playerScores[i].playerInitials} ${playerScores[i].timeLeft}`;
        highScores.appendChild(playerScoreElement);
    }
};
    //sort players here before rendering//
    renderPlayers();

