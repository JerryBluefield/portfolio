import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const pagetitle = 'Jerry Blåfield - Home'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['C#', 'Python', 'React Native', 'Unity','JavaScript','PHP','REACT JS', 'HTML', 'MySQL', 'Git', 'Trello', 'Scrum', 'MariaDB'],
            'mylanguages':['English','Finnish','Swedish','Japanese']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <Helmet>
                <title>{pagetitle}</title>
            </Helmet>
            <h1 className="subtopic">My Skills</h1>
            <h2>Spoken Languages</h2>
            <ul>
            {this.state.mylanguages.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            <h2>Programming related skills</h2>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>

            </div>
            )
        }
    }
    
    export default Skills
    
