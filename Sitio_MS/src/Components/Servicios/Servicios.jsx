import React, { useState, useRef } from "react";
import ServiceCard from "./ServiceCard";
import services from "./servicesData";
import './Servicios.css';
import '../../App.css';
import { Button } from 'react-bootstrap';

const Servicios = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null); // Referencia a la sección de servicios

  const handleToggle = () => {
    setShowAll(!showAll);

    // Si se ocultan los servicios, hacer scroll al inicio de la sección
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView();
    }
  };

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section ref={sectionRef} id="servicios" className="Servicios">
      <h1 className="title">Nuestros Servicios</h1>
      <h3 className="subtitle">Brindamos servicios a todo el país</h3>

      <div className="container my-5">
        <div className="row g-4">
          {visibleServices.map((service, index) => (
            <div className="col-md-6 mb-4 d-flex align-items-stretch" key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        {services.length > 6 && (
          <div className="container_buttons text-center mt-4">
            <Button id="buttons_blanco" size="lg" onClick={handleToggle}>
              {showAll ? "Ver menos" : "Ver más"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Servicios;
