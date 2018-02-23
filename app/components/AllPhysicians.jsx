import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePhysician } from '../reducers/index';
import NewPhysicianForm from './NewPhysicianForm.jsx';

function AllPhysicians(props) {

  const { physicians } = props;

  return (
    <div>
      <h3>Our Physicians</h3>
      <NavLink to={'/physicians/addPhysician'}>
        <button>
          ADD NEW
        </button>
      </NavLink>
      <div className="row">
        {
          physicians.map(physician => (
            <div className="col-xs-4" key={physician.id}>
              <button onClick={() => props.onDelete(physician.id)}>
                X
              </button>
              <NavLink className="thumbnail" to={`/physicians/${physician.id}`}>
                <div className="caption">
                  <h3>
                    <span>{physician.name}</span>
                  </h3>
                  <img src={physician.imageURL} className="img-thumbnail" width="20%" height="20%" />
                  <span>{physician.description} </span>
                </div>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({ physicians: state.physicians });

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => {
    dispatch(removePhysician(id))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllPhysicians));
