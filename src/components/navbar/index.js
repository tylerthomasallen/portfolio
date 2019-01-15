import React, { Component } from 'react';
import './styles.scss';

class NavBar extends Component {

  render() {
    return(
      <div className="navbar-container">

      <div className="navbar-left">
          <a href="#header">
          Tyler Allen
        </a>
      </div>

      <div className="navbar-right">
          <a href="#resume">Projects</a>
          <a href="#resume">Resume</a>
          <a href="https://www.google.com/">Recs</a>
          <a href="https://www.google.com/">Contact</a>
      </div>

      </div>
    )
  }
}

export default NavBar;