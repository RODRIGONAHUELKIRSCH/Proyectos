import { jsx as _jsx } from "react/jsx-runtime";
import Slider from 'react-slick';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
const ImageSlider = ({ slides }) => {
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
    return (_jsx(Box, { sx: {
            top: '1vh',
            width: { xs: '80%', sm: '90%' }, // Asegura que el slider ocupe todo el ancho
            height: { xs: '100%', sm: '90%', md: '60%' }, // Ajusta la altura del contenedor aquí
            position: 'relative',
            margin: '0 auto'
        }, children: _jsx(Slider, { ...settings, children: slides.map((slide, index) => (_jsx(Box, { sx: {
                    position: 'relative',
                }, children: _jsx(Link, { to: slide.link, children: _jsx(Box, { component: "img", src: slide.image, alt: `Slide ${index + 1}`, sx: {
                            width: '100%', // Asegura que la imagen ocupe todo el ancho
                            height: { xs: 'auto', sm: 'auto', md: 'auto' }, // Ajusta la altura para llenar el contenedor
                            objectFit: { xs: 'contain', sm: 'contain', md: 'cover' }, // Muestra toda la imagen sin recortes
                            position: 'relative', // Para centrar la imagen
                        } }) }) }, index))) }) }));
};
export default ImageSlider;
