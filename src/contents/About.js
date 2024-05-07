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
            <h3>Aspiring software developer who graduated in 2021</h3>
            <br></br>
            <p>My name is Jerry Blåfield. I am 28-years-old and I graduated from <a target="_blank" rel="noopener noreferrer" href="https://www.jamk.fi/fi/Etusivu/"><span title="JAMK - Etusivu">JAMK University of Applied Sciences</span>
                </a> with a bachelor's degree in Information and Communication Technologies. My studies focused on back-end development, which didn't stop me from having and interest in full-stack development and front-end as well.</p>
                <p>Even though I prefer working with groups in my workflife I still fiddle around with personal single dev projects on my free time. As a passion project I enjoy learning about game development and making small games. As such I've done an internsip at a game company and also participated in the Finnish Game Jam.</p>
                <p>Challenging myself and getting out of my comfort zone really push me to better myself, which is why I've travelled a lot and tried all kinds of work in the past. Now I'm looking for my next challenge to really kickstart my career.</p>
            
            </div>
            )
        }
    }
    
export default About
    
