import React from 'react'
import BrarKaram_Resume from '../../assests/BrarKaram_Resume.docx'

const Ca = () => {
  return (
    <div class='ca'>
       
    <a href={BrarKaram_Resume} download class='btn'>Download CV</a>
    <a href="#contact" class='btn'>Let's Talk</a>
</div>
  )
}

export default Ca