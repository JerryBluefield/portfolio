import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import { Helmet } from 'react-helmet'

const pagetitle = 'Jerry Blåfield - Education'

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <Helmet>
                    <title>{pagetitle}</title>
                </Helmet>
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bachelor's degree in Information and Communication technologies" where="JAMK University of Applied Sciences" from="August 2017" to="June 2021"/>
            <Widecard title="Language studies at a language school in Kyoto, Japan" where="ARC Academy Kyoto" from="April 2022" to="September 2022"/>
            <Widecard title="Exchange studies in Japan" where="Seinan Gakuin University, Fukuoka" from="August 2019" to="December 2019"/>
            <Widecard title="Dual qualification high school graduate | Vocational Degree Electrician" where="Järvenpää High School | KEUDA Järvenpää Vocational School" from="2012" to="2015"/>
            </div>
            )
        }
    }
    
export default Education
    
