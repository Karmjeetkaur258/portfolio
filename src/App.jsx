import React from 'react'
import Header from './components/header/Header'
import Nav from './components/naviagtion/Nav'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Aboutme from './Aboutme/Aboutme'

//import Portfolio from './components/portfolio/Portfolio'
//import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
    <Header/>
    <Aboutme/>
    <Experience/>
    <Contact/>
    <Nav/>
    <Footer/>

    
    </>
  )
}

export default App