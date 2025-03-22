import React from 'react';
import './Hero.css';
import { Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className='Hero'>

            <div className='Hero_container'>
                <h1>MS-Seguridad</h1>
                <h2>Consultora en HSE</h2>
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
        </section>
    );
};

export default Hero;