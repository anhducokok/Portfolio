import "./Hero.css"

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"


const Hero = () => {
  return (
   <div className="hero">
    <div className="mask">
        <img className="into-img" 
        src={IntroImg} alt="" />
    </div>
    <div className="content">
    <p> HI, I'M a Freelancer.</p>
    <h1> React Dev.</h1>
    <Link to="/Project" className="btn"> Project</Link>
    <Link to="/Contact" className="btn-light"> Contact</Link>
    </div>
   </div>
  )
}

export default Hero