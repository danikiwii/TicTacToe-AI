export function endGame() {
    // Muestra el botón de Game Over
    const gameOverButton = document.getElementById('game-over-btn');
    gameOverButton.style.display = 'block';  // Hacemos visible el botón
}

export function resetGame(game) {
    return new Promise((resolve) => {
        const game_over_button = document.getElementById('game-over-btn');
        const tablero = document.getElementById('tablero');
        game_over_button.addEventListener('click',() =>{

            // Ocultar el botón de Game Over cuando reiniciamos el juego
            game_over_button.style.display = 'none';

            // resetear variables
            game.board = new Array(9).fill("");
            game.winner = null;

            // eliminar el tablero
            tablero.innerHTML = "";

            // retorna true cuando se pulse en salir
            resolve(true);
            
        });
    });
}


