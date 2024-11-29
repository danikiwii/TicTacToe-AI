from game import TikTakToe
from player import HumanPlayer , RandomComputerPlayer, GeniusComputerPlayer
import time

def play(game,x_player,o_player,print_game = True): 
      
    if print_game: 
        game.print_board_nums()  
        
    # starting letter    
    letter = 'x'    
    while game.empty_squares():
        
        #los jugadores eligen la casilla
        if letter=='o': 
            square = o_player.get_move(game)
        else: 
            square = x_player.get_move(game)
            
        # se ejecuta si la jugada es válida
        # printea el movimiento
        if game.make_move(square,letter):
            if print_game: 
                print (f'player {letter} makes a move to square {square}')
                game.print_board()
                print ('')
                
            #se comprueba si ha ganad alguien: 
            if game.current_winner: 
                
                print (f'{letter} player wins')
                return letter
                
            # una vez realizado el movimiento hay que cabiar turnos
            if letter == 'o': 
                letter = 'x'
            else: 
                letter='o'
    
            time.sleep(0.8)
        
    if print_game:    
        print ('its a tie')    
            
   
game = TikTakToe()
x_player = HumanPlayer('x')
o_player = GeniusComputerPlayer('o')


play (game , x_player , o_player , print_game=True)   