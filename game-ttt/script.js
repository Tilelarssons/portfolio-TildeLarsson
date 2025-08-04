"use strict";




let oGameData = {};




oGameData.initGlobalObject = function () {




    //Datastruktur för vilka platser som är lediga respektive har brickor. Array med 9 (0-8) tomma strängar
    oGameData.gameField = Array('', '', '', '', '', '', '', '', '');




    //Indikerar tecknet som skall användas för spelare ett
    oGameData.playerOne = "X";




    //Indikerar tecknet som skall användas för spelare två
    oGameData.playerTwo = "O";




    //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin "bricka"
    oGameData.currentPlayer = "";




    //Nickname för spelare ett som tilldelas från ett formulärelement
    oGameData.nickNamePlayerOne = "";




    //Nickname för spelare två som tilldelas från ett formulärelement
    oGameData.nickNamePlayerTwo = "";




    //Färg för spelare ett som tilldelas från ett formulärelement
    oGameData.colorPlayerOne = "";




    //Färg för spelare två som tilldelas från ett formulärelement
    oGameData.colorPlayerTwo = "";




    //Timerid om användaren har klickat för checkboxen
    oGameData.timerId = null;




    //Flagga för timern
    oGameData.timerEnabled = false;




};




window.addEventListener("load", function () {
    oGameData.initGlobalObject();
    document.getElementById("game-area").classList.add("d-none");
    document.getElementById("newGame").addEventListener("click", validateForm);
    createTimerCheckbox(); // Skapa checkboxen när sidan laddas
});






//Checkbox som ska kopplas till timer
function createTimerCheckbox() {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "timerCheckbox";
    checkbox.className = "styled-checkbox";




    let label = document.createElement("label");
    label.htmlFor = "timerCheckbox";
    label.className = "styled-label";




    let textNode = document.createTextNode("Vill du begränsa tiden till 5 sekunder per drag?");
    label.appendChild(textNode);




    // Lägger till både checkboxen och labeln till div med id "div-in-form" i DOM:en
    document.getElementById("div-in-form").appendChild(checkbox);
    document.getElementById("div-in-form").appendChild(label);




    //Lägger till en eventlistener som lyssnar på ändringar i checkboxen
    checkbox.addEventListener("change", function () {
        oGameData.timerEnabled = this.checked;
    });
}






function startTimer() {
    if (oGameData.timerEnabled) { //Kontrollera om timern är aktiverad (true)
        if (oGameData.timerId !== null) { // Om en timer redan är igång (timerId är inte null), stoppa den
            clearTimeout(oGameData.timerId);
        }
        // Starta en ny timer och spara ID:t för den nya timern i oGameData
        oGameData.timerId = setTimeout(function () {
            //Byt tur mellan spelarna
            oGameData.currentPlayer = oGameData.currentPlayer === oGameData.playerOne ? oGameData.playerTwo : oGameData.playerOne;
            // Uppdatera texten i jumbotronen för att visa att tiden är ute och vilken spelare
            document.querySelector(".jumbotron h1").textContent = "Tiden är ute! Nu är det " + (oGameData.currentPlayer === oGameData.playerOne ? oGameData.nickNamePlayerOne : oGameData.nickNamePlayerTwo) + "s tur. Aktuell spelare är " + (oGameData.currentPlayer === oGameData.playerOne ? oGameData.nickNamePlayerOne : oGameData.nickNamePlayerTwo) + " (" + oGameData.currentPlayer + ")";
            //starta timern igen
            startTimer();
            //5 sekunder (5000 milisekunder)
        }, 5000);
    }
}






function stopTimer() {
    // Om en timer redan är igång (timerId är inte null), stoppa den
    if (oGameData.timerId !== null) {
        clearTimeout(oGameData.timerId);
        //Sätt oGameData.timerID=null igen.
        oGameData.timerId = null;
    }
}




//Funktion för att validera formuläret
function validateForm() {
    try { //Hämtar värden från formulärelementet
        let nickNamePlayerOne = document.getElementById("nick1").value;
        let nickNamePlayerTwo = document.getElementById("nick2").value;
        let colorPlayerOne = document.getElementById("color1").value;
        let colorPlayerTwo = document.getElementById("color2").value;




        //Kontrollerar att nicknames är minst 5 tecken långa
        if (nickNamePlayerOne.length < 5 || nickNamePlayerTwo.length < 5) {
            throw new Error("Nickname måste vara minst 5 tecken långt.");
        }
        //Kontrollerar att nicknamen inte är lika varandra
        if (nickNamePlayerOne === nickNamePlayerTwo) {
            throw new Error("Nickname får inte vara lika.");
        }
        //Kontrollerar att valda färger inte är vit, svart eller samma
        if (colorPlayerOne === "#ffffff" || colorPlayerOne === "#000000" || colorPlayerTwo === "#ffffff" || colorPlayerTwo === "#000000" || colorPlayerOne === colorPlayerTwo) {
            throw new Error("Valda färger får inte vara vit, svart eller lika för båda spelarna.");
        }
        //Om alla villkor uppfylls, anropa funktionen initiateGame som syns nedan.
        initiateGame();




    } catch (error) {// Visa de felmeddelanden som är skrivet efter error om något villkor inte är uppfyllt.
        document.getElementById("errorMsg").textContent = error.message;
    }
}




