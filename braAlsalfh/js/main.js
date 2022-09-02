export function moveTo(page, time = 0) {
    setTimeout(_ => {
        location.href = `./${page}.html`;
    }, time);
};

export class Player {
    constructor(name) {
        this.name = name;
        this.status = "داخل السالفة";
        this.points = 0;
    };
};

export class Game {
    constructor(players, subject, subjects, out) {
        this.players = createPlayers(players, out);
        this.topic = subject || randomTopic(subjects);
        this.outPlayer = getOutPlayer(this.players);
        this.topics = randomTopics(this.topic, subjects);

        this.getPlayerByName = name => {
            return getPlayerByName(name, this.players);
        };
    };
};

function createPlayers(playersNames, out) {
    const players = [];
    for (let i = 0; i < playersNames.length; i++) {
        const player = new Player(playersNames[i]);
        players.push(player);
    };
    randomOrder(players);
    if (out) {
        getPlayerByName(out, players).status = "برا السالفة";
    } else {
        setOutPlayer(players);
    };
    return players;
};

function randomOrder(players) {
    for (let i = 0; i < players.length; i++) {
        const firstRandom = players.indexOf(randomTopic(players));
        const secondRandom = players.indexOf(randomTopic(players));
        [players[firstRandom], players[secondRandom]] = [players[secondRandom], players[firstRandom]];
    };
};

function randomTopic(subject) {
    return subject[Math.floor(Math.random() * subject.length)];
};

function setOutPlayer(players) {
    randomTopic(players).status = "برا السالفة";
};

export function getArray(str) {
    return str.split(",");
};

function getOutPlayer(players) {
    for (let i = 0; i < players.length; i++) {
        if (players[i].status === "برا السالفة") {
            return players[i];
        };
    };
};

function getPlayerByName(name, players) {
    for (let i = 0; i < players.length; i++) {
        if (players[i].name === name) {
            return players[i];
        };
    };
};

export function savePoints(game) {
    let str = "";
    for (let i = 0; i < game.players.length; i++) {
        str += `${game.players[i].name}:${game.players[i].points},`;
    };
    localStorage.setItem("points", str);
};

function randomTopics(topic, subject) {
    let arr = [];
    arr.push(topic);
    removeFromArray(subject, topic);
    for (let i = 0; i < 7; i++) {
        const random = randomTopic(subject);
        arr.push(random);
        removeFromArray(subject, random);
    };
    randomOrder(arr);
    return arr;
};

function removeFromArray(arr, value) {
    arr.splice(arr.indexOf(value), 1);
    return arr;
};

export function getPoints(points, game) {
    let playersPoints = getArray(points);
    playersPoints.length = playersPoints.length - 1;

    for (let i = 0; i < playersPoints.length; i++) {
        game.getPlayerByName(playersPoints[i].split(":")[0]).points = +playersPoints[i].split(":")[1];
    };
};