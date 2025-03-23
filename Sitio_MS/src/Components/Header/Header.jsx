import React from 'react'
import './Header.css'
import logo from '../../assets/INCRO.jpg'
import Nav from './../Nav/Nav';
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";


const Header = () => {
    return (
        
            <div className='header'>
                    <div className='header_logo'>
                        <img src={logo} alt="logo" style={{ width: '100px', padding: '20px' }} />
                    </div>
                    <div className='header_nav'>
                        <Nav/>
                    </div>
                    <div className='header_redes'>
                        <ul>
                            <li><FaInstagram/></li>
                            <li><FaLinkedin/></li>
                            <li><FaFacebookSquare/></li>
                        </ul>
                    </div>
                
            </div>
        
    )
}

export default Header