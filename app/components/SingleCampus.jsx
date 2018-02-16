import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { fetchCampus, fetchStudents } from '../reducers';
import Students from './Students';

export default class SingleCampus extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    const campusId = this.props.match.params.id
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
    store.dispatch(fetchCampus(campusId));
    store.dispatch(fetchStudents())
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const campus = this.state.currentCampus;
    const campusId = Number(this.props.match.params.id);


    return (
      <div className="campus">
        <div>
          <h3>{campus.name}</h3>
          <img src={campus.imageURL} className="img-thumbnail" width="50%" height="50%" />
          <p>{campus.description}</p>
        </div>
        <div>
          <ul className="media-list">
             <Students campusId={campusId} />
          </ul>
        </div>
      </div>
    )
  }
}