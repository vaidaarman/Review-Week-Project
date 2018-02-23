import axios from 'axios';

//ACTION TYPES
const GET_PHYSICIANS = 'GET_PHYSICIANS';
const DELETE_PHYSICIAN = 'DELETE_PHYSICIAN';
const ADD_PHYSICIAN = 'ADD_PHYSICIAN';
// const UPDATE_PHYSICIAN = 'UPDATE_PHYSICIAN';

//ACTION CREATORS
export const getPhysicians = (physicians) => {
  return {
    type: GET_PHYSICIANS,
    physicians
  };
};

export const deletePhysician = (physicianId) => {
  return {
    type: DELETE_PHYSICIAN,
    physicianId
  };
};

export const addPhysician = (physician) => {
  return {
    type: ADD_PHYSICIAN,
    physician
  };
};

//REDUCER
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_PHYSICIANS: return action.physicians;
    case DELETE_PHYSICIAN: return state.filter(physician => physician.id !== action.physicianId);
    case ADD_PHYSICIAN: return [...state, action.physician];
    default: return state;
  }
}

//THUNKS
export function fetchPhysicians() {
  return function thunk(dispatch) {
    return axios.get('/api/physicians')
      .then(res => res.data)
      .then(physicians => {
        dispatch(getPhysicians(physicians))
      })
      .catch(err => console.error('fetching physicians went wrong', err))
  }
}

export function removePhysician(id) {
  return function thunk(dispatch) {
    dispatch(deletePhysician(id))
    axios.delete(`/api/physicians/${id}`)
    .catch(err => console.error('deleting physician went wrong', err))
  }
}

export function postPhysician (physician) {
  return function thunk(dispatch) {
    return axios.post('/api/physicians', physician)
    .then(res => res.data)
    .then(newPhysician => {
      dispatch(addPhysician(newPhysician))
    })
    .catch(err => console.error('posting physician went wrong', err))
  }
}
