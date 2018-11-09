import { START_NEW_GAME, UPDATE_SCORE, SET_WINNER } from '../constants/currentGameConstant';

const initialState = {
  players: [],
  game: [],
  course: undefined,
  results: undefined,
};

// Calculates result table
function updateResults(state) {
  const table = []; // Table holding scores
  const sums = []; // Total scores
  for (let i = 0; i < state.players.length; i += 1) {
    sums.push(0);
  }

  let gameFinished = true;
  // Go through each basket's scores
  state.game.forEach((basket) => {
    // Construct a row
    const tableRow = [basket.basketNum];
    basket.players.forEach((player) => {
      tableRow.push(player.score);
      if (player.score !== undefined) {
        sums[player.id - 1] += parseInt(player.score, 10);
      } else {
        gameFinished = false;
      }
    });
    table.push(tableRow);
  });

  // Find winner if game is finished
  let winner;
  if (gameFinished) {
    let winnerIndex = 0;
    for (let i = 0; i < state.players.length; i += 1) {
      if (sums[i] < sums[winnerIndex]) {
        winnerIndex = i;
      }
    }
    winner = state.players[winnerIndex];
  }

  return {
    players: state.players,
    location: state.course,
    table,
    sums,
    winner,
  };
}

// Updates a score for one player, then recalulates result table.
function updateScore(state, action) {
  const tempState = {
    ...state,
    game: state.game.map((basket) => {
      if (basket.basketNum === action.basketNumber) {
        const newPlayers = basket.players.map((p) => {
          if (p.id === action.playerID) {
            const newP = { ...p, score: action.score };
            return newP;
          }
          return p;
        });
        return { ...basket, players: newPlayers };
      }
      return basket;
    }),
  };

  const results = updateResults(tempState);
  return { ...tempState, results };
}

// Starts a new game. Adds the new players and calculates result table.
function startNewGame(action) {
  const tempState = {
    players: action.players,
    game: action.game,
    course: action.course,
    results: undefined,
  };
  const results = updateResults(tempState);
  return { ...tempState, results };
}

const currentGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_GAME:
      return startNewGame(action);
    case UPDATE_SCORE:
      return updateScore(state, action);
    case SET_WINNER:
      return { ...state, winner: action.playerName };
    default:
      return state;
  }
};
export default currentGameReducer;
