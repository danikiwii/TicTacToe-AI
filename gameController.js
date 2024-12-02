export function endGame() {
    // Muestra el botón de Game Over
    const gameOverDiv = document.getElementById('endGame');
    gameOverDiv.style.display = 'block';  // Hacemos visible el botón
}

export function resetGame(game) {
    return new Promise((resolve) => {
        const game_over_button = document.getElementById('game-over-btn');
        const gameOverDiv = document.getElementById('endGame');
        const tablero = document.getElementById('tablero');
        game_over_button.addEventListener('click',() =>{

            // Ocultar el div de Game Over cuando reiniciamos el juego
            gameOverDiv.style.display = 'none';

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

export function print_winner(winner) {
    let texto =''
    if (winner==null){
        texto = 'empate!'
    }
    else {
        texto = `ha ganado el jugador ${winner}!`;    
    }
    document.getElementById('resultado').innerHTML = texto;
}


