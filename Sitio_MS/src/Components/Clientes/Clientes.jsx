import React from 'react'
import Carousel from './Carousel'
import './Clientes.css'
import CarouselMobile from './CarouselMobile';


const Clientes = () => {
  return (
    <div id="clientes" className="Clientes">
      <h1 className="title-clientes" >Nuestros Clientes</h1>
      <h3 className="subtitle-clientes">Algunas de las empresas que confían en nosotros</h3>
      <div className='carouselDesk'>
        <Carousel />
      </div>
      <div className='carouselMobile'>
        <CarouselMobile/>
      </div>
    </div>
  )
}

export default Clientes