//ACTION TYPES
const CREATE_PHYSICIAN = 'CREATE_PHYSICIAN';

//ACTION CREATORS
export const createPhysician = (physicianName) => {
  return {
    type: CREATE_PHYSICIAN,
    physicianName
  };
};

//REDUCER
export default function reducer(state = '', action) {

  switch (action.type) {

    case CREATE_PHYSICIAN: return action.physicianName;

    default: return state;
  }
}
