import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

const pagetitle = 'Jerry Blåfield - Projects'

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
            <p>Suurin osa kokemuksistani koostuvat ammatikorkeakoulun kursseilla tehdyistä harjoitustöistä, sekä projekteista. Kursseilla on monesti keskitytty vain perusteisiin ja aikaa on itse töiden tekemisiin ollut vähän.</p>
            <h2>Ruined Sky tasohyppelypeli</h2>
            <p></p>
            <p>Phaser 3:lla, kolmen hengen ryhmässä tehty tasohyppelypeli, jossa php:lla toteutettu rekisteröityminen ja pisteiden tallentaminen. Peli tehtiin web-ohjelmoinnin harjoitustyönä joten php:lla toteutettu back end oli kurssin osalta tärkeämmässä osassa. </p>
            <div class="gallery">
                <a href="img/ruinedskygif.gif" data-lightbox="group" data-title="Ruined Sky"><img src="img/ruinedskygif.gif" class="mini_img" alt="Ruined Sky"/></a>
                </div>
            <p><a href="https://student.labranet.jamk.fi/~K9105/phaser/harkkatyo/mainpage.php" alt="Linkki peliin">Linkki peliin</a></p>
    
    <h2>Grappler Unity 3D peli</h2>
    <p>Koodaukseen keskittyvällä peliohjelmointi kurssilla pienessä ajassa tehty koukkupelin prototyyppi. Peliprototyypin tein yksin kurssin viimeisenä työnä muiden kurssien ohella vain viikon aikana. Pelin core loop on paikallaan mutta peli olisi vaatinut vielä paljon hienosäätöä ollakseen pelaajalle viihdyttävä. Työn pääideana olikin oppia käyttämään Unity 3D:tä, eikä niinkään tuottaa valmista peliä.</p>
    <div class="gallery">
                <a href="img/grapplegame.gif" data-lightbox="group" data-title="Grapple game"><img src="img/grapplegame.gif" class="mini_img" alt="Grappler game"/></a> 
                </div>
   <h2>Kotisivut</h2>
            <p>Nämä kotisivut olen tietysti myös tehnyt itse, aloittaen web-ohjelmoinnin perusteet kurssilla ja työstäen tarvittaessa sivuja eteenpäin. Sivujen täyttä uusimista olen suunnittellut lähitulevaisuudessa käyttäen javascript kirjastoa, jolla saisin sivuista helpommin ylläpidettävät ja skaalautuvat.</p>
            
    <h2>Muut projektit</h2>
            <p>Tällä hetkellä on menossa viiden hengen ryhmässä pelikehitys kurssilla bullet hell tyyppinen avaruuspeli Unity 2D:llä. Aikaisempina projekteina on pienien kurssiharjoitusten lisäksi suurempia töitä esim. tietokantoihin ja olio-ohjelmointiin keskittyviltä kursseilta, sekä ohjelmistotuotannon kokonaisprosessiin keskittyvältä kurssilta jossa 4 hengen ryhmässä teimme toimeksiantajalle tuoteprototyypin. Projektissa keskityin ryhmän verkkosivujen ja tuotteen käyttöliittymän kehitykseen.</p>
            <div class="gallery">
                <a href="img/webpage.PNG" data-lightbox="group" data-title="Webpage"><img src="img/webpagemini.jpg" class="mini_img" alt="webpage"/></a>
                </div>
        </div>
    </div>
            </div>
            )
        }
    }
    
export default Projects
    