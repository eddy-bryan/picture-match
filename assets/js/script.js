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

let flippedTiles = [];

let tilesLocked = false;


/**
 * Shuffles an array
 */
function shuffle(array) {
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
                img.style.width = '150px';
                img.style.height = '150px';
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

    gameBoard.appendChild(table);

    // Reveal all pictures before the game begins
    revealAllPictures();

    // Timer before pictures are hidden
    setTimeout(() => {
        flipAllPicturesBack();
    }, 10000);

}


/**
 * Used to initially reveal all pictures before the game begins
 */
function revealAllPictures() {
    const tiles = document.getElementById('game-board').getElementsByTagName('img');
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
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        tile.src = 'assets/images/tile-back.webp';
    }
}


createGameBoard(pictures);

initialiseLives(5);


/**
 * Flips the tile to reveal its alternative image
 */
function flipTile(tile) {
    // Checks to see if the tiles are already revealed or locked (correct)
    if (tilesLocked || flippedTiles.includes(tile) || flippedTiles.length === 2) {
        return;
    }

    const currentPicture = tile.dataset.picture;
    tile.src = `assets/images/${currentPicture}`;

    // Add the flipped tile to the array
    flippedTiles.push(tile);

    // Check if two tiles are flipped
    if (flippedTiles.length === 2) {
        // Lock the tiles to prevent clicking during the timeout
        tilesLocked = true;

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

    if (picture1 === picture2) {
        // If match, remove click event listeners and keep tiles flipped
        tile1.removeEventListener('click', flipTile);
        tile2.removeEventListener('click', flipTile);
    } else {
        // If no match, flip the tiles back
        tile1.src = 'assets/images/tile-back.webp';
        tile2.src = 'assets/images/tile-back.webp';
        deductLife();
    }

    // Clear the flipped tiles array
    flippedTiles = [];
    // Unlock the tiles
    tilesLocked = false;
}


function createLivesArray(numLives) {
    const livesArray = [];
    for (let i = 0; i < numLives; i++) {
        livesArray.push('<i class="fa-solid fa-heart"></i>');
    }
    return livesArray;
}


function initialiseLives(numLives) {
    const livesContainer = document.getElementById('lives-container');
    const livesArray = createLivesArray(numLives);

    for (let i = 0; i < livesArray.length; i++) {
        const lifeSpan = document.createElement('span');
        lifeSpan.innerHTML = livesArray[i];
        livesContainer.appendChild(lifeSpan);
    }
}


function deductLife() {
    const livesContainer = document.getElementById('lives-container');
    const lives = livesContainer.getElementsByTagName('span');

    if (lives.length > 0) {
        lives[lives.length - 1].remove();
    }
}