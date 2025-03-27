import React from 'react'
import './Footer.css';
import imagen from '../../assets/hero/logopeque.png';
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <section id="footer" className="footer">

            <div className='footer-container'>
                <div className='footer-logo'>
                    <div>
                        <img src={imagen} alt="Logo"  width='80px'/>
                        <p>Consultora HSE</p>
                    </div>
                   
                </div>


                <div className="footer-secciones">
                <p><Link to="inicio"   smooth={true} duration={200}>Inicio</Link></p>
                <p><Link to="empresa"   smooth={true} duration={500}>Empresa</Link></p>
                <p><Link to="servicios"   smooth={true} duration={200}>Servicios</Link></p>
                <p><Link to="contacto"   smooth={true} duration={500}>Contacto</Link></p>
                
                
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


