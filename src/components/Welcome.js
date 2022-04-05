import React from 'react'
import { Link } from 'react-scroll/modules'

const Welcome = () => {

  return (
    <div className='welcome-container' id='welcome'>
      <p className='left-aligned'><strong>Welcome.</strong><br />
        I am <em>Essi</em>, a junior software developer from London, and this is my portfolio.
      </p>

      <div className='quicklinks slide-in-left'>
        <p>Here for a good time?</p>
        <ul>
          <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
          <li><Link to='teckstack' spy={true} smooth={true}>Tech Stack</Link></li>
          <li><Link to='interests' spy={true} smooth={true}>Interests</Link></li>
          <li><Link to="about-me" spy={true} smooth={true}>About Me</Link></li>
          <li><Link to='contact' spy={true} smooth={true}>Contact</Link></li>
        </ul>
      </div>
      <p className='right-aligned slide-in-right'>Or for a long time?<br /> Scroll down to see what I have been up to.</p>
    </div>
  )
}

export default Welcome