// Array of pictures for the gameboard
const pictures = [
    'burger.webp',
    'chilli.webp',
    'donut.webp',
    'eagle.webp',
    'elephant.webp',
    'fries.webp',
    'gorilla.webp',
    'hotdog.webp',
    'pizza.webp',
    'shark.webp',
    'sloth.webp',
    'spider.webp',
    'burger.webp',
    'chilli.webp',
    'donut.webp',
    'eagle.webp',
    'elephant.webp',
    'fries.webp',
    'gorilla.webp',
    'hotdog.webp',
    'pizza.webp',
    'shark.webp',
    'sloth.webp',
    'spider.webp',
];

const gameOverSound = document.getElementById('game-over');
const matchSound = document.getElementById('match');
const noMatchSound = document.getElementById('no-match');
const selectSound = document.getElementById('select');
const clockSound = document.getElementById('clock');
const winSound = document.getElementById('win');

let flippedTiles = [];

let correctPairs = [];

let tilesLocked = false;

let memoryPhase = true;

let coundownValue = 0;


checkViewportOrientation();

// Calls checkViewportOrientation() if the user changes their device orientation
window.addEventListener("orientationchange", checkViewportOrientation);

// Calls checkViewportOrientation() if the user resizes their device window
window.addEventListener("resize", checkViewportOrientation);


/**
 * Shuffles an array
 */
function shuffle(array) {
    console.log('Shuffling...');

    // Copys the array using slice() and shuffles it randomly
    // by generating a random number between -0.5 and 0.5
    return array.slice().sort(() => Math.random() - 0.5);
}


/**
 * Function to create the game board grid from the pictures array
 */
function createGameBoard(pictures) {
    const gameBoard = document.getElementById('game-board');
    const shuffledPictures = shuffle(pictures);
    const table = document.createElement('table');

    // Loop through each row of the table
    for (let row = 0; row < 4; row++) {
        const tableRow = document.createElement('tr');

        // Loop through each column of the table
        for (let col = 0; col < 6; col++) {

            // Find the position of the current picture in the grid
            const currentPicture = row * 6 + col;

            if (currentPicture < shuffledPictures.length) {
                const td = document.createElement('td');
                const img = document.createElement('img');
                img.src = 'assets/images/tile-back.webp';
                img.alt = 'Picture Tile';

                // Stores the current picture to each tile
                img.dataset.picture = shuffledPictures[currentPicture];

                // Flips the tile by calling the flipTile() function when clicked
                img.addEventListener('click', function () {
                    flipTile(this);
                });

                td.appendChild(img);
                tableRow.appendChild(td);
            }
        }

        table.appendChild(tableRow);
    }
    console.log('Creating game board...');

    gameBoard.appendChild(table);
}


/**
 * Starts the game by revealing all pictures for memorising until the countdown ends
 */
function startGame() {
    document.getElementById('game-start-overlay').style.display = 'none';

    // Reveal all pictures before the game begins
    revealAllPictures();

    //Start the countdown and display it in the span
    startCountdown(10, flipAllPicturesBack);
}


// Enables the game to start when the play button is clicked
document.getElementById('start-button').addEventListener('click', startGame);


/**
 * Used to initially reveal all pictures before the game begins
 */
function revealAllPictures() {
    const tiles = document.getElementById('game-board').getElementsByTagName('img');

    console.log('Revealing all pictures for memorisation...');

    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        tile.src = `assets/images/${tile.dataset.picture}`;
    }
}


/**
 * Used to flip all pictures back after revealing them
 */
function flipAllPicturesBack() {
    const tiles = document.getElementById('game-board').getElementsByTagName('img');

    console.log('Hiding pictures...');

    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        tile.src = 'assets/images/tile-back.webp';
    }
}


createGameBoard(pictures);

// Set players lives, number indicates number of lives
initialiseLives(10);


/**
 * Flips the tile to reveal its alternative image
 */
function flipTile(tile) {
    // Checks to see if the tiles are already revealed or locked (correct)
    if (tilesLocked || flippedTiles.includes(tile) || flippedTiles.length === 2 || tile.dataset.matched === 'true' || memoryPhase) {
        return;
    }

    console.log('Flipping tile...');

    const currentPicture = tile.dataset.picture;
    tile.src = `assets/images/${currentPicture}`;

    // Add the flipped tile to the array
    console.log('Adding tile to flippedTiles array...');
    flippedTiles.push(tile);

    // Plays the select sound when a tile is flipped
    selectSound.play();

    // Check if two tiles are flipped
    if (flippedTiles.length === 2) {
        console.log('Locking tiles...');

        // Lock the tiles to prevent clicking during the timeout
        tilesLocked = true;
        console.log('Tiles locked.');

        // Check for a match after a delay
        setTimeout(checkMatch, 1000);
    }
}


/**
 * Check if flipped tiles match
 */
