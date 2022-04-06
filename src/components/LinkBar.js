import React from 'react'
import { Link } from 'react-scroll/modules'

const LinkBar = () => {

  const handleClick = (e) => {
    e.target.title === 'github' && window.open('https://github.com/EssiKarj')
    e.target.title === 'linkedin' && window.open('https://www.linkedin.com/in/essi-karjalainen/')
    e.target.title === 'instagram' && window.open('https://www.instagram.com/essikarj/')
  }

  return (
    <div className='social-icons linkbar'>
      <i className="fa-brands fa-github fa-lg" onClick={e => handleClick(e)} title='github'></i>
      <i className="fa-brands fa-linkedin fa-lg" title='linkedin' onClick={e => handleClick(e)}></i>
      <i className="fa-brands fa-instagram fa-lg" title='instagram' onClick={e => handleClick(e)}></i>
      <Link to='welcome' spy={true} smooth={true}>
        <i class="fa-solid fa-angles-up"></i>
      </Link>
    </div>


  )
}

export default LinkBar