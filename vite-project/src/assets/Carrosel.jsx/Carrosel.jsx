import React, { cloneElement } from 'react';
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
    <div className="carousel-container" style={{marginTop:"70px", marginBottom:"10px"}}>
      <h2 className="carousel-heading">Outras materias sobre pokemon</h2>
      <Slider {...settings}>
        <div className="carousel-slide">
          <a href="">
          <img src="https://cdn.unifiedcommerce.com/content/product/media/large/079346339013_puzzle_1500.jpg" alt="Imagem 1" />
          <p style={{
            textAlign:'center', color: "black",
            padding:"10px"
          }}>Pokemons iniciais -1 Geração</p>
          </a>
        </div>
        <div className="carousel-slide">
        <a href="">
        <img src="https://puzzlemania-154aa.kxcdn.com/products/2022/puzzle-ravensburger-1500-pieces-pokemon-classic-1500.jpg" alt="Imagem 2" />
          <p style={{
            textAlign:'center', color: "black",
            padding:"10px"
          }}>Pokemons iniciais -3 Geração</p>
          </a>
          
        </div>
        <div className="carousel-slide">
        <a href="">
        <img src="https://http2.mlstatic.com/D_NQ_NP_678979-CBT52696369838_122022-O.webp" alt="Imagem 3" />
          <p style={{
            textAlign:'center', color: "black",
            padding:"10px"
          }}>Pokemons iniciais -4 Geração</p>
          </a>
          
        </div>
        <div className="carousel-slide">
        <a href="">
        <img src="https://frangonerd.net.br/wp-content/uploads/2023/12/dentro-da-pokebola-pokemon-00.webp" alt="Imagem 4" />
          <p style={{
            textAlign:'center', color: "black",
            padding:"10px", verticalAlign:"center"
          }}>Pokemons iniciais</p>
          </a>
          
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>
    </div>
  );
}

export default Carousel;