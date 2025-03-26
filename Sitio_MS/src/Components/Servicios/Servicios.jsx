import React from "react";
import ServiceCard from "./ServiceCard";
import services from "./servicesData";
import './Servicios.css';

const Servicios = () => {
  return (
    <section id="servicios" className="Servicios">
      <div className="container my-5">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
