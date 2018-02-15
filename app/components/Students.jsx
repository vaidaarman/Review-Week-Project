import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import {fetchStudent} from '../reducers';

export default class Students extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsuscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
    store.dispatch(fetchStudent());
  }


  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    
    const students = this.state.students;
    
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
                <a className="thumbnail" href="#" onClick={'somth'}>
                  <div className="caption">
                    <h3>
                      <span>{student.name}</span>
                    </h3>
                    <span> GPA {student.gpa}</span>
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
