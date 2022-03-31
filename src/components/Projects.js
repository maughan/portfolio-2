import React from 'react'
//import { useNavigate } from 'react-router-dom'
import safety from '../images/safety.png'
import cocktails from '../images/cocktails.png'
import holiday from '../images/holiday.png'
import monsters from '../images/monsters.png'

const Projects = () => {

  return (
    <div className='projects-container'>
      <div className='project'>
        <a href='https://your-safety-app.herokuapp.com/'><img src={safety} alt='Project 4' /></a>
        <p className='right-aligned'>
          <a href='https://your-safety-app.herokuapp.com/'><strong>SafetyApp</strong></a><br />
          A web application that helps victims and witnesses of spiking. <br /> On this app you can check your symptoms against most common spiking substances
          and as a user you can also report your indcidents to contribute building a global heat map of spikings.
        </p>
      </div>

      <div className='project'>
        <p className='left-aligned'>
          <a href='https://holidaymates.herokuapp.com/'><strong>HolidayMates</strong></a><br />
          Post about your holidays, tag the places you went to and share it to your friends. <br />
          On this web-based application you connect with sharing a unique code to your friends and then add all your holidays to a one big map of everyone's adventures.
        </p>
        <a href='https://holidaymates.herokuapp.com/'><img src={holiday} alt='Project 3' /></a>
      </div>

      <div className='project'>
        <a href='https://name-your-cocktail.netlify.app/'><img src={cocktails} alt='Project 2' /></a>
        <p className='right-aligned'>
          <a href='https://name-your-cocktail.netlify.app/'><strong>Name your cocktail</strong></a><br />
          This is the product of 48 hour Reactathon where in a pair we built this cocktail themed website which generates a drinks list
          based on your name.<br />
          <em>"There's always time for a cocktail" - Mrs. Kasha Davis</em>
        </p>
      </div>

      <div className='project'>
        <p className='left-aligned'>
          <a href='https://essikarj.github.io/project-1/'><strong>Monster Crossing</strong></a><br />
          This is a browser-friendly game where you try to collect keys and avoid getting eaten by monsters.<br />
          The game is built purely with JavaScript, HTML and CSS with the extra spice of my own illustrations.
        </p>
        <a href='https://essikarj.github.io/project-1/'><img src={monsters} alt='Project 2' /></a>
      </div>

    </div >
  )
}

export default Projects