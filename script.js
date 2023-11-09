document.addEventListener("DOMContentLoaded", () => {
    const cells = Array.from(document.querySelectorAll(".cell"));
    const resetButton = document.getElementById("resetButton");
    let currentPlayer = "X";

    const checkWinner = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]             
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
                alert(`Player ${currentPlayer} wins!`);
                return true;
            }
        }
        if (cells.every(cell => cell.innerText.trim() !== "")) {
            alert("It's a draw!");
            return true;
        }
        return false;
    };

    const resetGame = () => {
        for (const cell of cells) {
            cell.innerText = "";
        }
        currentPlayer = "X";
    };

    const cellClickHandler = (e) => {
        const cell = e.target;
        if (cell.innerText.trim() !== "" || checkWinner()) {
            return;
        }
        cell.innerText = currentPlayer;
        if (!checkWinner()) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    };

    cells.forEach(cell => cell.addEventListener("click", cellClickHandler));
    resetButton.addEventListener("click", resetGame);
});