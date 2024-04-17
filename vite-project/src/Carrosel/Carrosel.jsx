import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrosel.css'; // Importa o arquivo CSS para aplicar estilos

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Nossas Imagens</h2>
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src="https://enjoynstick.wordpress.com/wp-content/uploads/2015/08/b1646-blast.jpg" alt="Imagem 1" />
        </div>
        <div className="carousel-slide">
          <img src="https://puzzlemania-154aa.kxcdn.com/products/2022/puzzle-ravensburger-1500-pieces-pokemon-classic-1500.jpg" alt="Imagem 2" />
        </div>
        <div className="carousel-slide">
          <img src="https://via.placeholder.com/500" alt="Imagem 3" />
        </div>
        <div className="carousel-slide">
          <img src="https://via.placeholder.com/500" alt="Imagem 4" />
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>
    </div>
  );
}

export default Carousel;