import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ruinedsky from '../img/ruinedskygif.gif';
import grapplergame from '../img/grapplegame.gif';

const pagetitle = 'Jerry Blåfield - Portfolio'

class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <Helmet>
                    <title>{pagetitle}</title>
                </Helmet>
                <div id="content">
        
        <div className="textbox">

        <h1>Portfolio</h1>
                <p>Most of my experience comes from my game development internship at Zaibatsu Interactive and assignments in university courses.</p>
                <h2>Zaibatsu game development internship</h2>
                <p>I worked mostly on a large Android mobile game project with around 6 people other people on the team. My main tasks during the internship included but were not limited to finding, organizing and fixing bugs that the game had during it's last few months of development. I worked on multiple parts of the game including UI, localization, gameplay mechanics, level design, fixing assets etc.</p>
                <p></p>
                <p></p>
                <h2>Ruined Sky platformer game</h2>
                <p></p>
                <p>A game prototype made in Phaser 3 with registration and scorekeeping made in PHP. Made in a three person group as a final assignment for a course.</p>
                <div className="gallery">
                    <a href="kuvat/ruinedskygif.gif" data-lightbox="group" data-title="Ruined Sky"><img src={ruinedsky} className="mini_img" alt="Ruined Sky"/></a>
                    </div>
        
        <h2>Grappler Unity 3D game prototype</h2>
        <p>This game prototype was made in a game programming course which mostly focused on coding and getting the core loop of the game together.</p>
        <div className="gallery">
                    <a href="kuvat/grapplegame.gif" data-lightbox="group" data-title="Grapple game"><img src={grapplergame} className="mini_img" alt="Grapple game"/></a> 
                    </div>
       <h2>My home page</h2>
                <p>Of course I have also made these pages myself, starting in a course and continuing development afterwards. I have a new website under development using React JS to create a more easily expandable and manageable site.</p>
                
        <h2>Other projects</h2>
                <p>I have also participated in several other projects which include:</p>
                <ul>
                    <li>Building a prototype of an app where the user can choose different outfits depending on the current temperature and weather conditions which were base on a forecast API.</li>
                    <li>Making a working website for a podcast company with working databases and localization options.</li>    
                        </ul>
        </div>
    </div>
            </div>
            )
        }
    }
    
export default Projects
    
