import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePatient } from '../reducers/index';

function AllPatients(props) {

  const { patients } = props;

  return (
    <div>
      <h3>Our Patients</h3>
      <button>
        ADD NEW
      </button>
      <div className="row">
        {
          patients.map(patient => (
            <div className="col-xs-4" key={patient.id}>
              <button onClick={() => props.onDelete(patient.id)}>
                X
            </button>
              <NavLink className="thumbnail" to={`/patients/${patient.id}`}>
                <div className="caption">
                  <h3>
                    <span>{patient.name}</span>
                  </h3>
                  <span> DOB {patient.dob}</span>
                  <p>{patient.email}</p>
                  <span> History:  {patient.pastHistory}</span>
                </div>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ patients: state.patients });

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => {
    dispatch(removePatient(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AllPatients);
