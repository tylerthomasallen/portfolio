import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return(
            <div className="resume-section">
                <h1>Projects</h1>

                <div>
                    <div className="project-title">
                        <h3>Woof</h3>
                        <div className="project-title-sites">
                            <a href="https://w00f.herokuapp.com/#/" className="link">
                            Live Site
                            </a>

                            <a href="https://github.com/tylerthomasallen/woof" className="link">
                            Github
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li>Mobile-responsive Yelp-inspired web app with the full CRUD lifecycle, user auth, and search functionality.</li>
                        <li>STACK: Ruby on Rails, ActiveRecord, React, Redux, PostgreSQL, AWS, Heroku, HTML5, SCSS, Git</li>
                    </ul>
                </div>

                <div>
                    <div className="project-title">
                        <h3>Kraving</h3>
                        <div className="project-title-sites">
                            <a href="https://kraving.herokuapp.com/#/" className="link">
                                Live Site
                            </a>

                            <a href="https://github.com/Tianyou-Song/kraving" className="link">
                                Github
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li>Mobile-responsive reviews web app powered by API integrations with Google, Yelp and Zomato.</li>
                        <li>STACK: MERN (MongoDB, Express, React, Node), Heroku, HTML, CSS, Git, Yelp API, Zomato API, Google Places API</li>
                    </ul>
                </div>

                <div>
                    <div className="project-title">
                        <h3>Portkey</h3>
                        <div className="project-title-sites">
                            <a href="https://expo.io/@vivalalax10/portkey-expo" className="link">
                                Live App
                            </a>

                            <a href="https://github.com/Tianyou-Song/kraving" className="link">
                                Github
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li>Mobile app to price compare and order rides from Uber and Lyft, powered by API integrations with Google, Uber and Lyft.</li>
                        <li>STACK: MERN (MongoDB, Express, React, Node), Heroku, HTML, CSS, Git, Uber API, Lyft API, Google Places API, Google Maps API</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Projects;