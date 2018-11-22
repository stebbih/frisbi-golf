// import fetch from 'isomorphic-fetch';
import { GET_ALL_COURSES } from '../constants/courseConstant';

const getAllCoursesSuccess = courses => ({
  type: GET_ALL_COURSES,
  payload: courses,
});

export const getAllCourses = () => dispatch => fetch('https://frisbi-service.herokuapp.com/api/courses')
  .then(json => json.json())
  .then(data => dispatch(getAllCoursesSuccess(data)));
