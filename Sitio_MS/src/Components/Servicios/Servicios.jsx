import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import services from "./servicesData";
import './Servicios.css';

const Servicios = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 9);

  return (
    <section id="servicios" className="Servicios">
      <h2>Nuestros Servicios</h2>
      <div className="container my-5">
        <div className="row g-4">
          {visibleServices.map((service, index) => (
            <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        {!showAll && services.length > 9 && (
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={() => setShowAll(true)}>
              Ver más
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Servicios;

