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
    

    winner_I(square, letter){
        // ganar por horizontal
        const row_index = Math.floor(square / 3);
        let row = this.board.slice(row_index*3,(row_index+1)*3);
        for (let i=0; i < row.length; i++){
            if (row[i]!=letter){
                return false;
            }
        }
        return true;
    }

    winner_II(square, letter) {
        //ganar por vertical
        const col_index = square%3;
        let col = [];
        for (let i=0; i<3; i++){
            col.push(this.board[i*3+col_index]);
        }
        for (let i=0; i < col.length; i++){
            if (col[i]!=letter){
                return false;
            }
        }
        return true;
    }

    winner_III(square, letter) {
        //ganar por daigonal
        const diagonal1_spots = [0,4,8];
        const diagonal2_spots = [2,4,6];
        let diagonal1=[];
        let diagonal2=[];
        for (let i=0; i<3; i++){
            diagonal1.push(this.board[diagonal1_spots[i]]);
            diagonal2.push(this.board[diagonal2_spots[i]]);
        }
        console.log(diagonal1);
        console.log(diagonal2);

        let win1 = true;
        let win2 = true;
        for (let i=0; i<3; i++){
            if (diagonal1[i]!=letter){
                win1 = false;
                break;
            }
        }
        for (let i=0; i<3; i++){
            if (diagonal2[i]!=letter){
                win2 = false;
                break;
            }
        }
        if (win1==true || win2==true){
            return true;
        }
        return false;
    }

}

export default TicTacToe;