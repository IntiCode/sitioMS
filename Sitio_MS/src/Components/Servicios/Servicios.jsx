import React from "react";
import ServiceCard from "./ServiceCard";
import services from "./servicesData";
import './Servicios.css';

const Servicios = () => {
  return (
    <section id="servicios" className="Servicios"><h2>Nuestros Servicios</h2>
      <div className="container my-5">
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
