import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { fetchCampuses } from '../reducers'

export default class Campuses extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
    store.dispatch(fetchCampuses());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    const campuses = this.state.campuses

    return (
      <div>
        <h3>Our Campuses</h3>
        <button>
          ADD NEW
        </button>
        <div className="row">
          {
            campuses.map(campus => (
              <div className="col-xs-4" key={campus.id}>
                <NavLink className="thumbnail" to={`/campuses/${campus.id}`}>
                  <img src={campus.imageUrl} />

                  <div className="caption">
                    <h3>
                      <span>{campus.name}</span>
                    </h3>
                    <img src={campus.imageURL} />
                    <span>{campus.description}</span>
                  </div>
                </NavLink>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
