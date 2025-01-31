import { SAVE_GAME } from '../constants/gameStorageConstants';

const gameStorageReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_GAME:
      return [{ ...action.payload, key: `${state.length}` }, ...state];
    default:
      return state;
  }
};
export default gameStorageReducer;
