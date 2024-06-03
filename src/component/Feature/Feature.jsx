import React from 'react'
import './Feature.css'
import { GrCube } from "react-icons/gr";
import { PiCubeTransparentBold } from "react-icons/pi";
import { PiStarFourBold } from "react-icons/pi";
import Phone from "../../assets/iPhone-13-Pro-Front (3).png"
import elipse from "../../assets/Group 35898.png"
import grade from "../../assets/Group 35896.png"
import Phone2 from "../../assets/iPhone-13-Pro-Front (4).png"
import card from "../../assets/Group.png"
import hold from "../../assets/On Hold.png"
import { FiBell } from "react-icons/fi";
function Feature() {
  return (
    <div className='Feature'>
      <div className='Feature1'>
        <div className='img'>
          <div><img src={Phone} alt="" srcset="" /></div>
          <div className='img2'><img src={elipse} alt="" /></div>
          <div className='img3'><img src={grade} alt="" /></div>
        </div>
        <div className='text'>
          <h4 className='head'>FEATURES</h4>
          <h1>Uifry Premium</h1>
          <div className='content'>
            <div className='context'>
              <h4><span><PiStarFourBold/></span>Budgeting Intervals</h4>
              <h5>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h5>
            </div>
            <div className='context'>
              <h4><span><GrCube/></span>Budgeting Intervals</h4>
              <h5>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h5>
            </div>
            <div className='context'>
              <h4><span><PiCubeTransparentBold/></span>Budgeting Intervals</h4>
              <h5>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='Feature1'>
      <div className='text block1'>
          <h4 className='head'>ADVANTAGES</h4>
          <h1>Why Choose Uifry ?</h1>
          <div className='content'>
            <div className='context'>
              <h4><span><FiBell/></span>Clever Notifications</h4>
              <h5>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</h5>
            </div>
          </div>
        </div>
        <div className='img'>
          <div><img src={Phone2} alt="" srcset="" /></div>
          <div className='img2'><img src={elipse} alt="" /></div>
          <div className='img3'><img src={grade} alt="" /></div>
          <div className='img4'><img src={hold} alt="" /></div>
        </div>
        
      </div>
      <div className='Feature1'>
        <div className='img'>
          <div><img src={Phone} alt="" srcset="" /></div>
          <div className='img2'><img src={elipse} alt="" /></div>
          <div className='img3'><img src={grade} alt="" /></div>
          <div className='img5'><img src={card} alt="" /></div>
        </div>
        <div className='text block2'>
          <div className='content'>
            <div className='context'>
              <h4><span><PiStarFourBold/></span>Fully Customizable</h4>
              <h5>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Feature
