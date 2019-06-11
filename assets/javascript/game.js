// Variables that will be used to display game values

var neededNum = "";
var wins = 0;
var losses = 0;
var currentVal = 0;

// copypasta'd this in so that it can be renamed and repurposed for random number generation, but this is referring to an array, which simply doesn't work for my needs in this case. Look to the lotterygen exercises for ways to rewrite this randomizer to wait the needs of the game.

// solution = alpha[Math.floor(Math.random() * alpha.length)];

$(document).ready(function() {

    $(".userChoice").on("click", function() {
        
        // Feel beyond free to remove this element. Alerts are great to halt code executions or run initial tests to confirm things, but beyond that they can slow down code executions.
        
        alert("I've been clicked!");

        // Generates a new random number between 1 and 12. Really appreciating the elegance of these statements.
        var random = Math.floor(Math.random(0) * 13);

        console.log(random);

        // Yep, it works. Next step is to rename that variable random1 and then write random2 to random 4. Also it's worth considering moving these vars up into global scope. Not sure if it makes a difference if they are defined before or after document ready, but that's a question for another time. At this point, consolidate all the variables together for purposes of organization.

    });
});