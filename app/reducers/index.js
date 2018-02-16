/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger';

//INITIAL STATE
const initialState = {
  campuses: [],
  students: [],
  currentCampus: {},
  currentStudent: {}
}

//ACTION TYPES
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';
export const CURRENT_CAMPUS = 'CURRENT_CAMPUS';

export const GET_STUDENTS = 'GET_STUDENTS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const CURRENT_STUDENT = 'CURRENT_STUDENT';

//ACTION CREATORS
export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  };
};

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  };
};

export const currentCampus = (campus) => {
  return {
    type: CURRENT_CAMPUS,
    campus
  };
};

export const currentStudent = (student) => {
  return {
    type: CURRENT_STUDENT,
    student
  };
};

export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus
  };
};

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student
  };
};

//REDUCER
const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUSES: return Object.assign({}, state, {campuses: action.campuses});
    case GET_STUDENTS: return Object.assign({}, state, {students: action.students });
    case CURRENT_CAMPUS: return Object.assign({}, state, {currentCampus: action.campus});
    case ADD_CAMPUS: return Object.assign({}, state, {campuses: [...state.campuses, action.campus] });
    case ADD_STUDENT: return Object.assign({}, state, {students: [...state.students, action.student] });
    case CURRENT_STUDENT: return Object.assign({}, state, {currentStudent: action.student});
    default: return state
  }
};

//THUNKS
export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses))
      })
  }
}

export function fetchStudents(){
  return function thunk(dispatch) {
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      dispatch(getStudents(students))
    })
  }
}

export function fetchCampus(id) {
  return function thunk(dispatch) {
    return axios.get(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(campus => {
        dispatch(currentCampus(campus))
      })
  }
}

export function fetchStudent(studentId) {
  return function thunk(dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        dispatch(currentStudent(student))
      })
  }
}

export default rootReducer
