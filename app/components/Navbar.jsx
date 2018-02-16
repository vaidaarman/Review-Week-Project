import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  return (
    <div>
      <button>
        <NavLink className="btn" to="/home">HOME</NavLink>
      </button>
      <button>
        <NavLink className="btn" to="/campuses">CAMPUSES</NavLink>
      </button>
      <button>
        <NavLink className="btn" to="/students">STUDENTS</NavLink>
      </button>
    </div>
  )
}
