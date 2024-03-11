	/*----- constants -----*/
    const MARKERS = {
        "1": "X",
        "-1": "O",
        "null": "",
    }


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
