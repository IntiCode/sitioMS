import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Empresa.css'; 

const Empresa = () => {
  return (
    <section id="empresa" className="Empresa">
    <Container className="quienes-somos my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4">SOBRE NOSOTROS</h1>
          <p className="lead">Somos una empresa con más de 18 años de experiencia en la industria Oil & Gas, ingeniería y obras civiles.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Nuestra Experiencia</Card.Title>
              <Card.Text>
                Con más de 18 años en el sector, nos hemos especializado en brindar asesoría en seguridad, higiene y medio ambiente. Hemos trabajado en diversas industrias, especialmente en Oil & Gas, ingeniería y obras civiles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Nuestros Servicios</Card.Title>
              <Card.Text>
                Ofrecemos servicios de asesoramiento en sistemas de gestión, análisis de riesgo, matrices de riesgo y definición de KPI. Nos enfocamos en garantizar entornos de trabajo seguros y sustentables.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className='compromiso'>Nuestro Compromiso</Card.Title>
              <Card.Text className='compromiso'>
                Acompañamos a empresas de diferentes sectores en la implementación de soluciones estratégicas para optimizar procesos y garantizar la seguridad, calidad y sostenibilidad en sus operaciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </Container>
    </section>
  );
};

export default Empresa;