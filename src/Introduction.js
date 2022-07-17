import React from "react";
import ProfilePic from './ProfilePic.jpg'
import Sound_icon from './sound.svg'

function Intro() {
    return (
        <div>
      <h1 className="intro1">Hi, my name is Akash Jhamat <img src={Sound_icon} alt="sound_icon"/></h1>
      <h2 className="intro2">Welcome to my portfolio! Here you can explore some of the web applications I have built and there respective tech stacks.</h2>
      <img className="ProfilePic" src={ProfilePic} alt="ProfilePic"/>
      </div>
    )
  }
  
  export default Intro;