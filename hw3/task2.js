// let board = [
//     [0, 0, 1],
//     [0, 1, 2],
//     [2, 1, 0]
// ];

let board = [
    [1, 2, 1],
    [2, 1, 2],
    [2, 1, 1]
];

// let board = [
//     [2, 2, 2],
//     [1, 1, 2],
//     [2, 1, 1]
// ];

// let board = [
//     [2, 2, 1],
//     [1, 1, 2],
//     [2, 1, 1]
// ];

console.log(checkSolve(board));

function checkSolve(board) {
    debugger;
    let filled = true;
    let winX = 0;
    let winO = 0;
    for (let i = 0; i < 3; i += 1) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) { // горизонтальное
            if (board[i][0] == 1) winX += 1;
            if (board[i][0] == 2) winO += 1;
        }
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) { // вертикальное
            if (board[0][i] == 1) winX += 1;
            if (board[0][i] == 2) winO += 1;
        }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) { // диагонали
        if (board[0][0] == 1) winX += 1;
        if (board[0][0] == 2) winO += 1;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
        if (board[0][2] == 1) winX += 1;
        if (board[0][2] == 2) winO += 1;
    }

    for (let i = 0; i < 3; i += 1) { // проверка на заполнение
        for (let j = 0; j < 3; j += 1) {
            if (board[i][j] == 0) {
                filled = false;
                break;
            }
        }
    }
    if (winX > winO) return 1;
    else if (winO > winX) return 2;
    else if (filled) return 0;
    else return -1;
}