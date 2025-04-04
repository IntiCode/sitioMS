import React from 'react'
import './Footer.css';
import '../../App.css'
import imagen from '../../assets/hero/logfooter3.png';
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <section id="footer" className="footer">

            <div className='footer-container'>
                <div className='footer-logo'>
                    <div className='footer-logo-container'>
                        <img src={imagen} alt="Logo" width='80px' />
                        
                    </div>

                </div>


                <div className="footer-secciones">
                    <p><Link to="inicio" smooth={true} duration={200}>Inicio</Link></p>
                    <p><Link to="empresa" smooth={true} duration={500}>Empresa</Link></p>
                    <p><Link to="servicios" smooth={true} duration={200}>Servicios</Link></p>
                    <p><Link to="contacto" smooth={true} duration={500}>Contacto</Link></p>


                </div>

                <div className='footer_redes '>
                    <ul>
                        <li ><a  id="enlacesFooter" href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'><FaInstagram /></a></li>
                        <li><a  id="enlacesFooter" href="https://www.linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a></li>
                        <li><a  id="enlacesFooter" href="https://www.facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebookSquare /></a></li>
                    </ul>
                </div>

            </div>
            <p className='footer-copyright'>Todos los derechos reservados &copy; 2025</p>
            <p className='footer-copyright'>Desarrollado por IntiCode</p>

        </section>
    )
}

export default Footer


