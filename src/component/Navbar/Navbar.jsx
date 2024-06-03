import React from 'react';
import './Navbar.css'
import MenuIcon from '../../assets/menu-line.png'
import Logo from "../../assets/Group (1).png"  

const Navbar = () => {

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
        setTimeout(() => {
            document.getElementById("menu_line").style.display = "none";
        }, 300)
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("menu_line").style.display = "block";
        console.log("ok")
    }

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-container-left'>
                    <div className='navbar-logo'>
                        <img src={Logo} alt="" srcset="" />
                    </div>
                    <div className='navbar-navigation'>
                        <div className='navbar-navigation-link nav-home'>
                            Home
                        </div>
                        <div className='navbar-navigation-link'>
                            About Us
                        </div>
                        <div className='navbar-navigation-link'>
                            Pricing
                        </div>
                        <div className='navbar-navigation-link'>
                            Feature
                        </div>
                    </div>
                </div>
                <div className='navbar-container-right'>
                    <div className='navbar-button'>
                        <button>Download</button>
                    </div>
                    <div className='menu-section'>
                        <button onClick={openNav} id="menu_line" >
                            <img src={MenuIcon}/>
                        </button>
                    </div>
                </div>

            </div>

            <div className="Curtain_Menu">

                <div id="myNav" className="overlay">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

                    <div className="overlay-content">
                        <div  className="link" onClick={closeNav}>Home</div>
                        <div  className="link" onClick={closeNav}>About Us</div>
                        <div  className="link" onClick={closeNav}>Pricing</div>
                        <div  className="link" onClick={closeNav}>Feature</div>
                        <div className="contact_section-menu">
                            <div className="linkcontactus" onClick={closeNav}> <button>Download</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar