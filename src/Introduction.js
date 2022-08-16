import React from "react";
import ProfilePic from './ProfilePic.jpg'
import Sound_icon from './sound.svg'

function Intro() {
    return (
      <>
      <section className="home">
      <div className="intro1div">
      <h1 className="intro1">Hi! I'm Akash Jhamat, a full-stack web developer.</h1>
      <h2 className="intro2">Welcome to my portfolio! Here, you can explore some of the web applications I have built and their respective tech stacks.</h2>
      </div>
      <div className="ProfilePicDiv">
      <img className="ProfilePic" src={ProfilePic} alt="ProfilePic"/>
      </div>
      </section>
      </>
    )
  }
  
  export default Intro;