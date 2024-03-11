	/*----- constants -----*/
    const MARKERS = {
        "1": "X",
        "-1": "O",
        "null": "",
    }

    const COLORS = {
        "1": "black",
        "-1": "black",
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
    let board;
    let winner;
    let turn;


	/*----- cached elements  -----*/
    const gameStatusEl = document.querySelector("h1");
    const resetGameButton = document.querySelector("button");


	/*----- event listeners -----*/
    resetGameButton.addEventListener("click", init);
    document.getElementById("board").addEventListener("click", handleClick);

	/*----- functions -----*/
    function init() {
        console.log("RESET");
    }

    function handleClick(event) {
        console.log(event.target);
    }
