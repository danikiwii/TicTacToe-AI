import { RandomComputerPlayer, HumanPlayer, GeniousComputerPlayer} from './players.js';
import TicTacToe from "./game.js";

let x_player = new GeniousComputerPlayer('x');
let o_player = new GeniousComputerPlayer('o');
let game = new TicTacToe();

play(game, x_player, o_player);



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
}