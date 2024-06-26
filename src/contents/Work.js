import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import { Helmet } from 'react-helmet'

const pagetitle = 'Jerry Blåfield - Work Experience'

class Work extends Component {
    render() {
        return (
            <div className="condiv">
                <Helmet>
                    <title>{pagetitle}</title>
                </Helmet>
            <h1 className="subtopic">Work Experience</h1>
            <Widecard title="Game development internship" where="Zaibatsu Interactive" from="September 2020" to="May 2021"/>
            </div>
            )
        }
    }
    
export default Work
    
