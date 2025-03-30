import React, { useState, useEffect } from 'react';
import './Header.css';
import '../../App.css';
import logo from '../../assets/hero/1logo.png';
import Nav from './../Nav/Nav'
import NavMobile from './../Nav/NavMobile'; // 
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Condición para detectar móviles
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        
            <div className='header'>
                    <div className='header_logo'>
                        <img id="imgLogo"src={logo} alt="logo"/>
                    </div>

            {isMobile ? <NavMobile /> : <Nav />}
                  {/* <div className='header_nav'> */}
                        {/* {isMobile ? <NavMobile /> : <Nav />}
                    </div>
            )} */}
                    <div className='header_redes d-none d-lg-block'>
                        <ul>
                            <li ><a id="enlaces" href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'><FaInstagram/></a></li>
                            <li><a id="enlaces" href="https://www.linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a></li>
                            <li><a id="enlaces" href="https://www.facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebookSquare/></a></li>
                        </ul>
                    </div>
                
            </div>
        
    )
}

export default Header