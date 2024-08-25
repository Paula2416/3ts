document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const statusDisplay = document.getElementById('status');
    const resetButton = document.getElementById('resetButton');
    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ['', '', '', '', '', '', '', '', ''];
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const winningMessage = () => `Player ${currentPlayer} has won!`;
    const drawMessage = () => `It's a draw!`;
    const currentPlayerTurn = () => `Player ${currentPlayer}'s turn`;
    function handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = Array.from(board.children).indexOf(clickedCell);

        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;
        checkResult();
    }

