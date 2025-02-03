import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Paper, Typography, List, ListItemButton } from '@mui/material';
import { fetchImagesByState } from '../src/apiconnect/apiconnection';
import { EventImage } from './types';

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<EventImage[]>([]);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const loadImages = async (state: string) => {
    const images = await fetchImagesByState(state);
    setSlides(images);
    setCurrentIndex(0);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (intervalId.current) clearInterval(intervalId.current);

    if (slides.length > 0) {
      intervalId.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
    }
  };

  useEffect(() => {
    loadImages("Activo");
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    resetAutoSlide();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    resetAutoSlide();
  };

  return (
    <Box sx={{ display: 'flex', height: { xs: '70vh', sm: '70vh', md: '70vh' }, width: '100%' }}>
      <Paper
        sx={{
          width: { xs: '30%', sm: '30%', md: '15%' },
          height: '100%',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
          position: { xs: 'relative', sm: 'relative' },
          top: { xs: 'auto' },
        }}
      >
        <List sx={{ padding: {xs:'0rem',sm:"0.5rem",md:'1rem'} }}>
          <ListItemButton onClick={() => loadImages("Activo")} sx={{ border: 'solid 1px white', borderRadius: '10px', marginBottom: '15px', backgroundColor: '#00349a', '&:hover': { backgroundColor: 'rgba(0, 0, 5, 0.7)' },justifyContent:'center',alignItems:'center' }}>
            <Typography sx={{fontSize:{xs:'8px',sm:'12px',md:'16px'},whiteSpace:'nowrap'}}>Estaremos en:</Typography>

          </ListItemButton>
          <ListItemButton onClick={() => loadImages("Inactivo")} sx={{ border: 'solid 1px white', borderRadius: '10px', marginBottom: '15px', backgroundColor: '#00349a', '&:hover': { backgroundColor: 'rgba(0, 0, 5, 0.7)' } ,justifyContent:'center',alignItems:'center'}}>
            <Typography sx={{fontSize:{xs:'8px',sm:'12px',md:'16px', whiteSpace:'nowrap'}}}>Estuvimos en:</Typography>
          </ListItemButton>
        </List>
      </Paper>

      <Box sx={{ width: { xs: '100%', sm: '70%', md: '85%' }, height: '100%', position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: { xs: 0, sm: 'auto' } }}>
        <Box sx={{ margin: { xs: 'auto', sm: '0px 5px' }, height: '100%' }}>
          <Paper
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url(${slides[currentIndex]?.eventImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
          />
        </Box>
        <Button onClick={handlePrev} sx={{
          position: 'absolute',
          top: '50%',
          left: { xs: '10px', sm: '26px' },
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          fontSize:{xs:'8px',sm:'12px',md:'16px'}
        }}>Anterior</Button>
        <Button onClick={handleNext} sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '10px', sm: '26px' },
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 5, 0.7)' },
          fontSize:{xs:'8px',sm:'12px',md:'16px'}
        }}>Siguiente</Button>
      </Box>
    </Box>
  );
};

export default ImageSlider;
