class TikTakToe (): 
    def __init__(self):
        # el tablero es un array de espacios
        self.board = [' ' for _ in range (9)] 
        self.current_winner = None
      
    #imprimir el tablero por pantalla    
    def print_board(self): 
         for i in range (3): 
            # delimitamos el índice final e inicial de cada fila
            start_row = i*3
            end_row = (i+1)*3
            row = self.board[start_row : end_row] # [1,2,3][3,5,6][7,8,9]
            
            # imprimo las líneas verticales con los espacios del tablero
            formatted_row = '| '+ row[0] + ' | ' + row[1] + ' | ' + row[2] + ' | '
            print (formatted_row)
            
    # el método estáticono es independiente a los objetos. 
    # Digo que es un método etático porque el programa es más eficiente        
    @staticmethod
    # | 1 | 2 | 3 | etc...
    def print_board_nums(): 
        for i in range (3): 
            # delimitamos el índice final e inicial de cada fila
            row = [i*3 , i*3+1 , (i+1)*3-1]
           
            # imprimo las líneas verticales con los espacios del tablero
            formatted_row = f'| {row[0]} | {row[1]} | {row[2]} |'
            print (formatted_row)       
        
    def available_moves (self): 
        # return a list whith the the possible available moves
        moves = []
        for (i,spot) in enumerate(self.board): 
            if spot==' ': 
                moves.append (i)
            else: 
                pass
        return moves
    
    # función que nos dice si quedan casillas libres
    def empty_squares(self): 
        return ' ' in self.board   # devuelve true si hay algun espacio en el tablero
    
    #función que nos dice cuántas casillas libres hay
    def num_empty_squares (self): 
        return self.board.count (' ')
    
    # si el movimiento es válido, ejecutarlo. Si es falso...
    # también comprobamos si al hacer el movimiento se ha terminado la partida
    def make_move (self,square, letter): 
        if self.board[square]==' ':
            self.board[square]=letter
            if self.winner_I (square,letter) |self.winner_II (square,letter) |self.winner_III (square,letter) : 
                self.current_winner = letter
            return True
        return False
    
    
    
    def winner_I (self,square,letter): 
        row_ind = square//3
        row = self.board [row_ind*3 : (row_ind+1)*3]
        for spot in row: 
            if spot != letter: 
                return False 
        return True    
    
    def winner_II (self, square, letter): 
        colum_index = square % 3
        colum = [self.board[colum_index + 3 * i] for i in range(3)]

        for spot in colum: 
            if spot !=letter:   
                return False
        return True
    
    # NO OPTIMO
    def winner_III (self,square,letter): 
        if square % 2 == 0: 
            diagonal1 = [self.board [i] for i in [0,4,8]]
            diagonal2 = [self.board[i] for i in [2,4,6]]
            
            win1 = True
            win2 = True
            for spot in diagonal1: 
                if spot != letter: 
                    win1 =  False
                    break
            for spot in diagonal2: 
                if spot != letter:  
                    win2 = False
                    break
            if win1 or win2:
                return True                 
            
        return False
        
        
''' OPTIMO
    def winner_III(self, square, letter):
        if square % 2 == 0:
            diagonal1 = [self.board[i] for i in [0, 4, 8]]
            diagonal2 = [self.board[i] for i in [2, 4, 6]]
            
            if all(spot == letter for spot in diagonal1) or all(spot == letter for spot in diagonal2):
                return True
        return False   
'''





        
        
        
        
        



