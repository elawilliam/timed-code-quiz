//get information from local storage//
//call a function to render on the screen//
//that function will do a for loop through the information we got from the local storage & will creat html that will be appended on the screen//

var highScores = document.getElementById("high-scores");
var storedPlayers = JSON.parse(localStorage.getItem("storageArray"));

function renderPlayers() {
    for (var i = 0; i < storedPlayers.length; i++) {
        var player = JSON.parse(localStorage.getIteam("storageArray"));

        if (player[i] !== null) {
            var playerList = document.createElement("playerList");
            playerList.textContent = "Player: " + player[i].playerInitials + "Time: " + player[i].timeLeft
            console.log(player[i].playerInitials)
        }
        highScores.appendChild(playerList);
    }
};

if (storedPlayers !== null) {
    renderPlayers();
};
