import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';

export default class NewCampus extends Component{
  constructor(){
    super();
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
   
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
}