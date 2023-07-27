import React from 'react'
import './header.css'
import Ca from './Ca'
import myself from '../../assests/myself.jpeg'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
    <div className="header_container"></div>

    <div class="header_content">
      <div class="intro">
    <h3> Hello, I'm </h3>
    <h6>Karmjeet Brar</h6>
    <h3>a Web Developer</h3>
    </div>
    <Ca/>
    <HeaderSocial/>
    </div>
    <div class="me">
      <img src={myself} alt=""/>
  </div>
  
    </header>
  )
}

export default Header