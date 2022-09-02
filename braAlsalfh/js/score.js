import {moveTo, getArray, Game, getPoints} from "./main.js";

const PlayersCon = document.getElementsByClassName("players")[0];
const newGame = document.getElementsByClassName("new-game")[0];

const game = new Game(
    getArray(localStorage.getItem("playersNames")),
    localStorage.getItem("choosed-topic"),
    getArray(localStorage.getItem("topic")),
    localStorage.getItem("out")
);

getPoints(localStorage.getItem("points"), game);

for (let i = 0; i < game.players.length; i++) {
    PlayersCon.innerHTML += `
        <div class="player">${game.players[i].name}: ${game.players[i].points}</div>
    `;
};

newGame.addEventListener("click", _ => {
    localStorage.clear();
    moveTo("game");
});