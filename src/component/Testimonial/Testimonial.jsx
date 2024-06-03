import React from 'react'
import './Testimonial.css'
import elipse from "../../assets/Group 35898.png"
import grade from "../../assets/Group 35896.png"
import people from "../../assets/Group 35917.png"
import quad from "../../assets/Group 1000002331.png"
function Testimonial() {
  return (
    <div className='testimonial'>
      <div className='header'>
        <h4>TESTIMONIAL</h4>
        <h1>What Our Users Say About Us?</h1>
      </div>
      <div className='box'>
        <div  className='t_img'>
          <div className='t_img1'><img src={quad} alt="" /></div>
          <div className='t_img2'><img src={elipse} alt="" /></div>
          <div className='t_img3'><img src={grade} alt="" /></div>
        </div>
        <div className='box_1'>
          <h3>The Best Financial Accounting App Ever!</h3>
          <h5>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</h5>
          <div className='t_img4'><img src={people} alt="" />
          <h5>Nick Jonas</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
