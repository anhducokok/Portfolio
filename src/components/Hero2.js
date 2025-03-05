import "./Hero2.css";

import React, { Component } from "react";
// import IntroImg from "../assets/intro-bg.jpg";

class Hero2 extends Component {
  render() {
    return (
      <div className="hero-img">
        {/* <div className="mask"> */}
        {/* <img className="intro-img" src={IntroImg} alt="" /> */}
        {/* </div> */}
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
  //   return (

  //   );
}

export default Hero2;
