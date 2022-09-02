import {moveTo, Game, getArray} from "./main.js";

const next = document.getElementsByClassName("next")[0];
const questioner = document.getElementsByClassName("questioner")[0];
let current = 0;
let after = 1;

const game = new Game(
    getArray(localStorage.getItem("playersNames")),
    localStorage.getItem("choosed-topic"),
    getArray(localStorage.getItem("topic"))
);

next.addEventListener("click", _ => {
    if (current === game.players.length) {
        moveTo("choosing-player");
    } else {
        questioner.textContent = `${game.players[current].name} اسأل ${game.players[after].name}`;
        current++;
        after === game.players.length - 1? after = 0: after++;
    };
});

next.click();