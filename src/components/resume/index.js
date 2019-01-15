import React, { Component } from 'react';
import './styles.scss';
import Skills from '../skills';
import Projects from '../projects';
import Experience from '../experience';
import Education from '../education';

class Index extends Component {

    render() {
        return(
            <div className="resume-">
                <h1>TYLER ALLEN</h1>
                <div className="contact-info">
                    <span>(831) 917-8179</span> 
                    <span>tylerthomasallen@gmail.com</span>
                
                    <a href="https://www.linkedin.com/in/tylertallen/" className="link">
                        LinkedIn
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    
                    <a href="https://github.com/tylerthomasallen" className="link">
                        Github
                        <ion-icon name="logo-github"></ion-icon>
                    </a>

                </div>

                <Skills />
                <Projects />
                <Experience />
                <Education />
            </div>

        )
    }
}

export default Index;