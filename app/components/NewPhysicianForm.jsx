import React from 'react';
import { connect } from 'react-redux';
import { postPhysician, createPhysician } from '../reducers/index';

function NewPhysicianForm(props) {

  const { handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Physician</label>
        <input
          // value={newPhysician}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="physicianName"
          placeholder="Enter name"
          required={true}
        />
        <input
          // value={newPhysician}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="specialty"
          placeholder="Enter specialty"
          required={true}
        />
        <textarea
          // value={newPhysician}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="description"
          placeholder="Enter description"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </form>
  )
}

// const mapStateToProps = state => {
//   return {
//     newPhysician: state.newPhysicianReducer
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(event) {
      dispatch(createPhysician(event.target.value));
    },
    handleSubmit(event) {
      event.preventDefault();
      let physician = {
        name: event.target.physicianName.value,
        specialty: event.target.specialty.value,
        description: event.target.description.value
      };
      dispatch(postPhysician(physician));
      event.target.specialty.value = '';
      event.target.physicianName.value = '';
      event.target.description.value = '';
    }
  };
};

export default connect(null, mapDispatchToProps)(NewPhysicianForm);
