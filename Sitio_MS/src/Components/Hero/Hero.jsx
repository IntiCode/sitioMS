import React from 'react';
import './Hero.css';
import Button from '../Button';

const Hero = () => {
    return (
        <section className='Hero'>
            <div className='Hero_container'>
                <h1>MS</h1>
                <h2>Consultora</h2>
            </div>
            <div>
                <Button
                    color='blue'    // Color normal del botón
                    hover='red'    // Color del botón al hacer hover
                    text='Más info' // Texto del botón
                    border='1px solid black'   // Borde del botón
                />
            </div>
        </section>
    );
};

export default Hero;