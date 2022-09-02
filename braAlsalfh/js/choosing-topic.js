import {moveTo, getArray, Game, savePoints, getPoints} from "./main.js";

const outPlayer = document.getElementsByClassName("outPlayer")[0];
const topicsCon = document.getElementsByClassName("topics")[0];

const game = new Game(
    getArray(localStorage.getItem("playersNames")),
    localStorage.getItem("choosed-topic"),
    getArray(localStorage.getItem("topic")),
    localStorage.getItem("out")
);

getPoints(localStorage.getItem("points"), game);

outPlayer.textContent = `${game.outPlayer.name} اختار ايش هي السالفة`;

for (let i = 0; i < game.topics.length; i++) {
    topicsCon.innerHTML += `
    <div class="topic">${game.topics[i]}</div>
    `;
};

const topics = document.getElementsByClassName("topic");

document.addEventListener('click', topicEventListener);

function topicEventListener(e) {
    if (/topic$/.test(e.target.className)) {
        if (e.target.textContent === game.topic) {
            game.outPlayer.points += 100;
            console.log(game);
            savePoints(game);
            e.target.classList.add("right");
        } else {
            e.target.classList.add("wrong");
            getElementByTxt(topics, game.topic).classList.add('right');
        };
        document.removeEventListener('click', topicEventListener);
        moveTo("score", 3000);
    };
};

function getElementByTxt(e, txt) {
    for (let i = 0; i < e.length; i++) {
        if (txt === e[i].textContent) {
            return e[i];
        };
    };
};