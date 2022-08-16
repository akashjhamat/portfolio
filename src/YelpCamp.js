import React from "react";
import YelpCamp_img from "./YelpCamp.png"
import TechStack_img from "./TechStack.png"

function YelpCamp() {
    return (
<>
    <div className="EntireYelpCampDiv">
    <div className="YelpCamp_desDiv">
      <p className="yelpcamp_des">Yelpcamp is a Yelp clone web application for campgrounds across the world.</p>
      <button className="TechStack_btn">View Tech Stack</button>
      </div>
      <div>
        <a href="https://mighty-journey-28447.herokuapp.com/" target="_blank" rel="noreferrer" className="yelpcamp_link">
        <img src={YelpCamp_img} alt="yelpcamp_img" className="yelpcamp_img"/> 
        </a>
        </div>
    </div>

</>
    )
  }
  
  export default YelpCamp;