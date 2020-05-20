import React, { Component } from 'react';
import Social from '../components/Social';
import { Helmet } from 'react-helmet'

const pagetitle = 'Jerry Blåfield - Contact'

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <Helmet>
                <title>{pagetitle}</title>
                </Helmet>
                <div className="content">
                    <h1 className="subtopic">Contact Me</h1>
                    <h3>Jerry Blåfield</h3>
                    <h3>Email  :   jerry.blafield@gmail.com</h3>
                    <h3>Phone : +358 440 78 9394</h3>
                    <Social />
                </div>
            </div>
            )
        }
    }
    
    export default Contact
    