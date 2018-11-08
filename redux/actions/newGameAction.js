import { ADD_PLAYERS, DELETE_PLAYER } from '../constants/newGameConstants';

let id = 0;
export const addPlayers = userNames => ({
  type: ADD_PLAYERS,
  name: userNames,
  id: (id++).toString(),
});

export const deletePlayer = ID => ({
  type: DELETE_PLAYER,
  // name: userName,
  id: ID.toString(),
});
