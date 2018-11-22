import { ADD_PLAYERS, DELETE_PLAYER, CLEAR_PLAYERS } from '../constants/newGameConstants';

const players = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      return [...state, { id: action.id, name: action.name }];
    case DELETE_PLAYER:
      return state.filter(usr => usr.id !== action.id);
    case CLEAR_PLAYERS:
      return [];
    default:
      return state;
  }
};
export default players;
