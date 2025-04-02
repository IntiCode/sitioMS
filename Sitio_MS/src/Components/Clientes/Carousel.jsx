import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import img1 from '../../assets/clientes/Belona.png';
import img2 from '../../assets/clientes/tecpetrol.png';
import img3 from '../../assets/clientes/sodexo.jpg';
import img4 from '../../assets/clientes/cunmalleu.png';
import img5 from '../../assets/clientes/polyar.png';
import img6 from '../../assets/clientes/enersit.png';
import img7 from '../../assets/clientes/incro.jpg';
import img8 from '../../assets/clientes/meopp.jpg';
import img9 from '../../assets/clientes/sanovo.png';
import img10 from '../../assets/clientes/phoenix.png';
import img11 from '../../assets/clientes/swissmedical.png';
import img12 from '../../assets/clientes/galeno.jpg';
import img13 from '../../assets/clientes/psi.jpg';
import img14 from '../../assets/clientes/bureau.png';
import img15 from '../../assets/clientes/iram.png';
import img16 from '../../assets/clientes/horizon.jpg';
import img17 from '../../assets/clientes/gpservicios.jpg';
import img18 from '../../assets/clientes/geopetrol.jpg';
import img19 from '../../assets/clientes/concretar.jpg';
import img20 from '../../assets/clientes/johnmphillips.png';

function Carrousel() {
    return (
        <Carousel data-bs-theme="dark" interval={1000} slide>
            <Carousel.Item>
                <div className="d-flex justify-content-around"> 
                    <img id='img' className="d-block" src={img1} alt="Logo 1" />
                    <img id='img' className="d-block" src={img2} alt="Logo 2" />
                    <img id='img' className="d-block" src={img3} alt="Logo 3" />
                    <img id='img' className="d-block" src={img4} alt="Logo 3" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around">
                    <img id='img' className="d-block" src={img5} alt="Logo 1" />
                    <img id='img' className="d-block" src={img6} alt="Logo 2" />
                    <img id='img' className="d-block" src={img7} alt="Logo 3" />
                    <img id='img' className="d-block" src={img8} alt="Logo 3" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around">
                    <img id='img' className="d-block" src={img9} alt="Logo 1" />
                    <img id='img' className="d-block" src={img10} alt="Logo 2" />
                    <img id='img' className="d-block" src={img11} alt="Logo 3" />
                    <img id='img' className="d-block" src={img12} alt="Logo 3" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around">
                    <img id='img' className="d-block" src={img13} alt="Logo 1" />
                    <img id='img' className="d-block" src={img14} alt="Logo 2" />
                    <img id='img' className="d-block" src={img15} alt="Logo 3" />
                    <img id='img' className="d-block" src={img16} alt="Logo 3" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around">
                    <img id='img' className="d-block" src={img17} alt="Logo 1" />
                    <img id='img' className="d-block" src={img18} alt="Logo 2" />
                    <img id='img' className="d-block" src={img19} alt="Logo 3" />
                    <img id='img' className="d-block" src={img20} alt="Logo 3" />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;
