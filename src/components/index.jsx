import React, { Component } from 'react';
import Resume from './resume';
import NavBar from './navbar';
import Header from './header';

class Index extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <Resume />
            </div>
        )
    }
}

export default Index;