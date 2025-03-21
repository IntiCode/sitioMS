import React from 'react'
import Button from '../Button';

const Contacto = () => {
    return (
        <div className='contacto'>
            <h1>Contacto</h1>
            <Button
                color='rgb(120,205,30)'    // Color normal del botón
                hover='green'    // Color del botón al hacer hover
                text='Enviar'
                border='1px solid black'   // Borde del botón 

                
            />
            
        </div>
    )
}

export default Contacto