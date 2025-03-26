import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Contacto from './Components/Contacto/Contacto';
import Empresa from './Components/Empresa/Empresa';
import Servicios from './Components/Servicios/Servicios';
import Clientes from './Components/Clientes/Clientes';


function App() {

  return (
    <Router>
      <Header />
      <Hero/>
      <Empresa/> 
      <Servicios/>
      <Clientes/>
      <Contacto/>
      <Footer />
    </Router>
  )
}

export default App
