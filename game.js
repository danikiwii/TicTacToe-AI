class TicTacToe {
    constructor() {
        this.board = new Array(9).fill("");
    }

    create_board(){
        // crea el tablero y devuelve una lista con todos los botones
        const tablero = document.querySelector('.tablero');
        let button_list = [];

        for (let position = 0; position < 9; position++) {
            const button = document.createElement('button');
            button.textContent = ''; // Inicialmente vacío
            button_list.push(button);
    
            // Añadir el botón al tablero
            tablero.appendChild(button);
        }
        return button_list;
    }

    //revisado ok
    available_moves(){
        let moves = [];
        for (let i=0; i<this.board.length; i++) {
            if (this.board[i]=="") {
                moves.push(i);
            }
        }
        return moves;
    }

    empty_squares(){
        return this.board.includes("");
   
    }

    save_move(position, letter){
        // se guarda el movimiento en el la lista del tablero
        this.board[position] = letter;
    }
    
    delay(miliseconds) {
        return new Promise(resolve => setTimeout(resolve,miliseconds))
    }
}

export default TicTacToe;