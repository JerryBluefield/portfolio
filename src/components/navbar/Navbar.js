import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            closed: true,
            'NavItemActive':''
        }
    }
    toggleSidebar = (event) => {
        console.log("clicked")
        this.setState({ closed: !this.state.closed });
      }

    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {

        let navOpen = this.state.closed ? 'open' : 'closed';

        return (
            <div className='navigation'>
                <div id='icon' className='icon'
                    onClick={this.toggleSidebar} >
                    |||
                </div>
                <div id='left' className={navOpen} >
                <ul>
                    <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
                    <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
                    <Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem>
                    <Navitem item="Projects" tolink="/projects"  activec={this.activeitem}></Navitem>
                    <Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem>
                    <Navitem item="Work" tolink="/work"  activec={this.activeitem}></Navitem>
                    <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
                </ul>
                </div>
            </div>
            )
        }
    }
    
    export default Navbar
    