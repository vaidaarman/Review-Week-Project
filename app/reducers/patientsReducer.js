import axios from 'axios';

//ACTION TYPES
const GET_PATIENTS = 'GET_PATIENTS';
const DELETE_PATIENT = 'DELETE_PATIENT';
// const ADD_PHYSICIAN = 'ADD_PHYSICIAN';
// const UPDATE_PHYSICIAN = 'UPDATE_PHYSICIAN';

//ACTION CREATORS
export const getPatients = (patients) => {
  return {
    type: GET_PATIENTS,
    patients
  };
};

export const deletePatient = (patientId) => {
  return {
    type: DELETE_PATIENT,
    patientId
  };
};

// export const addPhysian = (physician) => {
//   return {
//     type: ADD_PHYSICIAN,
//     physician
//   };
// };

//REDUCER
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_PATIENTS: return action.patients;
    case DELETE_PATIENT: return state.filter(patient => patient.id !== action.patientId);
    //case ADD_PHYSICIAN: return [...state, action.physician];
    default: return state;
  }
}

//THUNKS
export function fetchPatients() {
  return function thunk(dispatch) {
    return axios.get('/api/patients')
      .then(res => res.data)
      .then(patients => {
        dispatch(getPatients(patients))
      })
      .catch(err => console.error('fetching patients went wrong', err))
  }
}

export function removePatient(id) {
  return function thunk(dispatch) {
    dispatch(deletePatient(id))
    axios.delete(`/api/patients/${id}`)
      .catch(err => console.error('deleting patient went wrong', err))
  }
}

// export function fetchPhysician(id) {
//   return function thunk(dispatch) {
//     return axios.get(`/api/physician/${id}`)
//       .then(res => res.data)
//       .then(campus => {
//         dispatch(currentCampus(campus))
//       })
//   }
// }