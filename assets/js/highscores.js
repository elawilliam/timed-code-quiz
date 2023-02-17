var highScores = document.getElementById("high-scores");
var playerScores = JSON.parse(localStorage.getItem("playerScores")) || [];

//function to show high scores with initials & score//
function renderPlayers() {
    for (var i = 0; i < playerScores.length; i++) {
        console.log(playerScores[i]);
        var playerScoreElement = document.createElement("p");
        playerScoreElement.textContent = `${playerScores[i].playerInitials} ${playerScores[i].timeLeft}`;
        highScores.appendChild(playerScoreElement);
    }
};
renderPlayers();

