import { combineReducers } from 'redux';
import courses from './courseReducer';
import addPlayers from './newGameReducer';
import deletePlayer from './newGameReducer';
import currentGame from './currentGameReducer';

export default combineReducers({
  courses,
  addPlayers,
  deletePlayer,
  currentGame,
});
