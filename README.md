# unit-4-game
JQuery game creation exercise, AKA Crystal Collector.

This game was a challenge at the time. The goal was to create a 
game in which the player is given a random number that they are 
required to reach, and 4 buttons that have randomly generated
values. When the buttons are pressed their value is added to the
total score. If the total score equals the required number the
player wins, and if the total exceeds the required number the
player loses. Wins and losses are tabulated, and upon ending
the game it resets with new random values.

The big hump to get over here was getting the numbers I needed
to be generated within a certain range, i.e. not larger than 125,
but not lower than 25.

Generating new values every game was a cinch though, I simply
stored the individual math.random functions in variables and
called them all again upon a win or a loss. Win/lose checking
was handled by a simple if/else statement that runs on click
events and makes sure that the required number hasn't been met
or exceeded.
