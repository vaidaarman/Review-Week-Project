import { combineReducers } from 'redux';
import physicians from './physiciansReducer';
import patients from './patientsReducer';
import physician from './newPhysicianReducer';

export default combineReducers({
  physicians,
  patients,
  physician,
})

export * from './physiciansReducer';
export * from './patientsReducer';
export * from './newPhysicianReducer';
