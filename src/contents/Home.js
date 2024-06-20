import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profilephoto2024.jpg';
import Social from '../components/Social'
import { Helmet } from 'react-helmet'

const pagetitle = 'Jerry Blåfield - Home'


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <Helmet>
                <title>{pagetitle}</title>
                </Helmet>
                    <img src={profilepic} className="profilepic" alt="profilephoto2024.jpg"></img>
                    <ReactTypingEffect className="typingeffect" text={['I am Jerry Blåfield', 'Welcome to my portfolio', 'Find out more using the menu and links']} speed={55} eraseDelay={700} eraseSpeed={55}/>
                    <Social></Social>
            </div>
            )
        }
    }
    
    export default Home
    
