import React from 'react'
//import axios from 'axios'

const Contact = () => {

  const handleClick = (e) => {
    e.target.title === 'github' && window.open('https://github.com/EssiKarj')
    e.target.title === 'linkedin' && window.open('https://www.linkedin.com/in/essi-karjalainen/')
    e.target.title === 'instagram' && window.open('https://www.instagram.com/essikarj/')
  }

  return (
    <div className='contact'>
      <h3 className='left-aligned'>Want to stay in contact?</h3>
      <p className='right-aligned'>
        Follow me on my socials and not so socials:<br />
        <strong className='social-link' title='github' onClick={e => handleClick(e)}>GitHub, </strong>
        <strong className='social-link' title='linkedin' onClick={e => handleClick(e)}>LinkedIn, </strong>
        <strong className='social-link' title='instagram' onClick={e => handleClick(e)}>Instagram</strong>
      </p>
      <p className='right-aligned'>
        Drop me an email for any enquiries: <br />
        essi.s.karjalainen@gmail.com
      </p>
    </div>
  )
}

export default Contact