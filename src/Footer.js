import React from "react";
import TikTok_icon from "./tiktok-icon.svg"
import LinkedIn_icon from "./linkedin-icon.svg"

function Footer() {
    return (
<>
    <footer className="footer_div">
    <div className="social-icons">
        <a className="social-links"href="https://www.tiktok.com/@kashicreates" target="_blank" rel="noreferrer" ><img src={TikTok_icon} alt="tiktok_icon"/></a>
        <a className="social-links" href="https://www.linkedin.com/in/akashjhamat/" target="_blank" rel="noreferrer"><img src={LinkedIn_icon} alt="linkedin_icon"/></a>
    </div>
    <div className="contact-div">
     <p className="contact_p">akashdeepjhamat@gmail.com</p>
     <p className="contact_p">SF Bay Area</p>
     </div>
     </footer>
</>
    )
  }
  
  export default Footer;