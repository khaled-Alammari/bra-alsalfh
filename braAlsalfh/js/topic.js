import {Game, getArray, moveTo} from "./main.js";

const next = document.getElementsByClassName("next")[0];
const checking = document.getElementsByClassName("checking")[0];
const giving = document.getElementsByClassName("giving")[0];
const uncovering = document.getElementsByClassName("uncovering")[0];
const checker = uncovering.children[0];
const subject = uncovering.children[1];
let counting = 0;

const game = new Game(
    getArray(localStorage.getItem("playersNames")),
    null,
    getArray(localStorage.getItem("topic"))
);

localStorage.setItem("choosed-topic", game.topic);
localStorage.setItem("out", game.outPlayer.name);

checking.addEventListener("click", _ => {
    giving.style.display = "none";
    checking.style.display = "none";
    uncovering.style.display = "initial";
    next.style.display = "initial";

    giving.textContent = `أعطوا الجوال ل${processedName(game.players[counting].name)}`;
    checker.textContent = `${game.players[counting].name} أنت ${game.players[counting].status}`;
    if (game.players[counting].status !== "برا السالفة") {
        subject.textContent = `السالفة هي: ${game.topic}`;
    } else {
        subject.textContent = "";
    };
    counting++;
});

next.addEventListener("click", _ => {
    if (counting === game.players.length) {
        moveTo("asking");
    } else {
        uncovering.style.display = "none";
        next.style.display = "none";
        giving.style.display = "initial";
        checking.style.display = "initial";
        
        giving.textContent = `أعطوا الجوال ل${processedName(game.players[counting].name)}`;
        checker.textContent = `${game.players[counting].name} أنت ${game.players[counting].status}`;
        subject.textContent = `السالفة هي ${game.topic}`;
    };
});

next.click();

function processedName(name) {
    return name[0] === "ا" && name[1] === "ل"? name.slice(1, name.length): name;
};