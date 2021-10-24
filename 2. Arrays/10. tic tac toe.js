function ticTacToe(moves) {
    let board = [[false, false, false],
                [false, false, false],
                [false, false, false]];
    
    let turn = 0;

    function winConditionCheck(arr) {        
        return arr.every((val) => val === 'X') || arr.every((val) => val === 'O');
    }

    function evaluateBoardIsFull() {
        for (let row of board) {
            if (row.includes(false)) {
                return false;
            }            
        }

        return true;
    }

    function evaluateBoardForWin(arrForEval) {
        for (let i of arrForEval) {
            if (winConditionCheck(i)) {
                return true;
            }
        }

        return false;
    }

    function tracksForEvalToArray() {
        let leftDiagonal = [board[0][0], board[1][1], board[2][2]];
        let rightDiagonal = [board[0][2], board[1][1], board[2][0]];
        let col1 = [board[0][0], board[1][0], board[2][0]];
        let col2 = [board[0][1], board[1][1], board[2][1]];
        let col3 = [board[0][2], board[1][2], board[2][2]];

        let tracksForEval = [leftDiagonal, rightDiagonal, col1, col2, col3];
        tracksForEval = tracksForEval.concat(board);

        return tracksForEval;
    }
    
    function moveProcessor() {
        for (let move of moves) {      

            if (evaluateBoardIsFull()) {
                console.log("The game ended! Nobody wins :(");
                break;
            }

            turn++;

            let x = move[0];
            let y = move[2];
            let position = board[x][y];

            if (position === false) {
                if (turn % 2 !== 0) {
                    board[x][y] = 'X';
                } else {
                    board[x][y] = 'O';
                }
            } else {
                turn--;
                console.log('This place is already taken. Please choose another!');
            }

            if (evaluateBoardForWin(tracksForEvalToArray())) {
                console.log(`Player ${board[x][y]} wins!`);
                break;
            }
        }
    }

    function printBoard() {
        let outputString = "";

        for (let row of board) {

            for (let place of row) {
                outputString = outputString.concat(place + '\t');
            }

            outputString = outputString.slice(0, -1);
            outputString = outputString.concat('\n');

        }

        outputString = outputString.slice(0, -1);

        console.log(outputString);
    }

    moveProcessor();
    printBoard();    
}

ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);

ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);
