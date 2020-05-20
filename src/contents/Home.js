import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/faceportrait.png';
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
                    <img src={profilepic} className="profilepic" alt="faceportrait.jpg"></img>
                    <ReactTypingEffect className="typingeffect" text={['I am Jerry Blåfield', 'Welcome', 'Find out more using the menu and links']} speed={50} eraseDelay={700}/>
                    <Social></Social>
            </div>
            )
        }
    }
    
    export default Home
    