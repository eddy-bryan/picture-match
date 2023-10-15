Pictures - catalyststuff on Freepik.com

Card Back Image - Rakib Khan on vecteezy.com

Game sounds - uppbeat.io
betacut
Joshua Chivers
Soundroll
OM FX
Jam FX


bugs and testing

if the same tile is clicked twice the game still calls a match
fix - added flippedTiles.includes(tile) to the if statement that checks to see if tiles are locked or revealed

correct tiles still remain clickable and flip back over if an unmatching tile is clicked, the tile still retains its green border
fix - created a new array for correct pairs and added an additional check to the flipTile function

tiles are flipping if clicked before the game starts and correct tiles retain the green border and lock in the tile-back image after the game starts
fix - added a memoryPhase condition to the flipTile function

sounds not playing
fix - audio clips have been moved before the script is loaded in the html file

winner message pops up before win
fix - correct pairs were stored as individual tiles in the correctPairs array rather than as pairs. Updated the checkForWin function to suit.

overlay messages sometimes do not cover the window
fix - changed sizing units to 100vh and 100vw



future ideas

changable grid sized

ifficulty levels

points system
- rename the time remaining stat to time elapsed and have a running clock while the game is running
- give the player a number of points based on how many lives remain after winning the game (ie. 10pts per life remaining)
- multiply the points that the player receives by a number depending on how much time has elapsed during their game