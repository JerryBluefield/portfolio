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
            <h1>I am Jerry Blåfield</h1>
            <h3>Software developer, graduated in 2021</h3>
            <br></br>
            <p>My name is Jerry Blåfield. I am 28-years-old and I graduated from <a target="_blank" rel="noopener noreferrer" href="https://www.jamk.fi/fi/Etusivu/"><span title="JAMK - Etusivu">JAMK University of Applied Sciences</span>
                </a> with a bachelor's degree in Information and Communication Technologies. Although my studies focused on back-end development, it didn't stop me from having an interest in full-stack development and front-end as well.</p>
                <p>I enjoy working in groups but I still fiddle around with personal solo dev projects on my free time and am fully capable of working independently when needed. My passion is learning game development and making games. That is why I've done an internsip at a game company and also participated in the Finnish Game Jam.</p>
                <p>Challenging myself and getting out of my comfort zone really push me to better myself, which is why I've travelled a lot and tried all kinds of work in the past. Now I'm looking for my next challenge, put down some roots and really kickstart my career.</p>
            
            </div>
            )
        }
    }
    
export default About
    
