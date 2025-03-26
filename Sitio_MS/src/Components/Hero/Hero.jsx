import React from 'react';
import './Hero.css';
import { Button } from 'react-bootstrap';
import logoHero from '../../assets/hero/1logo.png';

const Hero = () => {
    return (
        <section id="inicio" className="Hero">

            <div className='Hero_container'>
                
                <div className='Hero_logo'>
                    <img className='heroImg' src={logoHero} alt="logo" width="200" />
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


        </section>
    );
};

export default Hero;