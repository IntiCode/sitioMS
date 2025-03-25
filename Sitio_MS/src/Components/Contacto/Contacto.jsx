import React from 'react';
import './Contacto.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';

const Contacto = () => {
    return (
        <section id="contacto" className="Contacto">
            <div className='Contacto-title'>
                <h1 className='custom-line-height'>Contacto</h1>
                <p>Para más información, contáctanos en:</p>

            </div>

            <div className="contact_options">
                <article className='contact_mail'>
                    <MdOutlineMailOutline className="contact-icon" />
                    <h4>Email</h4>
                    <h5>msnqn.seguridad@gmail.com</h5>
                    <a href="" target="_blank" rel="noopener noreferrer">Envía un mensaje</a>
                </article>

                <article className="contact_whatsapp">
                    <SiWhatsapp className="contact-icon" />
                    <h4>Whatsapp</h4>
                    <div className="contactowhatsapp">
                        <div className="contactwhatsapp-item">
                            <a href="https://wa.me/+" target="_blank" rel="noopener noreferrer">+54 9 </a>
                        </div>
                        <div className="contactwhatsapp-item">
                            <a href="https://wa.me/+" target="_blank" rel="noopener noreferrer">+54 9 </a>
                        </div>
                    </div>

                </article>

                <form >
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

