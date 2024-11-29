import math
import random

class Player(): 
    def __init__(self,letter): 
        #  que jugador tiene o y x
        self.letter = letter
        
    # es la función de llevar a cabo el turno
    def get_move (self):
        pass


#JUGADOR ORDENADOR RANDOM
class RandomComputerPlayer (Player): 
    def __init__(self,letter): 
        super().__init__(letter)
        
    def get_move (self,game):
        square = random.choice(game.available_moves())        # game queda por hacerse
        return square


#JUGADOR HUMANO
class HumanPlayer (Player): 
    def __init__(self, letter):
        super().__init__(letter)
        pass

    def get_move (self,game):
        valid_square = False
        while not valid_square: 
            try: 
                square = int (input (f'{self.letter}/s turn. Input move [0,8]: '))
                if square not in game.available_moves(): 
                    raise ValueError
                else: 
                    valid_square = True
            except ValueError:
                print ('Invalid square. Choose an available moove') 
        return square
    
    
#JUGADOR ORDENADOR INTELIGENTE:
class GeniusComputerPlayer(Player): 
    def __init__(self,letter): 
        super().__init__(letter)

    def get_move(self,game):
        if game.num_empty_squares() == 9: 
            square = int (random.choice (game.available_moves))
        else: 
            square = int(self.minimax(game,self.letter)['position']) #position porque minimax devuelve un diccionario
        return square
    
    def minimax (self,state,player): 
        # state es el tablero en cada turno
        # el jugador a maximizar siempre es la letra del GeniousComputerPlayer
        max_player = self.letter
        # other player es el jugador que no es player (queremos que pierda)
        if player=='o':
            other_player='x'
        else: 
            other_player='o'
        
    # see if the previous move is the winner
    # this is our base case
    # we need to return the position and the score
    
        '''
        if state.current_winner == other_player: 
            if other_player == max_player: 
                score = (state.num_empty_squares+1)*1
            else: 
                score = (state.num_empty_squares+1)*(-1)
            return {'position': None, 'score' : score}
        '''
        
        # se comprobará si se ha llegado a un estado terminal cuando se llame a la propia función minimax dentro de minimax
        # ESTADO TERMINAL si gana el otro
        if state.current_winner == max_player: 
            score = (state.num_empty_squares()+1)*1     
            return {'position': None, 'score' : score}
        # ESTADO TERMINAL si ganamos nosotros     
        elif state.current_winner == other_player: 
            score = (state.num_empty_squares()+1)*(-1)   
            return {'position': None, 'score' : score}       
        #  ESTADO TERMINAL empate
        elif state.num_empty_squares()==0:
            score = 0
            return {'position': None, 'score' : score}


        # inicializando score: 
        if player == max_player: 
            best = {'position': None, 'score' : -math.inf}
        else: 
            best = {'position': None, 'score' : math.inf}
            

        for posible_move in state.available_moves(): 
            state.make_move(posible_move , player) 
            # en la función de la clase TikTakToe, los argumentos son (square, letter)
            # sim score es el diccionario que retorna la función minimax
            sim_score = self.minimax (state,other_player)   
           
            # se ejecuta hasta aquí hasta que la rama de la partida llega al fin
            sim_score['position']=posible_move
            
            #deshacer el movimiento: 
            state.board [posible_move]=' '
            state.current_winner=None

            # si gana nuestro jugador al final de la rama
            if player==max_player: 
                if sim_score['score']>best['score']: 
                    best=sim_score
            # si gana el otro jugador al final de la rama
            else: 
                if sim_score['score']<best['score']: 
                    best=sim_score   
  
        return best             
            
            
             
            
        
            

                
                
            
                   
        

        