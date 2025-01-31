import { combineReducers } from 'redux';
import courses from './courseReducer';
import addPlayers from './newGameReducer';
import currentGame from './currentGameReducer';
import gameStorage from './gameStorageReducer';

export default combineReducers({
  courses,
  addPlayers,
  currentGame,
  gameStorage,
});
