import { RandomComputerPlayer, HumanPlayer, GeniousComputerPlayer} from './players.js';
import TicTacToe from "./game.js";
import {endGame, resetGame} from './gameController.js';

let x_player = new HumanPlayer('x');
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
}


let play_again = false;
async function start_game() { 
    do{
        play_again = false;
        await play(game, x_player, o_player);
        //alert('empate!');
        endGame();
        // devuelve true si se ha pulsado en jugar otra vez
        play_again = await resetGame(game);
        console.log(play_again);
    }
    while(play_again = true);
}

start_game();