//Funktion för att initiera spelet
function initiateGame() {
    document.getElementById("div-in-form").classList.add("d-none"); //Gömmer formuläret
    document.getElementById("game-area").classList.remove("d-none"); //Visa spelplanen
    document.getElementById("errorMsg").textContent = ""; //Ta bort textinnehållet
    oGameData.nickNamePlayerOne = document.getElementById("nick1").value; //Spara spelare 1s namn i oGameData
    oGameData.nickNamePlayerTwo = document.getElementById("nick2").value; //Spara spelare 2s namn i oGameData
    oGameData.colorPlayerOne = document.getElementById("color1").value; //Spara spelare 1s färg i oGameData
    oGameData.colorPlayerTwo = document.getElementById("color2").value; //Spara spelare 2s färg i oGameData




    //Tömmer spelplanen och sätter bakgrundsfärg till vit genom att loopa igenom alla td-element
    document.querySelectorAll("#game-area td").forEach(function (td) {
        td.textContent = '';
        td.style.backgroundColor = 'white';
    });




    //Deklararerar variblerna playerChar (O/X) och playerName (Inmatat namn)
    let playerChar, playerName;




    //Slumpa vilken spelare som ska göra de första draget
    if (Math.random() < 0.5) { //Om det slumpade talet är mindre än 0.5
        playerChar = oGameData.playerOne; //Sätt playerChar för spelare 1 (X) (tidigare: oGameData.playerOne = "X";)
        playerName = oGameData.nickNamePlayerOne; //Sätt nickname för spelare 1 (tidigare: oGameData.nickNamePlayerOne = "";)
        oGameData.currentPlayer = oGameData.playerOne; //Sätt tecknet (X) för spelare 1 (tidigare: oGameData.currentPlayer = "";)
    } else { //Annars:
        playerChar = oGameData.playerTwo; //Sätt playerChar för spelare 2 (O) (tidigare: oGameData.playerTwo = "O";)
        playerName = oGameData.nickNamePlayerTwo; //Sätt nickname för spelare 2 (tidigare: oGameData.nickNamePlayerTwo = "";)
        oGameData.currentPlayer = oGameData.playerTwo; //Sätt tecknet (O) för spelare 2 (tidigare: oGameData.currentPlayer = "";)
    }
    //Ändrar texten i h1-elementet
    document.querySelector(".jumbotron h1").textContent = "Nu är det " + (oGameData.currentPlayer === oGameData.playerOne ? oGameData.nickNamePlayerOne : oGameData.nickNamePlayerTwo) + "s tur. Aktuell spelare är " + (oGameData.currentPlayer === oGameData.playerOne ? oGameData.nickNamePlayerOne : oGameData.nickNamePlayerTwo) + " (" + oGameData.currentPlayer + ")";
    // Kolla om timern är ikryssad och spara
    let isChecked = document.getElementById("timerCheckbox").checked;
    oGameData.timerEnabled = isChecked;




    // Starta timern om checkbox är icheckad
    if (isChecked) {
        startTimer();
    }
    document.querySelector("#game-area table").addEventListener("click", executeMove); //Labb 3: Eventlyssnare på klick i gamearean, "hänvisar" till funktionen under.
}




//// Funktion för att hantera ett drag i spelet när användaren klickar på en cell
function executeMove(event) {
    //Kontrollera om klick på cell
    if (event.target.tagName === "TD") {
        let cell = event.target; //Spara referens för den cell som klickades på
        let cellId = cell.getAttribute("data-id"); //Hämta cellens ID från dataID




        //Kontrollera om cellen är tom
        if (oGameData.gameField[cellId] === '') {
            oGameData.gameField[cellId] = oGameData.currentPlayer; //Markera cellen tagen av den nuvarande spelaren
            //Sätt bakgrundsfärg baserat på spelaren
            cell.style.backgroundColor = oGameData.currentPlayer === oGameData.playerOne ? oGameData.colorPlayerOne : oGameData.colorPlayerTwo;
            //Sätt text (X, O) baserat på spelaren
            cell.textContent = oGameData.currentPlayer;
            //Växla till nästa spelare
            oGameData.currentPlayer = oGameData.currentPlayer === oGameData.playerOne ? oGameData.playerTwo : oGameData.playerOne;
            //Skriv ut vems tur det är
            document.querySelector(".jumbotron h1").textContent = "Nu är det " + (oGameData.currentPlayer === oGameData.playerOne ? oGameData.nickNamePlayerOne : oGameData.nickNamePlayerTwo) + "s tur. Aktuell spelare är " + (oGameData.currentPlayer === oGameData.playerOne ? oGameData.nickNamePlayerOne : oGameData.nickNamePlayerTwo) + " (" + oGameData.currentPlayer + ")";




            //Kontrollera om spelet är slut efter draget
            let gameStatus = oGameData.checkForGameOver();
            //Om det är slut avsluta spelet och visa resultatet (endgame)
            if (gameStatus !== 0) {
                endGame(gameStatus);
                //Annars om timern är aktiverad (true) starta timern
            } else {
                if (oGameData.timerEnabled) {
                    startTimer();
                }
            }
        }
    }
}






