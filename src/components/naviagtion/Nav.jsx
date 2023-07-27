import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {BiSolidBookReader} from 'react-icons/bi'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const[activenav,setactivenav]=useState('#');

  return (
   
   <nav>
     <a href="#" onClick={()=>setactivenav('#') } classname={activenav=== '#'? 'active': ''}><AiOutlineHome/></a>
      <a href="#aboutme" onClick={()=>setactivenav('#aboutme') } className={activenav=== '#about'? 'active': ''}><FaRegUser/></a>
      
      <a href="#experience" onClick={()=>setactivenav('#experience') } className={activenav=== '#experience'? 'active': ''}><BiSolidBookReader/></a>
      
      <a href="#contact" onClick={()=>setactivenav('#contact') } className={activenav=== '#contact'? 'active': ''}><AiFillMessage/></a>
   </nav>
  )
}

export default Nav