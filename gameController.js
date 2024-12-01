// Función para manejar el final del juego
export function endGame() {
    // Muestra el botón de Game Over
    const gameOverButton = document.getElementById('game-over-btn');
    gameOverButton.style.display = 'block';  // Hacemos visible el botón
}

// Función para reiniciar el juego

/*export function resetGame() {
        const button = document.getElementById('game-over-btn')
        button.addEventListener('click',() =>{
            // Ocultar el botón de Game Over cuando reiniciamos el juego
            const gameOverButton = document.getElementById('game-over-btn');
            gameOverButton.style.display = 'none'; // Ocultamos el botón

            console.log('jugar de nuevo')
            return true;
        });
}*/

export function resetGame() {
    return new Promise((resolve) => {
        const button = document.getElementById('game-over-btn')
        button.addEventListener('click',() =>{
            // Ocultar el botón de Game Over cuando reiniciamos el juego
            const gameOverButton = document.getElementById('game-over-btn');
            gameOverButton.style.display = 'none'; // Ocultamos el botón

            console.log('jugar de nuevo')
            resolve(true);
            
        });
    });
}


