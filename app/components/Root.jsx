import React, { Component } from 'react';
//import { render } from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPhysicians, fetchPatients } from '../reducers';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import AllPhysicians from './AllPhysicians.jsx';
import SinglePhysician from './SinglePhysician.jsx';
import NewPhysicianForm from './NewPhysicianForm.jsx';
import AllPatients from './AllPatients.jsx';
import SinglePatient from './SinglePatient';


class Root extends Component {

  componentDidMount() {
    this.props.all();
  }

  render() {

    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/physicians" component={AllPhysicians} />
          <Route exact path="/patients" component={AllPatients} />
          <Route exact path="/physicians/addPhysician" component={NewPhysicianForm} />
          <Route exact path="/physicians/editPhysician" component={NewPhysicianForm} />
          <Route exact path="/physicians/:id" component={SinglePhysician} />
          <Route exact path="/patients/:id" component={SinglePatient} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  all: () => {
    dispatch(fetchPhysicians());
    dispatch(fetchPatients());
  }
})

export default connect(null, mapDispatchToProps)(Root)

