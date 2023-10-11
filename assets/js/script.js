// Sample array of picture identifiers (replace with actual image URLs)
const pictures = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

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
                const img = document.createElement('span'); // document.createElement('img');
                img.textContent = pictures[currentPicture]; // TEMPORARILY DISPLAYING TEXT UNTIL IMAGES SOURCED
                // img.src = pictures[currentPicture];
                // img.alt = 'Picture Tile';
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