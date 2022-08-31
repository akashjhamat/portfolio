import React, {useState} from "react";
import YelpCamp_img from "./YelpCamp.png"
import TechStack_img from "./TechStack.png"
import x_icon from "./x_icon.svg"



function YelpCamp() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

    return (
<>
    <div className="EntireYelpCampDiv">
    <div className="YelpCamp_desDiv">
      <p className="yelpcamp_des">Yelpcamp is a Yelp clone web application for campgrounds across the world.</p>
      <button onClick={toggleModal} className="TechStack_btn">View Tech Stack</button>
      {modal && (
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <ul className="tech_list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Bootstrap</li>
              <li>Mapbox</li>
              <li>Passport</li>
              <li>Heroku</li>
            </ul>
          <button className="close-modal" onClick={toggleModal}>
          <img src={x_icon} alt="x_icon" className="x_icon"/>
            </button>
          </div>
        </div>
        )}
        </div>
      <div className="img_container">
        <a href="https://mighty-journey-28447.herokuapp.com/" target="_blank" rel="noreferrer" className="yelpcamp_link">
        <img src={YelpCamp_img} alt="yelpcamp_img" className="yelpcamp_img"/>
        </a>
        </div>
    </div>

</>
    )
  }
  
  export default YelpCamp;