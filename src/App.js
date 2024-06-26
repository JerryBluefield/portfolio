import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar.js';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Projects from './contents/Projects';
import Work from './contents/Work';

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/projects">
    <Projects />
    </Route>
    <Route path="/education">
    <Education />
    </Route>
    <Route path="/skills">
    <Skills />
    </Route>
    <Route path="/work">
    <Work />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    </div>
    </Router>
   
    );
  }
  
  export default App;
  