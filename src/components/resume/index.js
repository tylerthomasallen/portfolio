import React, { Component } from 'react';
import './styles.scss';

class Index extends Component {

    render() {
        return(
            <div className="parent">
                <h1>TYLER ALLEN</h1>
                <div className="contact-info">
                    <span>(831) 917-8179</span> 
                    <span>tylerthomasallen@gmail.com</span>
                    <a href="https://www.linkedin.com/in/tylertallen/">LinkedIn
                    </a>
                    <a href="https://github.com/tylerthomasallen">
                    Github
                    </a>
                </div>
            </div>

        )
    }
}

export default Index;