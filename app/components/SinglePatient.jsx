import React from 'react';
import { connect } from 'react-redux';

function SinglePhysician (props){

    const { patient} = props;

    if (!patient) return null
    return (
      <div className="physician">
          <h3>{patient.name}</h3>
          <p>{patient.email}</p>
          <p>{patient.dob}</p>
          <p>{patient.pastHistory}</p>
      </div>
    );
  }

const mapStateToProps = (state, ownProps) => {
  const patientId = Number(ownProps.match.params.id);

  return {
    patient: state.patients.find(patient => patient.id === patientId),  // || {} does the same as 'if (!physician) return null' before return
  }
};

export default connect(mapStateToProps)(SinglePhysician);
