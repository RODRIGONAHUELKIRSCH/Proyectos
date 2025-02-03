import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, FormControl, InputAdornment } from '@mui/material';
import { resetPassword } from '../apiconnect/apiconnection'; // Asegúrate de implementar esta función
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const expresiones = {
    password: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,24}$/,
};
const ResetPassword = () => {
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
    const validatePassword = (value) => {
        if (!expresiones.password.test(value)) {
            setErrors((prev) => ({ ...prev, password: 'La contraseña debe tener entre 8 y 24 caracteres, incluir mayúsculas, minúsculas, números y símbolos.' }));
        }
        else {
            setErrors((prev) => ({ ...prev, password: '' }));
        }
    };
    const validateConfirmPassword = (value) => {
        if (value !== newPassword) {
            setErrors((prev) => ({ ...prev, confirmPassword: 'Las contraseñas no coinciden.' }));
        }
        else {
            setErrors((prev) => ({ ...prev, confirmPassword: '' }));
        }
    };
    const validateForm = () => {
        const isValid = errors.password === '' &&
            confirmPassword.trim() !== '';
        setIsFormValid(isValid); // Asegurar que solo se asigne un booleano
    };
    useEffect(() => {
        validateForm();
    }, [newPassword, confirmPassword, errors]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }
        try {
            console.log('Token:', token);
            //console.log('Nueva Contraseña:', newPassword);
            const response = await resetPassword(token, newPassword);
            if (response) {
                setResponseMessage('Contraseña restablecida correctamente. Puedes iniciar sesión ahora.');
                setTimeout(() => {
                    navigate('/frontend/signin');
                }, 5000);
                setError('');
            }
        }
        catch (error) {
            setResponseMessage('');
            setError('Error al restablecer la contraseña. Genera un nuevo token');
            setTimeout(() => {
                navigate('/frontend/recover');
            }, 5000);
        }
    };
    return (_jsx(Box, { sx: {
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url("/pruebaimagenfondo.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }, children: _jsx(Container, { maxWidth: "sm", children: _jsxs(Box, { sx: { minWidth: '100%', maxWidth: '100%', marginTop: '2rem', padding: '15px', borderRadius: '10px', boxShadow: 3, color: '#FFFFFF', backgroundColor: 'rgba(0, 0, 0, 0.7)', }, children: [_jsx(Typography, { sx: { marginBottom: '25px' }, variant: "h4", align: "center", children: "Restablecer Contrase\u00F1a" }), _jsxs(FormControl, { component: "fieldset", fullWidth: true, children: [_jsx(TextField, { sx: {
                                    justifyContent: 'center',
                                    marginTop: '10px',
                                    marginBottom: '15px',
                                    '& .MuiInputBase-input': { color: 'white' }, // Cambiar el color del texto del input a blanco
                                    '& .MuiFormLabel-root': { color: 'white' }, // Cambiar el color de la etiqueta a blanco
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#FFFFFF' }, // Borde blanco
                                        '&:hover fieldset': { borderColor: '#FFFFFF' }, // Borde blanco al pasar el cursor
                                    },
                                }, label: "Nueva Contrase\u00F1a", fullWidth: true, required: true, type: showPassword ? 'text' : 'password', value: newPassword, onChange: (e) => {
                                    setNewPassword(e.target.value);
                                    validatePassword(e.target.value);
                                }, onBlur: (e) => validatePassword(e.target.value), error: Boolean(errors.password), helperText: errors.password, slotProps: {
                                    inputLabel: {
                                        style: { color: '#FFFFFF', }, // Color del label en blanco
                                    },
                                    input: {
                                        endAdornment: (_jsx(InputAdornment, { position: "end", children: showPassword ? (_jsx(VisibilityOffIcon, { onClick: handleClickShowPassword, sx: { cursor: 'pointer', color: 'white' } })) : (_jsx(VisibilityIcon, { onClick: handleClickShowPassword, sx: { cursor: 'pointer', color: 'white' } })) })),
                                    },
                                } }), _jsx(TextField, { sx: {
                                    '& .MuiInputBase-input': { color: 'white' }, // Cambiar el color del texto del input a blanco
                                    '& .MuiFormLabel-root': { color: 'white' }, // Cambiar el color de la etiqueta a blanco
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#FFFFFF' }, // Borde blanco
                                        '&:hover fieldset': { borderColor: '#FFFFFF' }, // Borde blanco al pasar el cursor
                                    },
                                }, slotProps: {
                                    inputLabel: {
                                        style: { color: '#FFFFFF' }, // Color del label en blanco
                                    },
                                    input: {
                                        endAdornment: (_jsx(InputAdornment, { position: "end", children: showConfirmPassword ? (_jsx(VisibilityOffIcon, { onClick: handleClickConfirmShowPassword, sx: { cursor: 'pointer', color: 'white' } })) : (_jsx(VisibilityIcon, { onClick: handleClickConfirmShowPassword, sx: { cursor: 'pointer', color: 'white' } })) })),
                                    },
                                }, label: "Confirmar Contrase\u00F1a", fullWidth: true, required: true, type: showConfirmPassword ? 'text' : 'password', value: confirmPassword, onChange: (e) => {
                                    setConfirmPassword(e.target.value);
                                    validateConfirmPassword(e.target.value);
                                }, onBlur: (e) => validateConfirmPassword(e.target.value), error: Boolean(errors.confirmPassword), helperText: errors.confirmPassword }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", color: "primary", sx: { marginTop: '1.5rem' }, onClick: handleSubmit, disabled: !isFormValid, children: "Restablecer Contrase\u00F1a" })] }), responseMessage && (_jsx(Typography, { variant: "body2", color: "primary", sx: { marginTop: '1rem' }, children: responseMessage })), error && (_jsx(Typography, { variant: "body2", color: "error", sx: { marginTop: '1rem' }, children: error }))] }) }) }));
};
export default ResetPassword;
