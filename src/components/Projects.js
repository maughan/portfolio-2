import React from 'react'
//import { useNavigate } from 'react-router-dom'
import safety from '../images/safety.png'
import cocktails from '../images/cocktails.png'
import holiday from '../images/holiday.png'
import monsters from '../images/monsters.png'

const Projects = () => {

  const handleClick = (e) => {
    e.target.title === 'safety' && window.open('https://your-safety-app.herokuapp.com/')
    e.target.title === 'holiday' && window.open('https://holidaymates.herokuapp.com/')
    e.target.title === 'cocktail' && window.open('https://name-your-cocktail.netlify.app/')
    e.target.title === 'monster' && window.open('https://essikarj.github.io/project-1/')
  }

  const handleReadMe = (e) => {
    e.target.title === 'safety' && window.open()
    e.target.title === 'holiday' && window.open()
    e.target.title === 'cocktail' && window.open()
    e.target.title === 'monster' && window.open()
  }

  return (
    <div className='projects-container'>
      <h2 className='title'>Projects</h2>

      <div className='project'>
        <img src={safety} alt='Project 4' title='safety' onClick={e => handleClick(e)} />

        <div className='right-aligned'>
          <h3 title='safety' onClick={e => handleClick(e)}>SafetyApp</h3>

          <p className='timeline'>Solo project - 10 days</p>

          <p>
            A web application that helps victims and witnesses of spiking. <br /> On this app you can check your symptoms against most common spiking substances
            and as a user you can also report your indcidents to contribute building a global heat map of spikings.
          </p>

          <p className='readme' title='safety' onClick={e => handleReadMe(e)}>ReadMe</p>
        </div>
      </div>


      <div className='project'>

        <div className='left-aligned'>
          <h3 title='holiday' onClick={e => handleClick(e)}>HolidayMates</h3>

          <p className='timeline'>Group project - 10 days</p>

          <p>
            Post about your holidays, tag the places you went to and share it to your friends. <br />
            On this web-based application you connect with sharing a unique code to your friends and then add all your holidays to a one big map of everyone's adventures.
          </p>

          <p className='readme' title='safety' onClick={e => handleReadMe(e)}>ReadMe</p>
        </div>

        <img src={holiday} alt='Project 3' title='holiday' onClick={e => handleClick(e)} />
      </div>


      <div className='project'>
        <img src={cocktails} alt='Project 2' title='cocktail' onClick={e => handleClick(e)} />

        <div className='right-aligned'>
          <h3 title='cocktail' onClick={e => handleClick(e)}>Name your cocktail</h3>

          <p className='timeline'>Pair programming - 48 hours</p>

          <p>
            This is the product of 48 hour Reactathon where in a pair we built this cocktail themed website which generates a drinks list
            based on your name.<br />
            <em>"There's always time for a cocktail" - Mrs. Kasha Davis</em>
          </p>

          <p className='readme' title='safety' onClick={e => handleReadMe(e)}>ReadMe</p>
        </div>
      </div>

      <div className='project'>

        <div className='left-aligned'>
          <h3 title='monster' onClick={e => handleClick(e)}>Monster Crossing</h3>

          <p className='timeline'>Solo project - 7 days</p>

          <p>
            This is a browser-friendly game where you try to collect keys and avoid getting eaten by monsters.<br />
            The game is built purely with JavaScript, HTML and CSS with the extra spice of my own illustrations.
          </p>

          <p className='readme' title='safety' onClick={e => handleReadMe(e)}>ReadMe</p>
        </div>

        <img src={monsters} alt='Project 1' title='monster' onClick={e => handleClick(e)} />
      </div>

    </div >
  )
}

export default Projects