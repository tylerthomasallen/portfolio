import React, { Component } from 'react';
import './styles.scss';
import resume from './resume.pdf';

class Download extends Component {
  render() {
    return(
      <a href={resume} download className="download-button">
        <ion-icon name="download"></ion-icon>
        <span>Download Resume</span>
      </a>
    )
  }
}

export default Download;