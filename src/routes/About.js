import React from 'react'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero2 from '../components/Hero2'



const About = () => {
  return (
    <div>

    <Navbar/>
    <Hero2 heading="About." text="I'm a Front-end Developer"/>
    <Footer/>
    </div>
  )
}

export default About