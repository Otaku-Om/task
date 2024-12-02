import React from 'react'
import "./style.css";
import EdTechImage from "../../assets/Group 1000006062.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import EdTechBox1 from "../../assets/image.png";
import EdTechBox2 from "../../assets/image (1).png";
import EdTechBox3 from "../../assets/image (2).png";
import EdTechBox4 from "../../assets/image (3).png";

const data = [
  {
    para: 'Learning and career growth support.',
    image: EdTechBox1,
  },
  {
    para: 'Placement assistances in top-tier schools',
    image: EdTechBox2,
  },
  {
    para: 'Connect & Collaborate - Educator Networks ',
    image: EdTechBox3,
  },
  {
    para: 'Comprehensive training programs.',
    image: EdTechBox4,
  }
]

function EdTech() {
  return (
    <section className='EdTech'>
      <div className="EdTech-Container">
        <div className="EdTech-Container-Content">
          <div className="EdTech-Container-Content-Left">
            <div className="EdTech-Container-Content-Left-Top">
              <img src={EdTechImage} alt="" />
            </div>
            <div className="EdTech-Container-Content-Left-Bottom">
              <h2 className="EdTech-Container-Content-Left-Bottom-Heading">Why <span className='EdTech-Container-Content-Left-Bottom-Heading-Highlight'>Teachers</span> Choose edtech</h2>
              <p className='EdTech-Container-Content-Left-Bottom-Para'>Innovartan empowers teachers with advanced training, recognized certifications, and seamless placements in schools—shaping fulfilling careers & impactful educators.</p>
              <button>
                <span className='Btn-Content'>Get Started</span>
                <span className='Btn-Icon'><MdKeyboardArrowRight /></span>
              </button>
            </div>
          </div>
          <div className="EdTech-Container-Content-Right">
            {data.map(({ para, image }) => {
              return (
                <div className='EdTech-Container-Content-Right-Item'>
                  <div className="EdTech-Container-Content-Right-Item-Image">
                    <img src={image} alt="" />
                  </div>
                  <p className='EdTech-Container-Content-Right-Item-Content'>{para}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EdTech
