# Picture Match
Picture Match is an engaging memory and puzzle game designed to provide entertainment and cognitive exercise to players of all ages. Our project aims to offer an enjoyable and visually stimulating gaming experience that challenges memory and pattern recognition skills. Picture Match is intended for individuals who seek a fun way to test their memory and sharpen their cognitive abilities.

This fully responsive web-based game will immerse players in a delightful challenge, requiring them to match pairs of images hidden on the game board. Whether you're looking for a quick brain workout or a relaxing pastime, Picture Match is here to offer an entertaining and rewarding gaming experience.

![Screenshot of responsive design.](assets/images/responsive.png)

## Features

### Existing Features

- **Welcome Overlay:** When users first access the game, they are greeted with a welcoming overlay. This overlay provides a brief introduction to the game, explaining the rules and objectives. It invites users to click the "Play" button to start the game. The overlay sets the stage for an enjoyable gaming experience and ensures that players understand the game's premise from the outset.

![Screenshot of the welcome overlay.](assets/images/welcome-overlay.png)

- **Title Design:** At the top of the game, users are greeted with the distinctive "Picture Match" title. The chosen fun handwriting style font adds a thematic touch to the game, creating a playful and engaging atmosphere for players. it serves as a clear introduction to the game, setting the tone for a fun and enjoyable experience.

![Screenshot of the title area.](assets/images/title.png)

- **Game Board:** The central game board is where the action takes place. Users can see a grid of picture tiles that need to be matched. The game board provides a visual and interactive interface for playing Picture Match.

![Screenshot of the game board.](assets/images/game-board.png)

- **Game Stats:** In the game stats section, users can monitor their progress and experience an added element of intentional stress and excitement. The timer, with it's ticking countdown, adds a thrilling sense of urgency, challenging users to memorise the picture tiles before they are hidden. The life counter keeps track of remaining lives, intensifying the challenge and enhancing the fun by letting users know how many mmore attempts they have left to correctly match the remaining pairs. This combination of time pressure and limited lives creates and engaging and dynamic gaming experience.

![Screenshot of the game stats.](assets/images/game-stats.png)

- **Interactive Gameplay:** Users can click on picture tiles to flip them and try to find matching pairs, accompanied by engaging audio feedback. When tiles are clicked, distinctive sounds enhance the gaming experience, providing audio cues for tiles flipping back when no match is found and a satisfying "ching" sound when correct image pairs are matched. This interactive gameplay encourages memory and concentration while immersing players in a multisensory gaming adventure.

![Screenshot of demonstrating interactive gameplay.](assets/images/interactive-gameplay.png)

- **Game Over and Winner Overlays:** In case of a win or a loss, the game provides clear feedback to users through the game over and winner overlays. These overlays offer either a congratulatory or encouraging message to encourage the user to keep playing, and provides the user a button with an option to play again and continue the fun.

![Screenshot of the game over overlay.](assets/images/game-over-overlay.png)

![Screenshot of the winner overlay.](assets/images/winner-overlay.png)

### Features to Implement

- **Changeable Grid Sizes:** Implement different grid sizes to provide users with varying levels of challenge, making the game accessible to players of all skill levels.

- **Difficulty Levels:** Introduce multiple difficulty levels, allowing players to choose the level that suits their gaming expertise. Each level could geature different time limits and life counts for an enhanced gaming experience.

- **Points System:** Create a points system to track player performance.
  
  - Players could earn points based on the number of lives remaining after successfully completing the game. For example, aware 10 points for each remaining life.
  
  - Rename the "Time Remaining" stat to "Time Elapsed" after the game starts and include a running clock that tracks the time throughout the game. This change would add an extra layer of challenge and excitement for players.
  
  - Implement a system that multiplies the points a player receives by a factor dependant on the time elapsed during their game. This approach would reward faster thinking and decision-making, encouraging players to complete the game as quickly as possible.

## Testing and Bug Fixes

During the development and testing of the Picture Match game, the following issues were identified and subsequently addressed:

### Fixed Bugs:

- **Same Tile Click Issue:** In some instances, clicking the same tile twice would still trigger a match. To resolve this, a check for whether a tile is already in the 'flippedTiles' array before considering it for a match has been added.

