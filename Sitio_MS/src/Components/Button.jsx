import React from 'react'
import './Button.css'


const Button = ({text,color,hover}) => {
    return (
    <div>
        <button>
            {text}

        </button>
    </div>
    )
}

export default Button