import { START_NEW_GAME, UPDATE_SCORE } from '../constants/currentGameConstant';
/*
      return state.map(
        item => (item.id === action.id ? { ...item, completed: !item.completed } : item),
      );
*/

const currentGameReducer = (currentGame = [], action) => {
  switch (action.type) {
    case START_NEW_GAME:
      return action.game;
    case UPDATE_SCORE:
      return currentGame.map((basket) => {
        if (basket.basketNum === action.basketNumber) {
          const newPlayers = basket.players.map((p) => {
            if (p.id === action.playerID) {
              const newP = { ...p, score: action.score };
              return newP;
            }
            return p;
          });
          return { ...basket, players: newPlayers };
        }
        return basket;
      });
    default:
      return currentGame;
  }
};
export default currentGameReducer;
