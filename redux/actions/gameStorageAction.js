import { SAVE_GAME } from '../constants/gameStorageConstants';

let id = 0;
export const saveGame = (results, date) => {
  id += 1;
  return {
    type: SAVE_GAME,
    payload: {
      ...results,
      date,
      key: id.toString(),
    },
  };
};
