import React from 'react'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TechStack from './components/TechStack'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LinkBar from './components/LinkBar'
import Welcome from './components/Welcome'
import Interests from './components/Interests'




function App() {
  return (
    <div className='page-container'>

      <LinkBar />
      <Welcome />
      <Projects />
      <TechStack />
      <Interests />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App;
