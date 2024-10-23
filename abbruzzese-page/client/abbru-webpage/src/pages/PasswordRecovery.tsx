import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
} from '@mui/material';
import { resetPassword } from '../apiconnect/apiconnection'; // Asegúrate de implementar esta función
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token') || ''; // Obtén el token de la URL
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
  
    try {
      console.log('Token:', token);
      console.log('Nueva Contraseña:', newPassword);
      
      const response = await resetPassword(token, newPassword);
      setResponseMessage('Contraseña restablecida correctamente. Puedes iniciar sesión ahora.');
      
      setTimeout(() => {
        navigate('/signin');
      }, 5000);
      setError('');
    } catch (error) {
      setResponseMessage('');
      setError('Error al restablecer la contraseña. Genera un nuevo token');
      setTimeout(() => {
        navigate('/recover'); 
      }, 5000);
    }
  };

  return (
    <Box
    sx={{
      minHeight: '100vh',
      minWidth: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url("/public/pruebaimagenfondo.jpg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Container maxWidth="sm">
      <Box sx={{minWidth:'100%',maxWidth:'100%', marginTop: '2rem', padding: '15px', borderRadius: '10px', boxShadow: 3 ,color:'#FFFFFF',backgroundColor: 'rgba(0, 0, 0, 0.7)' ,}}>
        <Typography sx={{marginBottom:'25px'}} variant="h4" align="center">Restablecer Contraseña</Typography>
        <FormControl component="fieldset" fullWidth>
          <TextField
             sx={{
                justifyContent:'center',
                marginTop:'10px',
                marginBottom:'15px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FFFFFF' }, // Borde blanco
                  '&:hover fieldset': { borderColor: '#FFFFFF' }, // Borde blanco al pasar el cursor
                },
              }}
            label="Nueva Contraseña"
            fullWidth
            required
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            slotProps={{
                inputLabel: {
                  style: { color: '#FFFFFF' ,}, // Color del label en blanco
                  
                },
              }}
          />
          <TextField
            label="Confirmar Contraseña"
            fullWidth
            required
            type="password"
            sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FFFFFF' }, // Borde blanco
                  '&:hover fieldset': { borderColor: '#FFFFFF' }, // Borde blanco al pasar el cursor
                },
              }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  slotProps={{
                inputLabel: {
                  style: { color: '#FFFFFF' }, // Color del label en blanco
                },
              }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: '1.5rem' }}
            onClick={handleSubmit}
          >
            Restablecer Contraseña
          </Button>
        </FormControl>
        {responseMessage && (
          <Typography variant="body2" color="primary" sx={{ marginTop: '1rem' }}>
            {responseMessage}
          </Typography>
        )}
        {error && (
          <Typography variant="body2" color="error" sx={{ marginTop: '1rem' }}>
            {error}
          </Typography>
        )}
      </Box>
    </Container>
    </Box>
  );
};

export default ResetPassword;