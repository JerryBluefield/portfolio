import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

const pagetitle = 'Jerry Blåfield - Portfolio'

class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <Helmet>
                    <title>{pagetitle}</title>
                </Helmet>
                <div id="content">
        
        <div class="textbox">

        <h1>Portfolio</h1>
                <p>Most of my experience comes from assignments done in the University courses and my game development internship at Zaibatsu Interactive.</p>
                <h2>Ruined Sky platformer game</h2>
                <p></p>
                <p>A game prototype made in Phaser 3 with registration and scorekeeping made in PHP. Made in a three person group as a final assignment for a course.</p>
                <div class="gallery">
                    <a href="kuvat/ruinedskygif.gif" data-lightbox="group" data-title="Ruined Sky"><img src="kuvat/ruinedskygif.gif" class="mini_img" alt="Ruined Sky"/></a>
                    </div>
                <p><a href="https://student.labranet.jamk.fi/~K9105/phaser/harkkatyo/mainpage.php" alt="Link to the game">Link to the game</a></p>
        
        <h2>Grappler Unity 3D game prototype</h2>
        <p>This game prototype was made in a game programming course which mostly focused on coding and getting the core loop of the game together.</p>
        <div class="gallery">
                    <a href="kuvat/grapplegame.gif" data-lightbox="group" data-title="Grapple game"><img src="kuvat/grapplegame.gif" class="mini_img" alt="Grapple game"/></a> 
                    </div>
       <h2>My home page</h2>
                <p>Of course I have also made these pages myself, starting in a course and continuing development afterwards. I have a new website under development using React JS to create a more easily expandable and manageable site.</p>
                
        <h2>Other projects</h2>
                <p>I have also participated in several course projects for example making a working prototype of an application for choosing what clothes to wear for a customer provided by the school.</p>
                <div class="gallery">
                    <a href="kuvat/webpage.PNG" data-lightbox="group" data-title="Webpage image"><img src="kuvat/webpagemini.jpg" class="mini_img" alt="webpage image"/></a>
                </div>
        </div>
    </div>
            </div>
            )
        }
    }
    
export default Projects
    