function endGame(status) {
    // Ta bort lyssnaren på tabellen
    document.querySelector("#game-area table").removeEventListener("click", executeMove);


    // Visa formuläret igen
    document.getElementById("div-in-form").classList.remove("d-none");


    // Kontrollera resultatet och visa meddelande basertat på resultat
    let message;
    if (status === 1) {
        message = "Vinnare är " + oGameData.nickNamePlayerOne + " (" + oGameData.playerOne + ")!";
    } else if (status === 2) {
        message = "Vinnare är " + oGameData.nickNamePlayerTwo + " (" + oGameData.playerTwo + ")!";
    } else if (status === 3) {
        message = "Det blev oavgjort!";
    }




    //Skriv ut medelandet tillsammans med "spela igen?"
    document.querySelector(".jumbotron h1").textContent = message + " Spela igen?";




    // Dölj spelområdet
    document.getElementById("game-area").classList.add("d-none");




    //Om timern är igång stoppa den
    if (oGameData.timerEnabled) {
        stopTimer();
    }




    // Initiera om spelet
    oGameData.initGlobalObject();




}




//Funktioner för att kolla "ifyllnaden" av spelfälten. Kommer att användas senare.
oGameData.checkHorizontal = function () {
    // Kollar alla horisontella rader (-) Vilket är: 0-2, 3-5, 6-8
    for (let i = 0; i < 9; i += 3) {
        if (this.gameField[i] === this.gameField[i + 1] && this.gameField[i + 1] === this.gameField[i + 2] && this.gameField[i] !== '') {
            return this.gameField[i] === 'X' ? 1 : 2; // Returnera 1 för X eller 2 för O
        }
    }
    return 0; // Ingen vinnare horisontellt
};




oGameData.checkVertical = function () {
    // Kollar alla vertikala kolumner (|) Vilket är: 0, 3, 6; 1, 4, 7; 2, 5, 8
    for (let i = 0; i < 3; i++) {
        if (this.gameField[i] === this.gameField[i + 3] && this.gameField[i + 3] === this.gameField[i + 6] && this.gameField[i] !== '') {
            return this.gameField[i] === 'X' ? 1 : 2; // Returnera 1 för X eller 2 för O
        }
    }
    return 0; // Ingen vinnare vertikalt
};




oGameData.checkDiagonalLeftToRight = function () {
    // Kollar diagonalen från vänster till höger (\) vilket är: 0, 4, 8
    if (this.gameField[0] === this.gameField[4] && this.gameField[4] === this.gameField[8] && this.gameField[0] !== '') {
        return this.gameField[0] === 'X' ? 1 : 2; // Returnera 1 för X eller 2 för O
    }
    return 0; // Ingen vinnare diagonalt vänster till höger
};






oGameData.checkDiagonalRightToLeft = function () {
    // Diagonalen från höger till vänster (/) vilket är: 2, 4, 6
    if (this.gameField[2] === this.gameField[4] && this.gameField[4] === this.gameField[6] && this.gameField[2] !== '') {
        return this.gameField[2] === 'X' ? 1 : 2; // Returnera 1 för X eller 2 för O
    }
    return 0; // Ingen vinnare diagonalt höger till vänster
};




oGameData.checkForDraw = function () {
    // Om alla fält är fyllda (inga tomma fält kvar) och ingen vinnare finns
    if (!this.gameField.includes('') && this.checkForGameOver() === 0) {
        return 3; // Oavgjort
    }
    return 0; // Det är inte oavgjort
};




oGameData.checkForGameOver = function () {
    if (this.checkHorizontal() === 1 || this.checkVertical() === 1 || this.checkDiagonalLeftToRight() === 1 || this.checkDiagonalRightToLeft() === 1) {
        return 1; // Spelare 1 (X) har vunnit
    }
    if (this.checkHorizontal() === 2 || this.checkVertical() === 2 || this.checkDiagonalLeftToRight() === 2 || this.checkDiagonalRightToLeft() === 2) {
        return 2; // Spelare 2 (O) har vunnit
    }




    // Kontrollera om spelet är oavgjort (inga tomma fält kvar)
    if (!this.gameField.includes('')) {
        return 3; // Oavgjort
    }




    return 0; // Ingen vinnare än
}