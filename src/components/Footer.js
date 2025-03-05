import "./footer.css"
import React from 'react'

import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter}
 from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{
                    color: "#fff", marginRight: "2rem"}
                }/>
                <p> 123 Housing Society.</p>
                <p> Bangladesh.</p>
            </div> 
             <div className="phone">
                <FaPhone size={20} style={{
                    color: "#fff", marginRight: "2rem"}
                }/>
                <p> 123 4356 66666666.</p>
                
            </div>
            <div className="email">
                <FaMailBulk size={20} style={{
                    color: "#fff", marginRight: "2rem"}
                }/>
                <p> abc@abc.com</p>
                
            </div>
            
        </div>
        <div className="right">
                <h4 style={{color:"#fff"}}>About the company</h4>
                <p> This is me Fa ka. Ceo & Founder of Tech23etc. I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                <FaFacebook size={30} style ={{color:"#fff", marginRight:"1rem"}} />
                <FaTwitter size={30} style ={{color:"#fff", marginRight:"1rem"}} />
                <FaLinkedin size={30} style ={{color:"#fff", marginRight:"1rem"}} />
                </div>
        </div>
    </div>
    </div>
  )
}

export default Footer