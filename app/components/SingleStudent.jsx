import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { fetchStudent } from '../reducers';
import SingleCampus from './SingleCampus';

export default class SingleStudent extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    const studentId = this.props.match.params.id
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
    store.dispatch(fetchStudent(studentId));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const student = this.state.currentStudent;
    console.log(student.campusId)

    return (
      <div className="student">
        <div>
          <h3>
            <span>{student.name}</span>
          </h3>
          <span> GPA {student.gpa}</span>
          <p>{student.email}</p>
        </div>
      </div>
    )
  }
}
