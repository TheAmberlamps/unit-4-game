$(document).ready(function () {

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

    // neededNum is returning numbers lower than 19, don't know why. To the best of my knowledge it wasn't doing this until I implemented the win/loss conditions.

    var neededNum = Math.floor(Math.random() * (103 - 1) + 18);
    console.log("needed number", neededNum);

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

    // Code that runs when buttons are pressed. Looking over my code one final time before submission, I realise I could probably have written a single on.click function that would have handled al the buttons. Oh well.

    $("#userChoice1").on("click", function () {

        console.log("button1 ", button1);
        currentNum = currentNum + button1;
        currentDisp.textContent = currentNum;
        console.log("current number", currentNum);

    });

    $("#userChoice2").on("click", function () {

        console.log("button2", button2);
        currentNum = currentNum + button2;
        currentDisp.textContent = currentNum;
        console.log("current number", currentNum);

    });

    $("#userChoice3").on("click", function () {

        console.log("button3", button3);
        currentNum = currentNum + button3;
        currentDisp.textContent = currentNum;
        console.log("current number", currentNum);

    });

    $("#userChoice4").on("click", function () {

        console.log("button4", button4);
        currentNum = currentNum + button4;
        currentDisp.textContent = currentNum;
        console.log("current number", currentNum);

    });

    // else/if statement that checks for win conditions upon buttons being clicked.

    $(".crystalBut").on("click", function (){
        
        if (currentNum === neededNum) {
            alert("You win!");
            wins++;
            winDisp.textContent = wins;
            // console.log("Win")
            // console.log("current number", currentNum);
            currentNum = 0;
            // console.log("updated current number", currentNum);
            currentDisp.textContent = currentNum;
            // console.log("needednumber", neededNum);
            neededNum = Math.floor(Math.random() * (103 - 1) + 18);
            // console.log("updated needed number", neededNum);
            needDisp.textContent = neededNum;
        } else if (currentNum > neededNum) {
            alert("You lose!");
            losses++;
            lossDisp.textContent = losses;
            // console.log("Loss");
            currentNum = 0;
            currentDisp.textContent = currentNum;
            neededNum = Math.floor(Math.random() * (103 - 1) + 18);
            needDisp.textContent = neededNum;
        }
        else {
            // console.log("Yep, working");
        }

    });
    

});