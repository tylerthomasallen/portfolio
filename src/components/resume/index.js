import React, { Component } from 'react';
import './styles.scss';
import Skills from '../skills';
import Projects from '../projects';
import Experience from '../experience';
import Education from '../education';
import Contact from '../contact';

class Index extends Component {

    render() {
        return(
            <div className="resume-container" id="resume">
                <h1>TYLER ALLEN</h1>
                <Contact />

                <Skills />
                <Projects />
                <Experience />
                <Education />
            </div>

        )
    }
}

export default Index;