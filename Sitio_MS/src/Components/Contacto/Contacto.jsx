import React from 'react';
import './Contacto.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';

const Contacto = () => {
    return (
        <section id="contacto" className="Contacto">
            <div className='Contacto-title'>
                <h1 className='custom-line-height'>Contacto</h1>
                

            </div>

            <div className="contact_options">
                <article className='contact_mail'>
                    <MdOutlineMailOutline className="contact-icon" />
                    <h4 className='contacto-title'>Email</h4>
                    <h5>msnqn.seguridad@gmail.com</h5>
                    <a href="" target="_blank" rel="noopener noreferrer">Envía un mensaje</a>
                </article>

                <article className="contact_whatsapp">
                    <SiWhatsapp className="contact-icon" />
                    <h4 className='contacto-title'>Whatsapp</h4>
                    <div className="contactowhatsapp">
                        <div className="contactwhatsapp-item">
                            <a href="https://wa.me/+542996732349" target="_blank" rel="noopener noreferrer">+542996732349 </a>
                        </div>
                        <div className="contactwhatsapp-item">
                            <a href="https://wa.me/+542914020745" target="_blank" rel="noopener noreferrer">+542914020745 </a>
                        </div>
                    </div>

                </article>

                <form className='container_form' >
                    <div className="form-control">

                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"

                            required
                        />
                    </div>

                    <div className="form-control">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"

                            required
                        />

                    </div>
                    <div className="form-control">
                        <textarea
                            name="message"
                            rows="7"
                            placeholder="Mensaje"

                            required
                        ></textarea>

                    </div>
                    <button type="submit" className="send">Enviar</button>

                </form></div>



        
        </section >

    )
}

export default Contacto

