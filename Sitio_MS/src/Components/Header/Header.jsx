import React from 'react'
import './Header.css'
import logo from '../../assets/INCRO.jpg'


const Header = () => {
    return (
        
            <div className='header'>
                    <div className='header_logo'>
                        <img src={logo} alt="logo" style={{ width: '100px', padding: '20px' }} />
                    </div>
                    <div className='header_nav'>
                        <h1>Falta Nav</h1>
                    </div>
                    <div className='header_redes'>
                        <ul>
                            <li>Redes</li>
                            <li>Redes</li>
                            <li>Redes</li>
                        </ul>
                    </div>
                
            </div>
        
    )
}

export default Header