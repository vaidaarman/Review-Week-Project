import React, { Component } from 'react';
import {render} from 'react-dom';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Campuses from './Campuses.jsx';
import Students from './Students.jsx';
import SingleCampus from './SingleCampus.jsx';
import SingleStudent from './SingleStudent.jsx';



export default class Root extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/campuses/:id" component={SingleCampus} />
          <Route exact path="/students/:id" component={SingleStudent} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

