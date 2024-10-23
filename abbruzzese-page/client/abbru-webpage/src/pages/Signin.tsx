import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {login} from '../apiconnect/apiconnection';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/company/grupo-abbruzzese/" target="_blank">
        Grupo Abbruzzese
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

// Expresiones regulares
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,24}$/;

export default function SignIn() {
  // Estado para los valores de los campos
  const navigate = useNavigate(); 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState(''); 
  // Estado para los errores
  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
  });

  // Función para validar los campos
  const validateFields = () => {
    let emailError = '';
    let passwordError = '';

    if (!email.trim()) {
      emailError = 'El email es requerido.';
    } else if (!emailRegex.test(email)) {
      emailError = 'El formato del email es inválido.';
    }

    if (!password.trim()) {
      passwordError = 'La contraseña es requerida.';
    } else if (!passwordRegex.test(password)) {
      passwordError = 'La contraseña debe tener entre 8 y 24 caracteres, incluir mayúsculas, minúsculas, dígitos y caracteres especiales.';
    }

    setErrors({
      email: emailError,
      password: passwordError,
    });

    // Retorna true si no hay errores
    return emailError === '' && passwordError === '';
  };

  React.useEffect(() => {
    // Verificar si hay datos en sessionStorage y cargar en el estado
    const storedEmail = sessionStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password');
    
    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedPassword) {
      setPassword(storedPassword);
      setRememberMe(true); // Si hay contraseña guardada, marcar el checkbox
    }
  }, []);

    // Manejo del submit
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (validateFields()) {
        try {
          const token = await login(email, password);
          sessionStorage.setItem('authToken', token); // Guardar el JWT en sessionStorage
  
          if (rememberMe) {
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password);
          }

          console.log('Sesión iniciada correctamente. Token:', token);
        setTimeout(() => {
          navigate('/'); 
        }, 2500);
        } catch (error) {
          setMessage(`Error al iniciar sesion. Intentelo de nuevo. `);
          console.error('Error al iniciar sesión:', error);
        }
      }
    };

  // Manejo del evento onBlur para validar cuando se pierde el foco
  const handleBlur = () => {
    validateFields();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CssBaseline />
        <Grid size={{ xs: 12, sm: 8, md: 5 }} component={Paper} elevation={6} square>
          <Box
            sx={{
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px',
            }}
          >
            <Avatar sx={{ m: 8, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inicia Sesión
            </Typography>

            {message && <Typography sx={{marginBottom:'0.5rem'}} color="green" align="center">{message}</Typography>}

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlur}
                error={Boolean(errors.password)}
                helperText={errors.password}
                
              />
              <FormControlLabel control={<Checkbox  checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} id="remember" value="remember" color="primary"  />} label="Recuérdame" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 3 }}
                id="submitbtn"
                disabled={Boolean(errors.email) || Boolean(errors.password)}
                
              >
                Iniciar Sesión
              </Button>
              <Grid container>
                <Grid size={{ xs: 12 }} sx={{ mt: '0.5rem' }}>
                  <Link href="/recover" variant="body2">
                    ¿Olvidó su contraseña?
                  </Link>
                </Grid>
                <Grid sx={{ mt: '0.5rem' }}>
                  <Link href="/register" variant="body2">
                    {"¿No tienes una cuenta? Regístrate"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 3.5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}