- **Incorrect Tile Click Behavior:** Correct tiles remained clickable and would flip back over if an unmatched tile was clicked, still retaining their green border. To address this, a new array specifically for correct pairs was implemented alongside additional checks withing the 'flipTile' function.

- **Tiles Flipping Before Game Start:** Tiles were sometimes flipping if clicked before the game officially began. Additionally, correct tiles retained the green border and locked in the tile-back image state after the game started. To fix this, a 'memoryPhase' condition was added to the 'flipTile' function to ensure tiles could only be interacted with when the game is in progress.

- **Sound Playback Issue:** There were instances where audio clips were not playing. This error was cause by the audio clips not being loaded until after the script in the HTML file. To rectify this issue, the audio clips were moved so that they appear before the script in the HTML file.

- **Winner Message Timing:** The winner message occasionally appeared before a player had actually won the game. This was caused due to confusion with the 'correctPairs' array as tiles are stored individually to the array rather than as paired matches. Due do this, the player only had to match half of the pairs to be greeted with the winner overlay. To address this, the 'checkForWin' function was modified accordingly.

- **Overlay Display Issue:** In some cases, overlay messsages did not completely cover the window, affecting the visual experience. This was resolved by changing the sizing units to '100vh' and '100vw' to ensure consistent overlay sizing.

### Validator Testing:

- **HTML:** No errors were returned when passing the HTML code through the official [W3C validator](https://validator.w3.org).

- **CSS:** No errors were returned when passing the CSS code through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/).

- **JavaScript:** No errors were returned when passing the JavaScript code through the official [Jshint validator](https://jshint.com). The following metrics were returned:

  - There are 19 functions in this file.
  - Function with the largest signature take 2 arguments, while the median is 0.
  - Largest function has 25 statements in it, while the median is 5.
  - The most complex function has a cyclomatic complexity value of 7 while the median is 2.

- **Accessibility:** The website has been run through lighthouse within devtools confirming that all accessibility guidelines are covered:
![Screenshot of lighthouse test results.](assets/images/lighthouse.png)

### Unfixed Bugs:

- **Mobile Device Scroll Bar:** The game utilizes '100vh' for height and '100vw' for width, but the emulator in Chrome developer tools does not appear to account for the address bar on a mobile device. As a result, the game is partially obstructed by the address bar and a scroll bar appears to the side.

- **Audio Lag on Mobile Devices:** There may be instances of audio lag on certain mobile devices, which is a known issue still under investigation.

Efforts are ongoing to further optimise and enhance the Picture Match game to deliver the best possible user esperience.

## Deployment

The webbsite has been deployed using GitHub pages. To do this the following procedure has been used:

1. Go to the settings tab in the GitHub repositary.

2. Navigated to 'Pages' from the menu, under 'Code and automation'.

3. Ensure that Master Branch is selected from the 'Deploy from a branch' dropdown menu underneath 'Source'.

4. The link to the webpage was provided upon selecting a source.

A link can be followed to the live website here: [Picture Match](https://eddy-bryan.github.io/picture-match/)

## Credits

Please refer to this section for credits and acknowledgments to the artists and sources that contributed images and audio files, enhancing the visual and auditory aspects of this project.

### Content

- **Icons:** The life heart icon was taken from [Font Awesome](https://fontawesome.com/?utm_source=v4_homepage&utm_medium=display&utm_campaign=fa5_released&utm_content=banner)
- **Font:** The font was taken from [Google Fonts](https://fonts.google.com)
- **Favicon:** The favicon was created on [favicon.io](https://favicon.io/favicon-converter/)

### Media

- **Pictures:** Pictures for the project were sourced from the following websites and their accompanying artists:
  - Picture tile images - [catalyststuff](https://www.freepik.com/author/catalyststuff) on [Freepik.com](https://www.freepik.com)
  - Card back image - [Rakib Khan](https://www.vecteezy.com/members/rakib205012/uploads) on [Vecteezy.com](https://www.vecteezy.com/)
  - Background image - [brgfx](https://www.freepik.com/author/brgfx) on [Freepik.com](https://www.freepik.com)

- **Game Sounds:** Audio files for the project were sourced from the following website and artists:
  - [Uppbeat](https://uppbeat.io/) - Artists:
    - betacut
    - Jushua Chivers
    - Soundroll
    - OM FX
    - Jam FX