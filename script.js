	/*----- constants -----*/
    const MARKERS = {
        "1": "X",
        "-1": "O",
        "null": "",
    }

    const COLORS = {
        "1": "green",
        "-1": "blue",
        "null": "white",
    };

    const  WIN_COMBOS = {
        "first-row": [0, 1, 2],
        "mid-row": [3, 4, 5],
        "last-row": [6, 7, 8],
        "first-col": [0, 3, 6],
        "mid-col": [1, 4, 7],
        "last-col": [2, 5, 8],
        "forward-diag": [0, 4, 8],
        "backward-diag": [2, 4, 6]
    };


	/*----- state variables -----*/
    let board; // array that maps indeces from top-left to bottom-right square.
    let winner; // holds the player value if there's a winner or 'T' for a tie.
    let turn; // holds 1 or -1 depending on whose turn it is


	/*----- cached elements  -----*/
    const gameStatusEl = document.querySelector("h1");
    const resetGameButton = document.querySelector("button");
    const boardEls = document.querySelectorAll("#board > div");
    const boardEl = document.getElementById("board");


	/*----- event listeners -----*/
    resetGameButton.addEventListener("click", init);


	/*----- functions -----*/
    init();

    function init() {
        boardEl.addEventListener("click", handlePlayerMove);
        board = new Array(9).fill(null);
        turn = 1;
        winner = null;
        render();
    }

    function handlePlayerMove(event) {
        let i = parseInt(event.target.id);
        if (!board[i]) {
            board[i] = turn;
            winner = checkWinner();
            turn *= -1;
            render();
        }
    }

    function checkWinner() {
        for (winCombo in WIN_COMBOS) {
            cellValues = WIN_COMBOS[winCombo].map(idx => board[idx]);
            if (cellValues.every(value => value === turn)) {
                boardEl.removeEventListener("click", handlePlayerMove);
                return turn;
            }
        }
        if (!board.includes(null)) {
            boardEl.removeEventListener("click", handlePlayerMove);
            return "T";
        }
        return null;
    }

    function render() {
        renderBoard();
        renderMessage();
    }

    function renderBoard() {
        board.forEach((playerId, i) => {
            boardEls[i].innerText = MARKERS[playerId];
            boardEls[i].style.backgroundColor = COLORS[playerId];
        });
    }

    function renderMessage() {
        if (winner === "T") {
            gameStatusEl.innerText = "TIE GAME!";
        } else {
            let color = winner ? COLORS[winner] : COLORS[turn];
            let msg = `<span style="color:${color}">${color.toUpperCase()}`;
            gameStatusEl.innerHTML = winner ? `${msg}</span> Wins!` : `${msg}'s</span> Turn`;
        }
    }
