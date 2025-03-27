import React from "react";

const ServiceCard = ({ logo, title, description }) => {
  return (
    <div className="card h-100">
      <div className="card-body text-center">
        <img src={logo} alt={title} className="card-img-top" style={{ maxWidth: '100px', margin: '0 auto' }} />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;