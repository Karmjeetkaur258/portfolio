import React from 'react'
import './aboutme.css'
import me from '../../src/assests/me.jpeg'
import {GiFiles} from 'react-icons/gi'
import {TbReportSearch} from 'react-icons/tb'

const Aboutme = () => {
  return (
    <section id='aboutme'>
    <h5> Get to Know</h5>
    <h1>About Me</h1>

    <div className="container about_container" >
       <div class='about_me'>
       <div class="about_me-image">
          <img src={me} alt="about me"></img>
       </div>
       </div>

   <div class="about_content">
      <div class="about_cards">

      <article class='about_card'>
            <GiFiles class="about_icon"/>
            <h5>Experience</h5>
            <small>3+ Working Experience</small>
        </article>
      <article className='about_card'>
        <TbReportSearch class="about_icon"/>
        <h5>Projects</h5>
        </article>
    </div>
  
    <p>
        A Front End Developer passionate about creating interactive web applications and experience on the web.I design and code beautifully simple things, and I love what I do.
    </p>

    <h1><a href="#contact" classname='btn btn-primary'>Let's Talk</a></h1>
     </div>
     </div>


    </section>
  )
}
export default Aboutme
