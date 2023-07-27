import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
  <div className='header_social'>
      
            <a href="http://www.linkedin.com/in/karambrar258" target="_self" class="headericon">< BsLinkedin/></a>
            <a href="http://www.github.com/karmjeetkaur258" target="self" class="headericon"><BsGithub/></a>
       
        </div>
  
  )
}

export default HeaderSocial