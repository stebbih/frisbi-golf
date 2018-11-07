import { combineReducers } from 'redux';
import courses from './courseReducer';
import addPlayers from './newGameReducer';

export default combineReducers({
  courses,
  addPlayers,
});
