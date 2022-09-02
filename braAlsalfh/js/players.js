import {moveTo} from "./main.js"

const playersCon = document.getElementsByClassName("players-con")[0];
const add = document.getElementsByClassName("add")[0];
const done = document.getElementsByClassName("done")[0];
const naming = document.getElementsByClassName("naming")[0];
const apply = document.getElementsByClassName("apply")[0];

document.addEventListener('click', e => {
    if(/remove/.test(e.target.className)) {
        playersCon.removeChild(e.target.parentElement);
        if (playersCon.children.length === 2) {
            done.style.opacity = .5;
            done.style.cursor = "default";
        };
    };
});

add.addEventListener("click", _ => {
    naming.style.visibility = "initial";
    naming.style.opacity = "1";
});

apply.addEventListener("click", _ => {
    if (naming.children[0].textContent.length !== 0) {
        naming.style.visibility = "hidden";
        naming.style.opacity = "0";
        playersCon.innerHTML += `
            <div class="player">
                <div class="name">${naming.children[0].textContent}</div>
                <div class="remove"></div>
            </div>
        `;
        naming.children[0].textContent = '';
        if (playersCon.children.length === 3) {
            done.style.opacity = 1;
            done.style.cursor = "pointer";
        };
    };
});

done.addEventListener('click', _ => {
    if (playersCon.children.length >= 3) {
        localStorage.setItem("playersNames", playersNames(playersCon.children))
        moveTo("topic");
    };
});


window.addEventListener("keypress", e => {
    if (naming.style.visibility === "initial") {
        if (e.key !== "Enter" && naming.children[0].textContent.length <= 20) {
            naming.children[0].textContent += e.key;
        } else if (e.key === "Enter") {
            apply.click();
        };
    };
});

window.addEventListener("keydown", e => {
    if (e.key === "Backspace" && naming.style.visibility === "initial") {
        naming.children[0].textContent = naming.children[0].textContent.slice(0, -1);
    };
});

function playersNames(players) {
    const names = [];
    for (let i = 0; i < players.length; i++) {
        names.push(players[i].children[0].textContent);
    };
    return names;
};