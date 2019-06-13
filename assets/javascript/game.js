$(document).ready(function() {

// Variables that will be used to define game values
var wins = 0;
var losses = 0;
var currentNum = 0;

// Variables used to display those values

var needDisp = document.getElementById("requiredNum");
// A little experiment of mine that didn't work out. Will have to come back to it later.
// $("#requiredNum").text(neededNum);
var winDisp = document.getElementById("gamesWon");
var lossDisp = document.getElementById("gamesLost")
var currentDisp = document.getElementById("currentScore");

// Number needed to win game

var neededNum = Math.floor(Math.random()  * (121 - 1) + 1);
console.log (neededNum);

// Code to display the pertinent game values.

needDisp.textContent = neededNum; 
winDisp.textContent = wins;
lossDisp.textContent = losses;
currentDisp.textContent = currentNum;

// Random number generators for the 4 buttons.

var button1 = Math.floor(Math.random() * (13 - 1) + 1);
var button2 = Math.floor(Math.random() * (13 - 1) + 1);
var button3 = Math.floor(Math.random() * (13 - 1) + 1);
var button4 = Math.floor(Math.random() * (13 - 1) + 1); 

    // Code that runs when buttons are pressed.
    
    $("#userChoice1").on("click", function() {
        
        console.log("button1 ", button1);
        currentNum = currentNum + button1;
        currentDisp.textContent = currentNum;
        console.log(currentNum);

    });
    
    $("#userChoice2").on("click", function() {
        
        console.log("button2", button2);
        currentNum = currentNum + button2;
        currentDisp.textContent = currentNum;
        console.log(currentNum);
        
    });

    $("#userChoice3").on("click", function() {

        console.log("button3", button3);
        currentNum = currentNum + button3;
        currentDisp.textContent = currentNum;
        console.log(currentNum);

    });

    $("#userChoice4").on("click", function() {

        console.log("button4", button4);
        currentNum = currentNum + button4;
        currentDisp.textContent = currentNum;
        console.log(currentNum);

    });

    // This should neatly handle win conditions. That empty else bothers me, but I believe this will work just fine.

    // document.on("click")

        if (currentNum === neededNum) {
            alert("You win!");
            wins++;
            winDisp.textContent = wins;
            console.log("Win")
        }
        else if (currentNum > neededNum) {
            alert("You lose!");
            losses++;
            lossDisp.textContent = losses;
            console.log("Loss");
        }
        else {
        }

});