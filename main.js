import { RandomComputerPlayer, HumanPlayer, GeniousComputerPlayer} from './players.js';
import TicTacToe from "./game.js";
import {endGame} from './gameController.js';

let x_player = new GeniousComputerPlayer('x');
let o_player = new GeniousComputerPlayer('o');
let game = new TicTacToe();



async function play(game, x_player, o_player){
    //se crea el tablero y se guarda la lista de botones
    let button_list = game.create_board();
    //empieza el jugador x
    let player = x_player;
    let letter = 'x';

    while (game.empty_squares() == true) {
        console.log (game.available_moves());
        // se espera a que el jugador elija con await
        // se printea su eleccion
        let position = await player.get_move(button_list, game);
        //el movimiento se guarda en la lista del tablero
        game.save_move(position, letter);



        if (game.winner != null){
            alert(`ha ganado el jugador ${letter}!`);
            return letter;

        }

        //cambio de turno
        if (letter=='x'){
            letter = 'o';
            player = o_player;
        }
        else{
            letter = 'x';
            player = x_player;
        }
    }   
    alert('empate!');
    endGame();
    //resetGame();
}


function resetGame() {
    // Ocultar el botón de Game Over cuando reiniciamos el juego
    const gameOverButton = document.getElementById('game-over-btn');
    gameOverButton.style.display = 'none'; // Ocultamos el botón

    console.log('Juego terminado, jugar de nuevo');
}


/*let play_again = false;
do{
    play_again = false;
    play(game, x_player, o_player);
    // reset_game() devuelve true si se ha pulsado el botón.
    play_again=resetGame();
    console.log ('');
}

while (play_again==true);
*/  
play(game, x_player, o_player);