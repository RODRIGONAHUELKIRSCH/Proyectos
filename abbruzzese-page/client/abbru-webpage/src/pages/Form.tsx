import Grid from '@mui/material/Grid2';
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
import { createUser } from '../apiconnect/apiconnection'; 
import { useNavigate } from 'react-router-dom';
// Expresiones regulares para validar los campos
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,22}$/,
  password: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,24}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10,14}$/,
};

const Register: React.FC = () => {
  const navigate = useNavigate(); 
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [responseMessage, setResponseMessage] = useState(''); 
  const [isFormValid, setIsFormValid] = useState(false); // Estado para controlar la validez del formulario

  // Estado para los errores de validación
  const [errors, setErrors] = useState({
    nombre: '',
    telefono: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Funciones de validación
  const validateNombre = (value: string) => {
    if (!expresiones.nombre.test(value)) {
      setErrors((prev) => ({ ...prev, nombre: 'El nombre debe tener entre 3 y 22 caracteres.' }));
    } else {
      setErrors((prev) => ({ ...prev, nombre: '' }));
    }
  };

  const validateTelefono = (value: string) => {
    if (!expresiones.telefono.test(value)) {
      setErrors((prev) => ({ ...prev, telefono: 'El teléfono debe tener entre 10 y 14 dígitos.' }));
    } else {
      setErrors((prev) => ({ ...prev, telefono: '' }));
    }
  };

  const validateEmail = (value: string) => {
    if (!expresiones.email.test(value)) {
      setErrors((prev) => ({ ...prev, email: 'El correo electrónico no es válido.' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const validatePassword = (value: string) => {
    if (!expresiones.password.test(value)) {
      setErrors((prev) => ({ ...prev, password: 'La contraseña debe tener entre 8 y 24 caracteres, incluir mayúsculas, minúsculas, números y símbolos.' }));
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const validateConfirmPassword = (value: string) => {
    if (value !== password) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Las contraseñas no coinciden.' }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: '' }));
    }
  };

  // Función para validar si todo el formulario es válido
  const validateForm = () => {
    const isValid =
      errors.nombre === '' &&
      errors.telefono === '' &&
      errors.email === '' &&
      errors.password === '' &&
      errors.confirmPassword === '' &&
      nombre.trim() !== '' && // Asegurarse de que los campos no estén vacíos
      telefono.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '';
    
    setIsFormValid(isValid); // Asegurar que solo se asigne un booleano
  };

  // Llamar a validateForm cada vez que cambie algún valor o estado de errores
  useEffect(() => {
    validateForm();
  }, [nombre, telefono, email, password, confirmPassword, errors]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);

    const user = { telefono, password, email, nombre };

    try {
      const createdUser = await createUser(user);
      setResponseMessage(`Usuario ${createdUser.nombre} creado con éxito!`);
      setTimeout(() => {
        navigate('/'); 
      }, 5000);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      setResponseMessage('Hubo un problema al registrar al usuario.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        marginTop: '.1 rem',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url("/public/ortopedia.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" align="center">
            Cree una cuenta
          </Typography>

          <FormControl component="fieldset" fullWidth>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    label="Nombre de usuario"
                    fullWidth
                    required
                    value={nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                      validateNombre(e.target.value);
                    }}
                    onBlur={(e) => validateNombre(e.target.value)} 
                    error={Boolean(errors.nombre)}
                    helperText={errors.nombre}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    label="Teléfono"
                    fullWidth
                    required
                    type="tel"
                    value={telefono}
                    onChange={(e) => {
                      setTelefono(e.target.value);
                      validateTelefono(e.target.value);
                    }}
                    onBlur={(e) => validateTelefono(e.target.value)} 
                    error={Boolean(errors.telefono)}
                    helperText={errors.telefono}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
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
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    label="Contraseña"
                    fullWidth
                    required
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validatePassword(e.target.value);
                    }}
                    onBlur={(e) => validatePassword(e.target.value)} 
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    label="Confirmar Contraseña"
                    fullWidth
                    required
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      validateConfirmPassword(e.target.value);
                    }}
                    onBlur={(e) => validateConfirmPassword(e.target.value)} 
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={!isFormValid} 
                  >
                    Registrarse
                  </Button>
                </Grid>
              </Grid>
            </FormGroup>
          </FormControl>

          {responseMessage && (
            <Typography variant="body2" color={passwordError ? 'error' : 'primary'}>
              {responseMessage}
            </Typography>
          )}

          <Box mt={2}>
            <Link href="/" variant="body2">
              {"¿Ya tienes una cuenta? Inicia sesión"}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;