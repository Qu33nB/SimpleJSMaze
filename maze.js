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
let playerRow = 9;
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
        cell.id = 'finish';
        cell.classList.add('finish');
        cell.innerHTML = '';
    } else {
        cell.classList.add('floor');
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
console.log(player.style.left)
    if (event.keyCode === 40) {
        if (mapArray[playerRow + 1][playerColumn] !== 'W') {
            player.style.top = (playerTop += 35) + "px";
            playerRow += 1;
        }
    } else if (event.keyCode === 38) {
        if (mapArray[playerRow - 1][playerColumn] !== 'W') {
            player.style.top = (playerTop -= 35) + "px";
            playerRow -= 1;
        }
    } else if (event.keyCode === 39) {
        if (mapArray[playerRow][playerColumn + 1] !== 'W') {
            player.style.left = (playerLeft += 30) + "px";
            playerColumn += 1;
        }
    } else if (event.keyCode === 37) {
        if (mapArray[playerRow][playerColumn - 1] !== 'W') {
            if (player.style.left > `0px`) { 
            player.style.left = (playerLeft -= 30) + "px";
            playerColumn -= 1;
        }
        }
    }
    checkForWin()
}

function checkForWin() {
    if (player.style.left === `600px`) {
        document.removeEventListener('keydown', movePlayer); 
        let overlay = document.createElement('span');
        overlay.classList.add('overlay');
        overlay.innerHTML = `Congratulations, you win!`
        document.body.appendChild(overlay);
    }
}

// Don't allow the player to move into a wall or outside the boundary of the maze.
// When the player moves onto the finish square, show the user that they have won (don't use console.log or alert for this).