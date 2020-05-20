import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

const pagetitle = 'Jerry Blåfield - About'

class About extends Component {
    render() {
        return (
            

            <div className="condiv">
                            <Helmet>
                <title>{pagetitle}</title>
            </Helmet>
            <h1 className="subtopic">About Me</h1>
            <h1>I'm Jerry Blåfield</h1>
            <h3>Third year university student / Aspiring software developer</h3>
            <br></br>
            <p>My name is Jerry Blåfield. I am 24-years-old and I study at <a target="_blank" rel="noopener noreferrer" href="https://www.jamk.fi/fi/Etusivu/"><span title="JAMK - Etusivu">JAMK University of Applied Sciences</span>
                </a>. I study to get an engineering degree in Information and Communication Technologies. My studies focus on back end development, which hasn't stopped me from having and interest in full stack development.</p>
                <p>Even though I prefer working with groups in my workflife I still fiddle around with personal single dev projects on my free time. My passion interests lie around making games and web applications.</p>
                <p>Challenging myself and getting out of my comfort zone really push me to better myself, which is why I'm always looking for that next challenge.</p>
            
            </div>
            )
        }
    }
    
export default About
    