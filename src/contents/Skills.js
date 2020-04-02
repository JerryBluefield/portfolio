import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['C#', 'HTML','CSS','JS','PHP','REACT JS','MySQL'],
            'mylanguages':['English','Finnish','Swedish','Japanese']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <h2>Programming</h2>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            <h2>Languages</h2>
            <ul>
            {this.state.mylanguages.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    