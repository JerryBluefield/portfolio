import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bachelor's degree in Information and Communication technologies" where="JAMK University of Applied Sciences" from="August 2017" to="Present"/>
            <Widecard title="Exchange studies in Japan" where="JAMK University of Applied Sciences" from="August 2019" to="December 2019"/>
            <Widecard title="Dual qualification high school graduate | Vocational Degree Electrician" where="Järvenpää High School | KEUDA Vocational School" from="2012" to="2015"/>
            </div>
            )
        }
    }
    
export default Education
    