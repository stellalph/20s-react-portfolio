/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>STELLA LING</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/stellalph" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/stella-ling-46246476" target="blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2022</small>
      </div>
    </footer>
  )
}

export default Footer
