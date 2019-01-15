import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div className="contact-info">
        <span>(831) 917-8179</span>
        <span>tylerthomasallen@gmail.com</span>

        <a href="https://www.linkedin.com/in/tylertallen/" className="link">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>

        <a href="https://github.com/tylerthomasallen" className="link">
          <ion-icon name="logo-github"></ion-icon>
        </a>

      </div>
    )
  }
}

export default Contact;