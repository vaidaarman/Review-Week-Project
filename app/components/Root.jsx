import React, { Component } from 'react';
import {render} from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Campuses from './Campuses.jsx';
import Students from './Students.jsx';



export default class Root extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/students" component={Students} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

