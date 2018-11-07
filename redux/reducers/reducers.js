import { combineReducers } from 'redux';
import courses from './courseReducer';
import currentGame from './currentGameReducer';

export default combineReducers({
  courses,
  currentGame,
});
