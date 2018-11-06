// import fetch from 'isomorphic-fetch';
import { GET_ALL_COURSES } from '../constants/courseConstant';
/* eslint-disable */
export const getAllCourses = () => {
  return dispatch => fetch('https://frisbi-service.herokuapp.com/api/courses')
    .then(json => json.json())
    .then(data => dispatch(getAllCoursesSuccess(data)))
    .catch(error => console.log(error));
};

const getAllCoursesSuccess = (courses) => {
  return {
    type: GET_ALL_COURSES,
    payload: courses,
  };
};