function checkMatch() {
    const [tile1, tile2] = flippedTiles;
    const picture1 = tile1.dataset.picture;
    const picture2 = tile2.dataset.picture;

    console.log('Checking for match...');

    if (picture1 === picture2) {
        console.log('Match found.');

        // Plays match sound if tiles match
        matchSound.play();

        // If tiles match, adds green border around tiles
        tile1.style.border = '5px solid rgb(0, 170, 0)';
        tile2.style.border = '5px solid rgb(0, 170, 0)';

        // Set the matched attribute to true for correct tiles
        tile1.dataset.matched = 'true';
        tile2.dataset.matched = 'true';

        // Add correct tiles to the array
        console.log('Adding tiles to correctPairs array...');
        correctPairs.push(tile1, tile2);

        // Remove event listeners for matched tiles
        tile1.removeEventListener('click', flipTile);
        tile2.removeEventListener('click', flipTile);

        // Check for a win after a delay
        setTimeout(checkForWin, 500);
        console.log('Checking for win...');
    } else {
        console.log('No match found.');

        // Plays the no-match sound if the tiles don't match
        noMatchSound.play();

        // If no match, flip the tiles back
        tile1.src = 'assets/images/tile-back.webp';
        tile2.src = 'assets/images/tile-back.webp';
        deductLife();

        // After deducting a life, checks if the player is out of lives.
        checkGameOver();
    }

    // Clear the flipped tiles array
    flippedTiles = [];
    // Unlock the tiles
    tilesLocked = false;
}


/**
 * Creates an array that stores the players life hearts
 */
function createLivesArray(numLives) {
    const livesArray = [];

    console.log('Allocating player lives...');
    for (let i = 0; i < numLives; i++) {
        livesArray.push('<i class="fa-solid fa-heart"></i>');
    }
    return livesArray;
}


/**
 * Populates the lives-container with the livesArray
 */
function initialiseLives(numLives) {
    const livesContainer = document.getElementById('lives-container');
    const livesArray = createLivesArray(numLives);

    console.log('Populating lives display...');
    for (let i = 0; i < livesArray.length; i++) {
        const lifeSpan = document.createElement('span');
        lifeSpan.innerHTML = livesArray[i];
        livesContainer.appendChild(lifeSpan);
    }
}


/**
 * Removes a life from the player
 */
function deductLife() {
    const livesContainer = document.getElementById('lives-container');
    const lives = livesContainer.getElementsByTagName('span');

    console.log('Deducting life...');
    if (lives.length > 0) {
        lives[lives.length - 1].remove();
    }
}


/**
 * Function to start the countdown
 * @param {number} initialValue - The initial value of the countdown
 * @param {function} onCountdownEnd - The callback function to be executed when the countdown ends
 */
function startCountdown(initialValue, onCountdownEnd) {
    let countdownValue = initialValue;

    console.log('Starting countdown...');

    // Initial display of the countdown
    updateCountdown(countdownValue);

    // Plays the clock sound when the timer starts
    clockSound.play();

    // Updates the countdown every second
    const countdownInterval = setInterval(() => {
        countdownValue--;

        // Displays the countdown in the span
        updateCountdown(countdownValue);

        // Checks to see if the countdown has reached 0
        if (countdownValue === 0) {
            clearInterval(countdownInterval); // Stops the countdown
            // Executes the callback function when the countdown ends
            if (onCountdownEnd && typeof onCountdownEnd === 'function') {
                onCountdownEnd();
                console.log('Countdown ended.');
            }
            memoryPhase = false;
        }
    }, 1000);
}


/**
 * Function to update the countdown display
 */
function updateCountdown(value) {
    console.log('Updating countdown display...');
    document.getElementById('countdown').innerText = `${value}`;
}


/**
 * Checks if the player has run out of lives and displays game over message if
 * they have none left
 */
function checkGameOver() {
    const livesContainer = document.getElementById('lives-container');
    const lives = livesContainer.getElementsByTagName('span');

    console.log('Checking for game over...');

    if (lives.length === 0) {
        console.log('Game over');

        // Show the game over overlay
        const gameOverOverlay = document.getElementById('game-over-overlay');
        gameOverOverlay.style.display = 'flex';

        // Plays the game over sound
        gameOverSound.play();
    }
}


/**
 * Checks if the player has won the game and displays winner message if they have
 */
function checkForWin() {
    console.log('Checking for win...');

    // Check if all pairs are found
    if (correctPairs.length === pictures.length) {
        console.log('Winner!');

        // Show the winner overlay
        const winnerOverlay = document.getElementById('winner-overlay');
        winnerOverlay.style.display = 'flex';

        // Plays the win sound
        winSound.play();
    }
}


/**
 * Restarts the game
 */
function restartGame() {
    // Reset game variables
    console.log('Resetting game variables...');
    flippedTiles = [];
    correctPairs = [];
    tilesLocked = false;
    memoryPhase = true;

    // Reset lives
    console.log('Resetting player lives...');
    const livesContainer = document.getElementById('lives-container');
    livesContainer.innerHTML = ''; // Clear any remaining lives
    initialiseLives(10);

    // Reset the game board
    console.log('Resetting the game board...');
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear the existing game board
    createGameBoard(pictures);

    // Hide overlays
    console.log('Closing overlay...');
    document.getElementById('winner-overlay').style.display = 'none';
    document.getElementById('game-over-overlay').style.display = 'none';

    // Start the game again
    startGame();
}


const restartButtons = document.getElementsByClassName('restart-button');

// Enables the game to restart when the play again button is clicked
for (let i = 0; i < restartButtons.length; i++) {
    restartButtons[i].addEventListener('click', restartGame);
}


/**
 * Checks if the user is viewing the game in portrait and displays a message
 * advising to use landscape orientation
 */
function checkViewportOrientation() {
    const isPortrait = window.innerWidth < window.innerHeight;

    if (isPortrait) {
        alert("For the best experience, please use landscape orientation. The game may not display properly in portrait mode on tablets and smartphones.")
    }
}