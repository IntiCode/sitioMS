import React, {useState} from 'react';
import './Contacto.css';
import '../../App.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validar Email
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        if (!isValidEmail(formData.email)) {
            setError('Ingresa un email válido.');
            return;
        }

        setError('');

        emailjs.send(
            'service_ht6lfhg', // Reemplaza con tu Service ID de EmailJS
            'template_28rd72l', // Reemplaza con tu Template ID de EmailJS
            {
                user_name: formData.name,
                user_email: formData.email,
                message: formData.message
            },
            'aQiJtmRCzePLbjh4x' // Reemplaza con tu Public Key de EmailJS
        )
            .then(() => {
                setSuccess('Mensaje enviado correctamente.');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setError('Hubo un error al enviar el mensaje.');
            });
    };


    return (
        <section id="contacto" className="Contacto">
            <div className='Contacto-title'>
                <h1 className='custom-line-height'>Contacto</h1>


            </div>

            <div className="contact_options">
                <div className="contact_card">
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
                            <Button id="buttons_blanco"><a href="https://wa.me/+542996732349" target="_blank" rel="noopener noreferrer">+54 9 2996732349 </a></Button>
                        </div>
                        <div className="contactwhatsapp-item">
                            <Button id="buttons_blanco"><a href="https://wa.me/+542914020745" target="_blank" rel="noopener noreferrer">+54 9 2914020745 </a></Button>
                        </div>
                    </div>

                </article>
                </div>

                {/* Nueva sección de direcciones */}

                <div className="contact_addresses">
                    <h4 className='contacto-title'>Nuestras Oficinas</h4>
                    <div className="address-grid">
                        <div className="address-item">
                            <h5>Neuquén</h5>
                            <p>Pergamino 1531, Neuquén Capital</p>
                        </div>
                        <div className="address-item">
                            <h5>Bahía Blanca</h5>
                            <p>Tierra del Fuego 860, Bahía Blanca</p>
                        </div>
                        <div className="address-item">
                            <h5>Añelo</h5>
                            <p>Manzana D Lote 7, Parque Industrial Añelo</p>
                        </div>
                    </div>
                </div>

                <form className='container_form' onSubmit={handleSubmit} >
                    <h3 className='title-form'>Envianos tu consulta</h3>
                    <div className="form-control">

                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>
                    <div className="form-control">
                        <textarea
                            name="message"
                            rows="7"
                            placeholder="Mensaje"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        >

                        </textarea>

                    </div>

                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}

                    <button type="submit" className="send" mailto="">Enviar</button>

                </form></div>




        </section >

    )
}

export default Contacto

