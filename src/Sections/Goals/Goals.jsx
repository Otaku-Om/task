import React from 'react'
import "./style.css";
import GoalImage from "../../assets/Group 1000006003.png";
import Goals1 from "../../assets/Group 1000005862.png"
import Goals2 from "../../assets/Group 1000005863.png"
import Goals3 from "../../assets/Group 1000005864.png"
import { MdKeyboardArrowRight } from "react-icons/md";

const data = [
  {
    image: Goals1,
    para1: "600+",
    para2: "Expert Teachers",
  },
  {
    image: Goals2,
    para1: "12000+",
    para2: "Students",
  },
  {
    image: Goals3,
    para1: "45+",
    para2: "Affiliated Schools",
  },
]

function Goals() {
  return (
    <section className='Goals'>
      <div className="Goals-Container">
        <div className="Goals-Container-Content">
          <div className="Goals-Container-Content-Left">
            <div className="Goals-Container-Content-Left-Content">
              <h2 className="Goals-Container-Content-Left-Content-Heading">Achieve Your <span className='Goals-Container-Content-Left-Content-Heading-Highlight'>Goals</span> With Us</h2>
              <p className="Goals-Container-Content-Left-Content-Para">Celebrating Milestones in Empowering Education and Transforming Lives!!</p>
              <button>
                <span className='Btn-Content'>Know More</span>
                <span className='Btn-Icon'><MdKeyboardArrowRight /></span>
              </button>
            </div>
            <div className="Goals-Container-Content-Left-Items">
              {data.map(({ para1, para2, image }) => {
                return (
                  <div className='Goals-Container-Content-Left-Item'>
                    <div className="Goals-Container-Content-Left-Item-Image">
                      <img src={image} alt="" />
                    </div>
                    <div className="Goals-Container-Content-Left-Item-Content">
                      <p>{para1}</p>
                      <p>{para2}</p>
                    </div>
                    
                  </div>
                )
              })}
            </div>
          </div>
          <div className="Goals-Container-Content-Right">
            <img src={GoalImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Goals
