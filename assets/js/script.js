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
}

createGameBoard(pictures);


/**
 * Flips the tile to reveal its alternative image
 */
function flipTile(tile) {
    const currentPicture = tile.dataset.picture;
    tile.src = tile.src.includes('tile-back.webp') ? `assets/images/${currentPicture}` : 'assets/images/tile-back.webp';
}