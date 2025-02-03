import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Link,Stack } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';

interface CookieModalProps {
  onAccept: () => void;
  onReject: () => void;
}

const CookieModal: React.FC<CookieModalProps> = ({ onAccept, onReject }) => {
  const [open, setOpen] = useState(true);

  // Función para cerrar el modal y aceptar las cookies
  const handleAccept = () => {
    onAccept(); // Llamamos la función de aceptación
    setOpen(false); // Cerramos el modal
  };

  // Función para cerrar el modal y rechazar las cookies
  const handleReject = () => {
    onReject(); // Llamamos la función de rechazo
    setOpen(false); // Cerramos el modal
  };

  return (
    <Modal open={open} onClose={() => {}} closeAfterTransition>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {xs:250,sm:300,md:400},
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <CookieIcon color="primary" />
          <Typography id="cookie-modal-title" variant="h6" component="h2" sx={{xs:'8px',sm:'12px',md:'16px'}}>
            Utilizamos Cookies
          </Typography>
        </Stack>
        <Typography id="cookie-modal-description" sx={{ mt: 2 ,fontSize:{xs:'8px',sm:'12px',md:'16px'}}}>
        Usamos cookies para mejorar su experiencia de usuario en nuestra web y para controlar el acceso a distintas partes de nuestra web. 
        </Typography>
        <Typography sx={{ mt: 2 ,fontSize:{xs:'8px',sm:'12px',md:'16px'}}}>
        <Link href="/frontend/policy" target="_blank" underline="hover"  rel="noopener noreferrer">
             Ver política de cookies
          </Link>
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleAccept} sx={{fontSize:{xs:'8px',sm:'12px',md:'14px'}}}>
            Aceptar
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleReject} sx={{fontSize:{xs:'8px',sm:'12px',md:'14px'}}}>
            Rechazar
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CookieModal;
