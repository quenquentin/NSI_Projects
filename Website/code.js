Math;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function menu() {
    document.querySelector(".gameMenu").style.display = "block";
}

function quit() {
    document.querySelector(".gameMenu").style.display = "none";
}

function nimRetry() {
    document.querySelector(".gameMenu p").innerHTML = "20"
    document.querySelector(".game1 .retry").style.display = "none"
    document.querySelectorAll(".game1 .btn").forEach((btn) => {
        btn.style.display = "inline-block"
    });
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
            btn.style.display = "none"
        });
        document.querySelector(".game1 .retry").style.display = "inline-block"
        return "Player won";
    }
    setTimeout("botTurn()", 1000)
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
    if (allumettes === 0) {
        document.querySelector(".game1 .plateau").src = "images/games/nim/lost.png";
        document.querySelectorAll(".game1 .btn").forEach((btn) => {
            btn.style.display = "none"
        });
        document.querySelector(".game1 .retry").style.display = "inline-block"
        return "Player lost";
    }
}