import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function SinglePhysician(props) {

  const { physician, physicianPatients } = props;

  if (!physician) return null
  return (
    <div className="physician">
      <NavLink to={'/physicians/editPhysician'}>
        <button>
          EDIT
        </button>
      </NavLink>
      <div>
        <h3>{physician.name}</h3>
        <img src={physician.imageURL} className="img-thumbnail" width="20%" height="20%" />
        <p>{physician.description}</p>
      </div>
      {
        (!physicianPatients.length) ?
          <div>
            <h3>No Current Patients</h3>
          </div>
          :
          <div>
            <h3>Current Patients:</h3>
            <div className="row">
              {
                physicianPatients.map(patient => (
                  <div key={patient.id}>
                    <NavLink className="thumbnail" to={`/patients/${patient.id}`}>
                      <div className="caption" >
                        <h5>
                          <span>{patient.name} </span>
                        </h5>
                      </div>
                    </NavLink>
                  </div>
                ))
              }
            </div>
          </div>
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const physicianId = Number(ownProps.match.params.id);

  return {
    physician: state.physicians.find(physician => physician.id === physicianId),  // || {} does the same as 'if (!physician) return null' before return
    physicianPatients: state.patients.filter(patient => patient.physicianId === physicianId) || {}
  }
};

export default connect(mapStateToProps)(SinglePhysician);

