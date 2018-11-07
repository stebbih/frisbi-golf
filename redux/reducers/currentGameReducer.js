import { START_NEW_GAME, UPDATE_ONE_SCORE } from '../constants/currentGameConstant';

const currentGameReducer = (state = [], action) => {
  switch (action.type) {
    case START_NEW_GAME:
      return action.game;
    case UPDATE_ONE_SCORE:
    default:
      return state;
  }
};
export default currentGameReducer;
