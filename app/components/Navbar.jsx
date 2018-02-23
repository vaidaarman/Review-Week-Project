import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="navbar navbar-default navbar-static-top">
      <button>
        <NavLink className="btn" to="/">HOME</NavLink>
        <NavLink className="btn" to="/physicians">PHYSICIANS</NavLink>
        <NavLink className="btn" to="/patients">PATIENTS</NavLink>
      </button>
    </div>
  )
}
