import React from "react";
import './ServiceCard.css';

const ServiceCard = ({ logo, title, description }) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <img className="card-img-top" src={logo} alt={title} style={{ maxWidth: '80px', margin: '1rem auto' }} />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;