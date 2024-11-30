import { RandomComputerPlayer, HumanPlayer } from './players.js';
import TicTacToe from "./game.js";

let x_player = new RandomComputerPlayer('x');
let o_player = new RandomComputerPlayer('o');
let game = new TicTacToe();

play(game, x_player, o_player);



async function play(game, x_player, o_player){
    //se crea el tablero y se guarda la lista de botones
    let button_list = game.create_board();
    //empieza el jugador x
    let player = x_player;
    let letter = 'x';

    while (game.empty_squares() == true) {
        // espera medio segundo
        await game.delay(500);
        console.log(game.available_moves());

        // se espera a que el jugador elija con await
        // se printea su eleccion
        let position = await player.get_move(button_list, game.available_moves());
        //el movimiento se guarda en la lista del tablero
        game.save_move(position, letter);

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
    console.log(game.available_moves());
    

}