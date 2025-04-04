import React from 'react';
import './Hero.css';
import '../../App.css'
import { Button } from 'react-bootstrap';
import logoHero from '../../assets/hero/logoblanc1.png';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="inicio" className="Hero">

            <div className='Hero_container'>
                
                <div className='Hero_logo'>
                    <img className='heroImg' src={logoHero} alt="logo" width="200" />
                </div>
                
                <div className="Hero_buttons d-flex gap-2 mb-2">
                    <div className="button_container">
                        <Button id='Servicios' >
                            <Link to="servicios" smooth={true} duration={200}>Servicios</Link>
                        </Button>
                    </div>
                    <div className="button_container">
                        <Button id='Contacto' >
                            <Link to="contacto" smooth={true} duration={500}>Contacto</Link>
                        </Button>
                    </div>

                </div>
            </div>
            
            {/* Onda separadora */}
            <div className="Hero_wave">
                <svg
                    className="Hero_wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 150"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="gradienteOnda" x1="0" y1="1" x2="0" y2="0">
                            <stop offset="0%" stopColor="#f3f2f2" />
                            <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,100 C480,200 960,0 1440,100 L1440,150 L0,150 Z"
                        fill="url(#gradienteOnda)"
                    />
                </svg>

            </div>


        </section>
    );
};

export default Hero;