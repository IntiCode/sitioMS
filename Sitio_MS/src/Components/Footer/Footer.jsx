import React from 'react'
import './Footer.css';
import imagen from '../../assets/INCRO.jpg'
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='footer'>

            <div className='footer-container'>
                <div className='footer-logo'>
                    <div>
                        <img src={imagen} alt="Logo"  width='80px'/>
                    </div>
                    <div>
                        <p>Consultora HSE</p>
                    </div>

                </div>


                <div className="footer-secciones ">
                    <h3>Home</h3>
                    <h3>About us</h3>
                    <h3>Servicios</h3>
                    <h3>Contacto</h3>
                </div>

                <div className='footer-redes'>
                    <span><FaInstagram /></span>
                    <span><FaLinkedin /></span>
                    <span><FaFacebookSquare /></span>
                </div>

            </div>
            <p className='footer-copyright'>Todos los derechos reservados &copy; 2025</p>

        </section>
    )
}

export default Footer


