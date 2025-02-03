import React, { useState ,useEffect} from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputAdornment
} from '@mui/material';
import { resetPassword } from '../apiconnect/apiconnection'; // Asegúrate de implementar esta función
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const expresiones = {
  password: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,24}$/,
};

const ResetPassword: React.FC = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token') || ''; // Obtén el token de la URL
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    //Ocultar mostrar contraseña
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    //Ocultar mostrar contraseña
    const handleClickConfirmShowPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

  const [errors, setErrors] = useState({
      password: '',
      confirmPassword: '',
    });
  const validatePassword = (value: string) => {
    if (!expresiones.password.test(value)) {
      setErrors((prev) => ({ ...prev, password: 'La contraseña debe tener entre 8 y 24 caracteres, incluir mayúsculas, minúsculas, números y símbolos.' }));
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const validateConfirmPassword = (value: string) => {
    if (value !== newPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Las contraseñas no coinciden.' }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: '' }));
    }
  };

  const validateForm = () => {
    const isValid =
    errors.password === '' &&
    confirmPassword.trim() !== '';
    setIsFormValid(isValid); // Asegurar que solo se asigne un booleano
  };


  useEffect(() => {
    validateForm();
  }, [newPassword, confirmPassword, errors]);
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
  
    try {
      console.log('Token:', token);
      //console.log('Nueva Contraseña:', newPassword);
      
      const response = await resetPassword(token, newPassword);
      if(response){
        setResponseMessage('Contraseña restablecida correctamente. Puedes iniciar sesión ahora.');
      
        setTimeout(() => {
          navigate('/frontend/signin');
        }, 5000);
        setError('');
      }
    } catch (error) {
      setResponseMessage('');
      setError('Error al restablecer la contraseña. Genera un nuevo token');
      setTimeout(() => {
        navigate('/frontend/recover'); 
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
      backgroundImage: `url("/pruebaimagenfondo.jpg")`,
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
                '& .MuiInputBase-input': { color: 'white' },  // Cambiar el color del texto del input a blanco
                '& .MuiFormLabel-root': { color: 'white' },  // Cambiar el color de la etiqueta a blanco
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FFFFFF' }, // Borde blanco
                  '&:hover fieldset': { borderColor: '#FFFFFF' }, // Borde blanco al pasar el cursor
                },
              }}
            label="Nueva Contraseña"
            fullWidth
            required
            type={showPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            onBlur={(e) => validatePassword(e.target.value)} 
            error={Boolean(errors.password)}
            helperText={errors.password}
            slotProps={{
                inputLabel: {
                  style: { color: '#FFFFFF' ,}, // Color del label en blanco
                  
                },
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      {showPassword ? (
                        <VisibilityOffIcon onClick={handleClickShowPassword} sx={{ cursor: 'pointer',color:'white' }} />
                      ) : (
                        <VisibilityIcon onClick={handleClickShowPassword} sx={{ cursor: 'pointer', color:'white' }} />
                      )}
                    </InputAdornment>
                  ),
                },
              }}
          />
          <TextField

            sx={{
              '& .MuiInputBase-input': { color: 'white' },  // Cambiar el color del texto del input a blanco
              '& .MuiFormLabel-root': { color: 'white' },  // Cambiar el color de la etiqueta a blanco
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FFFFFF' }, // Borde blanco
                  '&:hover fieldset': { borderColor: '#FFFFFF' }, // Borde blanco al pasar el cursor
                },
              }}
            slotProps={{
                inputLabel: {
                  style: { color: '#FFFFFF' }, // Color del label en blanco
                },
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      {showConfirmPassword ? (
                        <VisibilityOffIcon onClick={handleClickConfirmShowPassword} sx={{ cursor: 'pointer',color:'white' }} />
                      ) : (
                        <VisibilityIcon onClick={handleClickConfirmShowPassword} sx={{ cursor: 'pointer',color:'white' }} />
                      )}
                    </InputAdornment>
                  ),
                },
              }}
              label="Confirmar Contraseña"
              fullWidth
              required
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validateConfirmPassword(e.target.value);
              }}
              onBlur={(e) => validateConfirmPassword(e.target.value)} 
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: '1.5rem' }}
            onClick={handleSubmit}
            disabled={!isFormValid} 
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