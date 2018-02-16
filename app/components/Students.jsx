import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { fetchStudents } from '../reducers';

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
    store.dispatch(fetchStudents());
  }


  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let students = this.state.students;

    if (this.props.campusId){
      const campusId = this.props.campusId;
      students = students.filter(student => {
        return student.campusId === campusId
      })
    }


    return (
      <div>
        <h3>Our Students</h3>
        <button>
          ADD NEW
      </button>
        <div className="row">
          {
            students.map(student => (
              <div className="col-xs-4" key={student.id}>
                <NavLink className="thumbnail" to={`/students/${student.id}`}>
                  <div className="caption">
                    <h3>
                      <span>{student.name}</span>
                      </h3>
                      <span> GPA {student.gpa}</span>
                      <p>{student.email}</p>
                  </div>
                </NavLink>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
