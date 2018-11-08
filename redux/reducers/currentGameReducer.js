import { START_NEW_GAME, UPDATE_SCORE } from '../constants/currentGameConstant';

const initialState = {
  players: [],
  game: [],
};

const currentGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_GAME:
      return { players: action.players, game: action.game };
    case UPDATE_SCORE:
      return {
        ...state,
        game: state.game.map((basket) => {
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
        }),
      };
    default:
      return state;
  }
};
export default currentGameReducer;
