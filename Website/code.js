Math;
window.onload = () => {
    canvas = document.getElementById('canvas');
    drawBoard();
    canvas.addEventListener('click', (e) => {
        console.log('click: ' + Math.floor(e.offsetX / 50) + '/' + Math.floor(e.offsetY / 50));
        let x = Math.floor(e.offsetX / 50);
        let y = Math.floor(e.offsetY / 50);
        if (y === 16) {
            // on est dans la barre des couleurs
            selectedColor = colors[x];
        } else {
            drawRect(x, y, selectedColor);
        }
    }, false);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* Display game menu */
function menu(nb) {
    document.querySelector(".gameMenu").style.display = "block";
    if (nb === 1) {
        document.querySelector(".game1").style.display = "block";
    }
    if (nb === 2) {
        document.querySelector(".game2").style.display = "block";
    } else {
        document.querySelector(".game3").style.display = "block";
    }
}

function quit() {
    document.querySelector(".gameMenu").style.display = "none";
    document.querySelector(".game1").style.display = "none";
    document.querySelector(".game2").style.display = "none";
}

/* Display nimgame*/
function nimRetry() {
    document.querySelector(".gameMenu p").innerHTML = "20"
    document.querySelector(".game1 .retry").style.display = "none"
    document.querySelectorAll(".game1 .btn").forEach((btn) => {
        btn.style.display = "inline-block"
    });
    document.querySelector(".game1 .plateau").src = "images/games/nim/20.png"
}

function nimGame(nb) {
    let allumettes = parseInt(document.querySelector(".gameMenu p").innerHTML, 10);
    if (nb > allumettes) {
        return alert("ERREUR ! Vous ne pouvez pas prendre plus d'allumettes qu'il n'y en a dans le paquet !")
    }
    if (nb === "1") {
        allumettes -= 1;
    }
    if (nb === "2") {
        allumettes -= 2;
    }
    if (nb === "3") {
        allumettes -= 3;
    }
    document.querySelector(".gameMenu p").innerHTML = allumettes.toString();
    document.querySelector(".game1 .plateau").src = "images/games/nim/" + allumettes.toString() + ".png"
    if (allumettes === 0) {
        document.querySelector(".game1 .plateau").src = "images/games/nim/won.png";
        document.querySelectorAll(".game1 .btn").forEach((btn) => {
            btn.style.display = "none";
        });
        document.querySelector(".game1 .retry").style.display = "inline-block";
        return "Player won";
    }

    setTimeout("botTurn()", 1000);
    document.querySelectorAll(".game1 .btn").forEach((btn) => {
        btn.style.display = "none";
    });
    document.querySelector(".botplaying").style.display = "block";
}

function botTurn() {
    let allumettes = parseInt(document.querySelector(".gameMenu p").innerHTML, 10)
    let withdraw = (getRandomInt(3) + 1);
    while (withdraw > allumettes) {
        withdraw = (getRandomInt(3) + 1);
    }
    allumettes -= withdraw;
    document.querySelector(".gameMenu p").innerHTML = allumettes.toString();
    document.querySelector(".game1 .plateau").src = "images/games/nim/" + allumettes.toString() + ".png"
    document.querySelector(".botplaying").style.display = "none";
    document.querySelectorAll(".game1 .btn").forEach((btn) => {
        btn.style.display = "inline-block";
    });
    if (allumettes === 0) {
        document.querySelector(".game1 .plateau").src = "images/games/nim/lost.png";
        document.querySelectorAll(".game1 .btn").forEach((btn) => {
            btn.style.display = "none"
        });
        document.querySelector(".game1 .retry").style.display = "inline-block"
        return "Player lost";
    }
}

/* Display painted*/
let canvas;
let colors = ['white', 'black', 'red', 'green', 'yellow', 'blue', 'pink', 'purple', 'brown', 'cyan', 'orange',
    'darkgreen', 'darkred', 'turquoise', 'indigo', 'grey'];
let selectedColor = colors[1];

function drawBoard() {
    let ctx = canvas.getContext('2d');
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
            ctx.beginPath();
            ctx.strokeStyle = '#808080';
            ctx.fillStyle = '#FFFFFF';
            ctx.rect(50 * y, 50 * x, 50, 50);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
    for (let x = 0; x < 16; x++) {
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.fillStyle = colors[x];
        ctx.rect(50 * x, 50 * 16, 50, 50);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

function drawRect(x, y, color) {
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(50 * x, 50 * y, 50, 50);
    ctx.closePath();
    ctx.fill();
}