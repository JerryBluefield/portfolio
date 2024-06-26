import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ruinedsky from '../img/ruinedskygif.gif';
import grapplergame from '../img/grapplegame.gif';
import spacebattles from '../img/spacebattles.gif';
import whalingwalls from '../img/whalingwalls.gif';

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

        <h1>Portfolio of past projects</h1>
                <p>Most of my experience comes from my game development internship at Zaibatsu Interactive and assignments in university courses.</p>
                
            <h2>Zaibatsu game development internship</h2>
                <p>I worked mostly on a large Android mobile game project with around 6 people other people on the team. 
                    My main tasks during the internship included but were not limited to finding, organizing and fixing bugs that the game had during it's last few months of development. 
                    I worked on multiple parts of the game including UI, localization, gameplay mechanics, level design, fixing assets etc.</p>
                    <p>I also wrote my thesis for Zaibatsu. The thesis is about optimizing mobile games in a Unity environment and it focused on the mobile game project I had been working on. The thesis can be found on <a target="_blank" rel="noopener noreferrer" href="https://urn.fi/URN:NBN:fi:amk-2021053112633"><span title="Theseus">Theseus</span></a>.</p>
                <h2>Finnish Game Jam game - Whaling Walls</h2>
                <p>A 3D turn based game which I made with 7 other people from Zaibatsu Interactive during the Finnish Game Jam 2021. We completed the project to a playable state in the allotted time of 3 days and it was submitted as an entry in the Global Game Jam on the following site: <a target="_blank" rel="noopener noreferrer" href="https://v3.globalgamejam.org/2021/games/kalakeitto-1"><span title="GGJ Kalakeittosoutajat">Whaling Walls</span></a>. I mostly contributed in the form of gameplay and UI programming. The game is made in Unity.</p>
                <div className="gallery">
                    <a href={whalingwalls} data-lightbox="group" data-title="Whaling Walls"><img src={whalingwalls} className="mini_img" alt="Whaling Walls"/></a>
                </div>

            <h2>Ruined Sky platformer game</h2>
                <p>A game prototype made in Phaser 3 with registration and scorekeeping made in PHP. Made in a three person group as a final assignment for a course.</p>
                <div className="gallery">
                    <a href={ruinedsky} data-lightbox="group" data-title="Ruined Sky"><img src={ruinedsky} className="mini_img" alt="Ruined Sky"/></a>
                </div>
        
                <h2>Space Battles game prototype</h2>
                <p>A game prototype made in Unity with a working gameplay loop, including the framework for an item shop, upgrade system and a world select screen. Made in an international 5 person student group mostly remotely for a game development course at JAMK.</p>
                <div className="gallery">
                    <a href={spacebattles} data-lightbox="group" data-title="Ruined Sky"><img src={spacebattles} className="mini_img" alt="Space Battles"/></a>
                </div>

        <h2>Grappler Unity 3D game prototype</h2>
        <p>This game prototype was made in a game programming course which mostly focused on coding and getting the core loop of the game together. Time was very limited and it was completed from start to end fully independently.</p>
        <div className="gallery">
                    <a href={grapplergame} data-lightbox="group" data-title="Grapple game"><img src={grapplergame} className="mini_img" alt="Grapple game"/></a> 
                    </div>
       <h2>My home page</h2>
                <p>I have also made this portfolio website myself. I recently moved this whole project to React JS deployed in GitHub Pages to create a more easily expandable and manageable site, which is not dependent on paid services.</p>
                
        <h2>Other projects</h2>
                <p>I have also participated in several other projects which include but are not limited to:</p>
                <ul>
                    <li>Building a prototype of an app where the user can choose different outfits depending on the current temperature and weather conditions which were base on a forecast API.</li>
                    <li>Making a working website prototype for a company which specialized in localizing foreign content for a global audience. The site was connected to their databases and included audio playback functions with full localization options.</li>    
                        </ul>
        </div>
    </div>
            </div>
            )
        }
    }
    
export default Projects
    
