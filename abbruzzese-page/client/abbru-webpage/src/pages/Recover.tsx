// import Grid from '@mui/material/Grid2';
// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   FormControl,
//   FormGroup,
//   Link,
// } from '@mui/material';
// import { checkEmailExists } from '../apiconnect/apiconnection'; // Asegúrate de que la ruta sea correcta
// import { useNavigate } from 'react-router-dom';
// // Expresiones regulares para validar el correo electrónico
// const expresiones = {
//   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// };

// const Recover: React.FC = () => {
//   const navigate = useNavigate();  
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [isFormValid, setIsFormValid] = useState(false); // Estado para controlar la validez del formulario
//   const [message, setMessage] = useState(''); // Mensaje para mostrar el resultado de la API
//   const [messageColor, setMessageColor] = useState(''); // Estado para controlar el color del mensaje

//   // Función para validar el correo electrónico
//   const validateEmail = (value: string) => {
//     if (!expresiones.email.test(value)) {
//       setEmailError('El correo electrónico no es válido.');
//     } else {
//       setEmailError('');
//     }
//   };

//   // Función para validar si el formulario es válido
//   const validateForm = () => {
//     const isValid = emailError === '' && email.trim() !== '';
//     setIsFormValid(isValid); // Actualiza el estado de validez del formulario
//   };

//   // Llamar a validateForm cada vez que cambie algún valor
//   useEffect(() => {
//     validateForm();
//   }, [email, emailError]);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setMessage(''); // Reiniciar mensaje al enviar el formulario

//     try {
//       // Enviar la solicitud GET al endpoint de la API
//       const response = await checkEmailExists(email);

//       // Asegúrate de que la respuesta contenga el mensaje correcto
//       setMessage("Se le enviara un correo con la contraseña"); // Aquí asumimos que 'response.message' contiene el mensaje del servidor
//       setMessageColor('green'); // Mensaje en color verde si se encontró el email

//       console.log('Respuesta del servidor:', email); // Muestra el mensaje del servidor

//       setTimeout(() => {
//         navigate('/'); // Redirige a la página de inicio de sesión
//       }, 5000);
//     } catch (error) {
//       console.error('Error al buscar el email:', error);
//       setMessage('Email no encontrado.'); // Mensaje de error genérico
//       setMessageColor('red'); // Mensaje en color rojo en caso de error
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         minWidth: '100vw',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundImage: `url("/public/ortopedia3.jpg")`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Container maxWidth="sm">
//         <Box mt={4} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center',
//           backgroundColor: 'rgba(255, 255, 255, 0.8)', 
//           padding: '10px',
//           borderRadius: '10px',
//           boxShadow: 3,
//         }}>
//           <Box>
//             <Typography mt={8} mb={8} variant="h4" align="center">
//               Recuperar Contraseña
//             </Typography>

//             {message && (
//               <Typography color={messageColor} align="center">
//                 {message}
//               </Typography>
//             )} {/* Mensaje del servidor */}

//             <FormControl component="fieldset" fullWidth>
//               <FormGroup>
//                 <Grid container spacing={2}>
//                   <Grid size={{ xs: 12 }}>
//                     <TextField
//                       label="Correo electrónico"
//                       fullWidth
//                       required
//                       type="email"
//                       value={email}
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                         validateEmail(e.target.value);
//                       }}
//                       onBlur={(e) => validateEmail(e.target.value)} // Validación al perder el foco
//                       error={Boolean(emailError)}
//                       helperText={emailError}
//                     />
//                   </Grid>

//                   <Grid size={{ xs: 12 }}>
//                     <Button
//                       type="submit"
//                       fullWidth
//                       variant="contained"
//                       color="primary"
//                       onClick={handleSubmit}
//                       disabled={!isFormValid} // Deshabilitar el botón si el formulario no es válido
//                     >
//                       Recuperar
//                     </Button>
//                   </Grid>
//                   <Link mt={1} href="/" variant="body2">
//                     {"Volver a Iniciar Sesion"}
//                   </Link>
//                 </Grid>
//               </FormGroup>
//             </FormControl>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };
// export default Recover;

// codigo email

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
  const [userPassword, setUserPassword] = useState(''); 

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
        setUserPassword(response.password); // Almacena la contraseña

        setMessage(`Se le enviara un correo con la contraseña`);

        setTimeout(() => {
        navigate('/'); // Redirige a la página de inicio de sesión
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
            </Typography>

            {message && <Typography color="green" align="center">{message}</Typography>}

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
                >
                  Recuperar
                </Button>

                <Link mt={1} href="/" variant="body2">
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