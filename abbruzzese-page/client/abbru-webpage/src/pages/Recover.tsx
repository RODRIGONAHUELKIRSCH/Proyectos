import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  FormGroup,
  Link,
} from '@mui/material';
import { checkEmailExists } from '../apiconnect/apiconnection'; 
 import { useNavigate } from 'react-router-dom';

const Recover: React.FC = () => {

  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState(''); 
  const [userName, setUserName] = useState(''); 


  // Función para validar el correo electrónico
  const validateEmail = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('El correo electrónico no es válido.');
    } else {
      setEmailError('');
    }
  };

  // Función para validar si el formulario es válido
  const validateForm = () => {
    const isValid = emailError === '' && email.trim() !== '';
    setIsFormValid(isValid); // Actualiza el estado de validez del formulario
  };

  // Llamar a validateForm cada vez que cambie algún valor
  useEffect(() => {
    validateForm();
  }, [email, emailError]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Enviar la solicitud GET al endpoint de la API
      const response = await checkEmailExists(email); // Llamada a la API
      
      if (response) {
        // Asignar el nombre y la contraseña del usuario desde la respuesta
        setUserName(response.nombre); // Almacena el nombre

        setMessage(`Se le enviara un correo para reestablecer la contraseña. `);

        setTimeout(() => {
        navigate('/signin'); // Redirige a la página de inicio de sesión
      }, 5000);
      } else {
        setMessage('El correo electrónico no está registrado.');
      }

    } catch (error) {
      console.error('Error al verificar el email:', error);
      setMessage('Error al verificar el email.');
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
        backgroundImage: `url("/public/ortopedia3.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box mt={4} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          padding: '10px',
          borderRadius: '10px',
          boxShadow: 3,
        }}>
          <Box>
            <Typography mt={8} mb={8} variant="h4" align="center">
              Recuperar Contraseña
            </Typography >

            {message && <Typography sx={{marginBottom:'1rem'}} color="green" align="center">{message}</Typography>}

            <FormControl component="fieldset" fullWidth>
              <FormGroup>
                <TextField
                  label="Correo electrónico"
                  fullWidth
                  required
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  onBlur={(e) => validateEmail(e.target.value)} 
                  error={Boolean(emailError)}
                  helperText={emailError}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={!isFormValid} // Deshabilitar el botón si el formulario no es válido
                  sx={{marginTop:{xs:'2rem'}}}
                >
                  Recuperar
                </Button>

                <Link mt={3} href="/signin" variant="body2">
                  {"Volver a Iniciar Sesion"}
                </Link>
              </FormGroup>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Recover;