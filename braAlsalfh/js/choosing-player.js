import {moveTo, Game, getArray, savePoints} from "./main.js";

const questioner = document.getElementsByClassName("questioner")[0];
const players = document.getElementsByClassName("players")[0];
let counting = 0;

const game = new Game(
    getArray(localStorage.getItem("playersNames")),
    localStorage.getItem("choosed-topic"),
    getArray(localStorage.getItem("topic")),
    localStorage.getItem("out")
);

questioner.textContent = `${game.players[counting].name} اختار مين برا السالفة`;

createPlayers();

document.addEventListener("click", e => {
    if (/player$/.test(e.target.className)) {
        if (game.getPlayerByName(e.target.textContent).status === "برا السالفة") {
            game.players[counting].points += 100;
        };

        counting++;

        if (counting === game.players.length) {
            savePoints(game);
            questioner.textContent = `اللي برا السالفة هو: ${game.outPlayer.name}`;
            players.style.display = "none";
            moveTo("choosing-topic", 3000);
        } else {
            questioner.textContent = `${game.players[counting].name} اختار مين برا السالفة`;
            createPlayers();
        };
    };
});

function createPlayers() {
    removePlayers();
    for (let i = 0; i < game.players.length; i++) {
        if (game.players[counting].name !== game.players[i].name) {
            players.innerHTML += `
                <div class="player">${game.players[i].name}</div>
            `;
        };
    };
};

function removePlayers() {
    while(players.children.length) {
        players.removeChild(players.lastChild);
    };
};