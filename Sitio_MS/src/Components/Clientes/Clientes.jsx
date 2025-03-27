import React from 'react'
import Carousel from './Carousel'
import './Clientes.css'

const Clientes = () => {
  return (
    <div id="clientes" className="Clientes">
      <h1 className="title-clientes" >Nuestros Clientes</h1>
      <h3 className="subtitle-clientes">Empresas que confían en nosotros</h3>
      <div >
        <Carousel />
      </div>
    </div>
  )
}

export default Clientes