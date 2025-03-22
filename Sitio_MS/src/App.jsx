import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Contacto from './Components/Contacto/Contacto';
import QuienesSomos from './Components/QuienesSomos/QuienesSomos';
import Servicios from './Components/Servicios/Servicios';
import Clientes from './Components/Clientes/Clientes';


function App() {

  return (
    <>
      <Header />
      <Hero/>
      <QuienesSomos/> 
      <Servicios/>
      <Clientes/>
      <Contacto/>
      <Footer />
    </>
  )
}

export default App
