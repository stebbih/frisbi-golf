import { ADD_PLAYERS } from '../constants/newGameConstants'; 


export const addPlayers = (userNames) => {
  console.log(userNames);
  return {
    type: ADD_PLAYERS,
    name: userNames,
  };
};
