import React from "react";


import logo1 from '../../assets/hero/1logo.png';
import logo2 from '../../assets/hero/1logo.png';

const ServiceCard = ({ logo, title, description }) => {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg p-4 text-center border">
      <div className="flex justify-center mb-4">
        <img src={logo} alt={title} className="icono" />
      </div>
      <h2 className="titulo">{title}</h2>
      <p className="parrafo">{description}</p>
    </div>
  );
};

const Servicios = () => {
  const services = [
    {
      logo: logo1,
      title: "Consultoría ",
      description: "Ofrecemos asesoramiento .",
    },
    {
      logo: logo2,
      title: "Auditoría ",
      description: "Revisamos y analizamos .",
    },
    {
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },
    {
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },{
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },{
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },{
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },{
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },{
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },{
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },{
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },{
      logo: "/assets/servicio3.png",
      title: "Capacitación",
      description: "Brindamos cursos y talleres sobre las mejores prácticas en seguridad.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Servicios;
