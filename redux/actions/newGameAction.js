import { ADD_PLAYERS, DELETE_PLAYER } from '../constants/newGameConstants'; 

export const addPlayers = (userNames) => {
  return {
    type: ADD_PLAYERS,
    name: userNames,
  };
};

export const deletePlayer = (userName) => {
  return {
    type: DELETE_PLAYER,
    name: userName,
  };
};
