// Variables that will be used to display game values

var neededNum = "";
var wins = 0;
var losses = 0;
var currentVal = 0;

// copypasta'd this in so that it can be renamed and repurposed for random number generation, but this is referring to an array, which simply doesn't work for my needs in this case. Look to the lotterygen exercises for ways to rewrite this randomizer to wait the needs of the game.

compGuess = alpha[Math.floor(Math.random() * alpha.length)];

// Next write a random number function that will set up the win/loss value.