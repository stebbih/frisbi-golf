import { GET_ALL_COURSES } from '../constants/courseConstant';

const courseReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_COURSES:
            return action.payload;
            break;
        default: return state;

    }
}

export default courseReducer;
