import React from "react";
import TikTok_icon from "./tiktok-icon.svg"
import LinkedIn_icon from "./linkedin-icon.svg"

function Footer() {
    return (
<>
    <span>
    <a href="https://www.tiktok.com/@kashicreates" target="_blank" rel="noreferrer" >
    <img src={TikTok_icon} alt="tiktok_icon"/>
    </a>

     <a href="https://www.linkedin.com/in/akashjhamat/" target="_blank" rel="noreferrer">
     <img src={LinkedIn_icon} alt="linkedin_icon"/>
     </a>
     </span>
     <p>akashdeepjhamat@gmail.com</p>
     <p>SF Bay Area</p>

</>
    )
  }
  
  export default Footer;