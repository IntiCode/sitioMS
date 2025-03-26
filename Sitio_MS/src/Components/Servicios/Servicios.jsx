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
      title: "Asesoramiento en Seguridad, Higiene y Medio Ambiente",
      description: "Consultoría integral para garantizar el cumplimiento de normativas de seguridad, higiene laboral y protección del medio ambiente."
    },
    { 
      logo: logo2,
      title: "Armado de Programas de Seguridad",
      description: "Diseño y desarrollo de programas de seguridad personalizados para mitigar riesgos laborales y cumplir con las regulaciones vigentes."
    },
    { 
      logo: "logo3",
      title: "Gestiones ART",
      description: "Gestión de trámites y acuerdos con Aseguradoras de Riesgos del Trabajo (ART) para asegurar la cobertura y el cumplimiento legal."
    },
    { 
      logo: "logo4",
      title: "Personal Técnico HSE",
      description: "Provisión de personal especializado en Seguridad, Higiene y Medio Ambiente para asistir en proyectos y operaciones."
    },
    { 
      logo: "logo5",
      title: "Firma Responsable HSE",
      description: "Firma certificada para la validación de documentación y el cumplimiento de los estándares HSE en proyectos y operaciones."
    },
    { 
      logo: "logo6",
      title: "Auditorías HSE",
      description: "Evaluación de sistemas y procesos mediante auditorías para garantizar el cumplimiento de normativas y mejorar las prácticas de seguridad."
    },
    { 
      logo: "logo7",
      title: "Confección de Sistemas de Gestión",
      description: "Diseño e implementación de sistemas de gestión HSE, adaptados a las necesidades específicas de cada empresa."
    },
    { 
      logo: "logo8",
      title: "Alquiler de Equipos para Altura y Espacio Confinado",
      description: "Alquiler de equipos especializados para trabajos en altura y espacios confinados, garantizando la seguridad del personal."
    },
    { 
      logo: "logo9",
      title: "Inspección de Líneas de Vida y Elementos de Altura",
      description: "Inspección técnica de líneas de vida y dispositivos de seguridad para trabajos en altura, asegurando su correcto funcionamiento."
    },
    { 
      logo: "logo10",
      title: "Montajes de Líneas de Vida",
      description: "Instalación de sistemas de líneas de vida para trabajos en altura, brindando protección y seguridad a los trabajadores."
    },
    { 
      logo: "logo11",
      title: "Estudios Higiénicos y Medioambientales",
      description: "Análisis y estudios especializados en condiciones higiénicas y ambientales para garantizar un ambiente laboral seguro y saludable."
    },
    { 
      logo: "logo12",
      title: "Capacitación HSE",
      description: "Programas de formación en seguridad, higiene y medio ambiente para mejorar la conciencia y las prácticas de los empleados."
    },
    { 
      logo: "logo13",
      title: "Rescatistas y Equipos de Rescate",
      description: "Provisión de personal capacitado en rescate y equipos especializados para intervenir en emergencias en alturas o espacios confinados."
    },
    { 
      logo: "logo14",
      title: "Armado de Sistemas de Gestión HSE",
      description: "Desarrollo de sistemas de gestión HSE personalizados para asegurar el cumplimiento de normativas y la mejora continua."
    },
    { 
      logo: "logo15",
      title: "Programa de Obras",
      description: "Asesoramiento y diseño de programas de seguridad para obras de construcción, garantizando la protección de los trabajadores en el sitio."
    },
    { 
      logo: "logo16",
      title: "Licitaciones HSE",
      description: "Gestión y elaboración de licitaciones para proyectos que requieren cumplimiento de normativas de seguridad, higiene y medio ambiente."
    },
    { 
      logo: "logo17",
      title: "Estudios Higiénicos y Ambientales",
      description: "Evaluaciones detalladas sobre las condiciones ambientales y laborales para prevenir riesgos y mejorar la salud en el lugar de trabajo."
    },
    { 
      logo: "logo18",
      title: "Alquiler de Equipos de Medición y de Rescate para Altura y Espacios Confinados",
      description: "Alquiler de equipos avanzados para medición y rescate, asegurando condiciones seguras en tareas de riesgo."
    },
    { 
      logo: "logo19",
      title: "Instalación de Líneas de Vida",
      description: "Instalación profesional de sistemas de protección en trabajos en altura para garantizar la seguridad y el cumplimiento normativo."
    },
    { 
      logo: "logo20",
      title: "Certificación de Equipos de Altura",
      description: "Servicios de certificación para equipos de trabajo en altura, asegurando su operatividad y cumplimiento con las normativas de seguridad."
    }
  ]
  ;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Servicios;
