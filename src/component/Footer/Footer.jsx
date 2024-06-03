import React from 'react';
import './Footer.css';
import { BsFire } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className='footer-top-box'>
                    <div className='footer-logo'>
                        <div className='footer-logo-img'>
                            <div className='logo-img'><BsFire/></div>
                            <div className='logo-name'>uifry</div>
                        </div>
                        <div className='footer-contact'>
                            <div className='footer-contact-detail'>
                                <div className='footer-contact-detail-img'><MdEmail/></div>
                                <div>help@frybix.com</div>
                            </div>
                            <div className='footer-contact-detail'>
                                <div className='footer-contact-detail-img'><IoCall/></div>
                                <div>+1 234 456 678</div>
                            </div>
                        </div>
                    </div>

                    <div className='footer-col-group'>
                        <div className='footer-col-subgroup'>
                            <div className='footer-col footer-col-1'>
                                <div className='footer-heading'>Links</div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Home</div></div>
                                <div className='footer-text'><div className="dropdown-subheading hov">About Us</div></div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Booking</div></div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Blog</div></div>
                            </div>

                            <div className='footer-col footer-col-2'>
                                <div className='footer-heading'>Legal</div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Term of Use</div></div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Privacy Policy</div></div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Cookies Policy</div></div>
                                {/* <div className='footer-text'><div  className="dropdown-subheading hov">Testing & Calibration</div></div> */}
                            </div>
                        </div>

                        <div className='footer-col-subgroup'>
                            <div className='footer-col footer-col-3'>
                                <div className='footer-heading'>Product</div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Take Tour</div></div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Live Chat</div></div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Reveiws</div></div>
                            </div>

                            <div className='footer-col footer-col-4'>
                                <div className='footer-heading'>
                                    <div className="footer-div">Newsletter</div>
                                </div>
                                <div className='footer-text'><div className="dropdown-subheading hov">Reveiws</div></div>
                                <div className='footer-emailbox'>
                                    <input type="email" placeholder='Your email' required />
                                    <button>Subscribe</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-middle-box'></div>
                <div className='footer-buttom-box'>
                    <div className='copyright-text'>Copyright 2022 uifry.com all rights reserved</div>
                </div>
            </div>
        </>
    )
}

export default Footer