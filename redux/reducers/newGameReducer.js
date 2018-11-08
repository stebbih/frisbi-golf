import { ADD_PLAYERS, DELETE_PLAYER } from '../constants/newGameConstants';

const players = (state = [], action) => {
  let idnumber;
  switch (action.type) {
    case ADD_PLAYERS:
      state.length === 0 ? idnumber = 0 : idnumber = parseInt(state[state.length - 1].id) + 1;
      return [...state, { id: idnumber.toString(), name: action.name }];
    case DELETE_PLAYER:
      let retVal = [];
      retVal = state.filter(usr => usr.name !== action.name);
      return retVal;
    default:
      return state;
  }
};


export default players;
