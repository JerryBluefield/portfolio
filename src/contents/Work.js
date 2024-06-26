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
            <Widecard title="Game development internship" where="Zaibatsu Interactive - Jyväskylä, Finland" from="September 2020" to="May 2021" what="Programming in C# and game development in Unity. Working as a team member in a large mobile game project mainly focusing on quality assurance and programming. Completed a thesis on mobile game testing and quality assurance at the end of the internship"/>
            <Widecard title="Assistant video editor" where="Freelance - Jyväskylä, Finland" from="June 2024" to="June 2024" what="Part time video editor for a 1 million subscriber YouTube channel"/>
            <Widecard title="Bakery cafe staff" where="Bakery Cafe Kazemachiya - Kamakura, Japan" from="April 2023" to="April 2024" what="Customer service, cashier, preparation of food and drinks, opening & closing the shop. Work was fully in Japanese"/>
            <Widecard title="IT project worker" where="Osuuskunta Innomo - Jyväskylä, Finland" from="July 2014" to="August 2014" what="Full Windows 7 system update and IT support for the Central Finland health care region. Project work in a team and writing reports."/>
            <Widecard title="Electrician" where="Electrician Harri Aunola - Haarajoki, Finland" from="October 2015" to="May 2017" what="Part time work as an apprentice electrician. Electric installations in industrial, renovation and new building construction locations"/>
            <Widecard title="Product packing and maintenance" where="Kotteria Oy - Helsinki, Finland" from="Summers 2014" to="2015" what="Summer job doing maintenance tasks, using heavy machinery and packing coal."/>
            <Widecard title="Part time renovator" where="Euroka Oy - Helsinki, Finland" from="December 2011" to="February 2013" what="Part time work during school holidays. Renovating and maintaining rental office spaces eg. demolishing, painting, costruction."/>
            </div>
            )
        }
    }
    
export default Work
    
