import { ADD_PLAYERS, DELETE_PLAYER } from '../constants/newGameConstants'; 

let id = 0;
export const addPlayers = (userNames) => {
  return {
    type: ADD_PLAYERS,
    name: userNames,
    id: (id++).toString(),
  };
};

export const deletePlayer = (id) => {
  return {
    type: DELETE_PLAYER,
    // name: userName,
    id: id.toString(),
  };
};
