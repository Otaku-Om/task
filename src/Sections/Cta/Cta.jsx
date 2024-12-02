import React from 'react'
import CtaShape from "../../assets/Ellipse 149.png";
import "./style.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function Cta() {
  return (
    <section className='Cta'>
      <div className="Cta-Container">
        <div className="Cta-Container-Content">
          <div className="Cta-Container-Content-Left">
            <h2 className="Cta-Container-Content-Left-heading">
            Boost your teaching <span className='Cta-Container-Content-Left-heading-highlight'>career</span> with specialized <span className='Cta-Container-Content-Left-heading-highlight'>training</span> designed for <span className='Cta-Container-Content-Left-heading-highlight'>growth</span> and success.
            </h2>
            <p className="Cta-Container-Content-Left-Para">Begin your journey with Eduvartan Today!!</p>
            <div className="Cta-Container-Content-Left-Btns">
              <button>
                <span className='Btn-Content'>Get Started</span>
                <span className='Btn-Icon'><MdKeyboardArrowRight /></span>
                
              </button>
              <button>
                <span className='Btn-Icon'><FaPhoneVolume /></span>
                <span className='Btn-Content'>6397539738</span>
              </button>
            </div>
          </div>
          <div className="Cta-Container-Content-Right">
            <img src={CtaShape} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
