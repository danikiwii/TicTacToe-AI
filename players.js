class player {
    constructor(letter){
        this.letter = letter;
    }
}

export class RandomComputerPlayer extends player {
    get_move(button_list, available_moves){
        let random_index = Math.floor(Math.random() * available_moves.length);
        let position = available_moves[random_index];

        //imprime la letra en el tablero
        button_list[position].textContent=this.letter;
        //devuelve la posición elegida
        return position;
    }
}

export class HumanPlayer extends player {
    get_move(button_list, available_moves) {
        return new Promise(resolve => {
            // Recorre las posibles posiciones de los botones disponibles
            for (let i = 0; i < available_moves.length; i++) {
                button_list[available_moves[i]].addEventListener('click', (event) => {
                    button_list[available_moves[i]].textContent = this.letter;
    
                    resolve(available_moves[i]);
                });
            }
        });
    }
}

