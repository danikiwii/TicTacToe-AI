import { GeniousComputerPlayer, HumanPlayer, RandomComputerPlayer } from "./players.js";

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


// reviasar
export function choose_player (letter) {
    let button_humano;
    let button_tonta;
    let button_lista;

    if (letter=='x'){
        button_humano = document.getElementById('humano_x');
        button_tonta = document.getElementById('tonta_x');
        button_lista = document.getElementById('lista_x');
    }
    else{
        button_humano = document.getElementById('humano_o');
        button_tonta = document.getElementById('tonta_o');
        button_lista = document.getElementById('lista_o');
    }

    return new Promise((resolve) => {
    
        button_humano.addEventListener('click',() =>{  
            resolve(new HumanPlayer(letter));
            
        });
        button_tonta.addEventListener('click',() =>{  
            resolve(new RandomComputerPlayer(letter));
            
        });
        button_lista.addEventListener('click',() =>{  
            resolve(new GeniousComputerPlayer(letter));
            
        });
    });

}

export function deploy_menu() {
    const menu_button = document.getElementById('BotonElegirJugador');
    const play_button = document.getElementById('BotonJugar');
    const menu = document.getElementById('selectPlayerTable');
    menu_button.addEventListener('click',()=>{
        menu.style.display = 'block';
        play_button.style.display = 'block';
        menu_button.style.displau = 'none';
    });
}


