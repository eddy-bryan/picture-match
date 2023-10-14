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