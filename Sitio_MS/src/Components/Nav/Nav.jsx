import "./Nav.css";
import { Link } from 'react-scroll';

const Nav = () => {


    return (
        <nav className="nav">
            <ul className="menu">
                <li><Link to="inicio"   smooth={true} duration={200}>Inicio</Link></li>
                <li><Link to="empresa"   smooth={true} duration={500}>Empresa</Link></li>
                <li><Link to="servicios"   smooth={true} duration={200}>Servicios</Link></li>
                <li><Link to="contacto"   smooth={true} duration={500}>Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
