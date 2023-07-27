import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="">Karam</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about"> About</a></li>
        <li><a href="#experience">Experience</a></li>
       
        <li><a href="#contact">Contact</a></li>
        

      </ul>
      <div className='footer_socials'>
        <a href="www.instagram.com/karam2375"><AiFillInstagram/></a>
        <a href="www.facebook.com"><AiFillFacebook/></a>
      </div>
      <div class="footer_copyright">
        <small>&copy; Karam:All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer