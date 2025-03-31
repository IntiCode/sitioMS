import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import './NavMobile.css';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { menuItems } from './menuItems';



function NavMobile() {
    const [showOffcanvas, setShowOffcanvas] = useState(false); // Estado para controlar el offcanvas
    const [isScrolling, setIsScrolling] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false); // Cierra el menú
    const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas); // Alterna el menú

    // Efecto para manejar el scroll manual mientras el menú está abierto
    useEffect(() => {
        if (showOffcanvas) {
            const handleWheel = () => {
                if (isScrolling) return;
                setIsScrolling(true);
                handleCloseOffcanvas();
                setTimeout(() => setIsScrolling(false), 5000);
            };

            window.addEventListener('wheel', handleWheel);
            return () => window.removeEventListener('wheel', handleWheel);
        }
    }, [showOffcanvas, isScrolling]);

    const handleScroll = (id, e) => {
        e.preventDefault();
        e.stopPropagation(); // Detiene la propagación del evento

        if (isScrolling) return;
        setIsScrolling(true);

        handleCloseOffcanvas();

        // Espera a que el menú se cierre completamente
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                // Usa una posición calculada en lugar de scrollIntoView
                const offset = 80; // Ajusta según tu header fijo
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Actualiza la URL sin disparar navegación
                window.history.replaceState(null, null, `#${id}`);
            }
            setIsScrolling(false);
        }, 300); // Tiempo suficiente para la animación de cierre del menú
    };
;
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-transparent m-3">
                    <Container fluid>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle className='buttonHamburg' aria-controls="offcanvasNavbar" onClick={handleToggleOffcanvas} />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            show={showOffcanvas}
                            onHide={handleCloseOffcanvas}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {menuItems.map((menu, index) => (
                                        <Nav.Link
                                            key={index}
                                            href={`#${menu.id}`} // Importante para accesibilidad
                                            onClick={(e) => handleScroll(menu.id, e)}
                                            className="menu-link"
                                            data-id={menu.id}
                                        >
                                            {menu.title}
                                        </Nav.Link>
                                        
                                    ))}
                                </Nav>
                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavMobile;