import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Empresa.css'; 
import compreNeuquinoImg from '../../assets/hero/compreneuquino.png';

const Empresa = () => {
  return (
    <section id="empresa" className="Empresa">
    <Container className="quienes-somos my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4">SOBRE NOSOTROS</h1>
          <p className="lead">Somos una empresa neuquina con más de 18 años de experiencia en la industria Oil & Gas, ingeniería y obras civiles.</p>
        
        </Col>
      </Row>

      <Row className=" mb-4" id="cards_container">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body id="cardBody">
              <Card.Title className='Card_Title'>Nuestra Experiencia</Card.Title>
              <Card.Text>
              Con más de 18 años en el sector, nos hemos especializado en brindar asesoría en seguridad, higiene y medio ambiente. Actualmente, estamos trabajando en diversas industrias, especialmente en Oil & Gas, ingeniería y obras civiles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body id="cardBody">
              <Card.Title className='Card_Title'>Nuestros Servicios</Card.Title>
              <Card.Text>
                Ofrecemos servicios de HSE y medio ambiente, asesorando a nuestros clientes en sistemas de gestión, análisis de riesgo, matriz de riesgo, IPER y KPI. Nos enfocamos en garantizar entornos de trabajo seguros y sustentables.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body id="cardBody">
              <Card.Title className='compromiso'>Nuestro Compromiso</Card.Title>
              <Card.Text className='compromiso'>
                Acompañamos a empresas de diferentes sectores en la implementación de soluciones estratégicas para optimizar procesos y garantizar la seguridad, calidad y sostenibilidad en sus operaciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
  <Col>
    <Card>
      <Card.Body id="cardBody" className="text-center">
        <Card.Title className="compre-title">
          Compre Neuquino
        </Card.Title>
        <Card.Text className="compre-text">
          Somos una empresa certificada bajo la ley provincial 3338 - Compre Neuquino
        </Card.Text>
        <img
          src={compreNeuquinoImg}
          alt="Compre Neuquino"
          className="compre-neuquino-img"
        />
      </Card.Body>
    </Card>
  </Col>
</Row>

      
    </Container>
    </section>
  );
};

export default Empresa;