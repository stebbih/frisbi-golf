import { ADD_PLAYERS } from '../constants/newGameConstants';

export const addPlayers = userNames => ({
  type: ADD_PLAYERS,
  name: userNames,
});
