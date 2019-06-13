$(document).ready(function() {

// Variables that will be used to define game values
var wins = 0;
var losses = 0;
var currentNum = 0;

// Variables used to display those values

var needDisp = document.getElementById("requiredNum");
var winDisp = document.getElementById("gamesWon");
var lossDisp = document.getElementById("gamesLost")
var currentDisp = document.getElementById("currentScore");

// Number needed to win game

var neededNum = Math.floor(Math.random(18) * 121);
console.log (neededNum);

// Code to display the pertinent game values.

needDisp.textContent = neededNum; 
winDisp.textContent = wins;
lossDisp.textContent = losses;

// Random number generators for the 4 buttons.

var button1 = Math.floor(Math.random() * 13);
var button2 = Math.floor(Math.random() * 13);
var button3 = Math.floor(Math.random() * 13);
var button4 = Math.floor(Math.random() * 13);

    // Code that (currently) prints the button values to the console. I need to concoct a method to add their values together as the game progresses.
    
    $("#userChoice1").on("click", function() {
        
        console.log(button1);    

        
    });
    
    $("#userChoice2").on("click", function() {
        
        console.log(button2);
        
    });

    $("#userChoice3").on("click", function() {

        console.log(button3);

    });

    $("#userChoice4").on("click", function() {

        console.log(button4);

    });

    // if (currentNum === neededNum) {
    //     alert("A winner is you!");
    // }
    // else {
        
    // }
});