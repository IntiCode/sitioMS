import React from 'react';
import './Hero.css';
import { Button } from 'react-bootstrap';
import logoHero from '../../assets/hero/1logo.png';

const Hero = () => {
    return (
        <section id="inicio" className="Hero">

            <div className='Hero_container'>
                
                <div className='Hero_logo'>
                    <img className='heroImg' src={logoHero} alt="logo" width="250" />
                </div>
                
                <div className="Hero_buttons d-flex gap-2 mb-2">
                    <div className="button_container">
                        <Button id='Servicios' size="lg">
                            Servicios
                        </Button>
                    </div>
                    <div className="button_container">
                        <Button id='Contacto' size="lg">
                            Contacto
                        </Button>
                    </div>

                </div>
            </div>
            
            {/* Onda separadora */}
            <div className="Hero_wave">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,64L40,58.7C80,53,160,43,240,80C320,117,400,203,480,213.3C560,224,640,160,720,149.3C800,139,880,181,960,197.3C1040,213,1120,203,1200,176C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                </svg>
            </div>


        </section>
    );
};

export default Hero;