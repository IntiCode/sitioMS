import React from 'react';
import PropTypes from 'prop-types';
//import './Button.css';

const Button = ({ text, color, hover, border }) => {
    const buttonStyle = {
        backgroundColor: color, // Color de fondo normal
        padding: '10px 20px',
        border: border, //,
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = hover; // Cambia el color al hacer hover
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = color; // Restaura el color al salir del hover
    };

    return (
        <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    hover: PropTypes.string.isRequired,
};

export default Button;