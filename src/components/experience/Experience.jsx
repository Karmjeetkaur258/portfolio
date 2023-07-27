import React from "react";
import './experience.css';
import {AiFillCheckSquare} from 'react-icons/ai'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h1>My Experience</h1>

      <div className="container experience_container">
        <div class="experience_frontend">
          <h1>Frontend Development</h1>
          <div class="experience_content">
            <article class="experience_detail">
              <AiFillCheckSquare class="experience_icon"/>
              <div>
              <h4>HTML</h4>
              <small class='text-light'>Experienced</small>
             </div>
            </article>
            <article class="experience_detail">
              <AiFillCheckSquare/>
              <h4>CSS 5</h4>
              <small class='text-light'>Experienced</small>

            </article>

            <article class="experience_detail">
              <AiFillCheckSquare class="experience_icon
              "/>
              <h4>React</h4>
              <small class='text-light'>Experienced</small>

            </article>
            <article class="experience_detail">
              <AiFillCheckSquare/>
              <h4>Java Script</h4>
              <small class='text-light'>Experienced</small>

           
            </article>
            

          </div>

        </div>
         {/*----------end of front end*/}

         <div class="experience_backend">
          <h1>Backend Development</h1>
          <div class="experience_content">
            <article class="experience_detail">
              <AiFillCheckSquare/>
              <h4>Node JS</h4>
              <small class='text-light'>Experienced</small>

            </article>
            <article class="experience_detail">
              <AiFillCheckSquare/>
              <h4>MySQL</h4>
              <small class='text-light'>Experienced</small>

            </article>

          
            <article class="experience_detail">
              <AiFillCheckSquare/>
              <h4>Python</h4>
              <small class='text-light'>Experienced</small>
              </article>


            <article class="experience_detail">
              <AiFillCheckSquare/>
              <h4>PHP</h4>
              <small class='text-light'>Experienced</small>

            </article>
            <article class="experience_detail">
              <AiFillCheckSquare/>
              <h4>Java</h4>
              <small class='text-light'>Experienced</small>

            </article>
            

          </div>

        </div>

      </div>
     
    </section>
  )
}

export default Experience