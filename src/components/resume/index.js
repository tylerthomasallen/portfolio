import React, { Component } from 'react';
import './styles.scss';
import Skills from '../skills';
import Projects from '../projects';
import Experience from '../experience';
import Education from '../education';
import Contact from '../contact';
import Download from '../download';

class Resume extends Component {

    render() {
        return(
            <div className="resume-container" id="resume">
                <h1>RESUME</h1>
                <div className="divide-line" />
                <Download />
                <h2>TYLER ALLEN</h2>

                <Contact />
                <Skills />
                <Projects />
                <Experience />
                <Education />
            </div>

        )
    }
}

export default Resume;