import { ADD_PLAYERS, DELETE_PLAYER, CLEAR_PLAYERS } from '../constants/newGameConstants';

let idCounter = 0;
export const addPlayers = (userNames) => {
  idCounter += 1;
  return {
    type: ADD_PLAYERS,
    name: userNames,
    id: idCounter.toString(),
  };
};

export const deletePlayer = ID => ({
  type: DELETE_PLAYER,
  id: ID.toString(),
});

export const clearPlayers = () => ({
  type: CLEAR_PLAYERS,
});
