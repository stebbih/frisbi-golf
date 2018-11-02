import { GET_ALL_COURSES } from '../constants/courseConstant';
import fetch from 'isomorphic-fetch';

export const getAllCourses = () => {
    return dispatch => ('http://localhost:3000/api/courses').then(json => json.json()).then(data => dispatch(getAllCoursesSuccess(data)))
};

const getAllCoursesSuccess = (courses) => {
    return {
        type: GET_ALL_COURSES,
        payload: courses
    };
};
