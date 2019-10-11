const mapArray = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWW W WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let maze = document.getElementById('maze');
// let start = document.getElementsByClassName('start');
let row, rows, cell, cells, player;
let playerClass = document.getElementsByClassName('player');
let playerTop = 0;
let playerLeft = 0;
let playerRow = 10;
let playerColumn = 0;

document.addEventListener('keydown', movePlayer);

function createGameboard() {
    for (rows of mapArray) {
        row = document.createElement('div');
        row.classList.add('row');
        maze.appendChild(row);
        for (cells of rows.split('')) {
            cell = document.createElement('div');
            cell.classList.add('cell')
            cell.innerHTML = cells;
            row.appendChild(cell)
            console.log(cell)
            defineCells()
        }
    }
}
createGameboard();

function defineCells() {
    if (cell.innerHTML === 'W') {
        cell.classList.add('wall');
        cell.innerHTML = '';
    } else if (cell.innerHTML === 'S') {
        cell.id = 'start';
        cell.classList.add('start');
        cell.innerHTML = '';
    } else if (cell.innerHTML === 'F') {
        cell.classList.add('finish')
        cell.innerHTML = '';
    } else {
        cell.classList.add('floor')
    }
}

function addPlayer() {
    player = document.createElement('img');
    player.classList.add('player');
    player.src = 'images/Honeybee.gif';
    player.id = 'player';
    document.getElementById('start').appendChild(player);
}
addPlayer();

function movePlayer(event) {

    if (event.keyCode === 40) {
        if (mapArray[playerRow + 1][playerColumn] === 'W') {
            player.style.top = (playerTop += 35) + "px";
            playerRow += 1;
        }
    } else if (event.keyCode === 38) {
        if (mapArray[playerRow - 1][playerColumn] === 'W') {
            player.style.top = (playerTop -= 35) + "px";
            playerRow -= 1;
        }
    } else if (event.keyCode === 39) {
        if (mapArray[playerRow][playerColumn + 1] === 'W') {
            player.style.left = (playerLeft += 34) + "px";
            playerColumn += 1;
        }
    } else if (event.keyCode === 37) {
        if (mapArray[playerRow][playerColumn - 1] === 'W') {
            player.style.left = (playerLeft -= 34) + "px";
            playerColumn -= 1;
        }
    }
}





// Either A) use an absolutely-positioned DIV to represent the player's current position in the maze, or B) have your player DIV appended to a cell DIV for the same reason.
// You need to keep track of (or retrieve on demand) the player's current position in the maze (row index and column index). You could do this one of several ways. You could keep a persistent record of the player's position in, say, a global array or object whose sole job is keeping track of the player's current position. You could constantly update your map array to reflect your player's movement (move the "S" around). You could keep your indexes in data attributes in your HTML and access them through player DIV's "parentElement" property (in the case of 3B). Or you could do a little math on the player DIV's current position on the screen, relative to the start element's current position on the screen and the size of your cells (in the case of 3A).
// Movement can be performed a couple different ways: In the case of 3A, change the absolute position of the player DIV. Or, in the case of 3B, append the player DIV to the next cell DIV. (You could use "document.querySelector()", and the CSS selector for attributes to get the next cell element by the indexes you set on it via data attributes.)

// Requirements

// The player must start on the start square.
// Set up an event handler(s) to move your player DIV around the same way you did for the previous assessment on keyboard events.
// Don't allow the player to move into a wall or outside the boundary of the maze.
// When the player moves onto the finish square, show the user that they have won (don't use console.log or alert for this).