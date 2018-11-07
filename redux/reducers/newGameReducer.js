import { ADD_PLAYERS } from '../constants/newGameConstants';

const players = (state = [], action) => {
  let idnumber;
  switch (action.type) {
    case ADD_PLAYERS:
      state.length === 0 ? idnumber = 0 : idnumber = parseInt(state[state.length - 1].id) + 1;
      return [...state, { id: idnumber.toString(), name: action.name }];
    default:
      return state;
  }
};

export default players;
