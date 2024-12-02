class player {
    constructor(letter){
        this.letter = letter;
    }
    delay(miliseconds) {
        return new Promise(resolve => setTimeout(resolve,miliseconds))
    }
}

export class RandomComputerPlayer extends player {
    async get_move(button_list, game){
        await this.delay(300);
        let random_index = Math.floor(Math.random() * game.available_moves().length);
        let position = game.available_moves()[random_index];

        //imprime la letra en el tablero
        button_list[position].textContent=this.letter;
        //devuelve la posición elegida
        return position;
    }


}

export class HumanPlayer extends player {
    get_move(button_list, game) {
        return new Promise(resolve => {
            // Elimina listeners previos
            button_list.forEach(button => {
                const newButton = button.cloneNode(true);
                button.replaceWith(newButton); // Reemplaza por el clon
                button_list[button_list.indexOf(button)] = newButton; // Actualiza la lista
            });
            // Recorre movimientos disponibles y asigna eventos
            const availableMoves = game.available_moves();
            availableMoves.forEach(index => {
                button_list[index].addEventListener('click', () => {
                    button_list[index].textContent = this.letter;
                    resolve(index);
                });
            });
        });
    }
}


export class GeniousComputerPlayer extends player {
    async get_move(button_list, game){
        await this.delay(300);
        let position = 0;
        if (game.available_moves().length==9){
            let random_index = Math.floor(Math.random() * game.available_moves().length);
            position = game.available_moves()[random_index];    
        }
        else{
            position = this.minimax(game, this.letter)['spot'];
        }
        //imprime la letra en el tablero
        button_list[position].textContent=this.letter;
        //devuelve la posición elegida
        return position;
    }

    minimax (game, letter) {
        // this.letter y no letter, porque el jugador a maximizar es siempre el mismo, independientemente de con  que argumento se llame minimax
        const max_player = this.letter;
        let other_player = '';
        if (letter=='x'){
            other_player='o';
        }
        else{
            other_player='x';
        }

        // condiciones de final de partida
        // estos valores de retorno no son los finales, son intermedios
        if (game.winner == max_player){
            const score = (game.num_empty_squares()+1)*1;
            return {'spot':null,'score':score};
        }
        if (game.winner == other_player){
            const score = (game.num_empty_squares()+1)*(-1);
            return {'spot':null,'score':score};
        }
        if (game.num_empty_squares() == 0) {
            const score = 0;
            return {'spot':null,'score':score};
        }

        // incicializando best, lo que retornará minimax en últina instancia
        // esto se ejecuta hasta que minimax recorra toda la partida
        let best={'spot':null, 'score':null};
        if (letter==max_player){
            best['score']= -Infinity;
        }
        else{
            best['score']= Infinity;
        }

        // vamos recorriendo la partida
        game.available_moves().forEach (possible_move => {
            game.save_move(possible_move, letter);
            //sim_score es un diccionario
            let sim_score = this.minimax(game, other_player);

            sim_score['spot'] = possible_move;

            game.board[possible_move] = '';
            game.winner = null;

            if (letter==max_player) {
                if (sim_score['score'] > best['score']){
                    best = sim_score;
                }
            }
            else{
                if (sim_score['score'] < best['score']){
                    best = sim_score;
                }
            }


        })
        return best;


    }
}   


