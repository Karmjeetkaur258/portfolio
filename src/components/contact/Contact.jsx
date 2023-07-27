import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s5z1imj', 'template_sxetufe', form.current, 'VrdFwiNVIVTSZPINj')
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h1>Contact me</h1>

      <div className='container contact_container'>
        <div class='contact_options'>
          <article class='contact_option'>
            <AiOutlineMail class='contact_icon'/>
            <h4>Email</h4>
            <h5>karambrar8@gmail.com</h5>
            <a href="mailto:karambrar8@gmail.com" target="_blank">Send a message</a>

          </article>

          <article className='contact_option'>
            <FaInstagramSquare classname='contact_icon'/>
            <h4>Instagram</h4>
            
            <a href="http://instagram.com/karam2375" target="_blank">Send a message</a>

          </article>
        </div>
        {/*end of contact options*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full name' required/>
          <input type="email" name='email' placeholder='your email' required/>
          <textarea name="message" rows="7" placeholder="your message" required/>
          <button type="submit" className='btn'>Send Message</button>
        </form>


      </div>
    </section>
  )
}

export default Contact