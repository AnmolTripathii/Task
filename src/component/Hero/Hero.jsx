import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import IMG_1 from "../../assets/Ellipse 2.png"
import IMG_2 from "../../assets/Group 35887.png"
import IMG_3 from "../../assets/iPhone-13-Pro-Front (1).png"
import IMG_4 from "../../assets/iPhone-13-Pro-Front (2).png"
import IMG_5 from "../../assets/iPhone-13-Pro-Front.png"
import Back from  "../../assets/Group 35896.png"
import Bottom from "../../assets/Group 35924.png"
import './Hero.css'
function hero() {
  return (
    <div className='Hero'>
      <div className='Herosub_1'>
        <h1>Make The Best Financial Decisions</h1>
        <div className='Back'><img src={Back} alt="" /></div>
        <h3>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h3>
        <div className='Buttons'>
            <button className='btn_1'>Get Started <FaArrowRightLong /></button>
            <button className='btn_2'><FaRegCirclePlay/> Watch Video</button>
        </div>
        <div className='Bottom'><img src={Bottom} alt="" /></div>
      </div>
      <div className='Herosub_2'>
        <div className='IMG_1'><img className='demi_1'  src={IMG_1} alt="" /></div>
        <div className='IMG_2'><img className='demi_2'  src={IMG_2} alt="" /></div>
        <div className='IMG_4'><img className='demi_3'  src={IMG_4} alt="" /></div>
        <div className='IMG_3'><img className='demi_4'  src={IMG_3} alt="" /></div>
        <div className='IMG_5'><img className='demi_5'  src={IMG_5} alt="" /></div>

      </div>
    </div>
  )
}

export default hero
