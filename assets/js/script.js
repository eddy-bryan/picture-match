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
 * Function to create the game board grid from the pictures array
 */
function createGameBoard(pictures) {
    const table = document.createElement('table');

    // Loop through each row of the table
    for (let row = 0; row < 4; row++) {
        const tableRow = document.createElement('tr');

        // Loop through each column of the table
        for (let col = 0; col < 6; col++) {

            // Find the position of the current picture in the grid
            const currentPicture = row * 6 + col;

            if (currentPicture < pictures.length) {
                const td = document.createElement('td');
                const img = document.createElement('img');
                img.style.width = '150px';
                img.style.height = '150px';
                img.src = 'assets/images/' + pictures[currentPicture];
                img.alt = 'Picture Tile';
                td.appendChild(img);
                tableRow.appendChild(td);
            }
        }

        table.appendChild(tableRow);
    }

    return table;
}

const gameArea = document.getElementById('game-area');
const gameBoard = createGameBoard(pictures);
gameArea.appendChild(gameBoard);