import React, { Component } from 'react';
import './styles.scss';
import Skills from '../skills';
import Projects from '../projects';

class Index extends Component {

    render() {
        return(
            <div className="parent">
                <h1>TYLER ALLEN</h1>
                <div className="contact-info">
                    <span>(831) 917-8179</span> 
                    <span>tylerthomasallen@gmail.com</span>
                
                    <a href="https://www.linkedin.com/in/tylertallen/" className="link"> 
                        <span>LinkedIn</span>
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    
                    <a href="https://github.com/tylerthomasallen" className="link">
                        <span>Github</span>
                        <ion-icon name="logo-github"></ion-icon>
                    </a>

                </div>

                <Skills />
                <Projects />
            </div>

        )
    }
}

export default Index;