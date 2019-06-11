// Variables that will be used to define game values

var neededNum = "";
var wins = 0;
var losses = 0;
var currentVal = 0;

// Variables used to display those values

var needDisp = document.getElementById("neededNum");
var winDisp = document.getElementById("wins");
var lossDisp = document.getElementById("losses")
var currentDisp = document.getElementById("currentVal");

// copypasta'd this in so that it can be renamed and repurposed for random number generation, but this is referring to an array, which simply doesn't work for my needs in this case. Look to the lotterygen exercises for ways to rewrite this randomizer to wait the needs of the game.

// solution = alpha[Math.floor(Math.random() * alpha.length)];

$(document).ready(function() {

    $(".userChoice").on("click", function() {
        
        // Feel beyond free to remove this element. Alerts are great to halt code executions or run initial tests to confirm things, but beyond that they can slow down code executions.
        
        alert("I've been clicked!");

        // Should generate the value that is needed to win or lose the game, a number between 19 and 120.

        var neededNum = Math.floor(Math.random(18) * 121);
        
        // Generates a new random number between 1 and 12. Really appreciating the elegance of these statements.
        
        var button1 = Math.floor(Math.random(0) * 13);
        
        console.log(button1);

        // Yep, it works. Next step is to rename that variable random1 and then write random2 to random 4. Also it's worth considering moving these vars up into global scope. Not sure if it makes a difference if they are defined before or after document ready, but that's a question for another time. At this point, consolidate all the variables together for purposes of organization.
        
        var button2 = Math.floor(Math.random(0) * 13);
        
        var button3 = Math.floor(Math.random(0) * 13);
        
        var button4 = Math.floor(Math.random(0) * 13);
        
        console.log(button2);

        console.log(button3);

        console.log(button4);

        // So the next step is to work out a method to add the button results together. Not entirely sure how to approach this. Maybe use the onclick event to push numbers into an array and add the contents? This is going to take some thinking to suss out.

        

    });
});