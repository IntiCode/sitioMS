import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import img1 from '../../assets/clientes/Belona.png';



function Carrousel() {
    return (
        <Carousel data-bs-theme="dark" interval={1000} slide>
            <Carousel.Item>
                <div className="d-flex justify-content-around"> 
                    <img id='img' className="d-block" src={img1} alt="Logo 1" />
                    <img id='img' className="d-block" src={img1} alt="Logo 2" />
                    <img id='img' className="d-block" src={img1} alt="Logo 3" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around">
                    <img id='img' className="d-block" src={img1} alt="Logo 1" />
                    <img id='img' className="d-block" src={img1} alt="Logo 2" />
                    <img id='img' className="d-block" src={img1} alt="Logo 3" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around">
                    <img id='img' className="d-block" src={img1} alt="Logo 1" />
                    <img id='img' className="d-block" src={img1} alt="Logo 2" />
                    <img id='img' className="d-block" src={img1} alt="Logo 3" />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;
