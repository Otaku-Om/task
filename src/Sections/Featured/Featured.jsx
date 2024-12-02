import React from 'react';
import FeaturedImage1 from "../../assets/image 4441.png";
import VideoCam from "../../assets/video_camera_front_24dp_5F6368_FILL0_wght300_GRAD0_opsz24.png";
import Schedule from "../../assets/schedule_24dp_5F6368_FILL0_wght300_GRAD0_opsz24.png";
import Star from "../../assets/Group 1000005911.png";
import "./style.css";

function Featured() {
  return (
    <div className='Featured-Card'>
      <div className="Featured-Card-Image">
        <img src={FeaturedImage1} alt="" />
      </div>
      <div className="Featured-Card-Content">
        <h2 className='Featured-Card-Content-Heading'>Physics | Class XI and XII IIT-JEE | NEET</h2>
        <span className='Featured-Card-Content-Line'></span>
        <div className="Featured-Card-Content-Details">
          <div className="Featured-Card-Content-Detail">
            <img src={Schedule} alt="" />
            <p>12 Weeks</p>
          </div>
          <div className="Featured-Card-Content-Detail">
            <img src={VideoCam} alt="" />
            <p>Live Training</p>
          </div>
          <div className="Featured-Card-Content-Detail">
            <img src={Star} alt="" />
            <p>Certifications</p>
          </div>
        </div>
        <div className="Featured-Card-Content-Btns">
          <button>View Course</button>
          <button>Enroll Now</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
