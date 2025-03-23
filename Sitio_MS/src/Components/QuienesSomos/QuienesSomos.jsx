import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './QuienesSomos.css'; // Archivo CSS para estilos personalizados (opcional)

const QuienesSomos = () => {
  return (
    <Container className="quienes-somos my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4">QUIENES SOMOS</h1>
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
              <Card.Title>Nuestro Compromiso</Card.Title>
              <Card.Text>
                Acompañamos a empresas de diferentes sectores en la implementación de soluciones estratégicas para optimizar procesos y garantizar la seguridad, calidad y sostenibilidad en sus operaciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h3 className="custom-line-height mt-3 mb-3 ">Confía en nuestra experiencia</h3>
          <p className="lead">
            Impulsamos el crecimiento de tu empresa con un enfoque sólido en seguridad, calidad y sostenibilidad.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default QuienesSomos;