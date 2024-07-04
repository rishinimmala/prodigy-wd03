let currentPlayer = 'X';
let grid = [['', '', ''], ['', '', ''], ['', '', '']];

function cellClicked(row, col) {
    if (grid[row][col] === '') {
        grid[row][col] = currentPlayer;
        document.getElementById('grid').children[row * 3 + col].innerText = currentPlayer;

        if (checkWinner(currentPlayer)) {
            alert(currentPlayer + " wins!");
        } else if (checkDraw()) {
            alert("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner(player) {
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] === player && grid[i][1] === player && grid[i][2] === player) {
            highlightWinnerCells(i, 0, i, 1, i, 2);
            return true;
        }
        if (grid[0][i] === player && grid[1][i] === player && grid[2][i] === player) {
            highlightWinnerCells(0, i, 1, i, 2, i);
            return true;
        }
    }
    if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
        highlightWinnerCells(0, 0, 1, 1, 2, 2);
        return true;
    }
    if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
        highlightWinnerCells(0, 2, 1, 1, 2, 0);
        return true;
    }
    return false;
}

function highlightWinnerCells(row1, col1, row2, col2, row3, col3) {
    document.getElementById('grid').children[row1 * 3 + col1].classList.add('winner-cell');
    document.getElementById('grid').children[row2 * 3 + col2].classList.add('winner-cell');
    document.getElementById('grid').children[row3 * 3 + col3].classList.add('winner-cell');
}

function checkDraw() {
    for (let row of grid) {
        for (let cell of row) {
            if (cell === '') return false;
        }
    }
    return true;
}

function resetGame() {
    grid = [['', '', ''], ['', '', ''], ['', '', '']];
    currentPlayer = 'X';
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
        cell.classList.remove('winner-cell');
    }
}