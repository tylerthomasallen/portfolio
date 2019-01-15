import React, { Component } from 'react';
import Resume from './resume';
import NavBar from './navbar';

class Index extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Resume />
            </div>
        )
    }
}

export default Index;