import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom'; 

interface Slide {
  image: string; // URL de la imagen
  link: string;
}

interface ImageSliderProps {
  slides: Slide[]; // Lista de objetos con imagen y texto
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Cambiar cada 5 segundos
    arrows: true,
  };

  return (
    <Box
      sx={{
        top:'1vh',
        width: {xs:'80%',sm:'90%'}, // Asegura que el slider ocupe todo el ancho
        height: {xs:'100%',sm:'90%',md:'60%'}, // Ajusta la altura del contenedor aquí
        position: 'relative',
        margin:'0 auto'
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ 
            position: 'relative', 
          }}>
            <Link to={slide.link}>
            <Box
              component="img"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              sx={{
                width: '100%', // Asegura que la imagen ocupe todo el ancho
                height: {xs:'auto',sm:'auto',md:'auto'}, // Ajusta la altura para llenar el contenedor
                objectFit: {xs:'contain',sm:'contain',md:'cover'}, // Muestra toda la imagen sin recortes
                position: 'relative', // Para centrar la imagen

              }}
            />
          </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;


