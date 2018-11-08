import { START_NEW_GAME, UPDATE_SCORE } from '../constants/currentGameConstant';

/*
 * Takes in the course length and a vector of player's names
 * and makes a currentGame object and saves to redux store.
 */
export const startNewGame = (courseLength, playerArr) => {
  let ID = 0;
  const playerNames = [];
  const players = [];
  playerArr.forEach((player) => {
    ID += 1;
    playerNames.push(player.name);
    players.push({ id: ID, name: player.name, score: undefined });
  });

  const game = [];
  for (let i = 1; i <= courseLength; i += 1) {
    game.push({
      basketNum: i,
      players,
    });
  }

  return {
    type: START_NEW_GAME,
    players: playerNames,
    game,
  };
};

// Updates a score in the current game.
export const updateScore = (basketNumber, playerID, score) => ({
  type: UPDATE_SCORE,
  basketNumber,
  playerID,
  score,
});
