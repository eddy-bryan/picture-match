# Picture Match
Picture Match is an engaging memory and puzzle game designed to provide entertainment and cognitive exercise to players of all ages. Our project aims to offer an enjoyable and visually stimulating gaming experience that challenges memory and pattern recognition skills. Picture Match is intended for individuals who seek a fun way to test their memory and sharpen their cognitive abilities.

This fully responsive web-based game will immerse players in a delightful challenge, requiring them to match pairs of images hidden on the game board. Whether you're looking for a quick brain workout or a relaxing pastime, Picture Match is here to offer an entertaining and rewarding gaming experience.

![Screenshot of responsive design.](assets/images/responsive.png)

Pictures - catalyststuff on Freepik.com

Card Back Image - Rakib Khan on vecteezy.com

Background - brgfx on Freepik.com

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

game uses 100vh for height and width, emulator in developer tools does not take the address bar into consideration and game is obstructed by this when opening on a mobile device with a scroll bar appearing
fix - 

audio lag on mobile devices
fix - 



future ideas

changable grid sized

ifficulty levels

points system
- rename the time remaining stat to time elapsed and have a running clock while the game is running
- give the player a number of points based on how many lives remain after winning the game (ie. 10pts per life remaining)
- multiply the points that the player receives by a number depending on how much time has elapsed during their game