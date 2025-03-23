import React from 'react'
import './Footer.css';
import imagen from '../../assets/INCRO.jpg'

const Footer = () => {
    return (
        <section className='footer'>
            
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src={imagen} alt="Logo" />
                    <p>Consultora HSE</p>
                </div>  
                
                
                    <div className="footer-secciones">
                        <h3>Home</h3>
                        <h3>About us</h3>
                        <h3>Servicios</h3>
                        <h3>Contacto</h3>
                    </div>
                    <div className='footer-redes'>
                        
                        <h3>Redes</h3>
                            <div>Linkedin</div>
                            <div>Instagram</div>
                            <div>Facebook</div>
                    </div>
                           
      </div>
      <p className='footer-copyright'>Todos los derechos reservados &copy; 2025</p>
            
        </section>
    )
}

export default Footer


